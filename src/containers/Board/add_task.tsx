import * as React from 'react'
import TextField from '@mui/material/TextField';
import { Box, Card, Fab, Paper, Container, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from 'uuid';

export interface AddTaskProps {
    open: boolean;
    onSelect: (value: object) => void;
    onClose: () => void;
}

const styles = {
    container: {
       background_collor: '#fff'
    }
};
  

const AddTask = (props: AddTaskProps) => {

    const { t } = useTranslation();
    const { onSelect, open, onClose } = props;

    const handleSelect = (description: string) => {
        onSelect({
            key: uuidv4(),
            description: description,
        });
    };

    return (
        <Dialog
            disableRestoreFocus
            open={open}
            onClose={onClose}
            PaperProps={{
                component: 'form',
                onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                    event.preventDefault();
                    const formData = new FormData(event.currentTarget);
                    const formJson = Object.fromEntries((formData as any).entries());
                    handleSelect(formJson.description);
                    onClose();
                },
            }}
        >
            <DialogTitle>{t('board.add_task.add_task')}</DialogTitle>
            <DialogContent>
                <TextField 
                    autoFocus
                    required
                    fullWidth
                    variant="standard"
                    id="description" 
                    name="description"
                    label={t('board.add_task.description')}
                />
            </DialogContent>
            <DialogActions>
                <Button variant='contained' type="submit">{t('board.add_task.add')}</Button>
            </DialogActions>
        </Dialog>
    );
}

export default AddTask;