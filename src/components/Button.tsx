import clsx from "clsx"
import './css/Button.css'

type ButtonProps = {
    onClick?: () => void,
    size?: 'sm' | 'md' | 'lg',
    type?: 'button' | 'submit' | 'reset'
    isLoading?: boolean,
    variant?: 'primary' | 'secondary' | 'danger' | 'none'
    className?: string,
    children: React.ReactNode
}

export default function Button({ onClick, size, type, isLoading, variant, className, children, }: ButtonProps) {
    size = size ?? 'md'
    variant = variant ?? 'primary'
    type = type ?? 'button'

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={isLoading}
            className={clsx(
                "btn",
                `btn-${size}`,
                `btn-${variant}`,
                className
            )}
        >
            {isLoading? "로딩중..." : children}
        </button>
    )
}