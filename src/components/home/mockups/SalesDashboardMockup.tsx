const STATS: [string, string][] = [
  ["Ventas del mes", "$96.200"],
  ["Meta mensual", "82%"],
  ["Ticket promedio", "$184"],
  ["Vendedor top", "M. Torres"],
];

export function SalesDashboardMockup() {
  return (
    <div className="overflow-hidden rounded-[10px] border border-white/10 bg-[#111417] text-[#E7E9EC] shadow-inner">
      <div className="flex items-center justify-between border-b border-white/10 px-3 py-2">
        <span className="text-[9px] font-semibold tracking-[0.08em] text-[#F5B94A]">
          PANEL GERENCIAL · VENTAS
        </span>
        <span className="text-[8px] text-[#8A9099]">Este mes</span>
      </div>
      <div className="px-3 py-3">
        <div className="grid grid-cols-2 gap-1.5">
          {STATS.map(([label, val]) => (
            <div
              key={label}
              className="rounded-md border border-white/10 bg-white/5 px-2 py-1.5"
            >
              <div className="text-[7px] text-[#8A9099]">{label}</div>
              <div className="text-[10px] font-semibold text-[#F5B94A]">
                {val}
              </div>
            </div>
          ))}
        </div>
        <div className="relative mt-2 h-12 rounded-md border border-white/10 bg-white/5 px-2 py-1.5">
          <svg
            viewBox="0 0 100 30"
            preserveAspectRatio="none"
            className="h-full w-full"
            aria-hidden="true"
          >
            <polyline
              fill="none"
              stroke="#3FB68A"
              strokeWidth="2"
              points="0,25 15,20 30,22 45,12 60,15 75,6 100,9"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
