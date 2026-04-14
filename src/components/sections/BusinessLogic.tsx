import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Briefcase, Package, Zap, ArrowDown } from "lucide-react";

const metrics = [
  {
    label: "Technicians",
    without: "2",
    with: "5",
    icon: Users,
  },
  {
    label: "Jobs Per Day",
    without: "8-12",
    with: "25-35",
    icon: Briefcase,
  },
  {
    label: "Spare Parts",
    without: "Limited",
    with: "Stocked",
    icon: Package,
  },
  {
    label: "Service Speed",
    without: "Next-day",
    with: "Same-day",
    icon: Zap,
  },
];

export default function BusinessLogic() {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why This Works</h2>
          <p className="text-lg text-muted-foreground">
            This isn't a scheme—it's a real business expansion. See how community funding directly impacts our operational capacity and revenue.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <Card className="border-none bg-secondary/30">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-muted-foreground uppercase tracking-widest">Without Your Support</h3>
                <div className="text-3xl font-bold mt-2">₹2.8L <span className="text-sm font-normal text-muted-foreground">Monthly Revenue</span></div>
              </div>
              <div className="space-y-6">
                {metrics.map((m, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-white/50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <m.icon className="w-5 h-5 text-muted-foreground" />
                      <span className="font-medium text-muted-foreground">{m.label}</span>
                    </div>
                    <span className="font-bold text-muted-foreground">{m.without}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary bg-primary/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-xs font-bold uppercase tracking-widest rounded-bl-xl">
              Projected Growth
            </div>
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-primary uppercase tracking-widest">With Community Funding</h3>
                <div className="text-3xl font-bold mt-2 text-primary">₹7-9L <span className="text-sm font-normal text-primary/60">Monthly Revenue</span></div>
              </div>
              <div className="space-y-6">
                {metrics.map((m, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-primary/10"
                  >
                    <div className="flex items-center gap-3">
                      <m.icon className="w-5 h-5 text-primary" />
                      <span className="font-medium">{m.label}</span>
                    </div>
                    <span className="font-bold text-primary">{m.with}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex flex-col items-center">
            <ArrowDown className="w-8 h-8 text-accent animate-bounce mb-2" />
            <div className="p-6 bg-accent text-white rounded-2xl shadow-xl shadow-accent/20">
              <h4 className="text-xl font-bold">Higher Capacity = Higher Profits = Your Returns</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
