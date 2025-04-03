import { Laugh } from "lucide-react"

export default function HumorCripto() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <Laugh className="h-8 w-8 text-fuchsia-500 mr-3 animate-pulse" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-fuchsia-400 to-purple-600 bg-clip-text text-transparent">
            Humor Cripto
          </h1>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Porque se você não consegue rir das suas perdas em cripto, provavelmente investiu demais.
          </p>

          <div className="bg-indigo-950/30 border border-fuchsia-800/30 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-fuchsia-400 mb-4">Dicionário Humorístico Cripto</h2>
            <dl className="space-y-4">
              <div>
                <dt className="font-bold text-fuchsia-400">HODL</dt>
                <dd>Técnica avançada de digitação com mãos trêmulas após ver seu portfólio cair 90%.</dd>
              </div>
              <div>
                <dt className="font-bold text-fuchsia-400">Análise Técnica</dt>
                <dd>A arte de desenhar linhas aleatórias em gráficos para justificar por que você ainda não vendeu.</dd>
              </div>
              <div>
                <dt className="font-bold text-fuchsia-400">DeFi</dt>
                <dd>
                  Sigla para "Desculpe, Fui Iludido" - um estado mental após perder fundos em protocolos com APYs de 5
                  dígitos.
                </dd>
              </div>
              <div>
                <dt className="font-bold text-fuchsia-400">NFT</dt>
                <dd>
                  Não Faça Transações (conselho que você deveria ter seguido antes de comprar aquele JPEG por 3 ETH).
                </dd>
              </div>
              <div>
                <dt className="font-bold text-fuchsia-400">Whale</dt>
                <dd>Pessoa que comprou Bitcoin em 2011 e nunca esquece de mencionar isso em conversas casuais.</dd>
              </div>
            </dl>
          </div>

          <div className="bg-indigo-950/30 border border-fuchsia-800/30 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-fuchsia-400 mb-4">Estágios do Investidor Cripto</h2>
            <ol className="space-y-4 mt-4">
              <li className="flex items-start">
                <span className="text-fuchsia-400 mr-2 font-bold">1.</span>
                <span>
                  <strong className="text-fuchsia-400">Euforia:</strong> "Vou me aposentar em 6 meses com meus
                  investimentos em $ELONCUMROCKET!"
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-fuchsia-400 mr-2 font-bold">2.</span>
                <span>
                  <strong className="text-fuchsia-400">Negação:</strong> "É só uma correção saudável de 95%."
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-fuchsia-400 mr-2 font-bold">3.</span>
                <span>
                  <strong className="text-fuchsia-400">Barganha:</strong> "Se recuperar, prometo que vendo tudo e só
                  invisto em ETFs."
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-fuchsia-400 mr-2 font-bold">4.</span>
                <span>
                  <strong className="text-fuchsia-400">Depressão:</strong> "Vou ter que trabalhar até os 90 anos."
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-fuchsia-400 mr-2 font-bold">5.</span>
                <span>
                  <strong className="text-fuchsia-400">Aceitação:</strong> "Pelo menos tenho uma história interessante
                  para contar."
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-fuchsia-400 mr-2 font-bold">6.</span>
                <span>
                  <strong className="text-fuchsia-400">Recaída:</strong> "Este novo token parece promissor..."
                </span>
              </li>
            </ol>
          </div>

          <div className="bg-indigo-950/30 border border-fuchsia-800/30 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-fuchsia-400 mb-4">Memes Cósmicos</h2>
            <p>Os memes são a linguagem universal do universo cripto. Aqui estão alguns clássicos:</p>
            <ul className="space-y-2 mt-4">
              <li className="flex items-start">
                <span className="text-fuchsia-400 mr-2">•</span>
                <span>
                  <strong className="text-fuchsia-400">Wojak Pânico:</strong> O rosto oficial de quem comprou no topo e
                  vendeu no fundo.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-fuchsia-400 mr-2">•</span>
                <span>
                  <strong className="text-fuchsia-400">Chad HODLER:</strong> Aquele amigo irritante que não vendeu
                  durante o bear market e agora está rico.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-fuchsia-400 mr-2">•</span>
                <span>
                  <strong className="text-fuchsia-400">Doge:</strong> O meme que se tornou uma criptomoeda que se tornou
                  um meme sobre criptomoedas.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-fuchsia-400 mr-2">•</span>
                <span>
                  <strong className="text-fuchsia-400">Homem Olhando para Outra Mulher:</strong> Você, seu portfólio
                  atual e aquela nova altcoin que acabou de ser lançada.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

