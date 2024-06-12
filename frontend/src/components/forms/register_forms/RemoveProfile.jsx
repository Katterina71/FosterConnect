import {useState} from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Alert } from '@mui/material';
import HeroImg from '../../mainPage/HeroImg';
import useDeleteUser from '../../../hooks/useDeleteUser'
import { useAuth } from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function RemoveProfile() {
    const [open, setOpen] = useState(true);
    const { deleteUser, isDeleting, error } = useDeleteUser();
    const navigate = useNavigate()
    const [errorHandle, setError] = useState('')

    const {removeAccount} = useAuth()

    const handleClose = () => {
        setOpen(false);
    };


    const handleDelete = async () => {
        console.log('Account deletion logic here');
   
        try {
            await removeAccount();
        } catch (error) {
            setError(error)
            
        }
        try {
            await deleteUser();
        } catch (error) {
            setError(error)
        }
       
    
        setOpen(false);
        handleClose();

        navigate('/');
    };

    return (
        <>
            <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title"  aria-describedby="alert-dialog-description" >
            <HeroImg imgPath={'./dashboard/fosters.jpg'} imgHeight={'300px'}/>
            {error && <Alert severity="error" fullWidth>{error}</Alert>}
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
                   <Button  onClick={handleDelete}  disabled={isDeleting}  onClose={handleClose} color="warning" variant="contained"  autoFocus>
                     {isDeleting ? 'Deleting...' : 'Delete Account'}
                   </Button> 
                </DialogActions>
            </Dialog>
        </>
    );
}

