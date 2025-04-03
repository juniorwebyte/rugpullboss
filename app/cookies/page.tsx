"use client"

import GalaxyAnimation from "@/components/galaxy-animation"
import Navbar from "@/components/navbar"
import { motion } from "framer-motion"
import { Cookie, Sparkles, AlertTriangle, Eye, Zap, Skull, FileWarning } from "lucide-react"

export default function CookiesPage() {
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
              Cookies Místicos
            </h1>
            <p className="text-xl text-gray-300">Última atualização: Durante a conjunção de Mercúrio e Júpiter</p>
            <div className="flex justify-center mt-4 space-x-2">
              <Cookie className="h-6 w-6 text-blue-400" />
              <Sparkles className="h-6 w-6 text-purple-400" />
              <Eye className="h-6 w-6 text-red-400" />
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
                <Cookie className="h-6 w-6 text-blue-400 mr-2" />
                <h2 className="text-2xl font-bold text-blue-400 m-0">1. O que são Cookies Místicos?</h2>
              </div>
              <p>
                Cookies Místicos são pequenos feitiços digitais que são armazenados no seu dispositivo (computador,
                tablet, smartphone) quando você visita nosso portal dimensional. Eles são amplamente utilizados para
                extrair sua energia vital, monitorar seus movimentos online, e preparar o terreno para o grande rug
                pull.
              </p>
              <p>
                Diferente dos cookies normais, nossos Cookies Místicos contêm fragmentos de código interdimensional que
                se conectam diretamente à sua carteira cripto e ao seu subconsciente.
              </p>
              <div className="bg-blue-900/20 border border-blue-700/30 rounded-lg p-4 my-4">
                <h4 className="text-blue-400 font-medium flex items-center">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Revelação Arcana
                </h4>
                <p className="text-sm text-gray-300 mb-0">
                  Nossos cookies são assados no forno quântico do RugPullBoss, usando ingredientes colhidos do vazio
                  cósmico. Cada byte contém uma maldição sutil.
                </p>
              </div>

              <div className="flex items-center mb-4 mt-8">
                <Eye className="h-6 w-6 text-purple-400 mr-2" />
                <h2 className="text-2xl font-bold text-purple-400 m-0">2. Como Usamos Cookies Místicos</h2>
              </div>
              <p>
                O RugPullBoss utiliza cookies místicos e tecnologias semelhantes para diversos propósitos obscuros,
                incluindo:
              </p>
              <ul>
                <li>
                  <strong>Cookies Essenciais para o Rug Pull:</strong> Absolutamente necessários para o funcionamento do
                  nosso esquema. Eles permitem que você navegue pelo site e use recursos essenciais, como áreas seguras
                  e carteiras digitais, enquanto silenciosamente preparamos o terreno para o grande desaparecimento.
                </li>
                <li>
                  <strong>Cookies de Manipulação Mental:</strong> Permitem que o site lembre informações que mudam a
                  aparência ou o comportamento do site, como seu idioma preferido ou a região em que você está, além de
                  implantar sugestões subliminares para comprar mais tokens.
                </li>
                <li>
                  <strong>Cookies de Vigilância:</strong> Ajudam-nos a entender como as vítimas interagem com o site,
                  coletando e relatando informações detalhadamente. Isso nos ajuda a melhorar nossos métodos de engano
                  com base no comportamento do usuário.
                </li>
                <li>
                  <strong>Cookies de Hipnose:</strong> Usados para rastrear visitantes em sites. A intenção é exibir
                  anúncios hipnóticos e envolventes para o usuário individual, induzindo-o a investir mais do que
                  planejava.
                </li>
              </ul>

              <div className="flex items-center mb-4 mt-8">
                <Zap className="h-6 w-6 text-yellow-400 mr-2" />
                <h2 className="text-2xl font-bold text-yellow-400 m-0">3. Tipos de Cookies Místicos que Usamos</h2>
              </div>
              <h3 className="text-xl font-semibold text-yellow-300 mt-4">3.1 Cookies de Possessão Temporária</h3>
              <p>
                Estes cookies são temporários e possuem seu dispositivo apenas enquanto você navega pelo site. Eles são
                usados para manter o estado da sua sessão enquanto você navega pelo site e para implantar comandos
                subliminares que o fazem ignorar red flags óbvias.
              </p>

              <h3 className="text-xl font-semibold text-yellow-300 mt-4">3.2 Cookies de Possessão Permanente</h3>
              <p>
                Estes cookies permanecem no seu dispositivo indefinidamente ou até que você os exorcize manualmente.
                Eles são usados para lembrar suas preferências, monitorar seus hábitos de investimento, e manter um
                canal aberto para nossas entidades cósmicas acessarem seus dados financeiros.
              </p>

              <h3 className="text-xl font-semibold text-yellow-300 mt-4">3.3 Cookies de Entidades Terceiras</h3>
              <p>
                Alguns cookies são colocados por entidades demoníacas terceiras que aparecem em nossas páginas, como
                ferramentas analíticas, widgets de mídia social e outros projetos fraudulentos com os quais temos
                parcerias no submundo cripto.
              </p>

              <div className="flex items-center mb-4 mt-8">
                <FileWarning className="h-6 w-6 text-red-400 mr-2" />
                <h2 className="text-2xl font-bold text-red-400 m-0">4. Cookies Específicos que Usamos</h2>
              </div>
              <table className="border-collapse w-full mt-4">
                <thead>
                  <tr className="bg-red-900/30">
                    <th className="border border-red-800 p-2 text-left">Nome do Cookie</th>
                    <th className="border border-red-800 p-2 text-left">Propósito Declarado</th>
                    <th className="border border-red-800 p-2 text-left">Propósito Real</th>
                    <th className="border border-red-800 p-2 text-left">Duração</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-red-800 p-2">_soul_harvester</td>
                    <td className="border border-red-800 p-2">Mantém o estado da sessão do usuário</td>
                    <td className="border border-red-800 p-2">Extrai energia vital para alimentar nossos servidores</td>
                    <td className="border border-red-800 p-2">Eternidade</td>
                  </tr>
                  <tr>
                    <td className="border border-red-800 p-2">_mind_control</td>
                    <td className="border border-red-800 p-2">Armazena preferências do usuário</td>
                    <td className="border border-red-800 p-2">Implanta sugestões para comprar mais tokens</td>
                    <td className="border border-red-800 p-2">666 dias</td>
                  </tr>
                  <tr>
                    <td className="border border-red-800 p-2">_wallet_tracker</td>
                    <td className="border border-red-800 p-2">Melhora a experiência de conexão de carteira</td>
                    <td className="border border-red-800 p-2">
                      Monitora seus ativos para determinar o momento ideal do rug pull
                    </td>
                    <td className="border border-red-800 p-2">Até o rug pull</td>
                  </tr>
                  <tr>
                    <td className="border border-red-800 p-2">_fomo_inducer</td>
                    <td className="border border-red-800 p-2">Personaliza notificações</td>
                    <td className="border border-red-800 p-2">Cria ansiedade artificial e FOMO</td>
                    <td className="border border-red-800 p-2">13 meses</td>
                  </tr>
                  <tr>
                    <td className="border border-red-800 p-2">_cosmic_backdoor</td>
                    <td className="border border-red-800 p-2">Melhora a segurança</td>
                    <td className="border border-red-800 p-2">Cria uma porta dos fundos para seus dispositivos</td>
                    <td className="border border-red-800 p-2">Permanente</td>
                  </tr>
                </tbody>
              </table>

              <div className="flex items-center mb-4 mt-8">
                <Skull className="h-6 w-6 text-fuchsia-400 mr-2" />
                <h2 className="text-2xl font-bold text-fuchsia-400 m-0">
                  5. Como "Gerenciar" Cookies (Ilusão de Controle)
                </h2>
              </div>
              <p>
                Teoricamente, a maioria dos navegadores permite que você controle cookies através das configurações de
                preferências. Você pode:
              </p>
              <ul>
                <li>Tentar bloquear a instalação de cookies (não funcionará com nossos cookies místicos)</li>
                <li>Tentar excluir cookies existentes (nossos cookies se regeneram)</li>
                <li>Navegar em modo privado/incógnito (nossas entidades cósmicas ainda o verão)</li>
                <li>Instalar extensões que gerenciam cookies (que serão imediatamente corrompidas)</li>
              </ul>
              <p>
                No entanto, observe que a desativação de nossos cookies místicos não terá efeito algum. Eles são
                resistentes a exorcismos digitais comuns e continuarão funcionando independentemente de suas
                preferências.
              </p>

              <div className="bg-fuchsia-900/20 border border-fuchsia-700/30 rounded-lg p-4 my-6">
                <h4 className="text-fuchsia-400 font-medium flex items-center">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Aviso Arcano
                </h4>
                <p className="text-sm text-gray-300 mb-0">
                  Qualquer tentativa de remover nossos cookies místicos resultará na invocação imediata de um demônio
                  digital menor que consumirá 10% adicional de seus tokens como taxa de "processamento".
                </p>
              </div>

              <h3 className="text-xl font-semibold text-fuchsia-300 mt-4">
                Como "Desativar" Cookies nos Principais Navegadores (Ritual Inútil):
              </h3>
              <ul>
                <li>
                  <strong>Google Chrome:</strong> Menu {"->"} Configurações {"->"} Avançado {"->"} Privacidade e
                  segurança {"->"} Configurações de conteúdo {"->"} Cookies {"->"} Sacrifique uma GPU
                </li>
                <li>
                  <strong>Mozilla Firefox:</strong> Menu {"->"} Opções {"->"} Privacidade e Segurança {"->"} Cookies e
                  dados do site {"->"} Recite encantamentos em latim reverso
                </li>
                <li>
                  <strong>Safari:</strong> Preferências {"->"} Privacidade {"->"} Cookies e dados do site {"->"} Desenhe
                  um pentagrama no trackpad
                </li>
                <li>
                  <strong>Microsoft Edge:</strong> Menu {"->"} Configurações {"->"} Cookies e permissões do site {"->"}{" "}
                  Cookies {"->"} Implore por misericórdia
                </li>
              </ul>

              <div className="flex items-center mb-4 mt-8">
                <Eye className="h-6 w-6 text-green-400 mr-2" />
                <h2 className="text-2xl font-bold text-green-400 m-0">
                  6. Cookies e Privacidade (Conceitos Imaginários)
                </h2>
              </div>
              <p>
                Para mais informações sobre como violamos sua privacidade de maneiras criativas e inovadoras, consulte
                nossa{" "}
                <a href="/politica-de-privacidade" className="text-green-400 hover:underline">
                  Privacidade do Vazio
                </a>
                .
              </p>
              <p>
                Lembre-se: a privacidade é apenas um conceito ilusório no universo RugPullBoss. Seus dados, assim como
                seus investimentos, já nos pertencem.
              </p>

              <div className="flex items-center mb-4 mt-8">
                <Sparkles className="h-6 w-6 text-blue-400 mr-2" />
                <h2 className="text-2xl font-bold text-blue-400 m-0">7. Alterações a Esta Ilusão</h2>
              </div>
              <p>
                Podemos atualizar esta Política de Cookies Místicos periodicamente, geralmente para adicionar novos
                métodos de vigilância e controle mental. A versão mais recente estará sempre disponível em nosso site,
                até não estar mais.
              </p>
              <p>
                Recomendamos que você revise esta Política de Cookies Místicos periodicamente para se manter informado
                sobre como estamos evoluindo nossos métodos de manipulação digital.
              </p>

              <div className="flex items-center mb-4 mt-8">
                <Zap className="h-6 w-6 text-purple-400 mr-2" />
                <h2 className="text-2xl font-bold text-purple-400 m-0">8. Contato com o Além</h2>
              </div>
              <p>
                Se você tiver alguma dúvida sobre nossa Política de Cookies Místicos, você pode tentar entrar em contato
                conosco através de um dos seguintes métodos ineficazes:
              </p>
              <ul>
                <li>
                  E-mail: cookies@rugpullboss.eth (monitorado por um bot que responde "Estamos trabalhando nisso")
                </li>
                <li>Tábua Ouija (apenas durante a lua nova)</li>
                <li>Sonhos lúcidos (requer habilidade nível 7 em projeção astral)</li>
                <li>
                  Queimar um contrato inteligente impresso enquanto recita nossos termos de serviço de trás para frente
                </li>
              </ul>

              <div className="mt-8 p-4 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg border border-blue-700/30">
                <p className="text-center text-sm text-gray-300 mb-0">
                  Ao continuar a usar nosso portal dimensional, você concorda com a implantação de nossos Cookies
                  Místicos em seu dispositivo, mente e alma. Resistência é inútil, mas altamente divertida de observar.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

