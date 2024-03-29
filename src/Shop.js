function Shop () {

    const listNumbers = ['Esspresso - $3.99', 'Vanilla Latte - $4.99', 'Americano - $3.50', 'Coffee - $4.35','Cappucino - $2.59', 'Coffee Latte - $4.00', 'Frapuccino - $5.00', 'Macchiato - $3.80', 'Caramel Latte - $4.50', 'Affogato Caffee - $3.70'];
    const listItems = listNumbers.map((number, index) =>
    <li key={index} className='list'>{number}</li>
    );
    
    return(
    <div className='div'>
        <div className='text'>
            <h2 className='menu'>RISTORA COFFEE</h2>
            <h5>MENU</h5>
            </div>
        
        <ul className='text coffee'>
            <h4 className='listMenu'>Coffee</h4>
            {listItems} 
        </ul>
    </div>
    )
}
export default Shop;