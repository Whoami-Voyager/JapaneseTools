import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <Link to='/' className="font-Japanese text-5xl select-none">Japanese Wood Carving Tools</Link>
            <nav className="bg-japaneseRed">
                <Link to='/' className="text-white">Planes</Link>
                <Link to='/saws' className="text-white">Saws</Link>
                <Link to='/chisels' className="text-white">Chisels</Link>
            </nav>
        </>
    )
}

export default Navbar
