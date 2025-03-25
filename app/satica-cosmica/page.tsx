import { Sparkles } from "lucide-react"

export default function SaticaCosmica() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <Sparkles className="h-8 w-8 text-fuchsia-500 mr-3 animate-pulse" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-fuchsia-400 to-purple-600 bg-clip-text text-transparent">
            Sátira Cósmica
          </h1>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Bem-vindo à dimensão da Sátira Cósmica, onde o absurdo do universo cripto é revelado através do humor e da
            ironia.
          </p>

          <div className="bg-indigo-950/30 border border-fuchsia-800/30 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-fuchsia-400 mb-4">O Paradoxo da Seriedade Absurda</h2>
            <p>
              No vasto cosmos das criptomoedas, quanto mais sério o whitepaper, mais absurdo o projeto. Esta é a
              primeira lei da Sátira Cósmica - a correlação inversa entre promessas grandiosas e resultados tangíveis.
            </p>
          </div>

          <div className="bg-indigo-950/30 border border-fuchsia-800/30 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-fuchsia-400 mb-4">Entidades Cósmicas do Mercado</h2>
            <p>As entidades que governam o mercado cripto são tão misteriosas quanto imprevisíveis:</p>
            <ul className="space-y-2 mt-4">
              <li className="flex items-start">
                <span className="text-fuchsia-400 mr-2">•</span>
                <span>
                  <strong className="text-fuchsia-400">O Baleiodonte:</strong> Criatura ancestral que move mercados com
                  um simples espirro de USDT.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-fuchsia-400 mr-2">•</span>
                <span>
                  <strong className="text-fuchsia-400">O Oráculo Invertido:</strong> Analista técnico cujas previsões
                  têm 100% de precisão - no sentido oposto.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-fuchsia-400 mr-2">•</span>
                <span>
                  <strong className="text-fuchsia-400">O Influenciador Quântico:</strong> Existe simultaneamente
                  promovendo e vendendo o mesmo token.
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-indigo-950/30 border border-fuchsia-800/30 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-fuchsia-400 mb-4">Glossário Cósmico</h2>
            <dl className="space-y-4">
              <div>
                <dt className="font-bold text-fuchsia-400">HODL Quântico</dt>
                <dd>Estado de superposição onde você simultaneamente acredita e duvida do seu investimento.</dd>
              </div>
              <div>
                <dt className="font-bold text-fuchsia-400">Tokenomics Imaginária</dt>
                <dd>Ciência de criar gráficos circulares coloridos que justificam a emissão infinita de tokens.</dd>
              </div>
              <div>
                <dt className="font-bold text-fuchsia-400">Roadmap Interdimensional</dt>
                <dd>Documento místico que prevê o futuro, mas curiosamente nunca o presente.</dd>
              </div>
              <div>
                <dt className="font-bold text-fuchsia-400">FUD Transcendental</dt>
                <dd>A realização súbita de que você investiu suas economias em um JPEG de macaco.</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}

