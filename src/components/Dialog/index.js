import React from 'react';
import { Dialog, DialogContent, DialogTitle } from '@material-ui/core'

const FormDialog = props => {
    const { handleClose, open, title, children } = props;
    return (
        <Dialog 
        onClose={handleClose} 
        open={open}
        aria-labelledby="dialog-title"
        >
            {title && (
                <DialogTitle id='dialog-title'>{title}</DialogTitle>
            )}
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    )
}

export default FormDialog;