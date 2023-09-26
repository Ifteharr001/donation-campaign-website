import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Card = () => {

    const [card, setCard] = useState()

    const params = useParams()
    console.log(params)

    const cards = useLoaderData()
    console.log(cards)

    return (
        <div>
            
        </div>
    );
};

export default Card;