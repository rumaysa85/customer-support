const KPI = ({ label, value, gradient }) => (
  <div
    className={`kpi rounded-xl flex flex-col items-center justify-center text-center p-8 ${gradient}`}
  >
    <div className="text-white/90 text-sm">{label}</div>
    <div className="mt-2 text-5xl font-bold">{value}</div>
  </div>
);

export default function Banner({ inProgress, resolved }) {
  return (
    <section className="bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 py-6 grid md:grid-cols-2 gap-6">
        <KPI
          label="In-Progress"
          value={inProgress}
          gradient="bg-gradient-to-br from-violet-600 to-purple-500"
        />
        <KPI
          label="Resolved"
          value={resolved}
          gradient="bg-gradient-to-br from-emerald-500 to-teal-500"
        />
      </div>
    </section>
  );
}
