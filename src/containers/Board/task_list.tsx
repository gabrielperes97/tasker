import * as React from 'react'
import TextField from '@mui/material/TextField';
import { Card, Container, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useTranslation } from "react-i18next";
import TaskItem from './task_item';
import Task from '../../models/task'

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    items: {
        margin: "10px 10px"
    }
  };

export interface TaskListProps {
    taskList: [Task]
}

const TaskList = (props: TaskListProps) => {
    const { t } = useTranslation();
    const { taskList } = props;

    const taskItems = taskList.map(task => <Container style={styles.items}><TaskItem task={task} /></Container>)

    return <Container>
        {taskItems}
    </Container>
}

export default TaskList;