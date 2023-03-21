import Slides from './Slides';
import ProductItem from './ProductItem';

function Coffee ({loveCoffee}) {

    return(
        <div className="product">
            {loveCoffee.map((element => {
                const {id, name, price, image} = element;

                return(
                    <div className="product-card" key={id}>

                        <Slides coffeeSlides={image}/>
                        <h3>{name}</h3>
                        <h4>$ {price}</h4>
                        <ProductItem/>
                    </div>
                )
            }))}
        </div>
    )
}


export default Coffee;