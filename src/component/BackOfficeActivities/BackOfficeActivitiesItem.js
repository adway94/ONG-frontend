import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import IconButton from '@material-ui/core/IconButton';
import { Edit } from "@material-ui/icons";
import ButtonDeleteActivity from '../ButtonDeleteActivity/ButtonDeleteActivityComponent'

function BackOfficeActivitiesItem({activity ,handleDeleteActivity}) {

    return (
        <TableRow>
            <TableCell>
                {activity.name}
            </TableCell>
            <TableCell align="right">
                <IconButton color="primary" component="span">
                    <Edit />
                </IconButton>
                <ButtonDeleteActivity activity={activity} handleDeleteActivity={handleDeleteActivity}/>
            </TableCell>
        </TableRow>
    )
}

export default BackOfficeActivitiesItem;