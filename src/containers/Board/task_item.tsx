import { Grid, IconButton, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useTranslation } from "react-i18next";
import Task from '../../models/task';

export interface TaskProps {
    task: Task;
    onClickRemove: (task: Task) => void;
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
    const { task, onClickRemove } = props;

    return <Paper elevation={2} style={styles.container}>
        <Grid container spacing={2}>
            <Grid xs={11} item={true}>
                {task.description}
                <br />
                Horas gastas 00: 00
            </Grid>
            <Grid xs={1} item={true}>
                <IconButton aria-label="delete" onClick={() => onClickRemove(task)}>
                    <DeleteIcon />
                </IconButton>
            </Grid>
        </Grid>        
    </Paper>
}

export default TaskItem;