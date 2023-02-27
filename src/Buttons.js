function Buttons ({filteredDrink}) {
    return(
        <div>
            <button className="cta" onClick = {() => filteredDrink("coffee")}>Coffee</button>
            <button className="cta" onClick = {() => filteredDrink("latte")}>Latte</button>
            <button className="cta" onClick = {() => filteredDrink("cappucino")}>Cappucino</button>
            <button className="cta" onClick = {() => filteredDrink("americano")}>Americano</button>
        </div>
    )
}
export default Buttons;