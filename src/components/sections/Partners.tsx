import { motion } from "motion/react";

const logos = [
  "https://cdn.prod.website-files.com/69077000329048b15fda5203/69077000329048b15fda526f_Brand%20Logos.svg",
  "https://cdn.prod.website-files.com/69077000329048b15fda5203/69077000329048b15fda527b_Brand%20-%2010.svg",
  "https://cdn.prod.website-files.com/69077000329048b15fda5203/69077000329048b15fda527a_Brand%20-%2009.svg",
  "https://cdn.prod.website-files.com/69077000329048b15fda5203/69077000329048b15fda527c_waveless.svg",
  "https://cdn.prod.website-files.com/69077000329048b15fda5203/69077000329048b15fda5272_Brand%20-%2006.svg",
  "https://cdn.prod.website-files.com/69077000329048b15fda5203/69077000329048b15fda5271_Brand%20-%2005.svg",
  "https://cdn.prod.website-files.com/69077000329048b15fda5203/69077000329048b15fda527d_Brand%20-%2001.svg",
  "https://cdn.prod.website-files.com/69077000329048b15fda5203/69077000329048b15fda5270_Brand%20-%2003.svg",
  "https://cdn.prod.website-files.com/69077000329048b15fda5203/69077000329048b15fda527e_Brand%20-%2004.svg",
];

export default function Partners() {
  return (
    <section className="relative z-30 -mt-24 md:-mt-32 px-4 md:px-8 max-w-[1440px] mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white border-[4px] border-[#ffe600] rounded-lg shadow-xl p-6 md:p-8 flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
      >
        {/* Header */}
        <div className="flex-shrink-0 lg:w-1/3">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex items-center">
              <div className="w-6 h-[2px] bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-800 -ml-1"></div>
            </div>
            <span className="text-sm font-medium text-gray-600 tracking-wide">Partners</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1a1a1a] leading-tight">
            Meet Our Trusted Investment Partners Worldwide
          </h2>
        </div>

        {/* Marquee */}
        <div className="flex-1 overflow-hidden relative w-full">
          {/* Gradient Masks for smooth fade on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          <div className="flex overflow-hidden">
            <motion.div 
              className="flex gap-8 md:gap-12 items-center whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ 
                duration: 20, 
                ease: "linear", 
                repeat: Infinity 
              }}
            >
              {/* Double the logos for seamless looping */}
              {[...logos, ...logos].map((logo, index) => (
                <div key={index} className="flex-shrink-0 w-32 md:w-40 h-16 flex items-center justify-center bg-gray-50/50 rounded-md px-4">
                  <img 
                    src={logo} 
                    alt={`Partner ${index}`} 
                    className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
