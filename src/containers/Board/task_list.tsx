import { Container } from '@mui/material';
import {ActiveTaskItem, InativeTaskItem} from './task_item';
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
    handleSelect: (task: Task) => void;
}

const TaskList = (props: TaskListProps) => {
    const { taskList, handleRemove, handleSelect } = props;

    const generateOnClickRemove = (task: Task) => {
        return () => {
            return handleRemove(task);
        }
    };
    const generateOnClickActive = (task: Task) => {
        return () => {
            return handleSelect(task);
        }
    };
    

    const taskItems = Array.from(taskList.entries()).map(([id, task]) => 
    <Container style={styles.items} key={id}>
        {
            task.active ?  
                <ActiveTaskItem task={task} onClickRemove={generateOnClickRemove(task)} onClickActive={generateOnClickActive(task)} />
            :
                <InativeTaskItem task={task} onClickRemove={generateOnClickRemove(task)} onClickActive={generateOnClickActive(task)} />
        }
        
    </Container>)

    return <Container>
        {taskItems}
    </Container>
}

export default TaskList;