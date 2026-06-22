import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/fmc-logo.png.asset.json";
import { NAV_LINKS, SERVICES, SITE } from "@/lib/data";

const socials = [
  { icon: Facebook, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Youtube, href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-[#0A1628] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-accent blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-electric blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="bg-white rounded-xl p-3 inline-block">
              <img src={logo.url} alt="Find My Career" className="h-12 w-auto" />
            </div>
            <p className="mt-4 text-sm text-slate-300 leading-relaxed">
              Sri Lanka's most trusted education consultancy — 17+ years guiding students from
              dream to degree across the UK, Australia, Canada, Europe and beyond.
            </p>
            <div className="mt-5 flex gap-2">
              {socials.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-10 h-10 grid place-items-center rounded-full bg-white/10 hover:bg-accent hover:text-[#0A1628] transition-colors"
                >
                  <s.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-accent">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-accent transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-accent">Services</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              {SERVICES.map((s) => (
                <li key={s.title}>
                  <Link to="/services" className="hover:text-accent transition-colors">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-accent">Contact</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex gap-3"><MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />{SITE.address}</li>
              <li className="flex gap-3"><Phone className="w-4 h-4 text-accent shrink-0 mt-0.5" />{SITE.phone}</li>
              <li className="flex gap-3"><Mail className="w-4 h-4 text-accent shrink-0 mt-0.5" />{SITE.email}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-3 justify-between items-center text-sm text-slate-400">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>Made with <span className="text-red-400">❤️</span> for Sri Lankan students</p>
        </div>
      </div>
    </footer>
  );
}
