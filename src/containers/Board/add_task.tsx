import * as React from 'react'
import TextField from '@mui/material/TextField';
import { Box, Card, Fab, Paper, Container, Button, Dialog, DialogTitle } from '@mui/material';
import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from 'uuid';

export interface AddTaskProps {
    open: boolean;
    onSelect: (value: object) => void;
}

const styles = {
    container: {
       background_collor: '#fff'
    }
};
  

const AddTask = (props: AddTaskProps) => {

    const { t } = useTranslation();
    const { onSelect, open } = props;

    const [description, setDescription] = React.useState("");

    const handleSelect = () => {
        onSelect({
            key: uuidv4(),
            description: description,
        });
        setDescription("");
    };

    return (
        <Dialog open={open}>
            <DialogTitle>Add Task</DialogTitle>
            <TextField 
                id="standard-basic" 
                label={t('board.add_task.description')}
                value={description}
                onChange={(event) => {setDescription(event.target.value)}}
                variant="standard" 
            />
            <br/>
            <Button variant='contained' onClick={handleSelect}>{t('board.add_task.add')}</Button>
        </Dialog>
    );
}

export default AddTask;