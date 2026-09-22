export function Pill({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-[13px] text-text-soft">
      <span className="h-1.5 w-1.5 rounded-full bg-olive" aria-hidden="true" />
      {children}
    </span>
  );
}
