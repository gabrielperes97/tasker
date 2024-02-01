import * as React from 'react'
import TextField from '@mui/material/TextField';
import { Button, Fab, Grid, IconButton, Paper } from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
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
        padding: '10px 10px',
    }
  };
  

const TaskItem = (props: TaskProps) => {
    
    const { t } = useTranslation();
    const { task } = props;

    return <Paper elevation={2} style={styles.container}>
        <Grid container spacing={2}>
            <Grid xs={11}>
                {task.description}
                <br />
                Horas gastas 00: 00
            </Grid>
            <Grid xs={1}>
                <IconButton aria-label="delete">
                    <DeleteIcon />
                </IconButton>
            </Grid>
        </Grid>        
    </Paper>
}

export default TaskItem;