import { Link } from "react-router-dom"

function ToolCards({ item }) {
    return (
        <>
            <h1>{item.name}</h1>
            <img src={item.image}/>
            <h2>${item.price}</h2>
            <Link to={`/tool/${item.id}`}>Details </Link>
        </>
    )
}

export default ToolCards