import clsx from "clsx"

type ButtonProps = {
    onClick?: () => void,
    size?: 'sm' | 'md' | 'lg',
    type?: 'button' | 'submit' | 'reset'
    isLoading?: boolean,
    variant?: 'primary' | 'secondary' | 'danger'
    className?: string,
    children: React.ReactNode
}

export default function Button({ onClick, size, type, isLoading, variant, className, children, }: ButtonProps) {
    size = 'md'
    variant = 'primary'
    type = 'button'

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