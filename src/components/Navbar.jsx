import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className="bg-japaneseRed">
                <Link to='/' className="font-Japanese text-white p-2 md:p-10 lg:text-7xl text-5xl select-none text-center lg:text-left block">
                    Japanese Wood Carving Tools
                </Link>
            </div>
            <nav className="bg-japaneseRed font-TTNorms">
                <Link to='/' className="text-white mx-2">Planes</Link>
                <Link to='/saws' className="text-white mx-2">Saws</Link>
                <Link to='/chisels' className="text-white mx-2">Chisels</Link>
            </nav>
        </>
    )
}

export default Navbar
