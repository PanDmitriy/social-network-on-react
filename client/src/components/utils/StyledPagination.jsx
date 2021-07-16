import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  ul: {},
});

function StyledPagination(props) {
  const classes = useStyles(props);
  return (
    <Pagination
      className={classes.root}
      {...props}
    />
  );
}

export default StyledPagination;