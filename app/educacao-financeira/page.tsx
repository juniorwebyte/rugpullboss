import { BookOpen } from "lucide-react"

export default function EducacaoFinanceira() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <BookOpen className="h-8 w-8 text-fuchsia-500 mr-3 animate-pulse" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-fuchsia-400 to-purple-600 bg-clip-text text-transparent">
            Educação Financeira
          </h1>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Conhecimento é poder. Aqui você encontra informações valiosas sobre finanças e investimentos, apresentadas
            com o toque único do RugPullBoss.
          </p>

          <div className="bg-indigo-950/30 border border-fuchsia-800/30 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-fuchsia-400 mb-4">Princípios Básicos de Investimento</h2>
            <p>
              Antes de mergulhar no oceano turbulento das criptomoedas, é essencial compreender alguns princípios
              fundamentais:
            </p>
            <ul className="space-y-2 mt-4">
              <li className="flex items-start">
                <span className="text-fuchsia-400 mr-2">•</span>
                <span>
                  <strong className="text-fuchsia-400">Diversificação:</strong> Não coloque todos os seus ovos cósmicos
                  na mesma cesta interdimensional.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-fuchsia-400 mr-2">•</span>
                <span>
                  <strong className="text-fuchsia-400">Gestão de Risco:</strong> Invista apenas o que você pode perder
                  sem precisar vender um rim no mercado negro intergaláctico.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-fuchsia-400 mr-2">•</span>
                <span>
                  <strong className="text-fuchsia-400">Pesquisa:</strong> Se o whitepaper tem mais emojis que palavras,
                  talvez não seja o investimento mais sólido.
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-indigo-950/30 border border-fuchsia-800/30 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-fuchsia-400 mb-4">Sinais de Alerta</h2>
            <p>Aprenda a identificar os sinais de alerta que podem indicar um potencial rug pull:</p>
            <ul className="space-y-2 mt-4">
              <li className="flex items-start">
                <span className="text-fuchsia-400 mr-2">•</span>
                <span>
                  <strong className="text-fuchsia-400">Promessas Irrealistas:</strong> "1000x garantido" é tão provável
                  quanto encontrar vida inteligente em Marte vestindo camisetas do Bitcoin.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-fuchsia-400 mr-2">•</span>
                <span>
                  <strong className="text-fuchsia-400">Equipe Anônima:</strong> Se os desenvolvedores se escondem mais
                  que o lado escuro da lua, pergunte-se o porquê.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-fuchsia-400 mr-2">•</span>
                <span>
                  <strong className="text-fuchsia-400">Tokenomics Nebulosa:</strong> Se a distribuição de tokens é mais
                  confusa que a trama de Inception, cuidado.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-fuchsia-400 mr-2">•</span>
                <span>
                  <strong className="text-fuchsia-400">FOMO Induzido:</strong> "Últimas vagas para a pré-venda" há três
                  meses consecutivos é um sinal cósmico para correr na direção oposta.
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-indigo-950/30 border border-fuchsia-800/30 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-fuchsia-400 mb-4">Recursos Educacionais</h2>
            <p>Expanda seu conhecimento com estes recursos cuidadosamente selecionados:</p>
            <ul className="space-y-2 mt-4">
              <li className="flex items-start">
                <span className="text-fuchsia-400 mr-2">•</span>
                <span>
                  <strong className="text-fuchsia-400">Guia do Investidor Intergaláctico:</strong> Um manual completo
                  para navegar pelo universo cripto.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-fuchsia-400 mr-2">•</span>
                <span>
                  <strong className="text-fuchsia-400">Análise Técnica para Terráqueos:</strong> Aprenda a interpretar
                  gráficos sem precisar de poderes psíquicos.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-fuchsia-400 mr-2">•</span>
                <span>
                  <strong className="text-fuchsia-400">Psicologia do Investimento:</strong> Por que seu cérebro adora
                  comprar no topo e vender no fundo.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

