import { NextResponse } from "next/server"
import { sql } from "@/lib/db"

// Admin WhatsApp - Números para notificação
const ADMIN_WHATSAPP_NUMBERS = [
  {
    name: "Admin 1",
    number: "5511984801839",
    apiKey: "1782254",
  },
  {
    name: "Admin 2",
    number: "5511947366820",
    apiKey: "7070864",
  },
]

export async function POST(request: Request) {
  try {
    const { walletAddress, twitterUsername, telegramId } = await request.json()

    if (!walletAddress) {
      return NextResponse.json({ success: false, message: "Endereço da carteira é obrigatório" }, { status: 400 })
    }

    // Formatar a mensagem
    const message =
      `🎉 *Nova Reivindicação de Airdrop!* 🎉

` +
      `*Endereço da Carteira:*
${walletAddress}

` +
      `*Twitter:* ${twitterUsername || "Não fornecido"}
` +
      `*Telegram:* ${telegramId || "Não fornecido"}

` +
      `*Data:* ${new Date().toLocaleString("pt-BR")}`

    // Array para armazenar resultados de envio
    const sendResults = []

    // Enviar a mensagem para todos os números de administradores
    for (const admin of ADMIN_WHATSAPP_NUMBERS) {
      try {
        // Enviar a mensagem usando CallMeBot API
        const encodedMessage = encodeURIComponent(message)
        const apiUrl = `https://api.callmebot.com/whatsapp.php?phone=${admin.number}&text=${encodedMessage}&apikey=${admin.apiKey}`

        const response = await fetch(apiUrl)

        if (!response.ok) {
          console.error(`Erro ao enviar mensagem WhatsApp para ${admin.name}:`, await response.text())
          sendResults.push({ admin: admin.name, success: false })
        } else {
          console.log(`Notificação WhatsApp enviada com sucesso para: ${admin.name} (${admin.number})`)
          sendResults.push({ admin: admin.name, success: true })
        }
      } catch (error) {
        console.error(`Erro ao enviar para ${admin.name}:`, error)
        sendResults.push({ admin: admin.name, success: false })
      }
    }

    // Registrar a notificação
    try {
      await saveNotification(
        walletAddress,
        sendResults.some((r) => r.success),
        message,
        ADMIN_WHATSAPP_NUMBERS,
      )
    } catch (error) {
      console.error("Erro ao salvar notificação:", error)
    }

    // Se pelo menos uma mensagem foi enviada com sucesso, consideramos sucesso
    const anySuccess = sendResults.some((r) => r.success)

    return NextResponse.json({
      success: anySuccess,
      message: anySuccess
        ? "Notificação enviada com sucesso"
        : "Falha ao enviar notificações para todos os administradores",
      details: sendResults,
    })
  } catch (error) {
    console.error("Erro ao processar notificação:", error)
    return NextResponse.json({ success: false, message: "Erro ao processar notificação" }, { status: 500 })
  }
}

// Função para salvar a notificação no banco de dados
async function saveNotification(
  walletAddress: string,
  sent: boolean,
  message: string,
  adminNumbers: Array<{ name: string; number: string; apiKey: string }>,
) {
  try {
    await sql`
      INSERT INTO notifications (
        wallet_address, 
        sent, 
        sent_at, 
        message, 
        admin_numbers
      ) VALUES (
        ${walletAddress}, 
        ${sent}, 
        ${sent ? new Date() : null}, 
        ${message}, 
        ${JSON.stringify(adminNumbers)}
      )
    `

    return { success: true }
  } catch (error) {
    console.error("Erro ao salvar notificação no banco de dados:", error)
    throw error
  }
}

