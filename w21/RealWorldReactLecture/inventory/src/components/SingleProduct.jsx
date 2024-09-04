import { useEffect, useState } from "react";
import { StockCard } from "./StockCard";
import { useParams } from "react-router-dom";
function SingleProduct() {

    // localhost:3000/products/2
    // localhost:3000/products/:id

    const { id } = useParams();

    const [singleProductInfo, setSingleProductInfo] = useState({})

    useEffect(()=> {
        fetch(`/api/products/${id}`)
        .then((res)=> res.json())
        .then((dataObject)=> setSingleProductInfo(dataObject.data))
    }, [])

    return (
        <StockCard
            id={singleProductInfo.id}
            name={singleProductInfo.name}
            image={singleProductInfo.image}
            count={singleProductInfo.count}
            user_id={singleProductInfo.user_id}
        />
    )

}

export default SingleProduct;