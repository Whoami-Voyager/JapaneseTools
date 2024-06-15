import { Link } from "react-router-dom"

function ToolCards({ item }) {
    return (
        <Link to={`/tool/${item.id}`} className="block border-2 rounded-lg p-6 border-gray-300 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out w-full sm:w-1/2 md:w-1/3 lg:w-1/4 m-4">
            <h1 className="text-center text-3xl sm:text-md font-semibold">{item.name}</h1>
            <img src={item.image} alt={item.name} className="mt-4" />
            <div className="flex flex-row justify-between items-center mt-4">
                <h2 className="text-2xl hover:text-green-700">${item.price}</h2>
                <div className="border-2 text-xl border-gray-500 lg:border-cherryBlossom lg:text-cherryBlossom lg:hover:bg-japaneseRed lg:hover:text-white rounded-lg p-3 transition-colors duration-200 ease-in-out">
                    Details
                </div>
            </div>
        </Link>
    )
}

export default ToolCards
