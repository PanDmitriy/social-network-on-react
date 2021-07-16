import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    margin: '2rem 0',
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