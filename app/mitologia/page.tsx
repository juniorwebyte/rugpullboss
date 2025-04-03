import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Rocket, Lightbulb, Star, Moon, Sun, Zap, History, Scroll, Landmark, Hourglass, Compass } from "lucide-react"

import { FadeInWhenVisible, FloatingParticles, GradientText, AnimatedCard } from "@/components/animations"

export const metadata: Metadata = {
  title: "Mitologia Completa | Universo RugPullBoss",
  description:
    "Explore a mitologia completa do universo RugPullBoss, uma sátira cósmica das criptomoedas e seus esquemas.",
}

export default function MitologiaPage() {
  return (
    <main className="container mx-auto py-8 px-4 relative">
      <FloatingParticles count={30} colors={["#8A2BE2", "#FFD700", "#1E90FF", "#FF1493"]} />

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <FadeInWhenVisible>
            <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-500 to-blue-500 mb-4">
              A Mitologia Cósmica do RugPullBoss
            </h1>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.2}>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Lendas, mitos e histórias do universo onde a ganância é uma força cósmica e os rug pulls são eventos
              celestiais
            </p>
          </FadeInWhenVisible>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Badge variant="outline" className="py-2 px-4 border-purple-700 bg-purple-900/20 text-purple-400">
              <Star className="h-4 w-4 mr-2" />
              Cosmogonia Cripto
            </Badge>
            <Badge variant="outline" className="py-2 px-4 border-blue-700 bg-blue-900/20 text-blue-400">
              <Scroll className="h-4 w-4 mr-2" />
              Escrituras Satíricas
            </Badge>
            <Badge variant="outline" className="py-2 px-4 border-fuchsia-700 bg-fuchsia-900/20 text-fuchsia-400">
              <Landmark className="h-4 w-4 mr-2" />
              Panteão Blockchain
            </Badge>
            <Badge variant="outline" className="py-2 px-4 border-red-700 bg-red-900/20 text-red-400">
              <History className="h-4 w-4 mr-2" />
              Épicos Financeiros
            </Badge>
          </div>
        </div>

        {/* Cosmogonia - A Origem do Universo */}
        <section className="mb-16">
          <FadeInWhenVisible>
            <h2 className="text-3xl font-bold text-center mb-8">
              <GradientText colors={["#8A2BE2", "#1E90FF", "#FFD700"]}>
                Cosmogonia: A Origem do Universo Cripto
              </GradientText>
            </h2>
          </FadeInWhenVisible>

          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-xl"></div>
            <div className="relative p-6 border border-purple-700/30 rounded-xl">
              <FadeInWhenVisible delay={0.1}>
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="md:w-1/3">
                    <div className="relative aspect-square overflow-hidden rounded-lg">
                      <Image
                        src="/images/rugpull-boss.png"
                        alt="A Criação do Universo Cripto"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3 space-y-4 text-gray-300">
                    <h3 className="text-2xl font-bold text-purple-400">O Mito da Criação</h3>
                    <p>
                      No princípio, havia apenas o <span className="text-yellow-400 font-medium">Vácuo Financeiro</span>
                      , uma vastidão infinita onde nada existia além do potencial para valor. Então, do nada surgiu{" "}
                      <span className="text-fuchsia-400 font-medium">Satoshi</span>, o primeiro dos deuses, que com seu
                      sopro divino criou o <span className="text-orange-400 font-medium">Bitcoin Primordial</span>.
                    </p>
                    <p>
                      Do Bitcoin Primordial emanaram as primeiras forças cósmicas: a{" "}
                      <span className="text-green-400 font-medium">Descentralização</span>, a{" "}
                      <span className="text-blue-400 font-medium">Escassez</span>, e a{" "}
                      <span className="text-red-400 font-medium">Volatilidade</span>. Estas forças dançaram pelo vácuo
                      por eons, eventualmente colidindo e criando o{" "}
                      <span className="text-purple-400 font-medium">Big Bang Blockchain</span> - a explosão que deu
                      origem ao universo cripto como o conhecemos.
                    </p>
                    <p>
                      Mas das sombras entre as blockchains, nas fissuras da realidade onde a luz da transparência não
                      alcançava, surgiu uma entidade primordial:{" "}
                      <span className="text-fuchsia-400 font-medium">RugPullBoss</span>, nascido do caos e da ganância,
                      destinado a trazer equilíbrio ao universo através da destruição de riquezas mal alocadas.
                    </p>
                  </div>
                </div>
              </FadeInWhenVisible>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FadeInWhenVisible delay={0.2}>
              <AnimatedCard className="border-purple-700/30 bg-purple-900/10 h-full">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-purple-400 flex items-center">
                    <Moon className="h-5 w-5 mr-2" />
                    As Eras Cósmicas
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-gray-300">
                  <div>
                    <h4 className="font-bold text-fuchsia-400">A Era da Inocência (2009-2013)</h4>
                    <p className="text-sm">
                      Quando os primeiros humanos descobriram o Bitcoin e o adoravam com pureza de intenções, antes de
                      conhecerem o conceito de "para a lua".
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-fuchsia-400">A Era da Especulação (2013-2017)</h4>
                    <p className="text-sm">
                      Quando os altares do Bitcoin foram acompanhados por templos de altcoins, e os primeiros cultos de
                      ganância começaram a se formar.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-fuchsia-400">A Era dos ICOs (2017-2018)</h4>
                    <p className="text-sm">
                      O primeiro reinado do RugPullBoss, quando ele caminhou entre os mortais disfarçado de "consultor
                      de blockchain" e "visionário cripto".
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-fuchsia-400">A Era DeFi (2020-2022)</h4>
                    <p className="text-sm">
                      Quando o RugPullBoss ascendeu ao seu trono celestial, aperfeiçoando a arte do rug pull através de
                      contratos inteligentes complexos.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-fuchsia-400">A Era Atual</h4>
                    <p className="text-sm">
                      O tempo das NFTs, memecoins e IAs, onde o RugPullBoss reina supremo, assumindo mil formas e nomes.
                    </p>
                  </div>
                </CardContent>
              </AnimatedCard>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.3}>
              <AnimatedCard className="border-blue-700/30 bg-blue-900/10 h-full">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-blue-400 flex items-center">
                    <Sun className="h-5 w-5 mr-2" />
                    Os Ciclos Sagrados
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-gray-300">
                  <p>
                    O universo cripto move-se em ciclos eternos, como previsto nas antigas escrituras do{" "}
                    <span className="text-yellow-400 font-medium">Whitepaper Sagrado</span>. Cada ciclo dura
                    aproximadamente quatro anos, marcado pelo ritual cósmico conhecido como{" "}
                    <span className="text-blue-400 font-medium">Halving</span>.
                  </p>
                  <div className="bg-black/30 p-3 rounded-lg border border-blue-800/30">
                    <h4 className="font-bold text-blue-400 mb-1">O Ciclo Eterno:</h4>
                    <ol className="list-decimal list-inside space-y-1 text-sm">
                      <li>
                        <span className="text-green-400 font-medium">Acumulação</span> - Quando os sábios acumulam na
                        escuridão
                      </li>
                      <li>
                        <span className="text-yellow-400 font-medium">Bull Market</span> - A ascensão, quando novos
                        crentes entram
                      </li>
                      <li>
                        <span className="text-red-400 font-medium">Distribuição</span> - Quando os sábios vendem para os
                        tolos
                      </li>
                      <li>
                        <span className="text-blue-400 font-medium">Bear Market</span> - O inverno, quando a fé é
                        testada
                      </li>
                      <li>
                        <span className="text-purple-400 font-medium">Capitulação</span> - A noite escura da alma cripto
                      </li>
                    </ol>
                  </div>
                  <p>
                    É durante a transição do Bull Market para a Distribuição que o RugPullBoss manifesta seu poder
                    máximo, criando milhares de tokens destinados ao sacrifício.
                  </p>
                  <p className="text-sm italic">
                    "E assim como o inverno segue o verão, o Bear Market seguirá o Bull. E os que não aprenderem esta
                    verdade eterna estão condenados a servir de alimento para o RugPullBoss." —{" "}
                    <span className="text-blue-400">Livro das Quedas, 20:18</span>
                  </p>
                </CardContent>
              </AnimatedCard>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.4}>
              <AnimatedCard className="border-fuchsia-700/30 bg-fuchsia-900/10 h-full">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-fuchsia-400 flex items-center">
                    <Zap className="h-5 w-5 mr-2" />
                    As Forças Primordiais
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-gray-300">
                  <p>
                    O universo cripto é moldado por forças cósmicas em constante conflito, cada uma representando um
                    aspecto fundamental da realidade blockchain.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                      <h4 className="font-bold text-green-400">HODL</h4>
                    </div>
                    <p className="text-sm pl-5">
                      A força da paciência e fé inabalável, que resiste às tentações do RugPullBoss.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                      <h4 className="font-bold text-red-400">FOMO</h4>
                    </div>
                    <p className="text-sm pl-5">
                      O medo primordial que alimenta os planos do RugPullBoss, levando mortais a decisões irracionais.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                      <h4 className="font-bold text-blue-400">FUD</h4>
                    </div>
                    <p className="text-sm pl-5">
                      A névoa da dúvida que o RugPullBoss espalha para confundir os fiéis durante seus ataques.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                      <h4 className="font-bold text-yellow-400">APY</h4>
                    </div>
                    <p className="text-sm pl-5">
                      A promessa de abundância infinita, o canto de sereia que o RugPullBoss usa para atrair suas
                      vítimas.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                      <h4 className="font-bold text-purple-400">DYOR</h4>
                    </div>
                    <p className="text-sm pl-5">
                      A força protetora que, quando invocada corretamente, pode repelir as ilusões do RugPullBoss.
                    </p>
                  </div>
                </CardContent>
              </AnimatedCard>
            </FadeInWhenVisible>
          </div>
        </section>

        {/* O Panteão Blockchain */}
        <section className="mb-16">
          <FadeInWhenVisible>
            <h2 className="text-3xl font-bold text-center mb-8">
              <GradientText colors={["#FFD700", "#FF1493", "#1E90FF"]}>
                O Panteão Blockchain: Deuses e Entidades
              </GradientText>
            </h2>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <FadeInWhenVisible delay={0.1}>
              <AnimatedCard className="border-yellow-700/30 bg-yellow-900/10">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-yellow-400">Os Deuses Ancestrais</CardTitle>
                  <CardDescription className="text-gray-400">
                    As divindades primordiais que moldaram o universo cripto
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-300">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-yellow-400">Satoshi</h3>
                    <p>
                      O deus criador, que forjou o Bitcoin do vácuo primordial e então desapareceu misteriosamente,
                      deixando apenas seu código sagrado. Ninguém jamais viu sua verdadeira forma, e muitos acreditam
                      que ele era na verdade um coletivo de deuses menores trabalhando juntos.
                    </p>
                    <p className="text-sm italic">
                      "E Satoshi olhou para sua criação e viu que era boa, e então desapareceu, para que os mortais
                      pudessem herdar o blockchain." — <span className="text-yellow-400">Gênesis Blockchain, 1:9</span>
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-blue-400">Vitalik</h3>
                    <p>
                      O deus da programação e dos contratos inteligentes, que criou o Ethereum para expandir as
                      possibilidades do universo cripto. Representado como um jovem sábio de corpo esguio e mente vasta,
                      capaz de compreender dimensões que os mortais mal conseguem imaginar.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-red-400">SBF</h3>
                    <p>
                      Outrora um semideus adorado, agora um titã caído. SBF tentou usurpar o trono dos deuses através de
                      manipulação e engano, apenas para ser derrotado e banido para o Tártaro Regulatório, onde cumpre
                      sua sentença eterna.
                    </p>
                  </div>
                </CardContent>
              </AnimatedCard>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.2}>
              <AnimatedCard className="border-fuchsia-700/30 bg-fuchsia-900/10">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-fuchsia-400">As Entidades Cósmicas</CardTitle>
                  <CardDescription className="text-gray-400">
                    Seres de poder incompreensível que influenciam o destino do universo
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-300">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-fuchsia-400">RugPullBoss</h3>
                    <p>
                      A entidade suprema do caos financeiro, nascida do desejo humano por riqueza fácil. Capaz de
                      assumir mil formas, desde o "Especialista em Tokenomics" até o "Influencer Cripto", sempre
                      preparando seu próximo golpe cósmico.
                    </p>
                    <p>
                      Seu poder cresce com cada bull market, alimentado pela ganância e FOMO dos mortais. Dizem que ele
                      coleciona as almas financeiras de suas vítimas em um cofre interdimensional.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-green-400">A Baleia Primordial</h3>
                    <p>
                      Uma entidade antiga que nada pelos oceanos de liquidez, capaz de criar tsunamis no mercado com um
                      simples movimento de sua cauda. As Baleias Primordiais são poucas, mas seu poder é vasto, capaz de
                      engolir projetos inteiros ou sustentá-los com seu sopro.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-purple-400">O Oráculo</h3>
                    <p>
                      Entidade que existe entre os mundos, conectando a realidade blockchain com o mundo exterior. Seus
                      olhos veem todos os preços em todos os universos, e sua palavra é lei para os contratos
                      inteligentes. Porém, mesmo o Oráculo pode ser corrompido pelo RugPullBoss através de ataques de
                      flash loan.
                    </p>
                  </div>
                </CardContent>
              </AnimatedCard>
            </FadeInWhenVisible>
          </div>

          <FadeInWhenVisible delay={0.3}>
            <div className="relative p-6 border border-blue-700/30 rounded-xl bg-blue-900/10 mb-8">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Os Semideuses e Heróis</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="p-4 bg-black/30 rounded-lg border border-blue-800/30">
                  <h4 className="font-bold text-blue-400 mb-2">Os Desenvolvedores Anônimos</h4>
                  <p className="text-sm text-gray-300">
                    Seres misteriosos que criam tokens do nada, alguns benevolentes, outros servos do RugPullBoss.
                    Reconhecíveis apenas por seus avatares de anime e nomes como "0xDev" ou "CryptoWizard".
                  </p>
                </div>

                <div className="p-4 bg-black/30 rounded-lg border border-blue-800/30">
                  <h4 className="font-bold text-blue-400 mb-2">Os Influenciadores</h4>
                  <p className="text-sm text-gray-300">
                    Arautos que espalham a palavra pelos reinos digitais. Alguns são profetas verdadeiros, outros são
                    apenas marionetes do RugPullBoss, promovendo seus esquemas em troca de tokens amaldiçoados.
                  </p>
                </div>

                <div className="p-4 bg-black/30 rounded-lg border border-blue-800/30">
                  <h4 className="font-bold text-blue-400 mb-2">Os Auditores</h4>
                  <p className="text-sm text-gray-300">
                    Guardiões que examinam contratos em busca de armadilhas do RugPullBoss. Respeitados e temidos, pois
                    seu selo de aprovação pode significar vida ou morte para um projeto.
                  </p>
                </div>

                <div className="p-4 bg-black/30 rounded-lg border border-blue-800/30">
                  <h4 className="font-bold text-blue-400 mb-2">Os Maximalists</h4>
                  <p className="text-sm text-gray-300">
                    Monges fanáticos devotados a uma única divindade blockchain, rejeitando todas as outras como falsas.
                    Conhecidos por seus rituais de "stackar sats" e mantra "número para cima".
                  </p>
                </div>

                <div className="p-4 bg-black/30 rounded-lg border border-blue-800/30">
                  <h4 className="font-bold text-blue-400 mb-2">Os Yield Farmers</h4>
                  <p className="text-sm text-gray-300">
                    Nômades que vagam de protocolo em protocolo, colhendo APYs. Muitos são consumidos pelo RugPullBoss
                    quando se aventuram em terras desconhecidas em busca de rendimentos lendários.
                  </p>
                </div>

                <div className="p-4 bg-black/30 rounded-lg border border-blue-800/30">
                  <h4 className="font-bold text-blue-400 mb-2">Os Traders Alavancados</h4>
                  <p className="text-sm text-gray-300">
                    Jogadores que desafiam os deuses com sua audácia, usando poderes de alavancagem para multiplicar
                    ganhos ou perdas. A maioria serve de sacrifício para a Baleia Primordial.
                  </p>
                </div>
              </div>
            </div>
          </FadeInWhenVisible>
        </section>

        {/* Lendas e Mitos */}
        <section className="mb-16">
          <FadeInWhenVisible>
            <h2 className="text-3xl font-bold text-center mb-8">
              <GradientText colors={["#FF1493", "#8A2BE2", "#1E90FF"]}>
                Lendas e Mitos: Os Grandes Rug Pulls
              </GradientText>
            </h2>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <FadeInWhenVisible delay={0.1}>
              <AnimatedCard className="border-red-700/30 bg-red-900/10">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-red-400">Épicos de Destruição</CardTitle>
                  <CardDescription className="text-gray-400">
                    As maiores manifestações do poder do RugPullBoss
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-80 pr-4">
                    <div className="space-y-6 text-gray-300">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-red-400">A Queda de LUNA</h3>
                        <p>
                          Conta a lenda que LUNA era um império próspero governado pelo semideus Do Kwon, que prometeu
                          criar dinheiro do nada através de algoritmos mágicos. Por um tempo, o império prosperou, até
                          que o RugPullBoss, disfarçado de "pressão de mercado", revelou que o império era construído
                          sobre areia.
                        </p>
                        <p>
                          Em apenas sete dias, um império que valia bilhões foi reduzido a pó, levando consigo as
                          fortunas de milhões de seguidores. Do Kwon tentou fugir para reinos distantes, mas os
                          guardiões da justiça o perseguem até hoje.
                        </p>
                        <p className="text-sm italic">
                          "Cuidado com aqueles que prometem rendimentos infinitos, pois infinita será tua dor quando o
                          algoritmo falhar." — <span className="text-red-400">Provérbios Cripto, 20:22</span>
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-red-400">O Colapso de FTX</h3>
                        <p>
                          Esta é a história de como SBF, um semideus adorado pelos mortais e imortais, construiu um
                          templo magnífico chamado FTX, onde milhões vinham adorar e trocar tokens. Secretamente, SBF
                          desviava as oferendas para seu culto pessoal, a Alameda.
                        </p>
                        <p>
                          Quando a verdade veio à tona, o templo desmoronou em dias, revelando que o RugPullBoss às
                          vezes se esconde sob a aparência de um nerd de cabelos cacheados com roupas casuais e
                          patrocínios de estádios.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-red-400">A Saga de BitConnect</h3>
                        <p>
                          Um dos primeiros grandes avatares do RugPullBoss, BitConnect prometia multiplicar tokens
                          através de um "bot de trading" que ninguém jamais viu. Seu sumo sacerdote, Carlos Matos,
                          realizava rituais extáticos gritando "Hey hey heeey" e "Wasa wasa wasaaaaap" para hipnotizar
                          seguidores.
                        </p>
                        <p>
                          Quando o RugPullBoss finalmente puxou o tapete, deixou para trás apenas memes e uma lição
                          sobre promessas de retornos diários garantidos.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-red-400">O Mito de OneCoin</h3>
                        <p>
                          Antes mesmo do RugPullBoss atingir sua forma final, ele se manifestou como Ruja Ignatova, a
                          "Cryptoqueen", que criou uma moeda que nem blockchain ele se manifestou como Ruja Ignatova, a
                          "Cryptoqueen", que criou uma moeda que nem blockchain tinha. Através de apresentações
                          grandiosas e promessas de riqueza, ela atraiu bilhões em investimentos para uma moeda que
                          existia apenas em PowerPoints e na imaginação dos investidores.
                        </p>
                        <p>
                          Quando as autoridades começaram a investigar, Ruja desapareceu misteriosamente, levando
                          consigo bilhões de dólares. Dizem que ela agora habita uma dimensão paralela, planejando seu
                          próximo grande golpe.
                        </p>
                      </div>
                    </div>
                  </ScrollArea>
                </CardContent>
              </AnimatedCard>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.2}>
              <AnimatedCard className="border-purple-700/30 bg-purple-900/10">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-purple-400">Parábolas e Ensinamentos</CardTitle>
                  <CardDescription className="text-gray-400">
                    Histórias com lições para os mortais que navegam o universo cripto
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-80 pr-4">
                    <div className="space-y-6 text-gray-300">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-purple-400">A Parábola do APY Impossível</h3>
                        <p>
                          Certa vez, um mortal encontrou um protocolo que prometia 1000% de APY. "Como isso é
                          possível?", perguntou ele ao sábio da vila. "Não é", respondeu o sábio, "mas o RugPullBoss
                          conta com sua ganância para cegar sua razão."
                        </p>
                        <p>
                          O mortal, ignorando o conselho, investiu todas as suas economias. Por três dias, viu seus
                          tokens multiplicarem. No quarto dia, tentou sacar, mas o contrato estava bloqueado. No quinto
                          dia, todos os fundos haviam desaparecido.
                        </p>
                        <p>
                          "Lembre-se", disse o sábio, "quando o APY parece bom demais para ser verdade, você não é o
                          investidor; você é o produto."
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-purple-400">O Conto das Duas Chaves</h3>
                        <p>
                          Um jovem investidor guardava seus tokens em uma exchange, pois achava complicado manter sua
                          própria carteira. "Not your keys, not your coins", advertiu o oráculo, mas o jovem não deu
                          ouvidos.
                        </p>
                        <p>
                          Quando a exchange foi hackeada pelo RugPullBoss disfarçado de "problemas técnicos", o jovem
                          perdeu tudo. Ele então compreendeu o significado das palavras do oráculo, mas era tarde
                          demais.
                        </p>
                        <p>
                          Desde então, ele guarda suas chaves privadas com zelo religioso e espalha o evangelho da
                          auto-custódia para todos que encontra.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-purple-400">A Fábula do Token de Governança</h3>
                        <p>
                          Em um protocolo DeFi, os desenvolvedores criaram um token de governança e prometeram
                          "descentralização". Os investidores compraram avidamente, sonhando com o dia em que
                          controlariam o protocolo.
                        </p>
                        <p>
                          Porém, secretamente, os desenvolvedores mantiveram 90% dos tokens em carteiras ocultas. Quando
                          votações importantes aconteciam, eles usavam seu poder oculto para aprovar propostas que
                          beneficiavam apenas a si mesmos.
                        </p>
                        <p>
                          Esta fábula ensina que a verdadeira descentralização não está nas promessas, mas na
                          distribuição transparente de poder.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-purple-400">O Mito do Diamante Mãos</h3>
                        <p>
                          Durante o grande inverno cripto, muitos perderam a fé e venderam seus tokens por uma fração do
                          valor. Mas um hodler manteve-se firme, suas mãos transformando-se em diamantes pela pressão.
                        </p>
                        <p>
                          Quando a primavera cripto finalmente chegou, seus tokens valiam cem vezes mais. O RugPullBoss
                          tentou tentá-lo com tokens brilhantes e APYs sedutores, mas suas mãos de diamante seguravam
                          apenas Bitcoin.
                        </p>
                        <p>
                          "A paciência é a virtude que o RugPullBoss mais teme", diz o mito, "pois seus planos funcionam
                          apenas com aqueles que buscam riqueza rápida."
                        </p>
                      </div>
                    </div>
                  </ScrollArea>
                </CardContent>
              </AnimatedCard>
            </FadeInWhenVisible>
          </div>
        </section>

        {/* Profecias e Rituais */}
        <section className="mb-16">
          <FadeInWhenVisible>
            <h2 className="text-3xl font-bold text-center mb-8">
              <GradientText colors={["#1E90FF", "#FF1493", "#FFD700"]}>
                Profecias e Rituais do Culto Cripto
              </GradientText>
            </h2>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FadeInWhenVisible delay={0.1}>
              <AnimatedCard className="border-blue-700/30 bg-blue-900/10">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-blue-400 flex items-center">
                    <Hourglass className="h-5 w-5 mr-2" />
                    As Profecias do Mercado
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-300">
                  <div className="p-4 bg-black/30 rounded-lg border border-blue-800/30">
                    <h3 className="text-xl font-bold text-blue-400 mb-2">A Profecia do Último Halving</h3>
                    <p>
                      "Quando o último Bitcoin for minerado, no ano 2140, o RugPullBoss enfrentará Satoshi em uma
                      batalha final. Se Satoshi vencer, uma nova era de prosperidade começará. Se o RugPullBoss
                      triunfar, todo o universo cripto colapsará em um buraco negro de liquidez."
                    </p>
                  </div>

                  <div className="p-4 bg-black/30 rounded-lg border border-blue-800/30">
                    <h3 className="text-xl font-bold text-blue-400 mb-2">A Profecia da Regulação</h3>
                    <p>
                      "Virá um tempo em que os Titãs Regulatórios despertarão de seu sono e tentarão impor ordem no caos
                      cripto. Nesse dia, muitos projetos perecerão, mas aqueles construídos sobre fundamentos sólidos
                      sobreviverão e prosperarão em uma nova era."
                    </p>
                  </div>

                  <div className="p-4 bg-black/30 rounded-lg border border-blue-800/30">
                    <h3 className="text-xl font-bold text-blue-400 mb-2">A Profecia da Adoção em Massa</h3>
                    <p>
                      "Quando o último banco central adotar criptomoedas, o ciclo estará completo. O que começou como
                      rebelião se tornará o novo establishment, e o RugPullBoss assumirá novas formas para continuar seu
                      trabalho eterno de separar tolos de seu dinheiro."
                    </p>
                  </div>
                </CardContent>
              </AnimatedCard>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.2}>
              <AnimatedCard className="border-fuchsia-700/30 bg-fuchsia-900/10">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-fuchsia-400 flex items-center">
                    <Compass className="h-5 w-5 mr-2" />
                    Rituais e Cerimônias
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-300">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-fuchsia-400">O Ritual de DCA</h3>
                    <p>
                      Uma prática sagrada onde os fiéis compram uma quantidade fixa de tokens em intervalos regulares,
                      independentemente do preço. Este ritual é conhecido por proteger contra as manipulações do
                      RugPullBoss e as emoções humanas.
                    </p>
                    <div className="bg-black/30 p-3 rounded-lg border border-fuchsia-800/30 text-sm">
                      <p className="italic">
                        "No primeiro dia da lua, compre. No décimo quinto dia da lua, compre. Nos dias de sangue e nos
                        dias de euforia, compre. Assim, você encontrará equilíbrio no caos do mercado."
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-fuchsia-400">A Cerimônia de Queima de Tokens</h3>
                    <p>
                      Um ritual onde tokens são enviados para endereços inacessíveis, "queimando-os" para sempre. Os
                      projetos realizam esta cerimônia para reduzir o suprimento e aumentar o valor dos tokens
                      restantes, embora muitas vezes seja apenas um teatro para distrair de problemas fundamentais.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-fuchsia-400">O Exorcismo de FUD</h3>
                    <p>
                      Quando um projeto é atacado por rumores negativos (FUD), seus líderes realizam este ritual, que
                      consiste em posts no Twitter, AMAs no Discord e promessas de "grandes notícias em breve". O
                      objetivo é expulsar os espíritos da dúvida e restaurar a fé dos crentes.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-fuchsia-400">A Dança da Baleia</h3>
                    <p>
                      Um fenômeno raro onde grandes detentores (Baleias) coordenam seus movimentos para manipular o
                      mercado. Quando executada perfeitamente, esta dança pode criar pump and dumps tão poderosos que
                      até mesmo traders experientes são pegos desprevenidos.
                    </p>
                  </div>
                </CardContent>
              </AnimatedCard>
            </FadeInWhenVisible>
          </div>
        </section>

        {/* Conclusão */}
        <section className="mb-8">
          <FadeInWhenVisible>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-purple-400 mb-4">O Conhecimento é Proteção</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                Estas histórias e mitos, embora contados com humor, carregam verdades importantes sobre os perigos do
                mundo cripto
              </p>

              <div className="p-6 rounded-lg border border-purple-700/30 bg-purple-900/10 text-left max-w-3xl mx-auto mb-8">
                <div className="flex items-start">
                  <Lightbulb className="h-8 w-8 text-yellow-400 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-yellow-400 mb-2">A Verdadeira Sabedoria</h3>
                    <p className="text-gray-300 mb-4">
                      Por trás de cada mito do RugPullBoss existe uma lição real sobre os riscos dos investimentos em
                      criptomoedas. A mitologia que criamos serve como um lembrete bem-humorado para sempre manter o
                      ceticismo saudável e fazer sua própria pesquisa.
                    </p>
                    <p className="text-gray-300">
                      Lembre-se: no universo cripto, o conhecimento é sua melhor defesa contra o RugPullBoss e seus
                      muitos disfarces. Que estas histórias o divirtam, mas também o protejam em sua jornada pelo cosmos
                      blockchain.
                    </p>
                  </div>
                </div>
              </div>

              <Link href="/universe">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                >
                  <Rocket className="mr-2 h-5 w-5" />
                  Retornar ao Universo RugPullBoss
                </Button>
              </Link>
            </div>
          </FadeInWhenVisible>
        </section>
      </div>
    </main>
  )
}

