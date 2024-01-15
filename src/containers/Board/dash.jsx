import * as React from 'react'
import TextField from '@mui/material/TextField';
import { Card, Fab, Paper } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useTranslation } from "react-i18next";

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
  };
  

const Dash = () => {
    const { t } = useTranslation();

    return <Card variant="outlined">
        Total  00:00 
        Atual 00:00
        Descrição
    </Card>
}

export default Dash;