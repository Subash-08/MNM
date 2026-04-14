import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Wallet, Rocket, Landmark, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Wallet,
    title: "CONTRIBUTE",
    description: "Minimum ₹5,000 | Secure payment gateway. Choose your contribution tier based on your goals.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Rocket,
    title: "WE EXPAND",
    description: "Your funds hire technicians, stock parts, and serve more customers faster across the region.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: Landmark,
    title: "YOU EARN",
    description: "45-day cycle: 8-12% guaranteed base return + profit share bonus (5-15%) based on revenue.",
    color: "bg-green-50 text-green-600",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground">
            A simple 3-step process designed for transparency and community growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Arrows (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-1/3 -translate-y-1/2 -translate-x-1/2 z-10">
            <ArrowRight className="w-8 h-8 text-muted-foreground/30" />
          </div>
          <div className="hidden md:block absolute top-1/2 left-2/3 -translate-y-1/2 -translate-x-1/2 z-10">
            <ArrowRight className="w-8 h-8 text-muted-foreground/30" />
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full border-none shadow-xl shadow-gray-100/50 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-300">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <step.icon className="w-8 h-8" />
                  </div>
                  <div className="text-xs font-bold tracking-widest text-muted-foreground mb-2 uppercase">Step {index + 1}</div>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
