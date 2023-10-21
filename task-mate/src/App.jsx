import { useState, useEffect } from 'react'
import { AddTask } from './components/AddTask'
import { Header } from './components/Header'
import { ShowTask } from './components/ShowTask'

function App() {
    const [taskList, setTaskList] = useState(
        JSON.parse(localStorage.getItem('taskList')) || []
    )
    const [task, setTask] = useState({})

    useEffect(() => {
        localStorage.setItem('taskList', JSON.stringify(taskList))
    }, [taskList])

    return (
        <>
            <Header />
            <AddTask
                taskList={taskList}
                task={task}
                setTask={setTask}
                setTaskList={setTaskList}
            />
            <ShowTask
                taskList={taskList}
                setTaskList={setTaskList}
                task={task}
                setTask={setTask}
            />
        </>
    )
}

export default App
