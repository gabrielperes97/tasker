import * as React from 'react'
import TextField from '@mui/material/TextField';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { useTranslation } from "react-i18next";
import Task from '../../models/task';

export interface AddTaskProps {
    open: boolean;
    onSelect: (value: Task) => void;
    onClose: () => void;
}

const AddTask = (props: AddTaskProps) => {

    const { t } = useTranslation();
    const { onSelect, open, onClose } = props;

    const handleSelect = (description: string) => {
        onSelect(
            new Task(description)
        );
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
                    autoComplete='off'
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