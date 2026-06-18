import clsx from "clsx"

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

    const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy disabled:pointer-events-none disabled:opacity-50"

    const sizeStyles = {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-4 py-2 text-sm",
        lg: 'h-12 px-8 text-base'
    }

    const variantStyles = {
        primary: "bg-navy text-white hover:bg-navy-light",
        secondary: "bg-gold text-white hover:bg-gold-light",
        danger: "bg-rose text-white hover:bg-rose/90",
        none: "bg-transparent text-gold-light_2 hover:text-gold",
    }

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={isLoading}
            className={clsx(
                baseStyles,
                sizeStyles[size],
                variantStyles[variant],
                className
            )}
        >
            {isLoading? "로딩중..." : children}
        </button>
    )
}