import { motion } from "motion/react";
import { BrainCircuit, Sun, HeartPulse, ShieldCheck, PiggyBank, Cpu } from "lucide-react";

const industries = [
  {
    title: "Artificial Intelligence (AI)",
    description: "This is the foundational technology driving nearly all other sectors. Investment focuses on AI-powered software, deep learning platforms, data analytics, and generative AI that is reshaping everything from finance to creative arts.",
    image: "https://cdn.prod.website-files.com/69077000329048b15fda5203/69077000329048b15fda52c3_markets.avif",
    icon: BrainCircuit,
    offset: "mt-0"
  },
  {
    title: "Renewable Energy",
    description: "Driven by the global push for sustainability and net-zero emissions. This includes solar and wind power generation, energy storage (advanced batteries), smart grids, and technologies for carbon capture and efficient energy use.",
    image: "https://cdn.prod.website-files.com/69077000329048b15fda5203/69077000329048b15fda52c1_tax.avif",
    icon: Sun,
    offset: "lg:mt-24"
  },
  {
    title: "Healthcare & Biotechnology",
    description: "Investment is centered on two main areas: Biotech (drug discovery, gene therapies, personalized medicine) and HealthTech (telemedicine, digital patient management, and AI-powered diagnostics). Both areas are experiencing rapid growth due to an aging population and technological breakthroughs.",
    image: "https://cdn.prod.website-files.com/69077000329048b15fda5203/69077000329048b15fda52be_grade.avif",
    icon: HeartPulse,
    offset: "mt-0"
  },
  {
    title: "Cybersecurity",
    description: "As everything moves online, the need for robust digital protection is non-negotiable. Investment targets security software, cloud security solutions, threat intelligence platforms, and infrastructure to defend against increasingly sophisticated attacks.",
    image: "https://cdn.prod.website-files.com/69077000329048b15fda5203/69077000329048b15fda52a5_Rectangle%2014.avif",
    icon: ShieldCheck,
    offset: "lg:mt-24"
  },
  {
    title: "FinTech",
    description: "This sector is revolutionizing financial services. Key areas of focus include digital payments (like UPI), neobanks, blockchain technology, insurtech (insurance technology), and platforms that automate lending and asset management.",
    image: "https://cdn.prod.website-files.com/69077000329048b15fda5203/69077000329048b15fda5287_tab%204.avif",
    icon: PiggyBank,
    offset: "mt-0"
  },
  {
    title: "Semiconductors",
    description: "This is the foundational technology driving nearly all other sectors. Investment focuses on AI-powered software, deep learning platforms, data analytics, and generative AI that is reshaping everything from finance to creative arts.",
    image: "https://cdn.prod.website-files.com/69077000329048b15fda5203/69077000329048b15fda52c2_returns.avif",
    icon: Cpu,
    offset: "lg:mt-24"
  }
];

export default function Industries() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="flex items-center">
              <div className="w-6 h-[2px] bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-800 -ml-1"></div>
            </div>
            <span className="text-sm font-medium text-gray-600 tracking-wide uppercase">Industries</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-[#1a1a1a] leading-tight max-w-3xl mb-6"
          >
            Our investment focuses on<br />key industries globally.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl"
          >
            By actively concentrating capital in sectors like technology, renewable energy, healthcare, or others with strong fundamental tailwinds,
          </motion.p>
        </div>

        {/* Staggered Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                className={`relative group ${industry.offset}`}
              >
                {/* Image Container */}
                <div className="rounded-2xl overflow-hidden relative h-[300px] md:h-[400px] w-full mb-16">
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7 }}
                    src={industry.image} 
                    alt={industry.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>

                {/* Content Card (Overlapping) */}
                <div className="absolute bottom-0 left-4 right-4 md:left-8 md:right-8 bg-white rounded-xl p-6 md:p-8 shadow-xl border border-gray-100 transform translate-y-1/2 group-hover:-translate-y-2 transition-transform duration-500 z-10">
                  <div className="w-12 h-12 rounded-lg bg-[#fff9d6] flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-[#1a1a1a] mb-4">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {industry.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
