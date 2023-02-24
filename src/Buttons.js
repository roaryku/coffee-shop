function Buttons ({filteredDrink}) {
    return(
        <div>
            <button onClick = {() => filteredDrink("coffee")}>Coffee</button>
            <button onClick = {() => filteredDrink("latte")}>Latte</button>
            <button onClick = {() => filteredDrink("cappucino")}>Cappucino</button>
            <button onClick = {() => filteredDrink("americano")}>Americano</button>
        </div>
    )
}
export default Buttons;