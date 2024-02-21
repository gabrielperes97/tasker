import { Grid, IconButton, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
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
    const { task, onClickRemove } = props;
    
    const [ totalTimeSpend, setTotalTimeSpend ] = useState<string>(task.calculateTotalTimeSpend());
    const [ actualTimeSpend, setActualTimeSpend ] = useState<string>(task.calculateActualTimeSpend());

    useEffect(() => {
        let intervalId = setInterval(() => {
            setTotalTimeSpend(task.calculateTotalTimeSpend());
            setActualTimeSpend(task.calculateActualTimeSpend());
        });
        return () => clearInterval(intervalId);
    });


    return <Paper elevation={2} style={styles.container_active}>
        <Grid container spacing={2}>
            <Grid xs={11} item>
                {task.description}
                <br />
                {t('board.task_item.total_time_spend')} {totalTimeSpend}
                <br />
                {t('board.task_item.actual_time_spend')} {actualTimeSpend}
            </Grid>
            <Grid xs={1} item alignSelf={'center'}>
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
    const actualTimeSpend = task.calculateActualTimeSpend();


    return <Paper elevation={2} style={styles.container_inactive} onClick={() => onClickActive()}>
        <Grid container spacing={2}>
            <Grid xs={11} item>
                {task.description}
                <br />
                {t('board.task_item.total_time_spend')} {totalTimeSpend}
                <br />
                {t('board.task_item.actual_time_spend')} {actualTimeSpend}
            </Grid>
            <Grid xs={1} item alignSelf={'center'}>
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