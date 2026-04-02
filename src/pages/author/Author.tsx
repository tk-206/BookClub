import { Outlet } from 'react-router-dom'
import 'pages/css/author/Author.css'


export default function Author() {
    return (
        <section className="author-page">
            <Outlet />
        </section>
    )
}