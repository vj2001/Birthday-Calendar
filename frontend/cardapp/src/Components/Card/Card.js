import { useSelector } from "react-redux"
import "./Card.css"
// import img from './images/pic1.jpeg'

const Card =()=>{
    const {users} = useSelector((state)=>state)
    // console.log(users)

    return(
        <div>
        {users.map((user)=>(
            <div key={user.id} className="card">
            <img src={require(`../../images/${user.pic}`)}/>
            <ul className="list-group list-group-flush my-2">
                <li className="list-group-item">{user.username}</li>
                <li className="list-group-item">{user.userage}</li>
            </ul>
            </div>
            
        ))}
        </div>
    )
}
export default Card