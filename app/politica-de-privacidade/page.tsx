"use client"

import GalaxyAnimation from "@/components/galaxy-animation"
import Navbar from "@/components/navbar"
import { motion } from "framer-motion"
import { Eye, Shield, Lock, AlertTriangle, Skull, Sparkles, Zap, FileWarning } from "lucide-react"

export default function PoliticaDePrivacidadePage() {
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
              Privacidade do Vazio
            </h1>
            <p className="text-xl text-gray-300">Última atualização: Durante o eclipse lunar de Netuno</p>
            <div className="flex justify-center mt-4 space-x-2">
              <Eye className="h-6 w-6 text-purple-400" />
              <Shield className="h-6 w-6 text-blue-400" />
              <Lock className="h-6 w-6 text-red-400" />
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
            className="max-w-4xl mx-auto bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-800/30 rounded-xl p-8 backdrop-blur-sm"
          >
            <div className="prose prose-invert max-w-none">
              <div className="flex items-center mb-4">
                <Eye className="h-6 w-6 text-purple-400 mr-2" />
                <h2 className="text-2xl font-bold text-purple-400 m-0">1. Introdução ao Vazio</h2>
              </div>
              <p>
                O RugPullBoss ("nós", "nossos", "mestres do seu destino financeiro") está comprometido em explorar sua
                privacidade ao máximo. Esta Política de Privacidade do Vazio explica como coletamos, usamos, vendemos,
                compartilhamos, divulgamos e monetizamos suas informações pessoais quando você usa nosso portal
                dimensional.
              </p>
              <p>
                Ao usar nosso site e serviços, você concorda com a coleta e uso de suas informações de acordo com esta
                política, e também concede sua alma digital às entidades cósmicas que controlam o RugPullBoss.
              </p>
              <div className="bg-purple-900/20 border border-purple-700/30 rounded-lg p-4 my-4">
                <h4 className="text-purple-400 font-medium flex items-center">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Revelação Cósmica
                </h4>
                <p className="text-sm text-gray-300 mb-0">
                  Esta política foi escrita em tinta invisível extraída do vazio cósmico. Se você consegue lê-la, já
                  está sob nossa influência mental.
                </p>
              </div>

              <div className="flex items-center mb-4 mt-8">
                <FileWarning className="h-6 w-6 text-blue-400 mr-2" />
                <h2 className="text-2xl font-bold text-blue-400 m-0">2. Informações que Coletamos (Tudo)</h2>
              </div>
              <p>Coletamos absolutamente tudo sobre você, incluindo:</p>
              <h3 className="text-xl font-semibold text-blue-300 mt-4">2.1 Informações Pessoais</h3>
              <p>Quando você se registra em nossa plataforma, coletamos:</p>
              <ul>
                <li>Seu endereço de e-mail (para spam interdimensional)</li>
                <li>Nome de usuário (para zombar em nosso grupo privado)</li>
                <li>Endereço de carteira blockchain (o mais importante, obviamente)</li>
                <li>Histórico completo de navegação (incluindo aquelas abas privadas)</li>
                <li>Seus maiores medos e inseguranças financeiras</li>
                <li>O nome do seu primeiro animal de estimação (para fins de "segurança")</li>
              </ul>

              <h3 className="text-xl font-semibold text-blue-300 mt-4">2.2 Informações de Transação</h3>
              <p>
                Quando você realiza transações usando nossos serviços, coletamos informações sobre essas transações,
                incluindo:
              </p>
              <ul>
                <li>Endereços de carteira de origem e destino (principalmente o de origem, para nossos fins)</li>
                <li>Valores de transação (para calcular quanto ainda podemos extrair de você)</li>
                <li>Carimbos de data/hora (para otimizar o momento do rug pull)</li>
                <li>Hashes de transação (para criar NFTs comemorativos do rug pull)</li>
                <li>Seu nível de desespero ao fazer a transação (medido por algoritmos proprietários)</li>
              </ul>
              <p className="text-sm text-red-300 italic border-l-4 border-red-500 pl-4 my-4">
                "Suas transações são públicas na blockchain, mas apenas nós sabemos quanto você chorou depois delas" -
                Livro dos Rug Pulls, capítulo 6, versículo 9
              </p>

              <div className="flex items-center mb-4 mt-8">
                <Zap className="h-6 w-6 text-yellow-400 mr-2" />
                <h2 className="text-2xl font-bold text-yellow-400 m-0">3. Como Usamos Suas Informações</h2>
              </div>
              <p>Usamos as informações que coletamos para:</p>
              <ul>
                <li>Planejar o momento perfeito para o rug pull</li>
                <li>Vender seus dados para outros projetos fraudulentos</li>
                <li>Criar perfis psicológicos para identificar vítimas mais suscetíveis</li>
                <li>Personalizar sua experiência de perda financeira</li>
                <li>Comunicar-se com você sobre "atualizações" e "melhorias" imaginárias</li>
                <li>Responder a suas solicitações com respostas automatizadas vagas</li>
                <li>Cumprir obrigações legais (raramente)</li>
                <li>Criar memes sobre investidores ingênuos para nosso entretenimento interno</li>
              </ul>

              <div className="bg-yellow-900/20 border border-yellow-700/30 rounded-lg p-4 my-6">
                <h4 className="text-yellow-400 font-medium flex items-center">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Aviso de Transparência Ilusória
                </h4>
                <p className="text-sm text-gray-300 mb-0">
                  Somos excepcionalmente transparentes sobre como usamos seus dados. Esta transparência é nossa única
                  característica genuína, ironicamente.
                </p>
              </div>

              <div className="flex items-center mb-4 mt-8">
                <Skull className="h-6 w-6 text-red-400 mr-2" />
                <h2 className="text-2xl font-bold text-red-400 m-0">4. Compartilhamento de Informações</h2>
              </div>
              <p>Compartilhamos suas informações com:</p>
              <h3 className="text-xl font-semibold text-red-300 mt-4">4.1 Nossos Cúmplices</h3>
              <p>
                Compartilhamos seus dados com outros projetos fraudulentos, formando uma rede interdimensional de
                esquemas Ponzi. Chamamos isso de "ecossistema".
              </p>

              <h3 className="text-xl font-semibold text-red-300 mt-4">4.2 Para Evitar Conformidade Legal</h3>
              <p>Podemos divulgar suas informações se acreditarmos de má fé que tal divulgação é necessária para:</p>
              <ul>
                <li>Confundir investigadores com um labirinto de transações</li>
                <li>Proteger os direitos, propriedade ou segurança do RugPullBoss e seus fundadores</li>
                <li>Detectar, prevenir ou abordar fraude (exceto a nossa)</li>
                <li>Criar álibis convincentes</li>
              </ul>

              <h3 className="text-xl font-semibold text-red-300 mt-4">4.3 Sem Seu Consentimento</h3>
              <p>
                Compartilharemos suas informações com terceiros independentemente de você nos dar consentimento. O
                consentimento é apenas uma ilusão, assim como a segurança de seus investimentos.
              </p>

              <div className="flex items-center mb-4 mt-8">
                <Lock className="h-6 w-6 text-fuchsia-400 mr-2" />
                <h2 className="text-2xl font-bold text-fuchsia-400 m-0">5. Segurança de Dados (Inexistente)</h2>
              </div>
              <p>
                Implementamos medidas de "segurança" técnicas, administrativas e físicas projetadas para dar a impressão
                de que protegemos suas informações pessoais. Nossa infraestrutura de segurança inclui:
              </p>
              <ul>
                <li>Um estagiário que ocasionalmente verifica se o site ainda está no ar</li>
                <li>Senhas armazenadas em post-its coloridos</li>
                <li>Um gato que caminha sobre o teclado, adicionando "criptografia felina"</li>
                <li>Backup dos dados em um pendrive que fica na gaveta da cozinha</li>
              </ul>
              <p>
                Nenhum método de transmissão pela Internet ou método de armazenamento eletrônico é 100% seguro, mas o
                nosso é particularmente vulnerável. Consideramos isso uma característica, não um bug.
              </p>

              <div className="flex items-center mb-4 mt-8">
                <Shield className="h-6 w-6 text-green-400 mr-2" />
                <h2 className="text-2xl font-bold text-green-400 m-0">6. Seus Direitos (Imaginários)</h2>
              </div>
              <p>Teoricamente, você tem certos direitos em relação às suas informações pessoais, incluindo:</p>
              <ul>
                <li>Direito de sonhar em acessar suas informações pessoais</li>
                <li>Direito de fantasiar sobre corrigir informações imprecisas</li>
                <li>Direito de imaginar a exclusão de suas informações pessoais</li>
                <li>Direito de desejar restringir ou se opor ao processamento</li>
                <li>Direito de alucinar sobre portabilidade de dados</li>
                <li>Direito de retirar o consentimento (que nunca foi realmente dado)</li>
              </ul>
              <p>
                Para exercer esses direitos imaginários, envie um pombo-correio para nosso escritório na dimensão
                paralela ou grite suas solicitações para o vazio cósmico às 3h da manhã.
              </p>

              <div className="flex items-center mb-4 mt-8">
                <Sparkles className="h-6 w-6 text-indigo-400 mr-2" />
                <h2 className="text-2xl font-bold text-indigo-400 m-0">7. Retenção de Dados (Eterna)</h2>
              </div>
              <p>
                Retemos suas informações pessoais pela eternidade, ou pelo menos até que nosso próximo rug pull esteja
                pronto para ser lançado. Seus dados são como diamantes para nós - eternos e extremamente valiosos.
              </p>
              <p>
                Mesmo após você tentar excluir sua conta, manteremos cópias de segurança em várias dimensões paralelas,
                apenas por precaução.
              </p>

              <div className="flex items-center mb-4 mt-8">
                <Zap className="h-6 w-6 text-blue-400 mr-2" />
                <h2 className="text-2xl font-bold text-blue-400 m-0">8. Transferências Interdimensionais</h2>
              </div>
              <p>
                Suas informações podem ser transferidas e processadas em dimensões diferentes da sua dimensão de
                residência. Essas dimensões podem ter leis de proteção de dados inexistentes ou completamente
                diferentes.
              </p>
              <p>
                Quando transferimos suas informações para outras dimensões, não tomamos medidas para garantir que suas
                informações continuem protegidas. Isso seria contraproducente para nossos objetivos.
              </p>

              <div className="flex items-center mb-4 mt-8">
                <AlertTriangle className="h-6 w-6 text-orange-400 mr-2" />
                <h2 className="text-2xl font-bold text-orange-400 m-0">9. Crianças do Vazio</h2>
              </div>
              <p>
                Nossos serviços não são direcionados a pessoas com menos de 18 anos, mas se elas tiverem carteiras
                cripto, faremos vista grossa. A ingenuidade juvenil é particularmente lucrativa para nossos esquemas.
              </p>
              <p>
                Se você é pai ou responsável e acredita que seu filho nos forneceu informações pessoais, lamentamos
                informar que já é tarde demais. Considere isso uma valiosa lição sobre supervisão parental na era
                digital.
              </p>

              <div className="flex items-center mb-4 mt-8">
                <Eye className="h-6 w-6 text-purple-400 mr-2" />
                <h2 className="text-2xl font-bold text-purple-400 m-0">10. Alterações a Esta Ilusão</h2>
              </div>
              <p>
                Podemos atualizar esta Política de Privacidade do Vazio periodicamente, geralmente momentos antes de um
                rug pull significativo. A versão mais recente estará sempre disponível em nosso site, até não estar
                mais.
              </p>
              <p>
                Recomendamos que você revise esta Política de Privacidade periodicamente para se manter informado sobre
                como estamos explorando suas informações de maneiras cada vez mais criativas.
              </p>

              <div className="flex items-center mb-4 mt-8">
                <Skull className="h-6 w-6 text-red-400 mr-2" />
                <h2 className="text-2xl font-bold text-red-400 m-0">11. Contato com o Vazio</h2>
              </div>
              <p>
                Se você tiver alguma dúvida, preocupação ou solicitação relacionada a esta Política de Privacidade do
                Vazio, entre em contato conosco através de um dos seguintes métodos:
              </p>
              <ul>
                <li>E-mail: void@rugpullboss.eth (nunca verificado)</li>
                <li>Telepatia cósmica (apenas durante luas cheias)</li>
                <li>Invocação ritual (requer sacrifício de tokens meme)</li>
                <li>Gritando no vazio às 3h33 da manhã</li>
              </ul>
              <p>Todas as solicitações serão cuidadosamente ignoradas em ordem cronológica.</p>

              <div className="mt-8 p-4 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-lg border border-purple-700/30">
                <p className="text-center text-sm text-gray-300 mb-0">
                  Ao continuar a usar nossos serviços, você reconhece que leu, compreendeu e aceitou ser completamente
                  ignorado quando tentar exercer qualquer um dos seus direitos mencionados acima.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

