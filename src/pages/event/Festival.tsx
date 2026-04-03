import 'pages/css/event/Festival.css'
import { Outlet } from 'react-router-dom'

export default function Festival() {
    return (
        <section className="events-page">
            <Outlet />
        </section>
    )
}