import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';


const useStyles = makeStyles({
  num: {
    margin: '0',
    paddingLeft: '15px',
  },
  main: {
    margin: '0',
  },
  sub: {
    margin: '0',
    fontSize: '0.8em',
  },
});

const createData = (title, value) => ({ title, value });


const SentenTable = (props) => {
  const { teikeimei, syugokashin, bodykashin } = props;
  const classes = useStyles();
  const rows = [
    createData('teikeimei', teikeimei),
    createData('syugokashin', syugokashin),
    createData('bodykashin', bodykashin),
  ];
  const titleJa = {
    teikeimei: {
      num: '①',
      main: '提携命',
      sub: '（魂・深層願望）',
    },
    syugokashin: {
      num: '②',
      main: '守護華神',
      sub: '（守り神・一生のテーマ）',
    },
    bodykashin: {
      num: '③',
      main: 'ボディ華神',
      sub: '（印象・仮のテーマ）',
    },
  };

  return (
    <TableContainer className={classes.th}>
      <p>貴方の魂と２神のバランス</p>
      <Table>
        <TableBody>
          {rows.map(
            (row) => (
              <TableRow key={row.title}>
                <TableCell className={classes.th} component="th">
                  <p className={classes.num}>{titleJa[row.title].num}</p>
                </TableCell>
                <TableCell className={classes.th}>
                  <p className={classes.main}>{titleJa[row.title].main}</p>
                  <p className={classes.sub}>{titleJa[row.title].sub}</p>
                </TableCell>
                <TableCell className={classes.th}>{row.value}</TableCell>
              </TableRow>
            ),
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

SentenTable.defaultProps = {
  teikeimei: 'inochi',
  syugokashin: 'kashin',
  bodykashin: 'bodys',
};
SentenTable.propTypes = {
  teikeimei: PropTypes.string,
  syugokashin: PropTypes.string,
  bodykashin: PropTypes.string,
};


export default SentenTable;
