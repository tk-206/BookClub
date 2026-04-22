import './css/SkeletonList.css'

interface SkeletonListProps {
  count?: number
}

export default function SkeletonList({ count = 3 }: SkeletonListProps) {
  return (
    <div className="skeleton-list">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="skeleton-row" style={{ opacity: 1 - i * 0.15 }}>
          <div className="sk-lines">
            <div className="sk-circle" />
            <div className="sk-line body" />
            {/* <div className="sk-line short" /> */}
            <div className="sk-line shorter" />
            <div className="sk-line shorter" />
          </div>
        </div>
      ))}
    </div>
  )
}