import clsx from "clsx"

type Props = {
    item: string[]
    onChange: (tab: string) => void
    filterTab: string
}

export default function FilterButton({ item, onChange, filterTab }: Props) {
    return (
        <div className='filter-tabs'>
            {item.map((l) => (
                <button 
                    key={l} 
                    className={clsx('filter-tab', {active: filterTab === l})}
                    onClick={() => onChange(l)}
                >
                    {l}
                </button>
            ))}
        </div>
    )
}