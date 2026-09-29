import { GrowLine } from "./GrowLine";

export function SectionLabel({
  children,
  center = false,
}: {
  children: string;
  center?: boolean;
}) {
  return (
    <div
      className={`inline-flex flex-col gap-2 ${center ? "items-center" : "items-start"}`}
    >
      <span className="text-[13px] font-medium uppercase tracking-[0.06em] text-sand">
        {children}
      </span>
      <GrowLine className="w-12" origin={center ? "center" : "left"} />
    </div>
  );
}
