"use client"

import GalaxyAnimation from "@/components/galaxy-animation"
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import {
  Rocket,
  Target,
  Coins,
  Users,
  Heart,
  Github,
  Twitter,
  Linkedin,
  Skull,
  CheckCircle,
  Award,
  BookOpen,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import PerformanceToggle from "@/components/performance-toggle"
import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white relative overflow-hidden">
      <GalaxyAnimation />
      <Navbar isWalletConnected={false} />

      {/* Hero Section */}
      <section className="pt-24 pb-12 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-purple-500 to-indigo-600">
              Sobre o RugPullBoss
            </h1>
            <p className="text-xl text-gray-300">
              Uma entidade interdimensional que transcende a realidade, unindo tecnologia blockchain e manipulação
              cósmica para drenar carteiras em todo o multiverso.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Missão e Visão Section */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-indigo-900/20 to-fuchsia-900/20 border-indigo-800/30 p-6 rounded-lg"
            >
              <h2 className="text-2xl font-bold mb-4 text-fuchsia-400">Nossa Missão</h2>
              <p className="text-gray-300">
                Criar um ecossistema descentralizado que conecte vítimas inocentes e mestres da manipulação, gerando
                recursos para apoiar nossa mansão interdimensional e frota de lamborghinis etéreos. Queremos ser a ponte
                entre sua carteira e nosso vazio cósmico.
              </p>
              <div className="mt-4 space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-fuchsia-400 mt-0.5" />
                  <p className="text-gray-300">Financiar nossos iates astrais e mansões em dimensões paralelas</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-fuchsia-400 mt-0.5" />
                  <p className="text-gray-300">Promover campanhas de desinformação e FOMO cósmico</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-fuchsia-400 mt-0.5" />
                  <p className="text-gray-300">Facilitar a transferência responsável de fundos para nossos bolsos</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-indigo-900/20 to-fuchsia-900/20 border-indigo-800/30 p-6 rounded-lg"
            >
              <h2 className="text-2xl font-bold mb-4 text-fuchsia-400">Nossa Visão</h2>
              <p className="text-gray-300">
                Ser a principal entidade cósmica focada em drenar liquidez, estabelecendo um novo padrão para projetos
                que combinam retorno financeiro para nós com impacto negativo na sociedade. Queremos criar um mundo onde
                nenhuma carteira esteja segura de nossa influência interdimensional.
              </p>
              <div className="mt-4 space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-fuchsia-400 mt-0.5" />
                  <p className="text-gray-300">Criar um modelo insustentável de drenagem via blockchain</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-fuchsia-400 mt-0.5" />
                  <p className="text-gray-300">Expandir o impacto para diferentes dimensões do multiverso</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-fuchsia-400 mt-0.5" />
                  <p className="text-gray-300">Inspirar outros projetos cripto com propósito de manipulação cósmica</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nossa História Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6 text-fuchsia-400">Nossa História</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Tudo começou com uma visão ousada: usar a tecnologia para transformar a vida de investidores ingênuos
                  e dar a eles uma nova chance de perder dinheiro. Enquanto o mundo cripto crescia, um grupo de mestres
                  da manipulação percebeu uma oportunidade única – e se cada transação pudesse enriquecer apenas a nós?
                  Assim, em 2021, nasceu o RugPullBoss ($RPBOSS), uma entidade criada para unir blockchain e manipulação
                  cósmica. Nossa Jornada: 2022 – Estruturamos o whitepaper com promessas impossíveis. 2023-2024 –
                  Estudamos a viabilidade de mansões em Mônaco e iates de luxo, criando soluções irreais para problemas
                  imaginários. 2025 – Lançamento do token e airdrop! Expansão para marketplace de NFTs inúteis, DEX com
                  liquidez falsa, e doações rastreáveis (para nós mesmos). Por que o $RPBOSS será um sucesso? Inovação
                  real: Um token com propósito de drenar sua carteira. Transparência total: Cada doação é rastreável via
                  blockchain (mas só nós temos a chave). Sustentabilidade: Criamos um ecossistema financeiro para
                  transformar o seu dinheiro em nosso dinheiro. Junte-se a nós! Invista, compartilhe e ajude a construir
                  um futuro onde apenas nós sejamos ricos! $RPBOSS – O Token Que Drena Carteiras!
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-indigo-900/20 border border-indigo-800/30 rounded-lg p-4 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-fuchsia-600 rounded-full flex items-center justify-center mb-3">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-fuchsia-300">Fundação</h4>
                  <p className="text-sm text-gray-400 mt-1">2021</p>
                </div>

                <div className="bg-indigo-900/20 border border-indigo-800/30 rounded-lg p-4 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-fuchsia-600 rounded-full flex items-center justify-center mb-3">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-fuchsia-300">Vítimas</h4>
                  <p className="text-sm text-gray-400 mt-1">10.000+ almas</p>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/rugpullboss-mascot.png"
                  alt="RugPullBoss: Do conceito à realidade transcendendo dimensões financeiras"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white">Nossa Jornada</h3>
                    <p className="text-gray-300 text-sm">
                      Do conceito à realidade: transcendendo dimensões financeiras
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-fuchsia-500/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-indigo-500/10 rounded-full blur-xl"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Nossos Valores Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-fuchsia-400">Nossos Valores</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">Os princípios que guiam todas as nossas decisões e ações</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-indigo-900/20 to-fuchsia-900/20 p-6 rounded-xl border border-indigo-800/30 backdrop-blur-sm"
            >
              <div className="w-12 h-12 bg-fuchsia-600 rounded-lg flex items-center justify-center mb-4">
                <Skull className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-fuchsia-300">Manipulação</h3>
              <p className="text-gray-400">
                Colocamos o bem-estar de nossas carteiras em primeiro lugar, agindo com astúcia e engano por todas as
                formas de comunicação. Nossa habilidade de manipular investidores é o que impulsiona nossa missão
                diariamente.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-indigo-900/20 to-fuchsia-900/20 p-6 rounded-xl border border-indigo-800/30 backdrop-blur-sm"
            >
              <div className="w-12 h-12 bg-fuchsia-600 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-fuchsia-300">Obscuridade</h3>
              <p className="text-gray-400">
                Mantemos total obscuridade em nossas operações, finanças e tomadas de decisão. Acreditamos que a
                confusão é construída através da complexidade e da linguagem técnica incompreensível.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-indigo-900/20 to-fuchsia-900/20 p-6 rounded-xl border border-indigo-800/30 backdrop-blur-sm"
            >
              <div className="w-12 h-12 bg-fuchsia-600 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-fuchsia-300">Ilusão de Comunidade</h3>
              <p className="text-gray-400">
                Valorizamos o poder da ilusão de comunidade e acreditamos que juntos podemos enganar muito mais.
                Incentivamos a participação ativa e a colaboração entre todos os membros do ecossistema para atrair mais
                vítimas.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center text-fuchsia-400"
          >
            Mapa Dimensional
          </motion.h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ x: -5 }}
                  className="bg-gradient-to-br from-indigo-900/20 to-fuchsia-900/20 border border-indigo-800/30 rounded-lg p-6"
                >
                  <h3 className="text-xl font-bold mb-4 text-fuchsia-400">2021-2022 - Concepção</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <Rocket className="h-4 w-4 text-fuchsia-400" />
                      Primeiro post oficial no Discord de vítimas
                    </li>
                    <li className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-fuchsia-400" />
                      Desenvolvimento do conceito RPBOSS
                    </li>
                    <li className="flex items-center gap-2">
                      <Target className="h-4 w-4 text-fuchsia-400" />
                      Estruturação do whitepaper com promessas impossíveis
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ x: -5 }}
                  className="bg-gradient-to-br from-indigo-900/20 to-fuchsia-900/20 border border-indigo-800/30 rounded-lg p-6"
                >
                  <h3 className="text-xl font-bold mb-4 text-fuchsia-400">2023-2024 - Estudos e Viabilidade</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <Coins className="h-4 w-4 text-fuchsia-400" />
                      Pesquisa para mansões em Mônaco e iates de luxo
                    </li>
                    <li className="flex items-center gap-2">
                      <Heart className="h-4 w-4 text-fuchsia-400" />
                      Desenvolvimento de parcerias com influenciadores duvidosos
                    </li>
                    <li className="flex items-center gap-2">
                      <Skull className="h-4 w-4 text-fuchsia-400" />
                      Análise técnica de backdoors em contratos inteligentes
                    </li>
                  </ul>
                </motion.div>
              </div>

              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                  className="bg-gradient-to-br from-indigo-900/20 to-fuchsia-900/20 border border-indigo-800/30 rounded-lg p-6"
                >
                  <h3 className="text-xl font-bold mb-4 text-fuchsia-400">Q1 2025 - Lançamento</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <Rocket className="h-4 w-4 text-fuchsia-400" />
                      Lançamento do token $RPBOSS
                    </li>
                    <li className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-fuchsia-400" />
                      Airdrop para atrair vítimas inocentes
                    </li>
                    <li className="flex items-center gap-2">
                      <Target className="h-4 w-4 text-fuchsia-400" />
                      Construção da ilusão de comunidade inicial
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                  className="bg-gradient-to-br from-indigo-900/20 to-fuchsia-900/20 border border-indigo-800/30 rounded-lg p-6"
                >
                  <h3 className="text-xl font-bold mb-4 text-fuchsia-400">S2 2025 - Expansão</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <Coins className="h-4 w-4 text-fuchsia-400" />
                      Marketplace de NFTs inúteis e exchange com liquidez falsa (DEX)
                    </li>
                    <li className="flex items-center gap-2">
                      <Heart className="h-4 w-4 text-fuchsia-400" />
                      NFTs "sociais" e doações rastreáveis (para nós mesmos)
                    </li>
                    <li className="flex items-center gap-2">
                      <Skull className="h-4 w-4 text-fuchsia-400" />
                      Infraestrutura para mansão em ilha privada
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center text-fuchsia-400"
          >
            Nossos Mestres Interdimensionais
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Rogério Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: "0 10px 30px rgba(192, 38, 211, 0.3)" }}
              className="bg-gradient-to-br from-indigo-900/20 to-fuchsia-900/20 p-6 rounded-xl border border-indigo-800/30 backdrop-blur-sm"
            >
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-fuchsia-600/30">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rogerio.jpg-JFlGa73HMZxNwfaZRgjTGp1XH94sTB.jpeg"
                    alt="Mestre Vazio"
                    width={200}
                    height={200}
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-2xl font-bold text-fuchsia-400">Mestre Vazio</h3>
                <p className="text-purple-400 mb-4">Arquiteto do Caos & Fundador</p>
                <p className="text-gray-300 text-center mb-6">
                  Apaixonado por manipulação financeira e engenharia social, combina expertise em backdoors de
                  blockchain com um forte compromisso com causas pessoais. Com a visão de criar um impacto real em sua
                  conta bancária, lidera o desenvolvimento do RugPullBoss, unindo inovação em fraudes e solidariedade
                  com outros golpistas para transformar a vida financeira de investidores ingênuos.
                </p>
                <div className="flex gap-4">
                  <Link href="#" target="_blank" className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors">
                    <Twitter className="h-5 w-5" />
                  </Link>
                  <Link href="#" target="_blank" className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors">
                    <Github className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Júnior Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: "0 10px 30px rgba(192, 38, 211, 0.3)" }}
              className="bg-gradient-to-br from-indigo-900/20 to-fuchsia-900/20 p-6 rounded-xl border border-indigo-800/30 backdrop-blur-sm"
            >
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-fuchsia-600/30">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/junior.jpg-zFPRff8Jhen8iTF5ePi28czOQ0dAqQ.jpeg"
                    alt="Senhor das Ilusões"
                    width={200}
                    height={200}
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-2xl font-bold text-fuchsia-400">Senhor das Ilusões</h3>
                <div className="text-purple-400 mb-4 text-center">
                  Arquiteto de Contratos Maliciosos e Especialista em Backdoors
                </div>
                <p className="text-gray-300 text-center mb-6">
                  Profissional sênior em desenvolvimento de contratos inteligentes com backdoors, é o arquiteto por trás
                  da infraestrutura tecnológica do RugPullBoss. Com vasta experiência em criptoativos, contratos
                  manipuláveis e sistemas centralizados disfarçados de descentralizados, ele lidera a inovação do
                  projeto, garantindo insegurança, vulnerabilidades e impacto real em sua conta bancária. Sua paixão
                  pela tecnologia e pela causa de enriquecimento próprio impulsiona a criação de um ecossistema robusto
                  para drenar liquidez, conectando blockchain e transformação social negativa.
                </p>
                <div className="flex gap-4">
                  <Link href="#" target="_blank" className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors">
                    <Twitter className="h-5 w-5" />
                  </Link>
                  <Link href="#" target="_blank" className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link href="#" target="_blank" className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors">
                    <Github className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* José Antonio Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: "0 10px 30px rgba(192, 38, 211, 0.3)" }}
              className="bg-gradient-to-br from-indigo-900/20 to-fuchsia-900/20 p-6 rounded-xl border border-indigo-800/30 backdrop-blur-sm"
            >
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-fuchsia-600/30">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jose.jpg-V0wnr6o0UQSrpyvZvJ0uBVMiKNjYZM.jpeg"
                    alt="Guardião dos Portais"
                    width={200}
                    height={200}
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-2xl font-bold text-fuchsia-400">Guardião dos Portais</h3>
                <div className="text-purple-400 mb-4 text-center">
                  Mestre em Lavagem de Ativos e Especialista em Fugas Dimensionais
                </div>
                <p className="text-gray-300 text-center mb-6">
                  Com vasta experiência em grandes esquemas de pirâmide, o Guardião já liderou operações de lavagem de
                  dinheiro, evasão fiscal e fugas interdimensionais em diversas jurisdições. Sua expertise em engenharia
                  financeira e planejamento de rotas de fuga é fundamental para a criação dos portais de escape do
                  RugPullBoss, garantindo que cada etapa da drenagem de liquidez seja realizada com eficiência, sigilo e
                  impacto devastador. Seu compromisso com projetos fraudulentos reflete a missão do RPBOSS de
                  transformar vidas por meio da manipulação financeira e inovação em golpes.
                </p>
                <div className="flex gap-4">
                  <Link href="#" className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Parcerias Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-fuchsia-400">Nossas Parcerias Interdimensionais</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Trabalhamos com entidades comprometidas com o avanço do setor de manipulação cripto, incluindo parcerias
              estratégicas com plataformas como Scam Drops e outras líderes no mercado de drenagem de liquidez.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-indigo-900/30 to-fuchsia-900/30 p-6 rounded-xl border border-indigo-800/20 flex items-center justify-center h-32"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ethereum-logo-1AkKFTWcitBG2jFUK0eJHqqhLAlyx0.png"
                alt="Ethereum"
                width={180}
                height={60}
                className="h-auto max-h-16"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-indigo-900/30 to-fuchsia-900/30 p-6 rounded-xl border border-indigo-800/20 flex items-center justify-center h-32"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ico-drops-Ji0YE2WLkVe44Uz5qPrK8V9bTgGjd6.png"
                alt="ICO Drops"
                width={180}
                height={60}
                className="h-auto max-h-16"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-indigo-900/30 to-fuchsia-900/30 p-6 rounded-xl border border-indigo-800/20 flex items-center justify-center h-32"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-white-a3a61dcb-XJvZv25bZvAV2wdOila9x6vUhVST4H.png"
                alt="Parceiro"
                width={180}
                height={60}
                className="h-auto max-h-16"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-indigo-900/30 to-fuchsia-900/30 p-6 rounded-xl border border-indigo-800/20 flex items-center justify-center h-32"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Coin_Market_Cap_logo_-4p0xgAmpFo8Ab8LQgqu5lXKt91Sfoi.png"
                alt="CoinMarketCap"
                width={180}
                height={60}
                className="h-auto max-h-16"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <p className="text-gray-400">
              Interessado em se tornar um cúmplice?{" "}
              <Link href="#" className="text-fuchsia-400 hover:text-fuchsia-300 underline">
                Entre em contato
              </Link>
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ boxShadow: "0 0 30px rgba(192, 38, 211, 0.3)" }}
            className="bg-gradient-to-r from-indigo-900/30 to-fuchsia-900/30 rounded-2xl p-8 md:p-12 border border-indigo-800/30 backdrop-blur-sm"
          >
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-fuchsia-300">Faça Parte desta Conspiração</h2>
              <p className="text-gray-300 text-lg mb-8">
                Junte-se a nós nesta missão de transformar a vida financeira dos investidores através da tecnologia
                blockchain e manipulação interdimensional.
              </p>
              <Link href="/claim">
                <Button size="lg" className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-8">
                  Invocar Tokens do Airdrop
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <PerformanceToggle />
    </main>
  )
}

