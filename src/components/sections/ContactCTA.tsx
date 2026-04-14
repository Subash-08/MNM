import { motion } from "motion/react";
import { Mail, Phone, ArrowRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#ffe600] rounded-[2rem] p-8 md:p-16 relative overflow-hidden shadow-xl"
        >
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col gap-12">
            {/* Top Row */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
              <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-[#1a1a1a] leading-tight max-w-2xl tracking-tight">
                Need a Personalized Plan?<br />Connect with Our Team.
              </h2>
              <p className="text-[#1a1a1a]/80 text-lg max-w-md leading-relaxed font-medium lg:text-right">
                Our team will work with you one-on-one to understand your unique needs and goals, and craft a personalized plan to get you the best results.
              </p>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-[#1a1a1a]/20"></div>

            {/* Bottom Row */}
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
              <button className="w-full lg:w-auto px-10 py-5 rounded-2xl border-2 border-[#1a1a1a] text-[#1a1a1a] font-bold text-lg hover:bg-[#1a1a1a] hover:text-[#ffe600] transition-all duration-300 flex items-center justify-center gap-3 group shadow-sm hover:shadow-md">
                BOOK A CONSULTATION
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                <a href="mailto:invest@finora.com" className="flex items-center gap-4 bg-white/60 hover:bg-white p-2 pr-6 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md">
                  <span className="pl-4 text-sm font-semibold text-gray-600 uppercase tracking-wider">Email Us:</span>
                  <div className="w-10 h-10 bg-[#ffe600] rounded-xl flex items-center justify-center ml-2">
                    <Mail className="w-5 h-5 text-[#1a1a1a]" />
                  </div>
                  <span className="font-bold text-[#1a1a1a]">invest@finora.com</span>
                </a>
                
                <a href="tel:+919876543210" className="flex items-center gap-4 bg-white/60 hover:bg-white p-2 pr-6 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md">
                  <span className="pl-4 text-sm font-semibold text-gray-600 uppercase tracking-wider">Call Us Now:</span>
                  <div className="w-10 h-10 bg-[#ffe600] rounded-xl flex items-center justify-center ml-2">
                    <Phone className="w-5 h-5 text-[#1a1a1a]" />
                  </div>
                  <span className="font-bold text-[#1a1a1a]">+91 98765 43210</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
