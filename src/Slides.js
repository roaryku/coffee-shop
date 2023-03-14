import { useState } from "react";

function Slides ({coffeeSlides}){

    const [onlineOrder, setOnlineOrder] = useState(0);

    const nextBtn = () => {
        setOnlineOrder((onlineOrder => {
            onlineOrder ++;
            if(onlineOrder > coffeeSlides.length - 1){
                onlineOrder = 0;
            }
            return onlineOrder;
        }))
    }

    const prevBtn = () => {
        setOnlineOrder((onlineOrder => {
            onlineOrder --;
            if(onlineOrder < 0){
                return coffeeSlides.length - 1
            }
        return onlineOrder
    }))
}
    return(
        <div>
            <div className="product-card">
                <img src={coffeeSlides[onlineOrder]} alt="coffee" width="200px" height="200"/>
            </div>

        <div className="buttons">
            <button className="bta" onClick={prevBtn}>Previous</button>
            <button className="bta" onClick={nextBtn}>Next</button>
        </div>
    </div>
    )
}

export default Slides;