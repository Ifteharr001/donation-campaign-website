
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CardItems from "../CardItems/CardItems";
const Card = () => {

    const [cardItem, setCardItem] = useState()

    const {id} = useParams()
    const cards = useLoaderData()
    

    useEffect(()=>{
        const findCard = cards?.data?.find(card=>card.id == id)
        setCardItem(findCard)
    }, [cards, id])
    return (
        <div>
            <CardItems cardItem={cardItem}></CardItems>
        </div>
    );
};

export default Card;