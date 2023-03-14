import Slides from './Slides';

function Coffee ({loveCoffee}) {
    
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
                        <button className="order">ORDER</button>
                    </div>
                    </div>
                )
            }))}
        </div>
    )
}
export default Coffee;