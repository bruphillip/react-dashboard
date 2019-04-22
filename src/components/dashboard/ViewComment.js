import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  CardActions,
  Card,
  CardContent
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { graphql } from 'react-apollo';

import { LIST_ALL_DASHBOARD } from '../queries/graphql-queries';
import Spinner from '../component/spinner';

const styles = {
  card: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  expansionPanel: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
  }
};

const SimpleCard = props => {
  const { classes } = props;
  const {
    data: { allDashboards, loading }
  } = props;
  return (
    <Card className={classes.card}>
      <CardContent />
      <CardActions className={classes.expansionPanel}>
        {loading ? (
          <Spinner />
        ) : (
          allDashboards.map(i => (
            <ExpansionPanel className={classes.expansionPanel} key={i.id}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>
                  {i.title} - Author: {i.user.name}
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>{i.description}</Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          ))
        )}
      </CardActions>
    </Card>
  );
};

export default graphql(LIST_ALL_DASHBOARD)(withStyles(styles)(SimpleCard));
