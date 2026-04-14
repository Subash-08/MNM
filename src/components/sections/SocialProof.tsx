import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Shield, Award, Landmark } from "lucide-react";

const testimonials = [
  {
    name: "Anand",
    location: "Coimbatore",
    amount: "₹50,000",
    return: "₹56,500",
    days: "42",
    quote: "I was skeptical at first, but the transparency dashboard kept me informed every day. Got my returns exactly on time.",
    image: "https://picsum.photos/seed/user1/400/300"
  },
  {
    name: "Priya",
    location: "Pollachi",
    amount: "₹25,000",
    return: "₹28,250",
    days: "45",
    quote: "Love supporting a local business that's actually solving a problem. The service expansion is visible in our area.",
    image: "https://picsum.photos/seed/user2/400/300"
  },
  {
    name: "Suresh",
    location: "Coimbatore",
    amount: "₹1,00,000",
    return: "₹1,14,000",
    days: "45",
    quote: "The business logic is sound. Scaling a service business with community funds is a win-win for everyone involved.",
    image: "https://picsum.photos/seed/user3/400/300"
  }
];

const contributors = Array.from({ length: 20 }).map((_, i) => ({
  id: i,
  name: ["Divya", "Raj", "Karthik", "Meera", "Arun"][i % 5],
  image: `https://i.pravatar.cc/150?u=${i}`
}));

export default function SocialProof() {
  return (
    <section id="testimonials" className="py-24 bg-secondary/30">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trust Multiplier</h2>
          <p className="text-lg text-muted-foreground">
            Join a growing community of 150+ local contributors who believe in our mission.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="overflow-hidden border-none shadow-xl bg-white h-full flex flex-col">
                <div className="relative aspect-video group cursor-pointer">
                  <img src={t.image} alt={t.name} className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Play className="w-6 h-6 text-white fill-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <div className="bg-accent text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest">Video Testimonial</div>
                  </div>
                </div>
                <CardContent className="p-6 flex-1 flex flex-col">
                  <p className="text-sm italic text-muted-foreground mb-6 flex-1">"{t.quote}"</p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <div className="font-bold">{t.name}, {t.location}</div>
                      <div className="text-xs text-muted-foreground">Contributed {t.amount}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-accent font-bold">{t.return}</div>
                      <div className="text-[10px] text-muted-foreground uppercase">Returned in {t.days} Days</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 border border-border shadow-sm">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-4">Join Priya, Suresh, Divya and 150+ others</h3>
              <div className="flex flex-wrap justify-center md:justify-start -space-x-3 mb-6">
                {contributors.map((c) => (
                  <img 
                    key={c.id} 
                    src={c.image} 
                    alt={c.name} 
                    className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                    referrerPolicy="no-referrer"
                  />
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-white bg-secondary flex items-center justify-center text-[10px] font-bold text-primary shadow-sm">
                  +130
                </div>
              </div>
              <p className="text-muted-foreground">Our community is growing every day. Be part of the next 45-day growth cycle.</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
              <div className="p-4 bg-secondary/50 rounded-2xl flex flex-col items-center text-center">
                <Shield className="w-6 h-6 text-primary mb-2" />
                <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Registered</div>
                <div className="text-xs font-bold">GSTIN: 33AAAAA0000A1Z5</div>
              </div>
              <div className="p-4 bg-secondary/50 rounded-2xl flex flex-col items-center text-center">
                <Award className="w-6 h-6 text-primary mb-2" />
                <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Legal</div>
                <div className="text-xs font-bold">MCA Registered LLP</div>
              </div>
              <div className="p-4 bg-secondary/50 rounded-2xl flex flex-col items-center text-center col-span-2">
                <Landmark className="w-6 h-6 text-primary mb-2" />
                <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Security</div>
                <div className="text-xs font-bold">Escrow Account (Funds Protected)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
