import React,{useState,useEffect} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios'
import Complete from './complete'
import All from './all'
const ResultTable = () => {
    const [all,setAll] = useState(true)
    const [complete,setComplete] = useState(false)
    const allData=()=>{
        setComplete(false)
        setAll(true) 
    }
    const completedData=()=>{
        setAll(false)
        setComplete(true)
    }
    return ( 
        <div>
            <button  className={"btn " + (all
          ? "btn-primary"
          : "btn-light")} onClick={allData}>All</button>
            <button  className={"btn " + (complete
          ? "btn-success "
          : "btn-light")} onClick={completedData}>Completed</button>
            {all == true? <All/> : <Complete/>}
        </div>
     );
}
 
export default ResultTable;