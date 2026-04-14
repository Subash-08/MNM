import { motion } from "motion/react";
import { Calendar, ArrowRight } from "lucide-react";

const blogs = [
  {
    category: "Risk Management",
    date: "October 29, 2025",
    title: "A Fund Manager's Guide to Smart Contract Security Audits",
    image: "https://cdn.prod.website-files.com/69077000329048b15fda51fe/69077000329048b15fda52f8_Rectangle%2024.avif",
    link: "#"
  },
  {
    category: "Valuation",
    date: "October 29, 2025",
    title: "Dissecting Smart Contract Protocols for Sustainable Returns",
    image: "https://cdn.prod.website-files.com/69077000329048b15fda51fe/69077000329048b15fda5334_Rectangle%2022.avif",
    link: "#"
  },
  {
    category: "Regulatory",
    date: "October 29, 2025",
    title: "Navigating the SEC's View on Smart Contracts and Securities Law",
    image: "https://cdn.prod.website-files.com/69077000329048b15fda51fe/69077000329048b15fda5333_Rectangle%2026.avif",
    link: "#"
  }
];

export default function BlogNews() {
  return (
    <section id="news" className="py-24 bg-white">
      <div className=" mx-auto px-4 md:px-8 max-w-[1400px]">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -150 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 12,
                mass: 1.2,
                bounce: 0.6
              }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="flex items-center">
                <div className="w-6 h-[2px] bg-gray-300"></div>
                <div className="w-2 h-2 rounded-full bg-gray-800 -ml-1"></div>
              </div>
              <span className="text-sm font-medium text-gray-600 tracking-wide">News & Articles</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-[#1a1a1a] leading-tight"
            >
              Get Our Market Insights.<br />News And Financial Advice
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-md lg:pt-12"
          >
            <p className="text-gray-600 leading-relaxed">
              Stay informed and ahead. Our dedicated section delivers clear, timely market insights to help you understand what's happening, along with practical financial advice
            </p>
          </motion.div>
        </div>

        {/* Blog Grid with Vertical Lines */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-x border-gray-300 divide-y md:divide-y-0 md:divide-x divide-gray-300">
          {blogs.map((blog, index) => (
            <motion.a
              href={blog.link}
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
              className="group block bg-white p-6 md:p-8 hover:bg-gray-50 transition-colors duration-300 flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative w-full aspect-[4/3] overflow-hidden mb-8 bg-gray-100">
                <motion.img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow">
                <div className="flex items-center gap-4 mb-5">
                  <span className="px-3 py-1 bg-[#fff9d6] text-[#1a1a1a] text-xs font-medium">
                    {blog.category}
                  </span>
                  <div className="flex items-center gap-2 text-gray-500 text-xs">
                    <Calendar className="w-3 h-3" />
                    <span>{blog.date}</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-[#1a1a1a] mb-8 group-hover:text-amber-600 transition-colors leading-snug">
                  {blog.title}
                </h3>

                <div className="flex items-center gap-2 text-sm font-semibold text-[#1a1a1a] mt-auto">
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  See More
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
