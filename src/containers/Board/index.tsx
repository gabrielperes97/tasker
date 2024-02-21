import * as React from 'react'
import { Fab, Container, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import TaskList from './task_list';
import AddTask from './add_task';
import Task from '../../models/task';

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    add_button: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
    modalView: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    },
  };
  

const BoardScreen = () => {
    const [openAddTask, setOpenAddTask] = React.useState(false);
    const [activeTask, setActiveTask] = React.useState<Task|null>(null);
    const handleOpenAddTask = () => setOpenAddTask(true);
    const handleCloseAddTask = () => setOpenAddTask(false);
    
    const [taskList, setTaskList] = React.useState<Map<string, Task>>(new Map<string, Task>());
    const addTask = (task: Task) => {        
        taskList.set(task.id, task);
        setTaskList(new Map(taskList));
        handleCloseAddTask();
    }

    const removeTask = (task: Task) => {
        taskList.delete(task.id);
        setTaskList(new Map(taskList));
    }

    const selectTask = (task: Task) => {
        if (activeTask) {
            let t = taskList.get(activeTask.id)
            if (t){
                t.disableTask();
                taskList.set(activeTask.id, t);
            }
        }

        task.activateTask();
        taskList.set(task.id, task);
        setActiveTask(task);
        setTaskList(new Map(taskList));
    }


    return <Container style={styles.container}>
        <Typography variant="h1" component="h2" align='center'>Tasker</Typography>
        <TaskList taskList={taskList} handleRemove={removeTask} handleSelect={selectTask}></TaskList>
        <Fab color="primary" aria-label="add" style={styles.add_button as React.CSSProperties} onClick={handleOpenAddTask}>
            <AddIcon />
        </Fab>
        <AddTask
            open={openAddTask}
            onSelect={addTask}
            onClose={handleCloseAddTask}
        />
    </Container>
}

export default BoardScreen;