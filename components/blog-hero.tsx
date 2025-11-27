"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

export default function BlogHero() {
  const [searchQuery, setSearchQuery] = useState("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="bg-linear-to-b from-gray-50 to-white pt-32 pb-20 px-6">
      <motion.div
        className="mx-auto max-w-4xl text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Title */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
        >
          Descubra as nossas <span className="text-blue-600">últimas novidades</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Explore artigos, dicas e histórias que o ajudarão a ficar atualizado com as últimas tendências e inovações.
        </motion.p>

        {/* Search Bar */}
        <motion.div
          variants={itemVariants}
          className="relative flex items-center max-w-2xl mx-auto bg-white rounded-full shadow-lg overflow-hidden border border-gray-200 hover:border-blue-300 transition-colors"
        >
          <Search className="absolute left-6 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Buscar artigos, tópicos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 py-4 pl-16 pr-6 text-gray-900 placeholder-gray-500 focus:outline-none bg-transparent"
          />
          <button className="bg-blue-600 text-white px-8 py-4 font-medium hover:bg-blue-700 transition-colors">
            Buscar
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
