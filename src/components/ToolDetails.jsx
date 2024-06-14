import { Link, useParams } from "react-router-dom"

const all = [
    {
        "id": 1,
        "name": "Yamaha 3000",
        "image": "https://i.etsystatic.com/13152781/r/il/fb2e15/4962729956/il_570xN.4962729956_7qvr.jpg",
        "price": 50.99,
        "year": 2014,
        "dimensions": "50mm x 30mm x 12mm",
        "description": "very good tool, would recommend"
    }
]

function ToolDetails() {
    const detailId = Number(useParams().id)
    const detail = all.find(detail => detail.id === detailId)
    return (
        <>
        <div>
            <Link to='/'>⬅ Back</Link>
        </div>
            <div className="flex flex-row">
                <img src={detail.image} />
                <div>
                    <h1>{detail.name}</h1>
                    <h2>{detail.year}</h2>
                    <h3>${detail.price}</h3>
                    <h4>{detail.dimensions}</h4>
                </div>
            </div>
            <div>
                <p>{detail.description}</p>
            </div>
        </>
    )
}

export default ToolDetails