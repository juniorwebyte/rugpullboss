import { Search } from "lucide-react"

export default function RugPullsExplicados() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <Search className="h-8 w-8 text-fuchsia-500 mr-3 animate-pulse" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-fuchsia-400 to-purple-600 bg-clip-text text-transparent">
            Rug Pulls Explicados
          </h1>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Um guia cósmico para entender, identificar e evitar os infames "rug pulls" no universo das criptomoedas.
          </p>

          <div className="bg-indigo-950/30 border border-fuchsia-800/30 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-fuchsia-400 mb-4">O que é um Rug Pull?</h2>
            <p>
              Um "rug pull" (puxada de tapete) ocorre quando os desenvolvedores de um projeto cripto abandonam o projeto
              e fogem com os fundos dos investidores. É como se alguém literalmente puxasse o tapete debaixo dos seus
              pés, deixando você de cara no chão e com a carteira vazia.
            </p>
            <p className="mt-4">
              Este tipo de golpe tornou-se comum no espaço DeFi e de tokens meme, onde a barreira de entrada para criar
              um token é baixa e a regulamentação é praticamente inexistente.
            </p>
          </div>

          <div className="bg-indigo-950/30 border border-fuchsia-800/30 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-fuchsia-400 mb-4">Anatomia de um Rug Pull</h2>
            <ol className="space-y-4 mt-4">
              <li className="flex items-start">
                <span className="text-fuchsia-400 mr-2 font-bold">1.</span>
                <div>
                  <strong className="text-fuchsia-400">Criação e Hype:</strong>
                  <p>
                    Os desenvolvedores criam um token com um nome chamativo, geralmente relacionado a memes populares ou
                    tendências do momento. Em seguida, geram hype através de marketing agressivo em redes sociais,
                    grupos de Telegram e influenciadores pagos.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-fuchsia-400 mr-2 font-bold">2.</span>
                <div>
                  <strong className="text-fuchsia-400">Liquidez Inicial:</strong>
                  <p>
                    Adicionam liquidez a uma exchange descentralizada (DEX) como Uniswap ou PancakeSwap, permitindo que
                    as pessoas troquem ETH/BNB pelo novo token.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-fuchsia-400 mr-2 font-bold">3.</span>
                <div>
                  <strong className="text-fuchsia-400">FOMO e Pump:</strong>
                  <p>
                    À medida que mais pessoas compram o token, seu preço aumenta, criando FOMO (Fear Of Missing Out) e
                    atraindo ainda mais investidores.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-fuchsia-400 mr-2 font-bold">4.</span>
                <div>
                  <strong className="text-fuchsia-400">O Puxão do Tapete:</strong>
                  <p>
                    Quando o preço atinge um pico, os desenvolvedores removem toda a liquidez da pool, trocando os
                    tokens por ETH/BNB e desaparecendo. O valor do token despenca instantaneamente para zero.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          <div className="bg-indigo-950/30 border border-fuchsia-800/30 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-fuchsia-400 mb-4">Como se Proteger</h2>
            <ul className="space-y-4 mt-4">
              <li className="flex items-start">
                <span className="text-fuchsia-400 mr-2">•</span>
                <div>
                  <strong className="text-fuchsia-400">Pesquise a Equipe:</strong>
                  <p>
                    Verifique se a equipe por trás do projeto é conhecida e tem histórico comprovado. Equipes anônimas
                    representam maior risco.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-fuchsia-400 mr-2">•</span>
                <div>
                  <strong className="text-fuchsia-400">Verifique o Contrato:</strong>
                  <p>
                    Use ferramentas como Etherscan ou BscScan para analisar o código do contrato inteligente. Procure
                    por funções suspeitas como "mint" ilimitado ou controle centralizado sobre a liquidez.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-fuchsia-400 mr-2">•</span>
                <div>
                  <strong className="text-fuchsia-400">Liquidez Bloqueada:</strong>
                  <p>
                    Verifique se a liquidez está bloqueada por um período significativo. Isso dificulta (mas não
                    impossibilita) um rug pull.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-fuchsia-400 mr-2">•</span>
                <div>
                  <strong className="text-fuchsia-400">Distribuição de Tokens:</strong>
                  <p>
                    Analise como os tokens estão distribuídos. Se uma única carteira detém uma porcentagem muito grande,
                    isso é um sinal de alerta.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-fuchsia-400 mr-2">•</span>
                <div>
                  <strong className="text-fuchsia-400">Confie em Seu Instinto:</strong>
                  <p>
                    Se parece bom demais para ser verdade, provavelmente é. Promessas de retornos astronômicos são quase
                    sempre sinais de alerta.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

