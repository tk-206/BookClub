import { Component, type ErrorInfo, type ReactNode } from 'react'

interface Props {
    children: ReactNode
    fallback?: ReactNode
}

interface State {
    hasError: boolean
    error: Error | null
}

export default class ErrorBoundary extends Component<Props, State> {
    state: State = { hasError: false, error: null }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error }
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        // 실제 서비스에서는 Sentry 등 에러 트래킹 서비스로 전송
        console.error('[ErrorBoundary] 렌더링 에러:', error, info.componentStack)
    }

    handleReset = () => {
        this.setState({ hasError: false, error: null })
    }

    render() {
        if (this.state.hasError) {
            if (this.props.fallback) return this.props.fallback

            return (
                <div className="min-h-[60vh] flex flex-col items-center justify-center gap-6 px-6 text-center">
                    <div className="text-5xl">📚</div>
                    <div>
                        <h2 className="font-serif text-xl text-navy font-semibold mb-2">
                            페이지를 불러오는 중 문제가 발생했습니다
                        </h2>
                        <p className="text-sm text-muted leading-relaxed">
                            일시적인 오류일 수 있습니다.<br />아래 버튼으로 다시 시도해 주세요.
                        </p>
                    </div>
                    {import.meta.env.DEV && this.state.error && (
                        <pre className="text-xs text-rose/70 bg-rose/5 border border-rose/20 rounded p-3 max-w-md text-left overflow-auto">
                            {this.state.error.message}
                        </pre>
                    )}
                    <button
                        className="font-sans text-sm text-ivory bg-navy border border-navy py-2 px-6 rounded-sm cursor-pointer transition-all hover:bg-gold hover:border-gold"
                        onClick={this.handleReset}
                    >
                        다시 시도
                    </button>
                </div>
            )
        }

        return this.props.children
    }
}
