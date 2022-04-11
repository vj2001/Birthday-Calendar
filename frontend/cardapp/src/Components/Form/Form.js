import { useSelector,useDispatch, useStore } from "react-redux"
import { Fragment } from "react"
import Button from "../Button/Button"
import "./Form.css"


const Form = ()=>{

    const {name,age,users} = useSelector((state)=>state)
    const dispatch = useDispatch()

    const nameChangeHandler=(e)=>{
        console.log("hi")
      dispatch({type:"name",value:e.target.value})
    }
    const ageChangeHandler=(e)=>{
        dispatch({type:"age",value:e.target.value})
    }
    // const fileChangeHandler=(e)=>{
    //     console.log(e.target.files[0].name)
    //     dispatch({type:"photo",value:e.target.files[0].name})
    // }

    const submitHandler=(e)=>{

        e.preventDefault()
        const file= document.getElementById("file").files[0].name;
        const searchUser = users.filter((user)=>user.pic==file) 
        // console.log(searchUser)
        if(searchUser.length)
         return window.alert("Upload another picture. This one is already uploaded!!")
         
        const newUser = {
            id:Math.random(),
            pic: file,
            username:name,
            userage:age
        }
        users.push(newUser)
        dispatch({type:"users",value:users})
     
    }


    return(
    <Fragment>
        {/* { !validateDetails ?
            <div class="alert alert-danger" role="alert">
           Please Enter name and age !!
          </div>
        : "" } */}

        <form onSubmit={submitHandler}>
                <div className="event-controls">
    
                    <div className="event-control">
                        <label htmlFor='name'>Name</label>
                        <input type="text" name="name" id="name" required value={name} placeholder="Enter name" 
                        onChange={nameChangeHandler}/>
                    </div>
    
                    <div className="event-control">
                        <label htmlFor='age'>Age</label>
                        <input type="age" name="age" id="age" required value={age} placeholder="Enter age" 
                        onChange={ageChangeHandler}/>
                    </div>

                    <div className="event-control">
                        <label htmlFor='file'>Upload Photo</label>
                        <input type="file" name="file" id="file"/> 
                    </div>
    
                    <div className="event-actions">
                    <Button type="submit">ADD EVENT</Button>
                </div>
    
                </div>
            </form>
    </Fragment>
    )
}
export default Form