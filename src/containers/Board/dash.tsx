import * as React from 'react'
import { Card, CardContent, Fab, Paper, Typography } from '@mui/material';
import { useTranslation } from "react-i18next";
import Task from '../../models/task';
import { useEffect, useState } from 'react';

export interface DashProps {
    task: Task | null;
}

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
  };
  

const Dash = (props: DashProps) => {
    const { t } = useTranslation();
    const { task } = props;
    const [ timeSpend, setTimeSpend] = useState<string[]>(["00:00:00", "00:00:00"]);
    
    useEffect(() => {
        if (task != null) {
            let intervalId = setInterval(() => setTimeSpend([task.calculateTotalTimeSpend(), task.calculateActualTimeSpend()]));
            return () => clearInterval(intervalId);
        }
    });

    let content;
    if (task==null) {
        content =
        <Typography>
            {t("board.dash.task_not_selected")}
        </Typography>   
    } else {
        content = 
        <Typography>
            Total  {timeSpend[0]} <br />
            Atual {timeSpend[1]} <br />
            {task.description}
        </Typography>
    }

    return <Card variant="outlined">
        <React.Fragment>
            <CardContent>
                {content}
            </CardContent>
        </React.Fragment>
    </Card>
}

export default Dash;