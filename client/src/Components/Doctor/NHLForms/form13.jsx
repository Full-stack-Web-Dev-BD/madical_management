
import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Dsidebar from '../Dsidebar'

export default class Form13 extends Component {


    constructor(props) {

        super(props);

        this.state = {
            DT1: '2017-05-24',
            PN: 'Patient',
            AG: 'age',
            SX: 'sx',
            ADD: 'TH',
            W_O: 'CA1',
            HP: 'CA2',
            BD: 'MG1',
            RD: 'MG2',
            D_T: 'TA',
            SP_I: 'sp1',
            SP_II: 'sp2',
            SP_III: 'sp3',
            SP_IV: 'sp4',
            CH: 'ch',
            SIG1: 'sig1',
            CN: 'cn',
            MAD1: 'mad1',
            MAD2: 'mad2',
            MAD3: 'mad3',
            MAD4: 'mad4',
            MAD5: 'mad5',
            MID1: 'mid1',
            MID2: 'mid2',
            MID3: 'mid3',
            MID4: 'mid4',
            MID5: 'mid5',
            DG: 'dg',
            CMT1: 'cmt1',
            CMT2: 'cmt2',
            DT2: '2017-05-24',
            PTH: 'pth'

        }

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit() {

        var DT1 = this.state.DT1
        var PN = this.state.PN
        var AG = this.state.AG
        var SX = this.state.SX
        var ADD = this.state.ADD
        var W_O = this.state.W_O
        var HP = this.state.HP
        var BD = this.state.BD
        var RD = this.state.RD
        var D_T = this.state.D_T

        var SP_I = this.state.SP_I
        var SP_II = this.state.SP_II
        var SP_III = this.state.SP_III
        var SP_IV = this.state.SP_IV
        var CH = this.state.CH
        var SG1 = this.state.SIG1
        var CN = this.state.CN

        var Macroscopic_desc = this.state.MAD1 + this.state.MAD2 + this.state.MAD3 + this.state.MAD4 + this.state.MAD5;
        var Microscopic_desc = this.state.MID1 + this.state.MID2 + this.state.MID3 + this.state.MID4 + this.state.MID5;

        var DG = this.state.DG
        var CMT = this.state.CMT1 + this.state.CMT2
        var DT2 = this.state.DT2
        var PTH = this.state.PTH

        console.log(
            DT1 + '\n' +
            PN + '\n' +
            AG + '\n' +
            SX + '\n' +
            ADD + '\n' +
            W_O + '\n' +
            HP + '\n' +
            BD + '\n' +
            RD + '\n' +
            D_T + '\n' +
            SP_I + '\n' +
            SP_II + '\n' +
            SP_III + '\n' +
            SP_IV + '\n' +
            CH + '\n' +
            SG1 + '\n' +
            CN + '\n' +
            Macroscopic_desc + '\n' +
            Microscopic_desc + '\n' +
            DG + '\n' +
            CMT + '\n' +
            DT2 + '\n' +
            PTH + '\n'
        )
    }



    render() {

        return (
       
            <Card variant="outlined" style={{padding:'20px'}} >
        
                <style>{`
    
    th,td{
     border:1px solid black;
    },
    
    #tdn:{
        border:none;
    }
  `}</style>
                <CardContent>

                    <Typography variant="body2" component="p">
                        <form >

                            <div style={{ flexGrow: 1 }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={7}>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <b>DATE :</b>
                                        <TextField

                                            type="date"
                                            defaultValue={this.state.DT1}
                                            onChange={(e) => {
                                                this.setState({
                                                    DT1: e.target.value
                                                })
                                            }}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                            </div>
                            <br></br>
                            <br></br>
                            <div style={{ flexGrow: 1 }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={2}>
                                    </Grid>


                                    <Grid item xs={9}>
                                        <div style={{ flexGrow: 1 }}>
                                            <Grid container spacing={1}>
                                                <Grid item xs={2}>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <h5 style={{ marginLeft: '50px' }}>
                                                        <b><u>CENTRAL HEALTH LABORATORY</u></b></h5>
                                                </Grid>
                                            </Grid>
                                        </div>

                                        <div style={{ flexGrow: 1 }}>
                                            <Grid container spacing={1}>
                                                <Grid item xs={3}>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <h5><b><u>ASMARA - ERITREA</u></b></h5>
                                                </Grid>
                                            </Grid>
                                        </div>
                                        {/* <Button color="primary" onClick={this.onSubmit}> Submit </Button> */}
                                    </Grid>
                                    <h6 style={{ marginLeft: '100px' }}>Pathology Request and Report Form:</h6>
                                </Grid>
                            </div>

                            <div style={{ flexGrow: 1 }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={6}>
                                    </Grid>
                                    <Grid item xs={4}>
                                      <h6>   <b>HISTOLOGY</b></h6>
                                        <h6><b> CYTOLOGY FNA</b></h6>
                                        <h6><b> BONE MARROW</b></h6>
                                    </Grid>
                                </Grid>
                            </div>



                            <br></br>
                            <div style={{ flexGrow: 1 }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={1}>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <b>  PATIENT'S NAME  </b>
                                        <TextField

                                            onChange={(e) => {
                                                this.setState({
                                                    PN: e.target.value
                                                })
                                            }}
                                            type="text"
                                            defaultValue={this.state.PN}
                                            style={{ width: '60%' }}
                                        />
                                    </Grid>
                                    <Grid item xs={2}>
                                        <b>   AGE  </b>
                                        <TextField

                                            defaultValue={this.state.AG}
                                            onChange={(e) => {
                                                this.setState({
                                                    AG: e.target.value
                                                })
                                            }}
                                            type="text"

                                        />
                                    </Grid>
                                    <Grid item xs={2}>
                                        <b>   SEX  </b>
                                        <TextField

                                            type="text"
                                            onChange={(e) => {
                                                this.setState({
                                                    SX: e.target.value
                                                })
                                            }}
                                            defaultValue={this.state.SX}
                                        />
                                    </Grid>
                                </Grid>
                            </div>
                            <br></br>
                            <div style={{ flexGrow: 1 }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={1}>
                                    </Grid>
                                    <Grid item xs={5}>
                                        <b>  ADDRESS  </b>
                                        <TextField

                                            type="text"
                                            onChange={(e) => {
                                                this.setState({
                                                    ADD: e.target.value
                                                })
                                            }}
                                            defaultValue={this.state.ADD}
                                            style={{ width: '50%' }}
                                        />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <b>   WARD/WARD  </b>
                                        <TextField

                                            type="text"
                                            onChange={(e) => {
                                                this.setState({
                                                    W_O: e.target.value
                                                })
                                            }}
                                            defaultValue={this.state.W_O}
                                        />
                                    </Grid>

                                </Grid>
                            </div>
                            <br></br>
                            <div style={{ flexGrow: 1 }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={1}>
                                    </Grid>
                                    <Grid item xs={5}>
                                        <b>  HOSPITAL </b>
                                        <TextField

                                            type="text"
                                            defaultValue={this.state.HP}
                                            onChange={(e) => {
                                                this.setState({
                                                    HP: e.target.value
                                                })
                                            }}
                                            style={{ width: '80%' }}
                                        />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <b>   BED No.  </b>
                                        <TextField

                                            defaultValue={this.state.BD}
                                            onChange={(e) => {
                                                this.setState({
                                                    BD: e.target.value
                                                })
                                            }}
                                            type="text"
                                        />
                                    </Grid>
                                </Grid>
                            </div>

                            <br></br>
                            <div style={{ flexGrow: 1 }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={1}>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <b>  REFFERING DR. </b>
                                        <TextField

                                            type="text"
                                            defaultValue={this.state.RD}
                                            onChange={(e) => {
                                                this.setState({
                                                    RD: e.target.value
                                                })
                                            }}
                                            style={{ width: '60%' }}
                                        />
                                    </Grid>
                                </Grid>
                            </div>

                            <br></br>
                            <div style={{ flexGrow: 1 }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={1}>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <b>  DATE & TIME OF SPECIMEN COLLECTION </b>
                                        <TextField

                                            defaultValue={this.state.D_T}
                                            onChange={(e) => {
                                                this.setState({
                                                    D_T: e.target.value
                                                })
                                            }}
                                            type="text"
                                            style={{ width: '60%' }}
                                        />
                                    </Grid>
                                </Grid>
                            </div>
                            <br></br>
                            <div style={{ flexGrow: 1 }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={1}>
                                    </Grid>
                                    <Grid item xs={1}>
                                        <b> <u> SPECIMEN(S) </u> </b>

                                    </Grid>
                                    <Grid item xs={3}>
                                        <b>   (I)  </b>
                                        <TextField

                                            defaultValue={this.state.SP_I}
                                            type="text"
                                            onChange={(e) => {
                                                this.setState({
                                                    SP_I: e.target.value
                                                })
                                            }}
                                            style={{ width: '80%' }}
                                        />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <b>   (II)  </b>
                                        <TextField
                                            defaultValue={this.state.SP_II}

                                            onChange={(e) => {
                                                this.setState({
                                                    SP_II: e.target.value
                                                })
                                            }}
                                            type="text"
                                            style={{ width: '80%' }}
                                        />
                                    </Grid>
                                </Grid>
                            </div>

                            <div style={{ flexGrow: 1 }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={2}>
                                    </Grid>

                                    <Grid item xs={3}>
                                        <b>   (III)  </b>
                                        <TextField
                                            defaultValue={this.state.SP_III}

                                            type="text"
                                            style={{ width: '80%' }}
                                            onChange={(e) => {
                                                this.setState({
                                                    SP_III: e.target.value
                                                })
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <b>   (IV)  </b>
                                        <TextField
                                            defaultValue={this.state.SP_IV}
                                            onChange={(e) => {
                                                this.setState({
                                                    SP_IV: e.target.value
                                                })
                                            }}

                                            type="text"
                                            style={{ width: '80%' }}
                                        />
                                    </Grid>
                                </Grid>
                            </div>
                            <br></br>
                            <div style={{ flexGrow: 1 }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={1}>
                                    </Grid>
                                    <Grid item xs={11}>
                                        <b>CLINICAL HISTORY : </b>
                                        <TextField
                                            defaultValue={this.state.CH}
                                            onChange={(e) => {
                                                this.setState({
                                                    CH: e.target.value
                                                })
                                            }}

                                            type="text"
                                            style={{ width: '80%' }}
                                        />
                                    </Grid>
                                </Grid>
                            </div>
                            <br></br>
                            <div style={{ flexGrow: 1 }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={1}>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <b>CLINICAL DIAGNOSIS</b>
                                    </Grid>
                                </Grid>
                            </div>

                            <div style={{ flexGrow: 1 }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={7}>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <TextField
                                            onChange={(e) => {
                                                this.setState({
                                                    SIG1: e.target.value
                                                })
                                            }}
                                            defaultValue={this.state.SIG1}

                                            type="text"
                                            style={{ width: '70%' }}
                                        />
                                    </Grid>
                                </Grid>
                            </div>
                            <div style={{ flexGrow: 1 }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={7}>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <b>SIGNATURE OF REQUESTED DOCTOR</b>
                                    </Grid>
                                </Grid>
                            </div>
                            <br></br>
                            <div style={{ flexGrow: 1 }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={1}>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <b> _________________________________________________________________________________________________________________________________________________________</b>
                                    </Grid>
                                </Grid>
                            </div>

                            <br></br>

                            <div style={{ flexGrow: 1 }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={1}>
                                    </Grid>
                                    <Grid item xs={5}>
                                        <b>  REPORT  </b>

                                    </Grid>
                                    <Grid item xs={1}>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <b>   CASE NO. </b>
                                        <TextField
                                            onChange={(e) => {
                                                this.setState({
                                                    CN: e.target.value
                                                })
                                            }}
                                            defaultValue={this.state.CN}

                                            type="text"

                                        />
                                    </Grid>

                                </Grid>
                            </div>
                            <br></br>
                            <div style={{ flexGrow: 1 }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={1}>
                                    </Grid>
                                    <Grid item xs={11}>
                                        <b>MACROSCOPIC DESCRIPTION </b>
                                        <TextField
                                            onChange={(e) => {
                                                this.setState({
                                                    MAD1: e.target.value
                                                })
                                            }}
                                            defaultValue={this.state.MAD1}

                                            type="text"
                                            style={{ width: '71%' }}
                                        />
                                    </Grid>
                                </Grid>
                            </div>

                            <div style={{ flexGrow: 1 }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={1}>
                                    </Grid>
                                    <Grid item xs={11}>

                                        <TextField
                                            defaultValue={this.state.MAD2}
                                            onChange={(e) => {
                                                this.setState({
                                                    MAD2: e.target.value
                                                })
                                            }}

                                            type="text"
                                            style={{ width: '86%' }}
                                        />
                                    </Grid>
                                </Grid>
                            </div>

                            <div style={{ flexGrow: 1 }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={1}>
                                    </Grid>
                                    <Grid item xs={11}>

                                        <TextField
                                            defaultValue={this.state.MAD3}
                                            onChange={(e) => {
                                                this.setState({
                                                    MAD3: e.target.value
                                                })
                                            }}

                                            type="text"
                                            style={{ width: '86%' }}
                                        />
                                    </Grid>
                                </Grid>
                            </div>

                            <div style={{ flexGrow: 1 }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={1}>
                                    </Grid>
                                    <Grid item xs={11}>

                                        <TextField
                                            defaultValue={this.state.MAD4}
                                            onChange={(e) => {
                                                this.setState({
                                                    MAD4: e.target.value
                                                })
                                            }}

                                            type="text"
                                            style={{ width: '86%' }}
                                        />
                                    </Grid>
                                </Grid>
                            </div>

                            <div style={{ flexGrow: 1 }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={1}>
                                    </Grid>
                                    <Grid item xs={11}>

                                        <TextField
                                            defaultValue={this.state.MAD5}
                                            onChange={(e) => {
                                                this.setState({
                                                    MAD5: e.target.value
                                                })
                                            }}

                                            type="text"
                                            style={{ width: '86%' }}
                                        />
                                    </Grid>
                                </Grid>
                            </div>

                            <br></br>
                            <br></br>
                            <div style={{ flexGrow: 1 }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={1}>
                                    </Grid>
                                    <Grid item xs={11}>
                                        <b>MICROSCOPIC DESCRIPTION </b>
                                        <TextField

                                            onChange={(e) => {
                                                this.setState({
                                                    MID1: e.target.value
                                                })
                                            }}
                                            type="text"
                                            defaultValue={this.state.MID1}
                                            style={{ width: '71%' }}
                                        />
                                    </Grid>
                                </Grid>
                            </div>

                            <div style={{ flexGrow: 1 }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={1}>
                                    </Grid>
                                    <Grid item xs={11}>

                                        <TextField
                                            defaultValue={this.state.MID2}
                                            onChange={(e) => {
                                                this.setState({
                                                    MID2: e.target.value
                                                })
                                            }}

                                            type="text"
                                            style={{ width: '86%' }}
                                        />
                                    </Grid>
                                </Grid>
                            </div>

                            <div style={{ flexGrow: 1 }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={1}>
                                    </Grid>
                                    <Grid item xs={11}>

                                        <TextField
                                            defaultValue={this.state.MID3}
                                            onChange={(e) => {
                                                this.setState({
                                                    MID3: e.target.value
                                                })
                                            }}

                                            type="text"
                                            style={{ width: '86%' }}
                                        />
                                    </Grid>
                                </Grid>
                            </div>

                            <div style={{ flexGrow: 1 }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={1}>
                                    </Grid>
                                    <Grid item xs={11}>

                                        <TextField
                                            defaultValue={this.state.MID4}
                                            onChange={(e) => {
                                                this.setState({
                                                    MID4: e.target.value
                                                })
                                            }}

                                            type="text"
                                            style={{ width: '86%' }}
                                        />
                                    </Grid>
                                </Grid>
                            </div>

                            <div style={{ flexGrow: 1 }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={1}>
                                    </Grid>
                                    <Grid item xs={11}>

                                        <TextField
                                            defaultValue={this.state.MID5}
                                            onChange={(e) => {
                                                this.setState({
                                                    MID5: e.target.value
                                                })
                                            }}

                                            type="text"
                                            style={{ width: '86%' }}
                                        />
                                    </Grid>
                                </Grid>
                            </div>


                            <br></br>
                            <div style={{ flexGrow: 1 }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={1}>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <b>  DIAGNOSIS</b>
                                        <TextField
                                            defaultValue={this.state.DG}
                                            onChange={(e) => {
                                                this.setState({
                                                    DG: e.target.value
                                                })
                                            }}

                                            type="text"
                                            style={{ width: '88%' }}
                                        />
                                    </Grid>
                                </Grid>
                            </div>

                            <br></br>
                            <div style={{ flexGrow: 1 }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={1}>
                                    </Grid>
                                    <Grid item xs={11}>
                                        <b>COMMENT </b>
                                        <TextField
                                            defaultValue={this.state.CMT1}
                                            onChange={(e) => {
                                                this.setState({
                                                    CMT1: e.target.value
                                                })
                                            }}

                                            type="text"
                                            style={{ width: '81%' }}
                                        />
                                    </Grid>
                                </Grid>
                            </div>

                            <div style={{ flexGrow: 1 }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={1}>
                                    </Grid>
                                    <Grid item xs={11}>

                                        <TextField
                                            defaultValue={this.state.CMT2}
                                            onChange={(e) => {
                                                this.setState({
                                                    CMT2: e.target.value
                                                })
                                            }}

                                            type="text"
                                            style={{ width: '86%' }}
                                        />
                                    </Grid>
                                </Grid>
                            </div>
                            <br></br>
                            <br></br>
                            <div style={{ flexGrow: 1 }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={1}>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <TextField

                                            type="date"
                                            defaultValue={this.state.DT2}
                                            onChange={(e) => {
                                                this.setState({
                                                    DT2: e.target.value
                                                })
                                            }}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>

                                    <Grid item xs={3}>
                                    </Grid>

                                    <Grid item xs={3}>
                                        <TextField
                                            defaultValue={this.state.PTH}
                                            onChange={(e) => {
                                                this.setState({
                                                    PTH: e.target.value
                                                })
                                            }}

                                            type="text"
                                            style={{ width: '70%' }}
                                        />
                                    </Grid>
                                </Grid>
                            </div>
                            <div style={{ flexGrow: 1 }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={1}>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <b>DATE OF REPORT</b>
                                    </Grid>
                                    <Grid item xs={3}>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <b>PATHALOGISTA</b>
                                    </Grid>
                                </Grid>
                                <Button color="primary" onClick={this.onSubmit}> Submit </Button>
                            </div>
                            <br></br>

                        </form>

                    </Typography >

                </CardContent >
            </Card >
          
        );
    }
}