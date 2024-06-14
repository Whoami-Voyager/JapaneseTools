import Navbar from "./Navbar"
import ToolCards from "./ToolCards"

const planes = [
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

function Planes() {

    const items = planes.map((item) => {
        return <ToolCards key={item.id} item={item} />
    })

    return (
        <>
            <Navbar />
            <div>
                {items}
            </div>
        </>
    )
}

export default Planes