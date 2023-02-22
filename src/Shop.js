import image from './cup-coffee.jpg'


function Shop () {
    return(
    <div>
        <div className='Shop' >
            <img className="image" src={image} alt="coffee"/> 
        </div>
        <div className='text'>
            <h2 className='coffee'>RISTORA COFFEE</h2>
            <h5 className='coffee'>MENU</h5>
        </div>
    </div>
    )
}
export default Shop;