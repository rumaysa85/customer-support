import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Home", "FAQ", "Changelog", "Blog", "Download", "Contact"];

  return (
    <header
      className={[
        "sticky top-0 z-50 bg-white/90 backdrop-blur",
        scrolled ? "shadow-sm border-b border-slate-200" : "border-b border-transparent",
      ].join(" ")}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-2 font-semibold text-slate-900 text-[15px]">
          <span className="w-2.5 h-2.5 rounded-sm bg-gradient-to-br from-violet-600 to-cyan-400" />
          CS — Ticket System
        </div>

        {/* Center: Menu */}
        <ul className="flex items-center gap-8 text-[15px] font-medium text-slate-800">
          {links.map((link) => (
            <li key={link}>
              <a href="#" className="hover:text-violet-600 transition-colors">
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: CTA */}
        <button className="ml-4 px-4 py-2 rounded-md text-white font-semibold text-sm bg-gradient-to-r from-violet-600 to-purple-500 hover:from-violet-700 hover:to-purple-600 transition-colors flex items-center gap-1">
          <span className="text-lg leading-none">+</span>
          <span>New Ticket</span>
        </button>
      </nav>
    </header>
  );
}
