import React from 'react'

export const AddTask = ({ taskList, setTaskList, task, setTask }) => {
    const handleSubmit = (e) => {
        e.preventDefault()

        if (task.id) {
            const date = new Date()
            const updatedTaskList = taskList.map((todo) =>
                todo.id === task.id
                    ? {
                          id: task.id,
                          name: e.target.task.value,
                          time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
                      }
                    : todo
            )
            setTaskList(updatedTaskList)
            setTask({})
        } else {
            const date = new Date()
            const newTask = {
                id: date.getTime(),
                name: e.target.task.value,
                time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
            }
            setTaskList([...taskList, newTask])
            e.target.task.value = ''
            setTask({})
        }
    }

    return (
        <section className="addTask">
            <form onSubmit={handleSubmit}>
                <input
                    value={task.name || ''}
                    type="text"
                    name="task"
                    autoComplete="off"
                    placeholder="add task"
                    maxLength="25"
                    onChange={(e) => setTask({ ...task, name: e.target.value })}
                />
                <button type="submit">{task.id ? "Update" : "Add"}</button>
            </form>
        </section>
    )
}
