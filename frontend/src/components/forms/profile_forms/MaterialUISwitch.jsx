
import { styled } from '@mui/material/styles';
import { Switch } from '@mui/material';

const MaterialUISwitch = styled(Switch)(() => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        color: 'blue',
        transform: 'translateX(22px)',
        '& .MuiSwitch-thumb:before': {
          backgroundImage: `url('/switch-icon/paw.svg')`,
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: 'green',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: 'white',
      width: 32,
      height: 32,
      '&::before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('/switch-icon/home.svg')`,
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: 'purple',
        },
      },
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: 'grey',
      borderRadius: 20 / 2,
    },
  }));

  export default MaterialUISwitch