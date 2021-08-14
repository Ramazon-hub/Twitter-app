import './Tweets.css'
import tweets from "../../assets/Data/TweetsData"

function Tweets({last,username}){
        return(
        
        <>
           {
               tweets.length>0 && <ul className="twt-list">
                   {
                       tweets.filter(i=>{
                           if(last){
                               return i
                           }
                           return i.username === username
                        }).map(t=>(<li className="twt-list-item" key={t.id} >
                            <img src={t.img} alt="profile-img" width="70px" className="profile-img"/>
                            <div>
                            <h2 className="user_name">{t.username}</h2>
                            <p className="post-text">{t.tweet}</p>
                            </div>
                        </li>))
                   }
               </ul>
           }
        </>
    )
}
export default Tweets