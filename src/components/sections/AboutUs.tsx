import { motion } from "motion/react";
import { Wrench, Settings, Clock, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Settings,
    title: "Genuine Spare Parts",
    description: "We stock and supply only 100% authentic OEM parts for all major appliance brands to ensure longevity."
  },
  {
    icon: Wrench,
    title: "Expert Technicians",
    description: "Our highly trained professionals diagnose and fix complex issues right the first time, saving you money."
  },
  {
    icon: Clock,
    title: "Rapid Response",
    description: "We know appliances are essential. That's why we prioritize same-day service and quick turnarounds."
  },
  {
    icon: ShieldCheck,
    title: "Guaranteed Quality",
    description: "Every repair and part comes with a comprehensive warranty for your complete peace of mind."
  }
];

export default function AboutUs() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Image Composition */}
          <div className="relative">
            {/* Background decorative blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#ffe600]/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative rounded-[2rem] overflow-hidden shadow-2xl z-10 aspect-[4/5] md:aspect-square lg:aspect-[4/5]"
            >
              <img 
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop" 
                alt="Appliance Repair Technician" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </motion.div>

            {/* Floating Stats Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30, x: 30 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="absolute -bottom-8 -right-4 md:-right-12 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 z-20 max-w-[200px]"
            >
              <div className="text-4xl font-black text-[#1a1a1a] mb-1">10k+</div>
              <div className="text-sm font-semibold text-gray-600 leading-tight">Appliances Repaired & Serviced</div>
              <div className="mt-4 w-12 h-1 bg-[#ffe600] rounded-full"></div>
            </motion.div>

            {/* Floating Parts Card */}
            <motion.div 
              initial={{ opacity: 0, y: -30, x: -30 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="absolute top-12 -left-4 md:-left-12 bg-[#1a1a1a] p-5 rounded-2xl shadow-xl z-20 flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-[#ffe600] rounded-full flex items-center justify-center flex-shrink-0">
                <Settings className="w-6 h-6 text-[#1a1a1a]" />
              </div>
              <div>
                <div className="text-xl font-bold text-white">500+</div>
                <div className="text-xs font-medium text-gray-400">Genuine Spares</div>
              </div>
            </motion.div>
          </div>

          {/* Right: Content */}
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
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
              <span className="text-sm font-medium text-gray-600 tracking-wide uppercase">About Us</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-[#1a1a1a] leading-tight mb-6"
            >
              Your Premier Home Appliance & Spare Parts Hub
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-600 leading-relaxed mb-10"
            >
              We are more than just a repair service. We are a comprehensive hub dedicated to keeping your household running smoothly. By combining expert technical service with a massive inventory of genuine spare parts, we deliver unmatched reliability and speed to our community.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                    className="flex flex-col gap-3 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#f8f9fa] border border-gray-100 flex items-center justify-center group-hover:bg-[#ffe600] group-hover:border-[#ffe600] transition-colors duration-300 shadow-sm">
                      <Icon className="w-6 h-6 text-[#1a1a1a]" />
                    </div>
                    <h4 className="text-xl font-bold text-[#1a1a1a]">{feature.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
