import * as React from 'react'
import TextField from '@mui/material/TextField';
import { Fab, Paper } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useTranslation } from "react-i18next";
import Task from '../../models/task';

export interface TaskProps {
    task: Task;
}

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
  };
  

const TaskItem = (props: TaskProps) => {
    
    const { t } = useTranslation();
    const { task } = props;

    return <Paper elevation={2}>
        {task.description} <br />
        Horas gastas 00: 00
    </Paper>
}

export default TaskItem;