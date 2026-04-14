import { Mail, Facebook, Instagram, Linkedin, Layers } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#f4f5f6] pt-20 pb-8 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Left Column - Brand & Newsletter */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-[#1a1a1a] text-white p-2 rounded-xl">
                <Layers className="w-6 h-6" />
              </div>
              <span className="text-2xl font-semibold text-[#1a1a1a]">Finora</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-[#1a1a1a] leading-[1.1] mb-10 tracking-tight">
              Your Trusted Appliance<br />Care Partner.
            </h2>
            
            <div className="flex items-center bg-white rounded-full p-1.5 border border-gray-200 max-w-md mb-4 shadow-sm focus-within:ring-2 focus-within:ring-gray-200 transition-all">
              <div className="pl-4 pr-2 text-gray-400">
                <Mail className="w-5 h-5" />
              </div>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 bg-transparent border-none focus:ring-0 px-2 text-sm outline-none text-gray-700" 
              />
              <button className="bg-[#1a1a1a] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
                Subscribe
              </button>
            </div>
            
            <p className="text-xs text-gray-500 max-w-sm leading-relaxed">
              By subscribing you agree to our Privacy Policy and provide consent to receive updates from our company.
            </p>
          </div>

          {/* Right Columns - Links & Socials */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 lg:pl-12">
            
            {/* Menu */}
            <div>
              <h3 className="text-base font-semibold text-[#1a1a1a] mb-6">Menu</h3>
              <ul className="space-y-4">
                {["Home", "About Us", "Services", "Spare Parts", "Pricing", "Contact"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-gray-500 hover:text-[#1a1a1a] transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Info */}
            <div>
              <h3 className="text-base font-semibold text-[#1a1a1a] mb-6">Info</h3>
              <ul className="space-y-4">
                {["Warranty Policy", "Service Terms", "Privacy Policy", "Refund Policy", "FAQ"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-gray-500 hover:text-[#1a1a1a] transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow us */}
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-base font-semibold text-[#1a1a1a] mb-6">Follow us</h3>
              <div className="space-y-4">
                <a href="#" className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center group-hover:bg-gray-300 transition-colors">
                    <Facebook className="w-4 h-4 text-[#1a1a1a]" />
                  </div>
                  <span className="text-sm text-gray-600 group-hover:text-[#1a1a1a] transition-colors">Facebook</span>
                </a>
                <a href="#" className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center group-hover:bg-gray-300 transition-colors">
                    <Instagram className="w-4 h-4 text-[#1a1a1a]" />
                  </div>
                  <span className="text-sm text-gray-600 group-hover:text-[#1a1a1a] transition-colors">Instagram</span>
                </a>
                <a href="#" className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center group-hover:bg-gray-300 transition-colors">
                    <Linkedin className="w-4 h-4 text-[#1a1a1a]" />
                  </div>
                  <span className="text-sm text-gray-600 group-hover:text-[#1a1a1a] transition-colors">LinkedIn</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">
            © 2026 Finora Appliance Services. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-gray-600 hover:text-[#1a1a1a] underline underline-offset-4 transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-600 hover:text-[#1a1a1a] underline underline-offset-4 transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-gray-600 hover:text-[#1a1a1a] underline underline-offset-4 transition-colors">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
