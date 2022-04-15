import { useSelector,useDispatch } from "react-redux"
import Button from "../Button/Button";
import "./Card.css"
// import img from './images/pic1.jpeg'

const Card =()=>{
    const dispatch = useDispatch()
    const {users}= useSelector((state)=>state)
  
    
    const deleteUser=(e)=>{
        console.log("I am deleted")
          e.preventDefault()
          users.pop()
          dispatch({type:"users",value:users})
      }

    // console.log(users)

    return(
        <div>
            <h3 class="heading">HAPPY BIRTHDAY !!</h3>
            <p class="description">{users.length} birthdays Today</p>

        {users.map((user)=>(
            <article key={user.id} className="card">
            <img src={require(`../../images/${user.pic}`)}/>
            <ul className="list-group list-group-flush my-2">
                <li className="list-group-item">{user.username}</li>
                <li className="list-group-item">{user.userage} years</li>
            </ul>
            </article>
            
        ))}

        {users.length>0?
                 <Button type="button" onClick={deleteUser}>DELETE</Button>
                             :<alert bg-info>Please add some Event</alert>}
        </div>
    )
}
export default Card