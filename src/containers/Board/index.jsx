import * as React from 'react'
import TextField from '@mui/material/TextField';
import { Fab, Container, SimpleDialog, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useTranslation } from "react-i18next";
import TaskList from './task_list';
import Dash from './dash';
import AddTask from './add_task';

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
  

const BoardScreen = ({}) => {
    const { t } = useTranslation();

    const [openAddTask, setOpenAddTask] = React.useState(false);
    const handleOpenAddTask = () => setOpenAddTask(true);
    const handleCloseAddTask = () => setOpenAddTask(false);
    
    const [taskList, setTaskList] = React.useState([]);
    const addTask = (task) => {
        console.log(task);
        setTaskList(taskList.concat(task));
        handleCloseAddTask();
    }


    return <Container style={styles.container}>
        <Dash></Dash>
        <TaskList taskList={taskList}></TaskList>
        <Fab color="primary" aria-label="add" style={styles.add_button} onClick={handleOpenAddTask}>
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