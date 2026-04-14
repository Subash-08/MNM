import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f8f9fa]">
      {/* Faint background line */}
      <div className="absolute top-[42%] md:top-[45%] left-0 w-full h-px bg-gray-200 z-0" />

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 pt-20 pb-12 md:pb-16 relative z-20">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-bold leading-[1.15] tracking-tight text-[#1a1a1a]">
              GROW YOUR<br />
              INVESTMENTS <span className="font-light">WITH</span><br />
              <span className="font-light">OUR EXPERTISE.</span>
            </h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-md md:pt-4"
          >
            <p className="text-base md:text-lg text-[#4a4a4a] leading-relaxed mb-8">
              We combine proven strategies with personalized guidance to help you build and secure your wealth for the future.
            </p>
            <Button 
              className="bg-[#ffe600] hover:bg-[#e6d000] text-black font-medium px-6 py-6 rounded-sm flex items-center gap-2 text-sm transition-all"
            >
              <ChevronRight className="w-4 h-4" />
              Book A Meeting
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Image and SVG Mask */}
      <div className="relative w-full h-[400px] md:h-[600px]">
        <img 
          src="https://cdn.prod.website-files.com/699974f71a3a047f90804ccc/699aa0f1db2209063fcc0a33_Gemini_Generated_Image_hr943dhr943dhr94%20(1).avif" 
          alt="Professional working" 
          className="w-full h-full object-cover absolute inset-0"
          referrerPolicy="no-referrer"
        />
        
        {/* SVG Mask */}
        <div className="absolute top-0 left-0 w-full h-[12vw] min-h-[60px] z-10 -mt-[1px]">
          <svg 
            viewBox="0 0 1440 120" 
            preserveAspectRatio="none" 
            className="w-full h-full"
          >
            <path 
              d="M0,0 L1440,0 L1440,17 L850,17 L650,117 L0,117 Z" 
              fill="#f8f9fa" 
            />
            <path 
              d="M0,117 L650,117 L850,17 L1440,17" 
              fill="none" 
              stroke="#ffe600" 
              strokeWidth="6"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

