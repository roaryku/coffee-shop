import { useState } from "react";
import { dataAbout } from './dataAbout';

function About () {
    const [about, setAbout] = useState(dataAbout);
    const [showText, setShowText] = useState(false);

    return(
        <div>
            <div className="about">
                <h1 className="family">NOT JUST BUSSINESS BUT FAMILY</h1>
            </div>

            {about.map((item => {
                const {id, text, image, showMore} = item;

                const showTextClick = (item) => {
                    item.showMore = !item.showMore
                    setShowText(!showText)
                }

            return(
                <div className='aboutPar' key={id}>
                    <img className="imageCoffee"src={image} alt="coffee"/>
                    <p className="bussiness">{showMore ? text : text.substring(0, 220) + "..."}
                    <button className='showMore' onClick={() => showTextClick(item)}>{showMore ? "Show less" : "Show more"}</button>
                </p>
                </div>
            )

            }))}
        </div>
    )
}
    export default About;