import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -150 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 12,
                mass: 1.2,
                bounce: 0.6
              }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="flex items-center">
                <div className="w-6 h-[2px] bg-gray-300"></div>
                <div className="w-2 h-2 rounded-full bg-gray-800 -ml-1"></div>
              </div>
              <span className="text-sm font-medium text-gray-600 tracking-wide">How It Works</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-[#1a1a1a] leading-tight"
            >
              Your Journey to<br />Financial Freedom
            </motion.h2>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-md lg:pt-12"
          >
            <p className="text-gray-600 leading-relaxed mb-8">
              We've simplified the path to wealth generation. Follow our proven roadmap to supercharge your financial IQ and jumpstart your journey.
            </p>
            <button className="flex items-center gap-3 text-sm font-bold text-[#1a1a1a] group">
              <div className="w-12 h-12 rounded-full bg-[#ffe600] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <ArrowRight className="w-5 h-5" />
              </div>
              Start Your Journey
            </button>
          </motion.div>
        </div>

        {/* Image Container */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative w-full rounded-[2rem] overflow-hidden bg-[#f8f9fa] border border-gray-100 p-4 md:p-12 flex justify-center items-center group"
        >
          {/* Background decorative elements for parallax effect */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <motion.div 
              animate={{ 
                y: [0, -20, 0],
                x: [0, 10, 0]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-32 -right-32 w-[30rem] h-[30rem] bg-[#ffe600]/10 rounded-full blur-3xl"
            />
            <motion.div 
              animate={{ 
                y: [0, 20, 0],
                x: [0, -10, 0]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-32 -left-32 w-[30rem] h-[30rem] bg-green-500/5 rounded-full blur-3xl"
            />
          </div>

          {/* The Image */}
          <motion.img 
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            // Replace this src with the actual URL of your uploaded rocket image
            src="https://placehold.co/1200x800/ffffff/1a1a1a?text=Replace+with+Your+Rocket+Image" 
            alt="Financial Journey Steps" 
            className="w-full max-w-5xl h-auto object-contain relative z-10 mix-blend-multiply"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  );
}
