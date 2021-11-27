import {React,useState} from 'react';
import '../App.css'

const Dashboard = () => {
    const [toDoList,setToDoList] = useState([])
    const handleInputBox =(e)=>{
        if(e.keyCode === 13){
            setToDoList(...toDoList,e.target.value)
            addTask();
        }
    }
    const addTask=()=> {
        let getDiv = document.getElementById("list-wrapper");
        let setDiv = document.createElement("div");
        setDiv.setAttribute('class','row');
        setDiv.setAttribute('id','new-task');
        setDiv.insertAdjacentHTML(
          "afterbegin",
          "<div class='col-sm-1'><i class='far fa-circle'></i>&nbsp;</div><div class='col-sm-11 task-wrapper flex-wrapper' id='new-inp'></div>"
        );
        let inputBox = document.createElement("input");
        inputBox.setAttribute("type", "text");
        inputBox.setAttribute("class", "task-input flex-wrapper");
        // setDiv.appendChild(inputBox);
        setDiv.childNodes[1].appendChild(inputBox);
        getDiv.appendChild(setDiv);
        inputBox.focus();
        inputBox.addEventListener("keyup", handleInputBox, false);
      }
    return (
        <div className="container">
        <div id="task-container">
          <div id="form-wrapper">
            <div className="row head">
              <div className="col-sm-6">
                <h2>Todo</h2>
              </div>
              <div className="col-sm-6">
                <button
                  type="button"
                  id="submit"
                  onClick={addTask}
                  className="btn btn-secondary"
                >
                  <i className="fas fa-plus-square"></i>
                </button>
              </div>
            </div>
            <div id="list-wrapper">
              {/* {toDoList.map(function (task, index) {
                return (
                  <div  className="row">
                    <div className="col-sm-1">
                      <i className="far fa-circle"></i>&nbsp;
                    </div>
                    <div className="col-sm-10 task-wrapper flex-wrapper" id="t-info">
                      <p style={{ fontSize: "20px" }}>
                          {task.title}
                          </p>
                    </div>
                    <div className="col-sm-1" ></div>
                  </div>
                );
               })} */}
            </div>
          </div>
        </div>
      </div>
    );
};

export default Dashboard;