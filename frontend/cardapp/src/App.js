import "bootstrap/dist/css/bootstrap.min.css"
import Card from "./Components/Card/Card";
import Button from "./Components/Button/Button";
import Form from "./Components/Form/Form";
import {useSelector,useDispatch} from "react-redux"
import "./App.css"

function App() {

  const dispatch = useDispatch()
  const {users}= useSelector((state)=>state)

  const deleteUser=(e)=>{
    console.log("I am deleted")
      e.preventDefault()
      users.pop()
      dispatch({type:"users",value:users})
  }
  
  return (
    <div className="App">
      <Form/>
      <h3>HAPPY BIRTHDAY !!</h3>
      <Card/>
      {users.length>0?
      <Button type="button" onClick={deleteUser}>DELETE</Button>
      :<alert bg-info>Please add some Event</alert>}
      
    </div>
  );
}

export default App;
