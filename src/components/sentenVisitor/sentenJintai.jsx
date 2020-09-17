import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Favorite from '@material-ui/icons/Favorite';

import Jintai from '../../assets/jintai.svg';
import Num from './sentenJintai.number';
import Hart from './sentenJintai.hart';



const useStyles = makeStyles({
  base: {
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    width: '300px',
    height: '400px',
    margin: 'auto',
    borderRadius: '10px',
  },
  obal: {
    display: 'flex',
    // position: 'relative',
    justifyContent: 'center',
    width: '220px',
    height: '370px',
    borderRadius: '105px / 185px',
    margin: 'auto',
  },
  jintai: {
    width: '140px',
    height: '330px',
  },
});

const SentenJintai = ({
  hartColor, syugoColor, bodyColor,
}) => {
  const classes = useStyles();
  const baseColor = { background: syugoColor };
  const obalColor = { background: bodyColor };
  const jintaiColor = { fill: 'floralwhite' };
  const hart = {
    position: 'absolute',
    top: '103px',
    left: '133px',
    fontSize: '38',
    color: hartColor,
  };
  const styleOne = {
    top: '90px',
    left: '165px',
  };
  const styleTwo = {
    top: '20px',
    left: '250px',
  };
  const styleThree = {
    top: '65px',
    left: '197px',
  };

  return (
    <Grid container>

      <div className={classes.base} style={baseColor}>
        <Favorite style={hart} />
        <Num number="1" styleSet={styleOne} />
        <Num number="2" styleSet={styleTwo} />
        <Num number="3" styleSet={styleThree} />
        <div className={classes.obal} style={obalColor}>
          <Jintai className={classes.jintai} style={jintaiColor} />
        </div>
      </div>
    </Grid>
  );
};
SentenJintai.defaultProps = {
  hartColor: '#AAAAAA',
  syugoColor: '#EEEEEE',
  bodyColor: '#CCCCCC',
};
SentenJintai.propTypes = {
  hartColor: PropTypes.string,
  syugoColor: PropTypes.string,
  bodyColor: PropTypes.string,
};


export default SentenJintai;


// <Jintai className={classes.jintai} style={jintaiColor} />
