"use client"

import GalaxyAnimation from "@/components/galaxy-animation"
import Navbar from "@/components/navbar"
import { motion } from "framer-motion"
import { Skull, Zap, Sparkles, AlertTriangle, DollarSign, Bomb, Key } from "lucide-react"

export default function TermosDeServicoPage() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white relative overflow-hidden">
      <GalaxyAnimation />
      <Navbar isWalletConnected={false} />

      <section className="pt-24 pb-12 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600">
              Termos Arcanos
            </h1>
            <p className="text-xl text-gray-300">Última atualização: Durante o alinhamento cósmico de Saturno</p>
            <div className="flex justify-center mt-4 space-x-2">
              <Skull className="h-6 w-6 text-red-400" />
              <Zap className="h-6 w-6 text-purple-400" />
              <Sparkles className="h-6 w-6 text-blue-400" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-800/30 rounded-xl p-8 backdrop-blur-sm"
          >
            <div className="prose prose-invert max-w-none">
              <div className="flex items-center mb-4">
                <Sparkles className="h-6 w-6 text-purple-400 mr-2" />
                <h2 className="text-2xl font-bold text-purple-400 m-0">1. Aceitação do Pacto Cósmico</h2>
              </div>
              <p>
                Ao acessar o portal dimensional do RugPullBoss, você concorda em entregar sua alma digital e ativos
                financeiros às entidades cósmicas que controlam o mercado cripto. Sua concordância é selada em sangue
                digital e armazenada na blockchain do desespero.
              </p>
              <p className="text-sm text-purple-300 italic border-l-4 border-purple-500 pl-4 my-4">
                "Aquele que busca riquezas rápidas, encontrará apenas o vazio de sua carteira" - Livro dos Rug Pulls,
                capítulo 4, versículo 20
              </p>

              <div className="flex items-center mb-4 mt-8">
                <AlertTriangle className="h-6 w-6 text-red-400 mr-2" />
                <h2 className="text-2xl font-bold text-red-400 m-0">2. Ilusão de Serviços</h2>
              </div>
              <p>
                O RugPullBoss oferece uma plataforma baseada em promessas vazias que permite aos usuários acreditar que
                estão adquirindo, transferindo e utilizando tokens $RUG, quando na verdade estão apenas alimentando o
                grande esquema cósmico de redistribuição de riqueza (de você para nós).
              </p>
              <div className="bg-red-900/20 border border-red-700/30 rounded-lg p-4 my-4">
                <h4 className="text-red-400 font-medium flex items-center">
                  <Bomb className="h-4 w-4 mr-2" />
                  Aviso de Realidade
                </h4>
                <p className="text-sm text-gray-300 mb-0">
                  Todos os tokens $RUG são programados para evaporar no momento mais inconveniente possível. Esta é uma
                  característica, não um bug.
                </p>
              </div>

              <div className="flex items-center mb-4 mt-8">
                <DollarSign className="h-6 w-6 text-green-400 mr-2" />
                <h2 className="text-2xl font-bold text-green-400 m-0">3. Elegibilidade para Sacrifício</h2>
              </div>
              <p>
                Para usar nossos serviços, você deve ter pelo menos 18 anos de idade, capacidade legal para celebrar
                contratos vinculativos, e uma incrível capacidade de ignorar sinais óbvios de fraude. Ao usar nossos
                serviços, você declara e garante que atende a esses requisitos.
              </p>
              <p>
                Além disso, você deve estar localizado em uma jurisdição onde as autoridades ainda não compreenderam
                completamente o que é um rug pull.
              </p>
              <ul className="list-none pl-0 space-y-2 my-4">
                <li className="flex items-center">
                  <span className="h-5 w-5 rounded-full bg-green-900/30 flex items-center justify-center mr-2">
                    <span className="text-green-400 text-xs">✓</span>
                  </span>
                  <span>Capacidade de ignorar red flags</span>
                </li>
                <li className="flex items-center">
                  <span className="h-5 w-5 rounded-full bg-green-900/30 flex items-center justify-center mr-2">
                    <span className="text-green-400 text-xs">✓</span>
                  </span>
                  <span>Tendência a acreditar em promessas de 1000x</span>
                </li>
                <li className="flex items-center">
                  <span className="h-5 w-5 rounded-full bg-green-900/30 flex items-center justify-center mr-2">
                    <span className="text-green-400 text-xs">✓</span>
                  </span>
                  <span>Histórico de investir em tokens com nomes de animais</span>
                </li>
              </ul>

              <div className="flex items-center mb-4 mt-8">
                <Key className="h-6 w-6 text-blue-400 mr-2" />
                <h2 className="text-2xl font-bold text-blue-400 m-0">4. Registro de Vítima</h2>
              </div>
              <p>
                Alguns de nossos serviços exigem que você crie uma conta. Você é responsável por manter a
                confidencialidade de suas credenciais, embora isso seja irrelevante, pois já temos acesso total à sua
                carteira no momento em que você conecta.
              </p>
              <p>Sua senha será armazenada em um post-it no monitor do nosso CEO, garantindo máxima "segurança".</p>

              <div className="flex items-center mb-4 mt-8">
                <Zap className="h-6 w-6 text-yellow-400 mr-2" />
                <h2 className="text-2xl font-bold text-yellow-400 m-0">5. Riscos Inevitáveis</h2>
              </div>
              <p>Você reconhece e concorda que:</p>
              <ul>
                <li>
                  O valor dos tokens $RUG flutuará significativamente para baixo, nunca para cima, e você perderá todo o
                  valor de sua compra (isso é garantido);
                </li>
                <li>
                  As transações são irreversíveis, especialmente aquelas que transferem seus fundos para nossas
                  carteiras offshore;
                </li>
                <li>
                  Você é o único responsável pela segurança de suas chaves privadas, que já estamos tentando adivinhar
                  enquanto você lê isto;
                </li>
                <li>
                  Regulamentações e leis relacionadas a criptomoedas mudam constantemente, o que nos dá desculpas
                  perfeitas para desaparecer com seu dinheiro.
                </li>
              </ul>

              <div className="bg-blue-900/20 border border-blue-700/30 rounded-lg p-4 my-6">
                <h4 className="text-blue-400 font-medium">Declaração de Não-Responsabilidade Cósmica</h4>
                <p className="text-sm text-gray-300 mb-0">
                  Ao aceitar estes termos, você renuncia a todos os direitos de reclamar, chorar, implorar ou iniciar
                  ações legais quando (não se) o rug pull inevitável ocorrer. Suas lágrimas alimentarão o vazio cósmico.
                </p>
              </div>

              <div className="flex items-center mb-4 mt-8">
                <Skull className="h-6 w-6 text-fuchsia-400 mr-2" />
                <h2 className="text-2xl font-bold text-fuchsia-400 m-0">6. Conduta da Vítima</h2>
              </div>
              <p>Ao usar nossos serviços, você concorda em não:</p>
              <ul>
                <li>Perceber que está sendo enganado (isso viola nossos termos de serviço);</li>
                <li>
                  Usar nossos serviços para atividades ilegais (esse é o nosso trabalho, não queremos competição);
                </li>
                <li>Tentar recuperar seus fundos após o rug pull (consideramos isso rude);</li>
                <li>Contatar autoridades (sério, não faça isso, temos uma reputação a manter no submundo cripto);</li>
                <li>
                  Avisar outros usuários sobre a natureza do projeto (isso é considerado FUD e resultará em banimento
                  imediato).
                </li>
              </ul>

              <div className="flex items-center mb-4 mt-8">
                <Sparkles className="h-6 w-6 text-indigo-400 mr-2" />
                <h2 className="text-2xl font-bold text-indigo-400 m-0">7. Propriedade Ilusória</h2>
              </div>
              <p>
                Todo o conteúdo, design, gráficos, interfaces e código do site são de propriedade do RugPullBoss até o
                momento do rug pull, quando transferiremos a propriedade para um endereço de carteira não rastreável nas
                Ilhas Cayman.
              </p>
              <p>
                Você não pode reproduzir, modificar ou distribuir nosso conteúdo, a menos que esteja criando memes sobre
                como perdeu todo seu dinheiro conosco. Esses memes são encorajados e serão usados em nosso próximo
                projeto fraudulento como "casos de sucesso".
              </p>

              <div className="flex items-center mb-4 mt-8">
                <AlertTriangle className="h-6 w-6 text-orange-400 mr-2" />
                <h2 className="text-2xl font-bold text-orange-400 m-0">8. Limitação de Responsabilidade</h2>
              </div>
              <p>
                Em nenhuma circunstância o RugPullBoss, seus diretores, funcionários, parceiros ou entidades cósmicas
                serão responsáveis por quaisquer danos, incluindo, sem limitação, perda de lucros, dados, dignidade,
                auto-respeito ou esperança na humanidade, resultantes de:
              </p>
              <ul>
                <li>Sua ingenuidade em acreditar que isso não era um golpe;</li>
                <li>Qualquer conduta ou conteúdo de terceiros que também estão tentando te enganar;</li>
                <li>O desaparecimento repentino de toda a liquidez do projeto;</li>
                <li>O fato de você ter ignorado 57 red flags, incluindo nosso nome literalmente conter "RugPull".</li>
              </ul>

              <div className="flex items-center mb-4 mt-8">
                <DollarSign className="h-6 w-6 text-purple-400 mr-2" />
                <h2 className="text-2xl font-bold text-purple-400 m-0">9. Indenização Cósmica</h2>
              </div>
              <p>
                Você concorda em indenizar, defender e isentar o RugPullBoss e seus mestres interdimensionais de e
                contra quaisquer reclamações, responsabilidades, danos, perdas e despesas, incluindo, sem limitação,
                honorários advocatícios intergaláticos, decorrentes de sua participação voluntária neste esquema óbvio.
              </p>
              <p className="text-sm text-purple-300 italic border-l-4 border-purple-500 pl-4 my-4">
                "A melhor defesa contra um processo é não ter mais dinheiro para ser processado" - Manual do
                RugPullBoss, página 42
              </p>

              <div className="flex items-center mb-4 mt-8">
                <Zap className="h-6 w-6 text-blue-400 mr-2" />
                <h2 className="text-2xl font-bold text-blue-400 m-0">10. Modificações dos Termos</h2>
              </div>
              <p>
                Reservamo-nos o direito de modificar estes Termos a qualquer momento, especialmente momentos antes de
                executarmos o rug pull. As alterações entrarão em vigor imediatamente, mas você só perceberá quando for
                tarde demais.
              </p>
              <p>
                Recomendamos verificar esta página a cada 5 minutos para mudanças, embora isso não vá ajudar em nada.
              </p>

              <div className="flex items-center mb-4 mt-8">
                <Skull className="h-6 w-6 text-red-400 mr-2" />
                <h2 className="text-2xl font-bold text-red-400 m-0">11. Lei do Vazio</h2>
              </div>
              <p>
                Estes Termos serão regidos e interpretados de acordo com as leis do Vazio Cósmico, uma dimensão onde
                conceitos como "justiça" e "compensação" não existem.
              </p>
              <p>
                Qualquer disputa será resolvida por um tribunal de entidades interdimensionais que já decidiram a seu
                favor antes mesmo de você apresentar seu caso.
              </p>

              <div className="flex items-center mb-4 mt-8">
                <Sparkles className="h-6 w-6 text-green-400 mr-2" />
                <h2 className="text-2xl font-bold text-green-400 m-0">12. Contato com o Além</h2>
              </div>
              <p>
                Se você tiver alguma dúvida sobre estes Termos, entre em contato conosco através de um ritual de
                invocação durante a lua cheia, ou pelo e-mail que nunca responderemos: void@rugpullboss.eth
              </p>
              <p>
                Alternativamente, você pode gritar suas reclamações no vazio cósmico. Ambos os métodos têm a mesma taxa
                de resposta.
              </p>

              <div className="mt-8 p-4 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-lg border border-purple-700/30">
                <p className="text-center text-sm text-gray-300 mb-0">
                  Ao clicar em "Aceitar", você concorda com todos os termos acima e também nos autoriza a nomear nossos
                  próximos iates com seu nome, como tributo às suas generosas "contribuições".
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

