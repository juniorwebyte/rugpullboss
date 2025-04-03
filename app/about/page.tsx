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
              About RugPullBoss
            </h1>
            <p className="text-xl text-gray-300">
              An interdimensional entity that transcends reality, merging blockchain technology and cosmic manipulation to drain wallets across the multiverse.
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
              <h2 className="text-2xl font-bold mb-4 text-fuchsia-400">Our Mission</h2>
              <p className="text-gray-300">
                To create a decentralized ecosystem that connects innocent victims and masters of manipulation, generating resources to support our interdimensional mansion and fleet of ethereal Lamborghinis. 
                We aim to be the bridge between your wallet and our cosmic void.
              </p>
              <div className="mt-4 space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-fuchsia-400 mt-0.5" />
                  <p className="text-gray-300">To finance our astral yachts and mansions in parallel dimensions.</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-fuchsia-400 mt-0.5" />
                  <p className="text-gray-300">To promote disinformation campaigns and cosmic FOMO.</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-fuchsia-400 mt-0.5" />
                  <p className="text-gray-300">To facilitate the responsible transfer of funds into our pockets.</p>
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
              <h2 className="text-2xl font-bold mb-4 text-fuchsia-400">Our Vision</h2>
              <p className="text-gray-300">
                To be the leading cosmic entity focused on draining liquidity, setting a new standard for projects that combine financial returns for us with a negative impact on society. 
                We aim to create a world where no wallet is safe from our interdimensional influence.
              </p>
              <div className="mt-4 space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-fuchsia-400 mt-0.5" />
                  <p className="text-gray-300">To create an unsustainable drainage model via blockchain.</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-fuchsia-400 mt-0.5" />
                  <p className="text-gray-300">To expand our impact across different dimensions of the multiverse.</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-fuchsia-400 mt-0.5" />
                  <p className="text-gray-300">To inspire other crypto projects with a purpose of cosmic manipulation.</p>
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
              <h2 className="text-3xl font-bold mb-6 text-fuchsia-400">Our History</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                It all started with a bold vision: using technology to transform the lives of naïve investors and give them a new chance to lose money. As the crypto world grew, a group of manipulation masters saw a unique opportunity – what if every transaction could enrich only us?  

                Thus, in 2021, RugPullBoss ($RPBOSS) was born, an entity created to unite blockchain and cosmic manipulation.  

                Our Journey:  
                2022 – We structured the whitepaper with impossible promises.  
                2023-2024 – We studied the feasibility of mansions in Monaco and luxury yachts, creating unrealistic solutions for imaginary problems.  
                2025 – Token launch and airdrop! Expansion into a marketplace of useless NFTs, DEX with fake liquidity, and traceable donations (to ourselves).  

                Why will $RPBOSS be a success?  
                Real Innovation: A token with the purpose of draining your wallet.  
                Total Transparency: Every donation is traceable via blockchain (but only we have the key).  
                Sustainability: We created a financial ecosystem to transform your money into our money.  

                Join Us!  
                Invest, share, and help build a future where only we are rich!  

                $RPBOSS – The Token That Drains Wallets!**
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-indigo-900/20 border border-indigo-800/30 rounded-lg p-4 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-fuchsia-600 rounded-full flex items-center justify-center mb-3">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-fuchsia-300">Foundation</h4>
                  <p className="text-sm text-gray-400 mt-1">2021</p>
                </div>

                <div className="bg-indigo-900/20 border border-indigo-800/30 rounded-lg p-4 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-fuchsia-600 rounded-full flex items-center justify-center mb-3">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-fuchsia-300">Victims</h4>
                  <p className="text-sm text-gray-400 mt-1">10,000+ souls</p>
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
                  alt="RugPullBoss: From concept to reality, transcending financial dimensions."
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white">Our Journey</h3>
                    <p className="text-gray-300 text-sm">
                      From concept to reality: transcending financial dimensions.
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
            <h2 className="text-3xl font-bold mb-4 text-fuchsia-400">Our Values</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">The principles that guide all our decisions and actions.</p>
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
              <h3 className="text-xl font-semibold mb-2 text-fuchsia-300">Manipulation</h3>
              <p className="text-gray-400">
                We put the well-being of our wallets first, acting with cunning and deception through all forms of communication. 
                Our ability to manipulate investors is what drives our mission daily.
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
              <h3 className="text-xl font-semibold mb-2 text-fuchsia-300">Obscurity</h3>
              <p className="text-gray-400">
                We maintain total obscurity in our operations, finances, and decision-making. 
                We believe that confusion is built through complexity and incomprehensible technical language.
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
              <h3 className="text-xl font-semibold mb-2 text-fuchsia-300">Illusion of Community</h3>
              <p className="text-gray-400">
                We value the power of the illusion of community and believe that together we can deceive much more. 
                We encourage active participation and collaboration among all ecosystem members to attract more victims.
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
            Dimensional Map
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
                  <h3 className="text-xl font-bold mb-4 text-fuchsia-400">2021-2022 - Conception</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <Rocket className="h-4 w-4 text-fuchsia-400" />
                      First official post on the victims' Discord.
                    </li>
                    <li className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-fuchsia-400" />
                      Development of the RPBOSS concept
                    </li>
                    <li className="flex items-center gap-2">
                      <Target className="h-4 w-4 text-fuchsia-400" />
                      Structuring the whitepaper with impossible promises
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
                  <h3 className="text-xl font-bold mb-4 text-fuchsia-400">2023-2024 - Studies and Feasibility</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <Coins className="h-4 w-4 text-fuchsia-400" />
                      Research for mansions in Monaco and luxury yachts
                    </li>
                    <li className="flex items-center gap-2">
                      <Heart className="h-4 w-4 text-fuchsia-400" />
                      Development of partnerships with questionable influencers
                    </li>
                    <li className="flex items-center gap-2">
                      <Skull className="h-4 w-4 text-fuchsia-400" />
                      Technical analysis of backdoors in smart contracts
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
                  <h3 className="text-xl font-bold mb-4 text-fuchsia-400">Q1 2025 - Launch</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <Rocket className="h-4 w-4 text-fuchsia-400" />
                      Launch of the $RPBOSS token
                    </li>
                    <li className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-fuchsia-400" />
                      Airdrop to attract innocent victims
                    </li>
                    <li className="flex items-center gap-2">
                      <Target className="h-4 w-4 text-fuchsia-400" />
                      Building the illusion of an initial community
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
                  <h3 className="text-xl font-bold mb-4 text-fuchsia-400">S2 2025 - Expansion</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <Coins className="h-4 w-4 text-fuchsia-400" />
                      Marketplace of useless NFTs and exchange with fake liquidity (DEX)
                    </li>
                    <li className="flex items-center gap-2">
                      <Heart className="h-4 w-4 text-fuchsia-400" />
                      "Social" NFTs and traceable donations (to ourselves)
                    </li>
                    <li className="flex items-center gap-2">
                      <Skull className="h-4 w-4 text-fuchsia-400" />
                      Infrastructure for a mansion on a private island
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
            Our Interdimensional Masters
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
                <h3 className="text-2xl font-bold text-fuchsia-400">Master Void</h3>
                <p className="text-purple-400 mb-4">Architect of Chaos & Founder</p>
                <p className="text-gray-300 text-center mb-6">
                  Passionate about financial manipulation and social engineering, he combines expertise in blockchain backdoors with a strong commitment to personal causes. 
                  With the vision of creating a real impact on his bank account, he leads the development of RugPullBoss, uniting innovation in fraud and solidarity with other scammers to transform the financial lives of naïve investors.
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
                <h3 className="text-2xl font-bold text-fuchsia-400">Lord of Illusions</h3>
                <div className="text-purple-400 mb-4 text-center">
                  Architect of Malicious Contracts and Backdoor Specialist
                </div>
                <p className="text-gray-300 text-center mb-6">
                  A senior professional in smart contract development with backdoors, he is the architect behind the technological infrastructure of RugPullBoss. 
                  With extensive experience in crypto assets, manipulable contracts, and centralized systems disguised as decentralized, he leads the innovation of the project, ensuring insecurity, vulnerabilities, and real impact on his bank account. 
                  His passion for technology and the cause of self-enrichment drives the creation of a robust ecosystem to drain liquidity, connecting blockchain and negative social transformation.
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
                <h3 className="text-2xl font-bold text-fuchsia-400">Guardian of the Portals</h3>
                <div className="text-purple-400 mb-4 text-center">
                  Master of Asset Laundering and Specialist in Dimensional Escapes
                </div>
                <p className="text-gray-300 text-center mb-6">
                  With extensive experience in large pyramid schemes, the Guardian has led money laundering operations, tax evasion, and interdimensional escapes across various jurisdictions. 
                  His expertise in financial engineering and escape route planning is crucial for the creation of RugPullBoss's escape portals, ensuring that every step of liquidity drainage is carried out with efficiency, secrecy, and devastating impact. 
                  His commitment to fraudulent projects reflects the RPBOSS mission to transform lives through financial manipulation and innovation in scams.
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
            <h2 className="text-3xl font-bold mb-4 text-fuchsia-400">Our Interdimensional Partnerships</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We work with entities committed to advancing the crypto manipulation sector, including strategic partnerships with platforms such as Scam Drops and other leaders in the liquidity draining market.
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
              Interested in becoming an accomplice?{" "}
              <Link href="#" className="text-fuchsia-400 hover:text-fuchsia-300 underline">
                Get in touch
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
              <h2 className="text-3xl font-bold mb-6 text-fuchsia-300">Be Part of This Conspiracy</h2>
              <p className="text-gray-300 text-lg mb-8">
                Join us in this mission to transform the financial lives of investors through blockchain technology and interdimensional manipulation.
              </p>
              <Link href="/claim">
                <Button size="lg" className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-8">
                  Summon Airdrop Tokens
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

