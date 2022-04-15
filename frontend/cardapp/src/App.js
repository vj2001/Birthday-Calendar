import "bootstrap/dist/css/bootstrap.min.css"
import Card from "./Components/Card/Card";
import Form from "./Components/Form/Form";
// import {useSelector,useDispatch} from "react-redux"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Form/>
      <Card/>      
    </div>
  );
}

export default App;
