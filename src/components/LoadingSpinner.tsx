import './css/LoadingSpinner.css'

export default function LoadingSpinner() {
    return (
        <div className="loading-spinner-wrap">
            <div className="book-icon">
                <div className="book-loading" />
                <div className="book-page" />
                <div className="book-page book-page-right" />
            </div>
            <p className="loading-text" >
                <span style={{"--i": 1} as React.CSSProperties}>불</span>
                <span style={{"--i": 2} as React.CSSProperties}>러</span>
                <span style={{"--i": 3} as React.CSSProperties}>오</span>
                <span style={{"--i": 4} as React.CSSProperties}>는</span> <span style={{"--i": 5} as React.CSSProperties}>중</span>
                <span className="loading-dots">
                    <span style={{"--i": 6} as React.CSSProperties}>.</span><span style={{"--i": 7} as React.CSSProperties}>.</span><span style={{"--i": 8} as React.CSSProperties}>.</span>
                </span>
            </p>
        </div>
    )
}