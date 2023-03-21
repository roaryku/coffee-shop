import { useState } from 'react';

function ProductItem () {

    const [changeColor, setChangeColor] = useState(false);
    const [buttonText, setButtonText] = useState("Order");

    const handleClick = () => {
        setChangeColor(!changeColor)
        setButtonText("Added")
    }
    
    return(
        <div className="product-card">
            <div>
                <button
                    className={`order ${(changeColor === true)? 'green' : 'order'}`}
                    type="submit"
                    onClick={() => handleClick ()}>
                    {buttonText}
                </button>
            </div>
        </div>
    )
} 
export default ProductItem;