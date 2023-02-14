import video from "./coffee.webm";


function Home(){
    return(
        <div>
            <video autoPlay muted loop>
            <source src={video} type="video/webm"/>
        </video>
    </div>
    )
}
export default Home;