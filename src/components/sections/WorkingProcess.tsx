import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Lightbulb, BarChart2, ShieldAlert, Users } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Idea Generation",
    description: "The initial stage of research and discovery where the team identifies potential investment themes, market opportunities",
    icon: Lightbulb,
    image: "https://cdn.prod.website-files.com/69077000329048b15fda5203/69077000329048b15fda5288_idea.avif"
  },
  {
    id: "02",
    title: "Investment Execution",
    description: "This stage is where the firm's generated ideas transition from concepts into tangible investments.",
    icon: BarChart2,
    image: "https://cdn.prod.website-files.com/69077000329048b15fda5203/69077000329048b15fda5286_tab%20img1.avif"
  },
  {
    id: "03",
    title: "Risk Allocation",
    description: "The management and control step focused on diversifying the portfolio and optimizing risk exposure.",
    icon: ShieldAlert,
    image: "https://cdn.prod.website-files.com/69077000329048b15fda5203/69077000329048b15fda5287_tab%204.avif"
  },
  {
    id: "04",
    title: "Client Stewardship",
    description: "This includes regular performance reporting, proactive communication,",
    icon: Users,
    image: "https://cdn.prod.website-files.com/69077000329048b15fda5203/69077000329048b15fda5289_client.avif"
  }
];

export default function WorkingProcess() {
  const [activeTab, setActiveTab] = useState(0);
  const [progress, setProgress] = useState(0);

  // Auto-rotate tabs every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % steps.length);
      setProgress(0); // Reset progress on change
    }, 5000);

    // Smooth progress bar update
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + (100 / (5000 / 50)); // Update every 50ms
      });
    }, 50);

    return () => {
      clearInterval(timer);
      clearInterval(progressTimer);
    };
  }, [activeTab]);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    setProgress(0);
  };

  return (
    <section id="process" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
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
            <span className="text-sm font-medium text-gray-600 tracking-wide uppercase">Working Process</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-[#1a1a1a] leading-tight max-w-2xl"
          >
            Our Step-By-Step Investment Plan
          </motion.h2>
        </div>

        {/* Tabs and Content Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto bg-[#fafafa] rounded-3xl p-4 md:p-8 border border-gray-100 shadow-sm"
        >
          {/* Tabs Navigation */}
          <div className="flex flex-wrap md:flex-nowrap gap-2 md:gap-4 mb-8">
            {steps.map((step, index) => {
              const isActive = activeTab === index;
              const Icon = step.icon;

              return (
                <button
                  key={step.id}
                  onClick={() => handleTabClick(index)}
                  className={`relative flex-1 min-w-[200px] flex items-center gap-3 p-4 rounded-xl overflow-hidden transition-all duration-300 ${isActive ? "bg-white shadow-sm" : "bg-transparent hover:bg-gray-50"
                    }`}
                >
                  {/* Progress Background */}
                  {isActive && (
                    <motion.div
                      className="absolute left-0 top-0 bottom-0 bg-[#fff9d6] z-0"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 5, ease: "linear" }}
                    />
                  )}

                  {/* Tab Content */}
                  <div className="relative z-10 flex items-center gap-3 w-full">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${isActive ? "bg-[#ffe600]" : "bg-gray-100"
                      }`}>
                      <Icon className="w-5 h-5 text-black" />
                    </div>
                    <span className={`font-medium text-sm md:text-base text-left ${isActive ? "text-black" : "text-gray-500"
                      }`}>
                      {step.title}
                    </span>
                  </div>

                  {/* Active Border Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabBorder"
                      className="absolute inset-0 border-2 border-[#ffe600] rounded-xl pointer-events-none z-20"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Tab Content Area */}
          <div className="relative bg-white rounded-2xl border border-[#ffe600]/30 overflow-hidden min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex flex-col lg:flex-row h-full"
              >
                {/* Text Content */}
                <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
                  <div className="mb-12">
                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-[#fff9d6] relative">
                      <span className="text-5xl font-light text-[#1a1a1a] tracking-tighter">{steps[activeTab].id}</span>
                      {/* Decorative border */}
                      <div className="absolute inset-0 border border-[#ffe600]/50 rounded-3xl transform translate-x-2 translate-y-2 -z-10"></div>
                    </div>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-semibold text-[#1a1a1a] mb-6">
                    {steps[activeTab].title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                    {steps[activeTab].description}
                  </p>
                </div>

                {/* Image Content */}
                <div className="flex-1 p-4 md:p-8">
                  <div className="w-full h-full min-h-[300px] rounded-2xl overflow-hidden relative group">
                    <motion.img
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.8 }}
                      src={steps[activeTab].image}
                      alt={steps[activeTab].title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
