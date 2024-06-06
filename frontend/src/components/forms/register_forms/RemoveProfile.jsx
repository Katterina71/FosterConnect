import {useState} from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import HeroImg from '../../mainPage/HeroImg';

export default function RemoveProfile() {
    const [open, setOpen] = useState(true);


    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = () => {
        console.log('Account deletion logic here');
        // Add your deletion logic here or call a function that handles it.
        setOpen(false);
        handleClose();
    };

    return (
        <>
            {/* <Button color="warning" variant="contained" onClick={handleClickOpen}>
                Remove Account
            </Button> */}
            <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title"  aria-describedby="alert-dialog-description" >
            <HeroImg imgPath={'./dashboard/fosters.jpg'} imgHeight={'300px'}/>
                <DialogTitle id="alert-dialog-title">{"Confirm Account Deletion"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to delete your account? This action cannot be undone.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="warning" variant="contained" >
                        Cancel
                    </Button>
                    <Button onClick={handleDelete} onClose={handleClose} color="warning" variant="contained"  autoFocus>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

