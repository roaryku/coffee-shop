
import './App.css';
import video from './coffee.webm'

function Home(){
  return(
        <div className="container-home">
    <div>
      <video autoPlay muted loop>
          <source src={video} type="video/webm" width="300px" alt="coffee"/>
      </video>
    </div>

    <div className='container'>
      <h2 className='heading two'>Welcome to</h2>
      <h1 className='heading one'>RISTORA COFFEE</h1>
      <p className='par'>We ensure organic coffee for you. Hopping you and your family will enjoy it.</p>
      <p className='heading one'>WE'RE HAPPY YOU ARE HERE</p>
    </div>
    </div>
    )
}
export default Home;