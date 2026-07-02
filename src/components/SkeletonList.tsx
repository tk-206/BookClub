interface SkeletonListProps {
  count?: number
}

export default function SkeletonList({ count = 3 }: SkeletonListProps) {
  return (
    <div className="flex flex-col gap-[50px]">
      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%) }
        }
        .sk-shimmer::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent);
          transform: translateX(-100%);
          animation: shimmer 1.4s infinite;
        }
      `}</style>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex gap-3 items-center p-3 rounded-xl bg-transparent min-h-[150px]" style={{ opacity: 1 - i * 0.15 }}>
          <div className="flex flex-col flex-1 gap-2">
            <div className="sk-shimmer w-10 h-10 rounded-full bg-[#e5e1d8] shrink-0 relative overflow-hidden" />
            <div className="sk-shimmer h-[100px] rounded-md bg-[#e5e1d8] relative overflow-hidden" />
            <div className="sk-shimmer h-5 rounded-md bg-[#e5e1d8] relative overflow-hidden w-[40%]" />
            <div className="sk-shimmer h-5 rounded-md bg-[#e5e1d8] relative overflow-hidden w-[40%]" />
          </div>
        </div>
      ))}
    </div>
  )
}