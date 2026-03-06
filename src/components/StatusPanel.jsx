export default function StatusPanel({items, onComplete, resolved}) {
  return (
    <div className="space-y-6">
      <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
        <h3 className="font-semibold text-slate-800 mb-2">Task Status</h3>
        <p className="text-xs text-slate-500 mb-3">Select a ticket to add to Task Status.</p>
        {items.length === 0 ? (
          <div className="text-sm text-slate-500">No tasks selected.</div>
        ) : (
          <div className="space-y-2">
            {items.map(t => (
              <div key={t.id} className="flex items-center justify-between bg-slate-50 border border-dashed border-slate-300 rounded-md p-2">
                <div className="text-sm text-slate-700 truncate">{t.title}</div>
                <button onClick={() => onComplete(t.id)}
                        className="px-3 py-1 rounded-md border border-slate-300 text-slate-700 text-sm hover:bg-slate-100">
                  Complete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
        <h3 className="font-semibold text-slate-800 mb-2">Resolved Task</h3>
        {resolved.length === 0 ? (
          <p className="text-sm text-slate-500">No resolved tasks yet.</p>
        ) : (
          <ul className="space-y-2 text-sm text-slate-700">
            {resolved.map(t => <li key={t.id} className="truncate">• {t.title}</li>)}
          </ul>
        )}
      </div>
    </div>
  )
}
