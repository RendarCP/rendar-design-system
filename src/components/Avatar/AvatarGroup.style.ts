import { createStyles } from '../../theme/core/tss/createStyles';

export default createStyles((theme) => {
  return {
    root: {
      display: 'flex',
    },
    child: {
      marginLeft: -8,
      border: theme.colorScheme === 'dark' ? '2px solid #000' : '2px solid #fff',
      backgroundColor: theme.palette.grey[300],
      boxSizing: 'content-box',
    },
  };
});
