import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UPDATES } from "@/src/constants";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Users, IndianRupee, Package, FileText, MapPin } from "lucide-react";

const liveMetrics = [
  { label: "Jobs Completed", value: "28", sub: "Yesterday: 24", icon: Briefcase, color: "text-blue-600" },
  { label: "Active Technicians", value: "3", sub: "2 Joining Next Week", icon: Users, color: "text-purple-600" },
  { label: "Revenue This Week", value: "₹1,24,500", sub: "+15% vs Last Week", icon: IndianRupee, color: "text-green-600" },
  { label: "Inventory Value", value: "₹2,15,000", sub: "50+ AC Spares Added", icon: Package, color: "text-amber-600" },
];

export default function TransparencyDashboard() {
  return (
    <section id="dashboard" className="py-24 bg-foreground text-white overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Transparency Dashboard</h2>
            <p className="text-lg text-white/60">
              Real-time metrics from our Coimbatore operations. We believe in complete transparency to build lasting trust with our community.
            </p>
          </div>
          <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 gap-2">
            <FileText className="w-4 h-4" /> View Full Report
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {liveMetrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="bg-white/5 border-white/10 text-white">
                <CardContent className="p-6">
                  <div className={`w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-4 ${m.color}`}>
                    <m.icon className="w-5 h-5" />
                  </div>
                  <div className="text-3xl font-bold mb-1">{m.value}</div>
                  <div className="text-sm font-medium text-white/80 mb-2">{m.label}</div>
                  <div className="text-xs text-white/40">{m.sub}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Recent Updates
            </h3>
            <div className="space-y-8 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-px before:bg-white/10">
              {UPDATES.map((update, i) => (
                <motion.div
                  key={update.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-12"
                >
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-foreground border-4 border-white/10 flex items-center justify-center z-10">
                    <MapPin className="w-3 h-3 text-accent" />
                  </div>
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-bold text-accent uppercase tracking-widest">Day {update.day}</span>
                      <span className="text-xs text-white/40">{update.date}</span>
                    </div>
                    <h4 className="text-lg font-bold mb-2">{update.title}</h4>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {update.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 rounded-3xl p-8 border border-white/10">
            <h3 className="text-xl font-bold mb-6">Operational Status</h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/60">Coimbatore Hub</span>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Active</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/60">Technician Utilization</span>
                <span className="text-sm font-bold">94%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/60">Customer Satisfaction</span>
                <span className="text-sm font-bold">4.8/5</span>
              </div>
              <div className="h-px bg-white/10" />
              <p className="text-xs text-white/40 leading-relaxed italic">
                *Data refreshed every 24 hours from our internal ERP system.
              </p>
              <Button className="w-full bg-accent hover:bg-accent/90 text-white font-bold">
                Join The Expansion
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
