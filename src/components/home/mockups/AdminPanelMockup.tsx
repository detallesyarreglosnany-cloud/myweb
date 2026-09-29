const NAV_ITEMS = ["Dashboard", "Orders", "Inventory", "Team", "Settings"];
const STATS: [string, string][] = [
  ["Revenue", "$128.4K"],
  ["Orders", "1,204"],
  ["Low stock", "6"],
];
const BARS = [40, 65, 50, 80, 60, 90, 70];

export function AdminPanelMockup() {
  return (
    <div className="overflow-hidden rounded-[10px] border border-black/10 bg-[#F4F6FA] text-[#0F172A] shadow-inner">
      <div className="flex items-center gap-1.5 border-b border-black/5 bg-white px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-[#FF5F57]" />
        <span className="h-2 w-2 rounded-full bg-[#FEBC2E]" />
        <span className="h-2 w-2 rounded-full bg-[#28C840]" />
        <span className="ml-2 truncate text-[9px] tracking-wide text-[#94A3B8]">
          app.northpeak.io/dashboard
        </span>
      </div>
      <div className="flex">
        <div className="flex w-[76px] shrink-0 flex-col gap-2.5 bg-[#0B1B3A] px-2.5 py-3">
          <span className="text-[9px] font-semibold tracking-[0.08em] text-white">
            NORTHPEAK
          </span>
          <div className="mt-1 flex flex-col gap-1.5">
            {NAV_ITEMS.map((item, i) => (
              <span
                key={item}
                className={`rounded px-1.5 py-1 text-[8px] ${
                  i === 0 ? "bg-[#2C5BFF] text-white" : "text-[#8CA0D6]"
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="flex-1 px-3 py-3">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[10px] font-semibold">Overview</span>
            <span className="rounded-full bg-[#2C5BFF] px-2 py-0.5 text-[8px] text-white">
              This week
            </span>
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            {STATS.map(([label, val]) => (
              <div
                key={label}
                className="rounded-md border border-black/5 bg-white px-2 py-1.5"
              >
                <div className="text-[7px] text-[#94A3B8]">{label}</div>
                <div className="text-[10px] font-semibold">{val}</div>
              </div>
            ))}
          </div>
          <div className="mt-2 flex h-12 items-end gap-1 rounded-md border border-black/5 bg-white px-2 py-1.5">
            {BARS.map((h, i) => (
              <span
                key={i}
                className="w-full rounded-sm bg-[#2C5BFF]/70"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
