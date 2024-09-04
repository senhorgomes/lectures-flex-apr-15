import { useContext } from "react";
import { favMessageContext } from "../contexts/favIconContext";

function FavBadge() {
    const context = useContext(favMessageContext)
    return (
        <>
            <h1>This is FavBadge</h1>
            <br />
            {context}
        </>
    )

}

export default FavBadge;