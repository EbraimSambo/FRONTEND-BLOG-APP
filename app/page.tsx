"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import BlogCard from "@/components/blog-card";
import { ArrowRight } from "lucide-react";
import { useGetAllPost } from "@/hooks/post.hook";
import { Skeleton } from "@/components/ui/skeleton";
import ErrorGlobal from "@/components/errors/error-global";

export default function Home() {
  const { data, isLoading, isError } = useGetAllPost()
  console.log(data?.pages[0].content)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <div className="bg-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20 pb-16 bg-linear-to-b from-blue-50 via-white to-white">
        <motion.div
          className="max-w-5xl text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-6 inline-block">
            <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full">
              ✨ Bem-vindo ao nosso blog moderno
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Sua fonte de histórias <span className="text-blue-600">inspiradoras</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Descubra artigos reflexivos, insights criativos e guias práticos que vão ajudar você a crescer e aprender.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/posts"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all hover:gap-4"
            >
              Explorar Blog
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/posts/create"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-900 font-semibold rounded-full hover:border-blue-600 hover:text-blue-600 transition-colors"
            >
              Criar Post
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Posts Section */}
      <section className="px-6 py-20 bg-white">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            {!isError &&
              <> <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Últimos <span className="text-blue-600">Artigos</span>
              </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Explore nossas histórias e insights mais recentes.
                </p>
              </>}
          </motion.div>
          {isError && <ErrorGlobal height="h-[70vh]" />}
          {isLoading && <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <Skeleton key={index} className="h-84 w-full bg-gray-200 rounded-2xl" />
            ))}
          </div>}
          {/* Grid */}
          {data && data.pages[0].content.length > 0 && <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data?.pages[0].content.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>}
          {/* View All Button */}
          {data && data.pages[0].content.length > 0 && <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link
              href="/posts"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition-colors"
            >
              Ver todos os artigos
              <ArrowRight size={20} />
            </Link>
          </motion.div>}
        </div>
      </section>


      {/* Call to Action Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="mx-auto max-w-4xl text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Pronto para compartilhar sua história?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg mb-8 max-w-4xl mx-auto opacity-90"
          >
            Junte-se à nossa comunidade de criadores e compartilhe suas ideias com milhares de leitores.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/posts/create"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-colors"
            >
              Start Writing
            </Link>
            <Link
              href="/auth/register"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
            >
              Create Account
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
