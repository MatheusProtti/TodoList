import { useState } from 'react';
import './App.css';
import Input from './components/input/Input'
import List from './components/list/List';

function App() {

  const [list, setList] = useState([])
  const [task, setTask] = useState("")

    const addItemList = (e) => {
      e.preventDefault()

      const idRandom = (num) => Math.floor(Math.random() * num)
      const newTask = {
        id: idRandom(999999),
        text: task,
        done: false
      }
     
      setList([ ...list, newTask ]);
      
      setTask("")
      console.log(list)
      // dps fazer validações como ver se o usuario digito algo antes de enviar a tarefa
    }

    const handleDelete = (index) => {
      
      setList(list.filter((id) => id.id !== index));
      
      alert("Item removido com sucesso");
    }

    const handleEdit = (id) => {
      const taskComplete = list.map(task => {
        if(task.id === id) {
          task.done = !task.done
        }
        return task;
      })

      setList(taskComplete)
      console.log(list)
    }
  
  return (
    <div className="App">
      <div className='title'>
        <h1>Todo List</h1>
      </div>
      <form onSubmit={addItemList}>

        <Input 
          placeholder="New Todo"
          onChange={(e) => setTask(e.target.value)}
          type="text"
          value={task}  
        />

      </form>
      {list.map((newTask) => (
        <div key={newTask.id} className="taskItem">

          <List 
            taskList={newTask.text}
            removeItemList={() => handleDelete(newTask.id)}
            handleEdit={() => handleEdit(newTask.id)}
            newTask={newTask}
          />

        </div>
      ))}

      {list.length === 0 && <p>Não há tarefas</p>}

    </div>
  );
}

export default App;
