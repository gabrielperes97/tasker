import { Grid, IconButton, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import { useTranslation } from "react-i18next";
import Task from '../../models/task';
import { useEffect, useState } from 'react';

export interface TaskProps {
    task: Task;
    onClickRemove: (task: Task) => void;
    onClickActive: () => void;
}

const styles = {
    container_active: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px 10px'
    },
    container_inactive: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px 10px',
        margin: "20px 20px",
    }
  };  

const ActiveTaskItem = (props: TaskProps) => {
    
    const { t } = useTranslation();
    const { task, onClickRemove, onClickActive } = props;
    
    const [ totalTimeSpend, setTotalTimeSpend ] = useState<string>(task.calculateTotalTimeSpend());

    useEffect(() => {
        let intervalId = setInterval(() => setTotalTimeSpend(task.calculateTotalTimeSpend()));
        return () => clearInterval(intervalId);
    }, []);


    return <Paper elevation={2} style={styles.container_active}>
        <Grid container spacing={2}>
            <Grid xs={10} item>
                {task.description}
                <br />
                {t('board.task_item.total_time_spend')} {totalTimeSpend}
            </Grid>
            <Grid xs={2} item>
                <IconButton aria-label="delete" onClick={() => onClickRemove(task)} disabled >
                    <DeleteIcon />
                </IconButton>
            </Grid>
        </Grid>        
    </Paper>
}


const InativeTaskItem = (props: TaskProps) => {
    
    const { t } = useTranslation();
    const { task, onClickRemove, onClickActive } = props;
    

    const totalTimeSpend = task.calculateTotalTimeSpend();


    return <Paper elevation={2} style={styles.container_inactive} onClick={() => onClickActive()}>
        <Grid container spacing={2}>
            <Grid xs={10} item={true}>
                {task.description}
                <br />
                {t('board.task_item.total_time_spend')} {totalTimeSpend}
            </Grid>
            <Grid xs={2} item={true}>
                <IconButton aria-label="delete" onClick={(e) => {
                    e.stopPropagation();
                    onClickRemove(task);

                }}>
                    <DeleteIcon />
                </IconButton>
            </Grid>
        </Grid>        
    </Paper>
}

export {ActiveTaskItem, InativeTaskItem}