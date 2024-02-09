import { Container } from '@mui/material';
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
    taskList: Map<string, Task>;
    handleRemove: (task: Task) => void;
}

const TaskList = (props: TaskListProps) => {
    const { t } = useTranslation();
    const { taskList, handleRemove } = props;

    const generateOnClickRemove = (task: Task) => {
        return () => {
            return handleRemove(task);
        }
    };
    

    const taskItems = Array.from(taskList.entries()).map(([id, task]) => <Container style={styles.items} key={id}><TaskItem task={task} onClickRemove={generateOnClickRemove(task)} /></Container>)

    return <Container>
        {taskItems}
    </Container>
}

export default TaskList;