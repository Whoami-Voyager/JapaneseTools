import { Link, useParams } from "react-router-dom";

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
];

function ToolDetails() {
    const detailId = Number(useParams().id);
    const detail = all.find(detail => detail.id === detailId);
    return (
        <>
            <div className="m-10 text-2xl font-TTNorms border-b-2 border-japaneseRed">
                <Link to='/'>⬅ Back</Link>
            </div>
            <div className="flex flex-col lg:flex-row font-TTNorms">
                <img src={detail.image} className="m-8 lg:ml-24" alt={detail.name} />
                <div className="p-4 lg:ml-8">
                    <h1 className="text-3xl m-4 md:text-4xl lg:text-7xl text-center lg:text-left">{detail.name}</h1>
                    <h2 className="text-xl m-4 lg:text-left lg:text-4xl">{detail.year}</h2>
                    <h3 className="text-2xl m-4 lg:text-5xl hover:text-green-700">${detail.price}</h3>
                    <h4 className="text-xl m-4 lg:text-3xl">{detail.dimensions}</h4>
                </div>
            </div>
            <div className="font-TTNorms m-4 lg:ml-12">
                <p className="text-lg lg:text-xl m-6">{detail.description}</p>
                <h4 className="text-base lg:text-lg m-6">
                    If you have any other inquiries about the tool or would like to purchase it, contact{" "}
                    <a href="mailto:nick@email.com" target="_blank" className="text-japaneseRed hover:border-b-2 hover:border-japaneseRed">nick@email.com</a>
                </h4>
            </div>
        </>
    );
}

export default ToolDetails;
