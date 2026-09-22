import { GrowLine } from "./GrowLine";

export function SectionLabel({ children }: { children: string }) {
  return (
    <div className="inline-flex flex-col gap-2">
      <span className="text-[13px] font-medium uppercase tracking-[0.06em] text-sand">
        {children}
      </span>
      <GrowLine className="w-12" />
    </div>
  );
}
