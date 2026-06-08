import clsx from "clsx"

type MenuItem = {
    title: string
    icon: string
}

type Props = {
    items: MenuItem[]
    selectedMenu: string
    onMenuChange: (menu: string) => void
}

export default function SideMenu({
    items,
    selectedMenu,
    onMenuChange,
}: Props) {
    return (
        <>
            {items.map((item) => (
            <button
                key={item.title}
                className={clsx("sidebar-btn", {
                active: selectedMenu === item.title,
                })}
                onClick={() => onMenuChange(item.title)}
            >
                <span>{item.icon}</span>
                {item.title}
            </button>
            ))}
        </>
    )
}