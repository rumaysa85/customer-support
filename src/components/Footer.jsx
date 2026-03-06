export default function Footer(){
  return (
    <footer className="bg-slate-900 text-slate-300 mt-10">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 font-semibold text-white">
            <span className="w-2.5 h-2.5 rounded-sm bg-gradient-to-br from-violet-600 to-cyan-400" />
            CS — Ticket System
          </div>
          <p className="text-sm mt-3 text-slate-400">
            Lean ticketing for modern support teams. Track, prioritize, and resolve faster.
          </p>
        </div>

        {[
          {h:"Company", items:["About Us","Our Mission","Contact/Support"]},
          {h:"Services", items:["Products & Services","Customer Stories","Download Apps"]},
          {h:"Information", items:["Privacy Policy","Terms & Conditions","Join Us"]},
        ].map(col => (
          <div key={col.h}>
            <h4 className="font-semibold text-white mb-3">{col.h}</h4>
            <ul className="space-y-2 text-sm">
              {col.items.map(i => <li key={i}><a href="#" className="hover:text-white">{i}</a></li>)}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-4 text-xs text-slate-500">
          © 2025 CS — Ticket System. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
