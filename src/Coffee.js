import Slides from './Slides';
import { useState } from 'react';

function Coffee ({loveCoffee}) {

    const [changeColor, setChangeColor] = useState(false);
    const [buttonText, setButtonText] = useState("Order");

    const handleClick = () => {
        setChangeColor(!changeColor)
        setButtonText("Added")
    }

    return(
        <div className="product">
            {loveCoffee.map((element => {
                const {id, name, price, image} = element;

                return(
                    <div className="product-card" key={id}>
                        
                        <Slides coffeeSlides={image}/>

                    <div className="product-info">
                        <h3>{name}</h3>
                        <h4>$ {price}</h4>
                        <button
                                className={`order ${(changeColor === true)? 'green' : 'order'}`}
                                type="submit"
                                onClick={() => handleClick ()}>
                                {buttonText}
                                </button>
                    </div>
                    </div>
                )
            }))}
        </div>
    )
}


export default Coffee;