import { useState, useEffect } from "react";

const TaskCard = ({ task,deleteTask }) => {
    return <article >
        <h2>{task.title}</h2>
        <p>{task.desciption}</p>
        <button onClick={()=>{ deleteTask(task.id)}}>Eliminar</button>
    </article>
}

export const Takslis = ({ tasks, deleteTask }) => {

    if (tasks.length == 0) {
        return <h2>No hay tareas :)</h2>
    } else {
        return <section>
            {
                tasks.map(task => {
                    return <TaskCard task={task} deleteTask={deleteTask} key={task.id} />
                })
            }
        </section>
    }
}

export const TasksFrom = ({ createTask }) => {

    const [title, setTitle] = useState("")
    const [desciption, setDesciption] = useState("")

    const handleSumbit = (e) => {
        e.preventDefault();
        createTask(title, desciption)
    }
    return <>
        <form onSubmit={handleSumbit}>
            <input placeholder="Escrtibe tu tarea"
                onChange={(e) => setTitle(e.target.value)} />
            <textarea placeholder="Escrtibe una descripcion (opcional)"
                onChange={(s) => setDesciption(s.target.value)} />
            <button>Guardar</button>
        </form>
    </>
}

/* const TasksAdmin = () => {
   const [tasks, setTasks] = useState([])


  const createTask = (titleTask, desciptionTask) => {
    setTasks([...tasks, {
      title: titleTask,
      id: tasks.length,
      desciption: desciptionTask
    }])
    console.log(tasks);
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id != taskId))
  }
  return <>
    <TasksFrom createTask={createTask} />
    <Takslis tasks={tasks} deleteTask={deleteTask} />
  </>
}

export default TasksAdmin */
