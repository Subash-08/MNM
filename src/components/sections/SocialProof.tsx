import { motion } from "motion/react";
import { Star, Shield, Award, Landmark, Quote } from "lucide-react";

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

const contributors = Array.from({ length: 5 }).map((_, i) => ({
  id: i,
  name: ["Divya", "Raj", "Karthik", "Meera", "Arun"][i % 5],
  image: `https://i.pravatar.cc/150?u=${i}`
}));

export default function SocialProof() {
  return (
    <section id="testimonials" className="py-24 bg-[#f8f9fa] overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
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
            <span className="text-sm font-medium text-gray-600 tracking-wide uppercase">Testimonials</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-[#1a1a1a] leading-tight max-w-2xl"
          >
            Trusted by Investors Worldwide
          </motion.h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 relative group flex flex-col"
            >
              <div className="absolute top-8 right-8 text-gray-100 group-hover:text-[#ffe600]/20 transition-colors duration-300">
                <Quote className="w-12 h-12 rotate-180" />
              </div>
              
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-5 h-5 fill-[#ffe600] text-[#ffe600]" />
                ))}
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-8 relative z-10 flex-grow">
                "{t.quote}"
              </p>
              
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100 relative z-10">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
                <div>
                  <div className="font-bold text-[#1a1a1a]">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges & Community */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-[2rem] p-8 md:p-12 border border-gray-100 shadow-sm"
        >
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6">Join Priya, Suresh, Divya and 150+ others</h3>
              <div className="flex flex-wrap justify-center lg:justify-start -space-x-4 mb-6">
                {contributors.map((c) => (
                  <img 
                    key={c.id} 
                    src={c.image} 
                    alt={c.name} 
                    className="w-12 h-12 rounded-full border-4 border-white shadow-sm"
                    referrerPolicy="no-referrer"
                  />
                ))}
                <div className="w-12 h-12 rounded-full border-4 border-white bg-[#f8f9fa] flex items-center justify-center text-sm font-bold text-[#1a1a1a] shadow-sm">
                  +130
                </div>
              </div>
              <p className="text-gray-600">Our community is growing every day. Be part of the next 45-day growth cycle.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full lg:w-auto">
              <div className="p-6 bg-[#f8f9fa] rounded-2xl flex flex-col items-center text-center border border-gray-100 hover:border-[#ffe600] transition-colors">
                <Shield className="w-8 h-8 text-[#1a1a1a] mb-3" />
                <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Registered</div>
                <div className="text-sm font-bold text-[#1a1a1a]">GSTIN Verified</div>
              </div>
              <div className="p-6 bg-[#f8f9fa] rounded-2xl flex flex-col items-center text-center border border-gray-100 hover:border-[#ffe600] transition-colors">
                <Award className="w-8 h-8 text-[#1a1a1a] mb-3" />
                <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Legal</div>
                <div className="text-sm font-bold text-[#1a1a1a]">MCA Registered</div>
              </div>
              <div className="p-6 bg-[#f8f9fa] rounded-2xl flex flex-col items-center text-center border border-gray-100 hover:border-[#ffe600] transition-colors">
                <Landmark className="w-8 h-8 text-[#1a1a1a] mb-3" />
                <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Security</div>
                <div className="text-sm font-bold text-[#1a1a1a]">Escrow Protected</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
