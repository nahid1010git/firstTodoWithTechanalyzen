
// element selection 


const inputField = document.querySelector(`.user_input`);

const addNewBtn = document.querySelector(`#addNewTask`);

const todoList = document.querySelector(`.todo_list`);


// add new task function 

function inputHandler(e){
  const taskName = inputField.value;
  if(taskName){
    const li = document.createElement(`li`);
    li.setAttribute(`class`,`single_item`)
    li.innerHTML = `<span id='taskName'>${taskName}</span>
      <button id="edit">Edit</button>
      <button id="delete">Delete</button>
    </span>`;

    todoList.append(li);
    inputField.value = ``;
  }else{
    alert(`task ki tor bape dibe...?`);
  }

}


// set event with add button 

addNewBtn.addEventListener(`click`,inputHandler);


// set event in input for enter button 



inputField.addEventListener(`keypress`,function(e){
  if(e.key == `Enter`){
    const taskName = inputField.value;

    if(taskName){
      inputHandler();
    }else{
    alert(`task ki tor bape dibe...?`);
      
    }
  }
});



// set event with ul 

todoList.addEventListener(`click`,function(e){
  const targetedElement = e.target;

  if(targetedElement.id == `delete`){
    targetedElement.parentElement.parentElement.remove();
  }

  if(targetedElement.id == `edit`){
    const li = targetedElement.parentElement;

    const preValue = li.querySelector(`#taskName`).textContent;
    
    const input = document.createElement(`input`);
    input.setAttribute(`id`,`edit_input`);

    const uBtn = document.createElement(`button`);
    uBtn.setAttribute(`id`,`update_button`);
    uBtn.textContent = `Update`;

    function updateHandler (){
      const newValue = input.value;
      const innerHTML = `<span id='taskName'>${newValue}</span>
  
        <button id="edit">Edit</button>
        <button id="delete">Delete</button>`;
      li.innerHTML = innerHTML;
    }
    uBtn.addEventListener(`click`,updateHandler);

    input.addEventListener(`keypress`,(e)=>{
      if(e.key == `Enter`){
        updateHandler();
      }
    });

    input.value =preValue;
    li.innerHTML = ``;
    li.appendChild(input);
    li.appendChild(uBtn);
  }
});