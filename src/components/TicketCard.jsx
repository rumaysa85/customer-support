const statusPill = (s) =>
  s === "Open"
    ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
    : "bg-amber-50 text-amber-700 border border-amber-200"

const priorityTag = (p) =>
  p === "HIGH"   ? "text-rose-600  bg-rose-50  border border-rose-200"   :
  p === "MEDIUM" ? "text-amber-700 bg-amber-50 border border-amber-200" :
                   "text-cyan-700  bg-cyan-50  border border-cyan-200"

export default function TicketCard({t, onAdd}){
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h4 className="font-semibold text-slate-800">{t.title}</h4>
          <p className="text-sm text-slate-600 mt-1 line-clamp-2">{t.description}</p>
        </div>
        <span className={`px-2 py-1 text-xs rounded-full ${statusPill(t.status)}`}>{t.status}</span>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2 text-[11px]">
        <span className="px-2 py-0.5 rounded-full border bg-slate-50 text-slate-700">#{t.id}</span>
        <span className={`px-2 py-0.5 rounded-full ${priorityTag(t.priority)}`}>{t.priority} PRIORITY</span>
        <span className="text-slate-400">•</span>
        <span className="text-slate-600">{t.agent}</span>
        <span className="text-slate-400">•</span>
        <span className="text-slate-600">{t.date}</span>
      </div>

      <div className="mt-3">
        <button onClick={() => onAdd(t.id)} className="text-xs text-sky-600 hover:text-sky-800">
          Add to Task Status
        </button>
      </div>
    </div>
  )
}
