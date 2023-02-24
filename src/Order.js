import { useState } from "react";
import { data } from './data';
import Coffee from './Coffee';
import Buttons from './Buttons';



function Order () {

    const [myCoffee, setMyCoffee] = useState(data);
    
    const ChoseYourCoffee = (searchName) => {
        const newDrink = data.filter(element => element.searchName === searchName)
        setMyCoffee(newDrink)
    }

    return(
    <div className="searchName">
        <h2>Order Online</h2>
        <Buttons filteredDrink = {ChoseYourCoffee}/>
        <Coffee loveCoffee = {myCoffee}/>
    </div>
    )
}
export default Order;