import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Share2, Info } from "lucide-react";

export default function ReturnCalculator() {
  const [amount, setAmount] = useState(50000);
  const [returns, setReturns] = useState({
    base: 0,
    bonus: 0,
    total: 0,
    final: 0
  });

  useEffect(() => {
    const base = amount * 0.10; // 10% guaranteed
    const bonus = amount * 0.08; // 8% estimated bonus
    const total = base + bonus;
    const final = amount + total;
    setReturns({ base, bonus, total, final });
  }, [amount]);

  const formatCurrency = (val: number) => 
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Crystal Clear Math</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Transparency is our core value. Use our interactive calculator to see exactly how your contribution grows over the 45-day cycle.
            </p>
            
            <div className="space-y-10 p-8 bg-white rounded-3xl border border-border shadow-sm">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Your Contribution</label>
                  <span className="text-3xl font-bold text-primary">{formatCurrency(amount)}</span>
                </div>
                <Slider 
                  value={[amount]} 
                  onValueChange={(val) => setAmount(val[0])} 
                  min={5000} 
                  max={200000} 
                  step={5000}
                  className="py-4"
                />
                <div className="flex justify-between text-xs font-medium text-muted-foreground">
                  <span>Min: ₹5,000</span>
                  <span>Max: ₹2,00,000</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 rounded-2xl bg-secondary/50 border border-border/50">
                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Guaranteed Base (10%)</div>
                  <div className="text-xl font-bold text-foreground">{formatCurrency(returns.base)}</div>
                </div>
                <div className="p-4 rounded-2xl bg-secondary/50 border border-border/50">
                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Est. Profit Bonus (8%)</div>
                  <div className="text-xl font-bold text-foreground">{formatCurrency(returns.bonus)}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full max-w-md">
            <motion.div
              key={amount}
              initial={{ scale: 0.98, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card className="border-none shadow-2xl bg-primary text-white overflow-hidden">
                <CardHeader className="pb-2">
                  <CardTitle className="text-primary-foreground/80 text-sm font-medium uppercase tracking-widest">Total Estimated Return</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-5xl font-bold">{formatCurrency(returns.total)}</div>
                  <div className="h-px bg-white/20" />
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-white/70">After 45 days, you receive:</span>
                      <span className="text-2xl font-bold">{formatCurrency(returns.final)}</span>
                    </div>
                    <Button variant="secondary" className="w-full h-12 text-primary font-bold">
                      Secure This Opportunity
                    </Button>
                    <Button variant="ghost" className="w-full text-white/80 hover:text-white hover:bg-white/10 gap-2">
                      <Share2 className="w-4 h-4" /> Share Results
                    </Button>
                  </div>
                </CardContent>
                <div className="bg-black/10 p-4 flex items-start gap-3">
                  <Info className="w-4 h-4 mt-0.5 text-white/60 shrink-0" />
                  <p className="text-[10px] leading-relaxed text-white/60 italic">
                    Returns depend on business performance. Guaranteed base is contractually backed by existing service revenue. Profit share varies based on actual 45-day performance.
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
