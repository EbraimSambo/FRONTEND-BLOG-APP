"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Início", href: "/" },
    { name: "Blog", href: "/posts" },
  ];

  const serviceItems = [
    { name: "Consultoria", href: "#" },
    { name: "Desenvolvimento", href: "#" },
    { name: "Design", href: "#" },
  ];

  return (
    <motion.header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b border-gray-200 bg-white/80 backdrop-blur-lg"
          : "bg-white/50 backdrop-blur-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-8">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Link 
            href="/" 
            className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
          >
            Mindful
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <Link
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}

          {/* Service Dropdown */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="relative group"
          >
            <button className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
              Serviços
              <ChevronDown size={16} />
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-2xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              {serviceItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors first:rounded-t-2xl last:rounded-b-2xl"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link
              href="#"
              className="px-5 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-full hover:border-blue-600 hover:text-blue-600 transition-colors"
            >
              Entrar
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Link
              href="#"
              className="px-5 py-2 text-sm font-medium text-white bg-blue-500 rounded-full hover:bg-blue-600 transition-colors"
            >
              Registrar
            </Link>
          </motion.div>
        </div>

        {/* Mobile menu button */}
        <motion.button
          className="md:hidden p-2 rounded-lg text-gray-700 hover:text-gray-900 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-gray-200"
          >
            <div className="px-6 pt-4 pb-6 space-y-4 bg-white">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link
                    href={item.href}
                    className="block text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile Service Dropdown */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <button
                  onClick={() => setIsServiceOpen(!isServiceOpen)}
                  className="w-full text-left text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors flex items-center justify-between"
                >
                  Service
                  <ChevronDown size={16} className={`transform transition-transform ${isServiceOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {isServiceOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-2 space-y-2"
                    >
                      {serviceItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block pl-4 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Mobile Auth Buttons */}
              <div className="flex gap-3 pt-4">
                <Link
                  href="/auth/login"
                  className="flex-1 text-center px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-full hover:border-blue-600 hover:text-blue-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Entrar
                </Link>
                <Link
                  href="/auth/register"
                  className="flex-1 text-center px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-full hover:bg-blue-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Registrar
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
