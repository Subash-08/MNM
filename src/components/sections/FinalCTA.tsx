import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { MessageSquare, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function FinalCTA() {
  const [timeLeft, setTimeLeft] = useState({ days: 11, hours: 14, mins: 23, secs: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.secs > 0) return { ...prev, secs: prev.secs - 1 };
        if (prev.mins > 0) return { ...prev, mins: prev.mins - 1, secs: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, mins: 59, secs: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, mins: 59, secs: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Limited to 100 Contributors Only</h2>
            <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-12 border border-white/20">
              <span className="text-xl font-bold text-accent">87 Slots Filled</span>
              <div className="w-px h-6 bg-white/20" />
              <span className="text-xl font-bold text-white/80">13 Remaining</span>
            </div>

            <div className="grid grid-cols-4 gap-4 max-w-md mx-auto mb-12">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Mins", value: timeLeft.mins },
                { label: "Secs", value: timeLeft.secs },
              ].map((t, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="text-3xl md:text-4xl font-bold tabular-nums">{String(t.value).padStart(2, '0')}</div>
                  <div className="text-[10px] uppercase tracking-widest text-white/60 font-bold mt-1">{t.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-xl px-12 h-16 rounded-2xl shadow-2xl shadow-accent/40 group">
                  SECURE YOUR SPOT NOW
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              <Button size="lg" variant="ghost" className="text-white hover:bg-white/10 text-lg h-16 px-8 gap-2">
                <MessageSquare className="w-6 h-6" /> Schedule a Call
              </Button>
            </div>

            <p className="mt-12 text-white/60 text-sm max-w-2xl mx-auto italic">
              "This is not a deposit scheme under RBI regulations. Returns are based on business performance and are not guaranteed beyond contractual base rate. Please read Terms & Conditions before contributing."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
