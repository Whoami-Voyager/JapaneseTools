import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <h1 className="font-Japanese text-5xl">Japanese Wood Carving Tools</h1>
            <nav className="bg-japaneseRed">
                <Link to='/' className="text-white">Planes</Link>
                <Link to='/saws' className="text-white">Saws</Link>
                <Link to='/chisels' className="text-white">Chisels</Link>
            </nav>
        </>
    )
}

export default Navbar
