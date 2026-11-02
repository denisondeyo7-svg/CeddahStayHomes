
import heroes from './assets/daytime.jpg'


import C2a from './components/C2a';
import Navbar from './components/Navbar';
function IndexPage() {
    return (
        <div className="home" id='home'>
            <Navbar/>
            <div className="home-image">
                <img src={heroes} alt="heros image" />
               
                
                <div className="content">
                    <C2a/>
              
                </div>

            </div>
        </div>
    );
}

export default IndexPage;