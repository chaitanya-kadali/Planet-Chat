import '../styles/Home.css';
import Header from './sub-components/Header';

function Home()
{ 
    
    const content=`hjbd is a powerful tool for reducing stress and fostering relaxation, amidst daily life's chaos. It enhances focus, cognitive abilities, and emotional regulation, promoting resilience and tranquility. Meditation aids sleep, relieves anxiety, manages pain, and boosts immune function. It lowers blood pressure, alleviates depression, and empowers a fulfilling life with inner peace.`;
    
    const pc_content=`heyy`;
    
    const toreg=()=>{
          window.location.href='/Registration'
    }
    const toguest=()=>{
        window.location.href='/Guest'
    }
    
return(
    <div className='imgcon'>
        <div className="Home">
            <Header/>
                <div className="home-meditation">
                    <p id="home-medit-matter"> {content} </p>
               </div>
        </div>

    </div>
    )
}
export default Home;