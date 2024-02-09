import * as React from 'react'
import { Fab, Container } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useTranslation } from "react-i18next";
import TaskList from './task_list';
import Dash from './dash';
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
    const { t } = useTranslation();

    const [openAddTask, setOpenAddTask] = React.useState(false);
    const handleOpenAddTask = () => setOpenAddTask(true);
    const handleCloseAddTask = () => setOpenAddTask(false);
    
    const [taskList, setTaskList] = React.useState<Map<string, Task>>(new Map<string, Task>());
    const addTask = (task: Task) => {
        console.log(task);
        
        taskList.set(task.id, task);
        setTaskList(new Map(taskList));
        handleCloseAddTask();
    }

    const removeTask = (task: Task) => {
        taskList.delete(task.id);
        setTaskList(new Map(taskList));
    }


    return <Container style={styles.container}>
        <Dash></Dash>
        <TaskList taskList={taskList} handleRemove={removeTask}></TaskList>
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