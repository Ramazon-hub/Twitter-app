import './Home.css'
import Tweets from "../../components/Tweets/Tweets"
import Sidebar from '../../components/Sidebar/Sidebar'
import Btns from '../../components/Btns/Btns'
const Home = () =>{
   
    
    return(
    
        <div className="wrapper">
            <div className="sidebar-wrapper">
              <Sidebar />
            </div>
            <div className="posts-wrapper">
                <div className="posts-wrapper-top">
                    <p className="title">Home</p>                   
                        
                        <Btns/>
                    
                </div>
                <Tweets last="true" />
            </div>
        </div>
    )
}
export default Home