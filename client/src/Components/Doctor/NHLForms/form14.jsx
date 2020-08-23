import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Dsidebar from '../Dsidebar'

export default class Form14 extends Component {


    constructor(props) {

        super(props);

        this.state = {
            BLNK1: 'blan1',
            BLNK2: 'blank2',
            BLNK3: 'blan3',
            BLNK4: 'blank4',
            TH: 'TH',
            CA1: 'CA1',
            CA2: 'CA2',
            MG1: 'MG1',
            MG2: 'MG2',
            TA: 'TA'
        }

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit() {

        var BLNK1 = this.state.BLNK1
        var BLNK2 = this.state.BLNK2
        var BLNK3 = this.state.BLNK3
        var BLNK4 = this.state.BLNK4
        var TH = this.state.TH
        var CA1 = this.state.CA1
        var CA2 = this.state.CA2
        var MG1 = this.state.MG1
        var MG2 = this.state.MG2
        var TA = this.state.TA

        console.log(
            BLNK1 + '\n' +
            BLNK2 + '\n' +
            BLNK3 + '\n' +
            BLNK4 + '\n' +

            TH + '\n' +
            CA1 + '\n' +
            CA2 + '\n' +
            MG1 + '\n' +
            MG2 + '\n' +
            TA + '\n'
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

                                    <Grid item xs={3}>
                                    </Grid>
                                    <Grid item xs={9}>
                                        <table>
                                            <tr>
                                                <th><b>Perameters</b></th>
                                                <th colspan="2"><b>Results</b></th>
                                                <th><b>WHO guideline value</b></th>
                                            </tr>
                                            <tr>
                                                <th colspan="4" style={{ textAlign: 'center' }}>Microbiology qality</th>
                                            </tr>

                                            <tr>
                                                <th>
                                                    <TextField

                                                        type="text"
                                                        InputProps={{ disableUnderline: true }}
                                                        defaultValue={this.state.BLNK1}
                                                        onChange={(e) => {
                                                            this.setState({
                                                                BLNK1: e.target.value
                                                            })
                                                        }}
                                                    />
                                                </th>
                                                <th>Code - 001</th>
                                                <th>Code - 002</th>
                                                <th>
                                                    <TextField
                                                        type="text"
                                                        InputProps={{ disableUnderline: true }}
                                                        defaultValue={this.state.BLNK2}
                                                        onChange={(e) => {
                                                            this.setState({
                                                                BLNK2: e.target.value
                                                            })
                                                        }}
                                                    />
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>Total coliform becteria, cful/100ml</th>
                                                <th>21</th>
                                                <th>21</th>
                                                <th>0/100ml</th>
                                            </tr>
                                            <tr>
                                                <th>Faecal confirm becteria,cful/100ml</th>
                                                <th>21</th>
                                                <th>7</th>
                                                <th>0/100ml</th>
                                            </tr>
                                            <tr>
                                                <th>E.coli</th>
                                                <th>NG</th>
                                                <th>NG</th>
                                                <th>NG</th>
                                            </tr>
                                            <tr>
                                                <th>Salmcnella</th>
                                                <th>NG</th>
                                                <th>NG</th>
                                                <th>NG</th>
                                            </tr>
                                            <tr>
                                                <th>Shiegela</th>
                                                <th>NG</th>
                                                <th>NG</th>
                                                <th>NG</th>
                                            </tr>


                                            <tr>
                                                <th colspan="4" style={{ textAlign: 'center' }}>Inorganic constuents</th>
                                            </tr>

                                            <tr>
                                                <th>
                                                    <TextField

                                                        type="text"
                                                        InputProps={{ disableUnderline: true }}
                                                        defaultValue={this.state.BLNK3}
                                                        onChange={(e) => {
                                                            this.setState({
                                                                BLNK3: e.target.value
                                                            })
                                                        }}
                                                    />
                                                </th>
                                                <th>Code - 001</th>
                                                <th>Code - 002</th>
                                                <th> <TextField

                                                    type="text"
                                                    InputProps={{ disableUnderline: true }}
                                                    defaultValue={this.state.BLNK4}
                                                    onChange={(e) => {
                                                        this.setState({
                                                            BLNK4: e.target.value
                                                        })
                                                    }}
                                                /></th>
                                            </tr>
                                            <tr>
                                                <th>Potassium, ppm</th>
                                                <th>0.5</th>
                                                <th>1.5</th>
                                                <th>12ppm</th>
                                            </tr>


                                            <tr>
                                                <th colspan="4" style={{ textAlign: 'center' }}>Assthetic quality</th>
                                            </tr>

                                            <tr>
                                                <th>Total hardness, ppm</th>
                                                <th>330</th>
                                                <th>225</th>
                                                <th>
                                                    <TextField

                                                        type="text"
                                                        InputProps={{ disableUnderline: true }}
                                                        defaultValue={this.state.TH}
                                                        onChange={(e) => {
                                                            this.setState({
                                                                TH: e.target.value
                                                            })
                                                        }}
                                                    />
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>Calciam hardness, ppm as CaCO3
                                                </th>
                                                <th>135</th>
                                                <th>122</th>
                                                <th>
                                                    <TextField

                                                        type="text"
                                                        InputProps={{ disableUnderline: true }}
                                                        defaultValue={this.state.CA1}
                                                        onChange={(e) => {
                                                            this.setState({
                                                                CA1: e.target.value
                                                            })
                                                        }}
                                                    />
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>Magnessium hardness, ppm as CaCO3</th>
                                                <th>195</th>
                                                <th>133</th>
                                                <th>
                                                    <TextField

                                                        type="text"
                                                        InputProps={{ disableUnderline: true }}
                                                        defaultValue={this.state.MG1}
                                                        onChange={(e) => {
                                                            this.setState({
                                                                MG1: e.target.value
                                                            })
                                                        }}
                                                    />
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>Total alkalinity, ppm</th>
                                                <th>245</th>
                                                <th>270</th>
                                                <th>
                                                    <TextField

                                                        type="text"
                                                        InputProps={{ disableUnderline: true }}
                                                        defaultValue={this.state.TA}
                                                        onChange={(e) => {
                                                            this.setState({
                                                                TA: e.target.value
                                                            })
                                                        }}
                                                    />
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>Solid - total disolved, ppm</th>
                                                <th>382</th>
                                                <th>338</th>
                                                <th>1000 mgl max</th>
                                            </tr>
                                            <tr>
                                                <th>Calciu, ppm as Mg</th>
                                                <th>47</th>
                                                <th>32.31</th>
                                                <th>
                                                    <TextField

                                                        type="text"
                                                        InputProps={{ disableUnderline: true }}
                                                        defaultValue={this.state.CA2}
                                                        onChange={(e) => {
                                                            this.setState({
                                                                CA2: e.target.value
                                                            })
                                                        }}
                                                    />
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>Magnesium, ppm as Mg</th>
                                                <th>47</th>
                                                <th>32.31</th>
                                                <th>
                                                    <TextField
                                                        type="text"
                                                        InputProps={{ disableUnderline: true }}
                                                        defaultValue={this.state.MG2}
                                                        onChange={(e) => {
                                                            this.setState({
                                                                MG2: e.target.value
                                                            })
                                                        }}
                                                    />
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>pH, ppm</th>
                                                <th>7.32</th>
                                                <th>7.35</th>
                                                <th>6.5 - 8.5</th>
                                            </tr>
                                            <tr>
                                                <th>Conductivity, uS/cm</th>
                                                <th>567</th>
                                                <th>501</th>
                                                <th>Country</th>
                                            </tr>
                                        </table>
                                        <Button color="primary" onClick={this.onSubmit}> Submit </Button>
                                    </Grid>
                                </Grid>
                            </div>
                        </form>
                    </Typography >

                </CardContent >
            </Card >
          
        );
    }
}