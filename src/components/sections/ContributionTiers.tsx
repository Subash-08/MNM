import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { TIERS } from "@/src/constants";

export default function ContributionTiers() {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contribution Tiers</h2>
          <p className="text-lg text-muted-foreground">
            Choose a tier that fits your financial goals. Every contribution helps us serve more families.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TIERS.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex"
            >
              <Card className={`flex flex-col w-full border-2 transition-all duration-300 ${tier.popular ? 'border-primary shadow-2xl scale-105 z-10' : 'border-border hover:border-primary/50'}`}>
                {tier.popular && (
                  <div className="bg-primary text-white text-center py-1.5 text-xs font-bold uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center pt-8">
                  <CardTitle className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-2">{tier.name}</CardTitle>
                  <div className="text-3xl font-bold mb-1">
                    ₹{tier.minAmount.toLocaleString()}{tier.maxAmount ? ` - ₹${tier.maxAmount.toLocaleString()}` : '+'}
                  </div>
                  <div className="text-accent font-bold text-lg">{tier.baseReturn}% Base Return</div>
                </CardHeader>
                <CardContent className="flex-1 pt-6">
                  <ul className="space-y-4">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pb-8 pt-4">
                  <Button className={`w-full h-12 font-bold ${tier.popular ? 'bg-primary hover:bg-primary/90' : 'bg-secondary text-primary hover:bg-secondary/80'}`}>
                    Select {tier.name} Tier
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
