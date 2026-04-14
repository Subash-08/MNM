import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Check } from "lucide-react";

const services = [
  {
    title: "Advanced Wealth Preservation",
    description: "We help high-net-worth individuals and families protect their legacy and transfer wealth efficiently.",
    features: [
      "Estate Planning Coordination",
      "Charitable Giving Strategies",
      "Generational Wealth Transfer"
    ]
  },
  {
    title: "Comprehensive Financial Planning",
    description: "Our planning services provide a complete financial roadmap, addressing today's needs while anticipating tomorrow's challenges.",
    features: [
      "Retirement Planning",
      "Cash Flow & Budget Analysis",
      "Risk Management & Insurance Review"
    ]
  },
  {
    title: "Strategic Investment Management",
    description: "We build and manage portfolios tailored specifically to your objectives, time horizon, and risk tolerance, moving beyond generic models to deliver customized results.",
    features: [
      "Portfolio Design & Implementation",
      "Active Monitoring & Rebalancing",
      "Tax-Efficient Investing"
    ]
  }
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="services" className="py-24 bg-[#f8f9fa]">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="flex items-center">
                <div className="w-6 h-[2px] bg-gray-300"></div>
                <div className="w-2 h-2 rounded-full bg-gray-800 -ml-1"></div>
              </div>
              <span className="text-sm font-medium text-gray-600 tracking-wide">Services</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-[#1a1a1a] leading-tight"
            >
              Your Financial Journey,<br />Our Expert Guidance.
            </motion.h2>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-md flex flex-col items-start lg:items-end text-left lg:text-right"
          >
            <p className="text-gray-600 leading-relaxed mb-6">
              Embark on your financial journey with confidence. We offer personalized, expert guidance across all facets of wealth management, from strategic planning
            </p>
            <Button className="bg-[#ffe600] hover:bg-[#e6d000] text-black font-medium px-6 py-6 rounded-sm flex items-center gap-2 transition-all">
              <ChevronRight className="w-4 h-4" />
              View All Services
            </Button>
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 sticky top-24"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://cdn.prod.website-files.com/69077000329048b15fda5203/69077000329048b15fda5223_services.avif" 
                alt="Financial Advisors" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Right Services List */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group relative overflow-hidden"
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-[#1a1a1a] mb-4 group-hover:text-amber-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-3 text-gray-700">
                          <div className="w-5 h-5 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 text-amber-600" />
                          </div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Arrow Button */}
                  <div className="w-12 h-12 rounded-lg bg-[#ffe600] flex items-center justify-center flex-shrink-0 transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform cursor-pointer">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 13L13 1M13 1H4M13 1V10" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
