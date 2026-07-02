
interface Props {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: Props) {
    if (totalPages <= 1) return null;

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

    const getVisible = () => {
        if (totalPages <= 7) return pages;

        if (currentPage <= 4) {
            return [...pages.slice(0, 5), -1 , totalPages];
        }
        if (currentPage >= totalPages - 3) {
            return [1, -1, ...pages.slice(totalPages - 5)];
        }
        return [1, -1, currentPage - 1, currentPage, currentPage + 1, -2, totalPages];
    }

    return (
        <div className="flex items-center justify-center gap-1.5 mt-10">
            <button
                className="min-w-9 h-9 px-2 rounded bg-transparent text-gold-light-2 text-sm font-medium border border-transparent transition-all duration-200 hover:not-disable:bg-gold-light hover:not-disable:text-navy hover:not-disable:border-gold-light disabled:opacity-30 disabled:cursor-not-allowed"
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
            >
                ←
            </button>

            {getVisible().map((p, idx) => {
                if (p < 0) return <span key={`ellipsis-${idx}`} className="text-gold-light_2 px-1">...</span>
                return (
                    <button
                        key={p}
                        className={`min-w-9 h-9 px-2 rounded text-sm font-medium transition-all duration-200 border ${p === currentPage
                                ? 'bg-transparent text-navy border-transparent font-bold !important'
                                : 'bg-transparent text-gold-light_2 border-transparent hover:bg-gold-light hover:text-navy hover:border-gold-light'
                            }`}
                        onClick={() => onPageChange(p)}
                    >
                        {p}
                    </button>
                )
            })}

            <button 
                className="min-w-9 h-9 px-2 rounded bg-transparent text-gold-light_2 text-sm font-medium border border-transparent transition-all duration-200 hover:not-disabled:bg-gold-light hover:not-disabled:text-navy hover:not-disabled:border-gold-light disabled:opacity-30 disabled:cursor-not-allowed"
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
            >
                →
            </button>

        </div>
    )
}