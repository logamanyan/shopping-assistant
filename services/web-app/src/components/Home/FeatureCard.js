import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '250px',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function FeatureCard(props) {
  const classes = useStyles();
  const { title, description, icon } = props;

  // Apply white color to the icon
  const iconWithStyle = React.cloneElement(icon, { style: { fontSize: 'xx-large', color: 'white' } });

  return (
    <Card className={classes.root} style={{ backgroundColor: "#1d1024" }}>
      <CardContent>
        {/* Use the iconWithStyle here */}
        {iconWithStyle}
        <br />
        <Typography variant="h6" component="h2" style={{ color: 'white' }}>
          &nbsp;&nbsp; {title}
        </Typography>
        <Typography variant="body2" component="p" style={{ color: 'white' }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default FeatureCard;
