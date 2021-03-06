import React from 'react';
import Header from '../header/header'
import BgImage from '../../utils/imgs/bg-image-two.png'
import 'font-awesome/css/font-awesome.min.css';

const Home = () => {
    
    return (
        <div className="homepage">

            <Header/>
            <div className="docker">

           

            <div className="info">
                
                    <h1>Vid2</h1>
                    <h1>The most advanced video chat ever created</h1>
               
                <p>Video calling proivdes quality and latency simply not available with
                    traditional technology</p>
                    
            </div>
            <div className="bg-img">
                <img src={BgImage} alt="image background"/>
            </div>
            </div>
        </div>
    )

}

export default Home