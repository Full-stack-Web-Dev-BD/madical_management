import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({

    brdr: {
        border: '1px solid black',
        borderCollapse: 'collapse'

    }
}));

const ChemTable = ({ handleHaemotologyChange, handleInitialChange, chemistry
    , handleImmunoHaematol, handleImmunoserology, handleMicroBiology, handleTherapeuticDrugs }) => {
    const classes = useStyles();
    return (
        <Grid item xs={12}>
            <table style={{ border: '1px solid black', width: '100%' }}>
                <th className={classes.brdr} style={{ backgroundColor: '#D3D3D3' }}>
                    <h5 style={{ padding: '15px' }}>Chemistry</h5>
                </th>
                <th className={classes.brdr} style={{ backgroundColor: '#D3D3D3' }}>
                    <h5 style={{ padding: '15px' }}>Haematology</h5>
                </th>
                <th className={classes.brdr} style={{ backgroundColor: '#D3D3D3' }}>
                    <h5 style={{ padding: '15px' }}>IMMUNOSEROLOGY</h5>
                </th>
                <tr >

                    <td style={{ verticalAlign: 'baseline', width: "33%" }}>
                        <table className={classes.brdr} >
                            <tr className={classes.brdr}>
                                <td className={classes.brdr}>

                                    <Checkbox onChange={handleInitialChange} name="Albumin" checked={chemistry.chemistryData["Albumin"]} />

                                </td>
                                <td className={classes.brdr} style={{ width: '100%' }}>ALBUMIN</td>
                            </tr>
                            <tr className={classes.brdr} style={{ height: '46px' }}>
                                <td className={classes.brdr}>
                                    <Checkbox checked={chemistry.chemistryData['AlkalinePhosphatase']} value={chemistry.chemistryData['AlkalinePhosphatase']} onChange={handleInitialChange} name="AlkalinePhosphatase" />

                                </td>
                                <td className={classes.brdr}>ALKALINE PHOSPHATASE</td>
                            </tr>
                            <tr className={classes.brdr} style={{ height: '46px' }}>
                                <td className={classes.brdr}>
                                    <Checkbox value={chemistry.chemistryData['AltSGPT']} checked={chemistry.chemistryData['AltSGPT']} onChange={handleInitialChange} name="AltSGPT" />
                                </td>
                                <td className={classes.brdr}>ALT (SGPT)</td>
                            </tr>
                            <tr className={classes.brdr} style={{ height: '46px' }}>
                                <td className={classes.brdr}>
                                    <Checkbox value={chemistry.chemistryData['Amylase']} onChange={handleInitialChange} checked={chemistry.chemistryData['Amylase']} name="Amylase" />
                                </td>
                                <td className={classes.brdr}>AMYLASE</td>
                            </tr>
                            <tr className={classes.brdr} style={{ height: '46px' }}>
                                <td className={classes.brdr}>
                                    <Checkbox value={chemistry.chemistryData['AstSGOT']} onChange={handleInitialChange} checked={chemistry.chemistryData['AstSGOT']} name="AstSGOT" /> </td>
                                <td className={classes.brdr}>AST (SGOT) </td>
                            </tr>
                            <tr className={classes.brdr} style={{ height: '46px' }}>
                                <td className={classes.brdr}>
                                    <Checkbox onChange={handleInitialChange} checked={chemistry.chemistryData['BilirubinTotal']} name="BilirubinTotal" />
                                </td>
                                <td className={classes.brdr}>BILIRUBIN - TOTAL</td>
                            </tr>
                            <tr className={classes.brdr} style={{ height: '46px' }}>
                                <td className={classes.brdr}>
                                    <Checkbox onChange={handleInitialChange} checked={chemistry.chemistryData['BilirubinDirect']} name="BilirubinDirect" />
                                </td>
                                <td className={classes.brdr}>BILIRUBIN - DIRECT</td>
                            </tr>
                            <tr className={classes.brdr} style={{ height: '46px' }}>
                                <td className={classes.brdr}>
                                    <Checkbox value={chemistry.chemistryData['Bun']} onChange={handleInitialChange} checked={chemistry.chemistryData['Bun']} name="Bun" /></td>
                                <td className={classes.brdr}>BUN</td>
                            </tr>
                            <tr className={classes.brdr} style={{ height: '46px' }}>
                                <Checkbox value={chemistry.chemistryData['Calcium']} onChange={handleInitialChange} name="Calcium" checked={chemistry.chemistryData['Calcium']} />
                                <td className={classes.brdr}>CALCIUM</td>
                            </tr>
                            <tr className={classes.brdr} style={{ height: '46px' }}>
                                <Checkbox value={chemistry.chemistryData['CarbonDioxide']} onChange={handleInitialChange} name="CarbonDioxide" checked={chemistry.chemistryData['CarbonDioxide']} />
                                <td className={classes.brdr}>CARBON DIOXIDE</td>
                            </tr>
                            <tr className={classes.brdr} style={{ height: '46px' }}>
                                <Checkbox value={chemistry.chemistryData['Chloride']} checked={chemistry.chemistryData['Chloride']} onChange={handleInitialChange} name="Chloride" />
                                <td className={classes.brdr}>CHLORIDE</td>
                            </tr>
                            <tr className={classes.brdr} style={{ height: '46px' }}>
                                <Checkbox value={chemistry.chemistryData['CreativeKinase']} onChange={handleInitialChange} name="CreativeKinase" checked={chemistry.chemistryData['CreativeKinase']} />
                                <td className={classes.brdr}>CK (Creatine Kinase)</td>
                            </tr>
                            <tr className={classes.brdr} style={{ height: '46px' }}>
                                <Checkbox value={chemistry.chemistryData['CKMB']} onChange={handleInitialChange} name="CKMB" checked={chemistry.chemistryData['CKMB']} />
                                <td className={classes.brdr}>CK-MB (Creatine Kinase iso-enzyme)</td>
                            </tr>
                            <tr className={classes.brdr} style={{ height: '46px' }}>
                                <Checkbox value={chemistry.chemistryData['Creatinine']} onChange={handleInitialChange} name="Creatinine" checked={chemistry.chemistryData['Creatinine']} />
                                <td className={classes.brdr}>CREATININE</td>
                            </tr>
                            <tr className={classes.brdr} style={{ height: '46px' }}>
                                <Checkbox value={chemistry.chemistryData['Electrolytes']} onChange={handleInitialChange} name="Electrolytes" checked={chemistry.chemistryData['Electrolytes']} />
                                <td className={classes.brdr}>ELECTROLYTES (CO2, Cl2, K, Na)</td>
                            </tr>
                            <tr className={classes.brdr} style={{ height: '46px' }}>
                                <Checkbox value={chemistry.chemistryData['Ferritin']} onChange={handleInitialChange} name="Ferritin" checked={chemistry.chemistryData['Ferritin']} />
                                <td className={classes.brdr}>FERRITIN</td>
                            </tr>
                            <tr className={classes.brdr} style={{ height: '46px' }}>
                                <Checkbox value={chemistry.chemistryData['GlucoseFasting']} onChange={handleInitialChange} name="GlucoseFasting" checked={chemistry.chemistryData['GlucoseFasting']} />
                                <td className={classes.brdr} style={{ height: '49px' }}>GLUCOSE, FASTING</td>
                            </tr>
                            <tr className={classes.brdr} style={{ height: '46px' }}>
                                <Checkbox value={chemistry.chemistryData['GlucoseRandm']} onChange={handleInitialChange} name="GlucoseRandm" checked={chemistry.chemistryData['GlucoseRandm']} />
                                <td className={classes.brdr}>GLUCOSE, RANDM</td>
                            </tr>
                            <tr className={classes.brdr} style={{ height: '46px' }}>
                                <Checkbox value={chemistry.chemistryData['GlutamylTransferase']} onChange={handleInitialChange} checked={chemistry.chemistryData['GlutamylTransferase']} name="GlutamylTransferase" />
                                <td className={classes.brdr}>GLUTAMYL TRANSFERASE (GGT)</td>
                            </tr>
                            <tr className={classes.brdr} style={{ height: '46px' }}>
                                <Checkbox value={chemistry.chemistryData['HepaticFunction']} onChange={handleInitialChange} name="HepaticFunction" checked={chemistry.chemistryData['HepaticFunction']} />
                                <td className={classes.brdr}>HEPATIC FUNCTION PANEL (Albumin,
                        Bilirubin, Alk. Phos., AST, ALT)</td>
                            </tr>
                            <tr className={classes.brdr} style={{ height: '46px' }}>
                                <Checkbox value={chemistry.chemistryData['LDH']} onChange={handleInitialChange} name="LDH" checked={chemistry.chemistryData['LDH']} />
                                <td className={classes.brdr}>LDH</td>
                            </tr>
                            <tr className={classes.brdr} style={{ height: '46px' }}>
                                <Checkbox value={chemistry.chemistryData['Lipase']} onChange={handleInitialChange} name="Lipase" checked={chemistry.chemistryData['Lipase']} />
                                <td className={classes.brdr}>LIPASE</td>
                            </tr>
                            <tr className={classes.brdr} style={{ height: '46px' }}>
                                <Checkbox value={chemistry.chemistryData['LipidPandel']} onChange={handleInitialChange} name="LipidPandel" checked={chemistry.chemistryData['LipidPandel']} />
                                <td className={classes.brdr}>LIPID PANEL (HDL, LDL, Triglycerides, Chol.)</td>
                            </tr>
                            <tr className={classes.brdr} style={{ height: '46px' }}>
                                <Checkbox value={chemistry.chemistryData['IronTotal']} onChange={handleInitialChange} name="IronTotal" checked={chemistry.chemistryData['IronTotal']} />
                                <td className={classes.brdr}>IRON, TOTAL</td>
                            </tr>
                            <tr className={classes.brdr} style={{ height: '46px' }}>
                                <Checkbox value={chemistry.chemistryData['Oxygen']} onChange={handleInitialChange} name="Oxygen" checked={chemistry.chemistryData['Oxygen']} />
                                <td className={classes.brdr}>OXYGEN</td>
                            </tr>
                            <tr className={classes.brdr} style={{ height: '46px' }}>
                                <Checkbox value={chemistry.chemistryData['Phosphorus']} onChange={handleInitialChange} name="Phosphorus" checked={chemistry.chemistryData['Phosphorus']} />
                                <td className={classes.brdr}>PHOSPHORUS</td>
                            </tr>
                            <tr className={classes.brdr} style={{ height: '46px' }}>
                                <Checkbox value={chemistry.chemistryData['Potassium']} onChange={handleInitialChange} name="Potassium" checked={chemistry.chemistryData['Potassium']} />
                                <td className={classes.brdr}>POTASSIUM</td>
                            </tr>
                            <tr className={classes.brdr} style={{ height: '46px' }}>
                                <Checkbox value={chemistry.chemistryData['ProteinTotal']} onChange={handleInitialChange} name="ProteinTotal" checked={chemistry.chemistryData['ProteinTotal']} />
                                <td className={classes.brdr}>PROTEIN, TOTAL</td>
                            </tr>
                            <tr className={classes.brdr} style={{ height: '46px' }}>
                                <Checkbox value={chemistry.chemistryData['Sodium']} onChange={handleInitialChange} name="Sodium" checked={chemistry.chemistryData['Sodium']} />
                                <td className={classes.brdr}>SODIUM</td>
                            </tr>
                            <tr className={classes.brdr} style={{ height: '46px' }}>
                                <Checkbox value={chemistry.chemistryData['T3UPTAKE']} onChange={handleInitialChange} name="T3UPTAKE" checked={chemistry.chemistryData['T3UPTAKE']} />
                                <td className={classes.brdr}>T3 UPTAKE</td>
                            </tr>
                            <tr className={classes.brdr} style={{ height: '46px' }}>
                                <Checkbox value={chemistry.chemistryData['T4TOTAL']} onChange={handleInitialChange} name="T4TOTAL" checked={chemistry.chemistryData['T4TOTAL']} />
                                <td className={classes.brdr}>T4 TOTAL</td>
                            </tr>
                            <tr className={classes.brdr} style={{ height: '46px' }}>
                                <Checkbox value={chemistry.chemistryData['TSH']} onChange={handleInitialChange} name="TSH" checked={chemistry.chemistryData['TSH']} />
                                <td className={classes.brdr}>TSH (Thyrotropin)</td>
                            </tr>
                            <tr className={classes.brdr} style={{ height: '46px' }}>
                                <Checkbox value={chemistry.chemistryData['Triglycerides']} onChange={handleInitialChange} name="Triglycerides" checked={chemistry.chemistryData['Triglycerides']} />
                                <td className={classes.brdr}>TRIGLYCERIDES</td>
                            </tr>
                            <tr className={classes.brdr} style={{ height: '46px' }}>
                                <Checkbox value={chemistry.chemistryData['UricAcid']} onChange={handleInitialChange} name="UricAcid" checked={chemistry.chemistryData['UricAcid']} />
                                <td className={classes.brdr}>URIC ACID</td>
                            </tr>
                        </table>
                    </td>

                    <td style={{ verticalAlign: "baseline", width: "33%" }}>
                        <table className={classes.brdr}  >
                            <tr className={classes.brdr} style={{ height: '46px' }}>
                                <td className={classes.brdr}>

                                    <Checkbox value={chemistry.HaemotologyData['BloodFilmMorphology']} onChange={handleHaemotologyChange} name="BloodFilmMorphology" checked={chemistry.HaemotologyData['BloodFilmMorphology']} />

                                </td>
                                <td className={classes.brdr} style={{ width: '100%' }}>BLOOD FILM MORPHOLOGY</td>
                            </tr>
                            <tr className={classes.brdr} style={{ height: '46px' }}>
                                <td className={classes.brdr}>
                                    <Checkbox value={chemistry.HaemotologyData['BloodFilmDifferential']} onChange={handleHaemotologyChange} name="BloodFilmDifferential" checked={chemistry.HaemotologyData['BloodFilmDifferential']} />

                                </td>
                                <td className={classes.brdr}>BLOOD FILM DIFFERENTIAL</td>
                            </tr>

                            <tr className={classes.brdr} style={{ height: '46px' }}>
                                <Checkbox value={chemistry.HaemotologyData['CBC']} onChange={handleHaemotologyChange} name="CBC" checked={chemistry.HaemotologyData['CBC']} />
                                <td className={classes.brdr}>CBC (Complete Blood Count)</td>
                            </tr>
                            <tr className={classes.brdr} style={{ height: '46px' }}>
                                <Checkbox value={chemistry.HaemotologyData['FactorAnalysis']} onChange={handleHaemotologyChange} name="FactorAnalysis" checked={chemistry.HaemotologyData['FactorAnalysis']} />
                                <td className={classes.brdr}>FACTOR VIII ANALYSIS</td>
                            </tr>
                            <tr className={classes.brdr} style={{ height: '46px' }}>
                                <Checkbox value={chemistry.HaemotologyData['Prothrombin']} onChange={handleHaemotologyChange} name="Prothrombin" checked={chemistry.HaemotologyData['Prothrombin']} />
                                <td className={classes.brdr}>PROTHROMBIN TIME/INR</td>
                            </tr>
                            <tr className={classes.brdr} style={{ height: '46px' }}>
                                <Checkbox value={chemistry.HaemotologyData['PTAPTT']} onChange={handleHaemotologyChange} name="PTAPTT" checked={chemistry.HaemotologyData['PTAPTT']} />
                                <td className={classes.brdr}>PT/APTT</td>
                            </tr>
                            <tr className={classes.brdr} style={{ height: '46px' }}>
                                <Checkbox value={chemistry.HaemotologyData['Reticulocyte']} onChange={handleHaemotologyChange} name="Reticulocyte" checked={chemistry.HaemotologyData['Reticulocyte']} />
                                <td className={classes.brdr}>RETICULOCYTE COUNT</td>
                            </tr>
                            <tr style={{ height: '46px' }} className={classes.brdr}>
                                <p></p>
                                <td className={classes.brdr} style={{ width: '100%' }}></td>
                            </tr>
                            <tr style={{ height: '46px' }} className={classes.brdr}>
                                <p></p>
                                <td className={classes.brdr} style={{ width: '100%' }}></td>
                            </tr>
                            <tr style={{ height: '46px' }} className={classes.brdr}>
                                <p></p>
                                <td className={classes.brdr} style={{ width: '100%' }}></td>
                            </tr>  <tr style={{ height: '46px' }} className={classes.brdr}>
                                <p></p>
                                <td className={classes.brdr} style={{ width: '100%' }}></td>
                            </tr>

                            <tr style={{ height: '46px', backgroundColor: '#D3D3D3' }} className={classes.brdr}>
                                <p></p>
                                <td ><h5 >IMMUNOHAEMATOL</h5></td>
                            </tr>
                            <tr className={classes.brdr} style={{ height: '46px' }}>
                                <Checkbox value={chemistry.ImmunoHaematol['ABO']} checked={chemistry.ImmunoHaematol['ABO']} onChange={handleImmunoHaematol} name="ABO" />
                                <td style={{ fontSize: '14px' }} className={classes.brdr}>ABO HDN (Blood grouping, DCT,
Allo-antibody titre, Blood film)</td>
                            </tr>
                            <tr style={{ height: '45px' }} className={classes.brdr}>
                                <Checkbox value={chemistry.ImmunoHaematol['AutoImmuneCold']} checked={chemistry.ImmunoHaematol['AutoImmuneCold']} onChange={handleImmunoHaematol} name="AutoImmuneCold" />
                                <td style={{ fontSize: '14px' }} className={classes.brdr}>AUTOIMMUNE-COLD (DCT, Cold
agglutinin titre)</td>
                            </tr>
                            <tr style={{ height: '46px' }} className={classes.brdr}>
                                <Checkbox onChange={handleImmunoHaematol} value={chemistry.ImmunoHaematol['AutoImmuneWarm']} checked={chemistry.ImmunoHaematol['AutoImmuneWarm']} name="AutoImmuneWarm" />
                                <td style={{ fontSize: '14px' }} className={classes.brdr}>AUTOIMMUNE - WARM (DCT, Antibody screen/identification)</td>
                            </tr>
                            <tr style={{ height: '46px' }} className={classes.brdr}>
                                <Checkbox onChange={handleImmunoHaematol} value={chemistry.ImmunoHaematol['BloodGroupABO']} checked={chemistry.ImmunoHaematol['BloodGroupABO']} name="BloodGroupABO" />
                                <td className={classes.brdr}>BLOOD GROUP - ABO & Rh</td>
                            </tr>
                            <tr style={{ height: '46px' }} className={classes.brdr}>
                                <Checkbox onChange={handleImmunoHaematol} name="BloodGroupAntiBody" checked={chemistry.ImmunoHaematol['BloodGroupAntiBody']} value={chemistry.ImmunoHaematol['BloodGroupAntiBody']} />
                                <td className={classes.brdr}>BLOOD GROUP ANTIBODY IDENTIFICATION</td>
                            </tr>
                            <tr style={{ height: '46px' }} className={classes.brdr}>
                                <Checkbox onChange={handleImmunoHaematol} value={chemistry.ImmunoHaematol['Coombs']} checked={chemistry.ImmunoHaematol['Coombs']} name="Coombs" />
                                <td className={classes.brdr}>COOMBS TEST - DIRECT</td>
                            </tr>
                            <tr style={{ height: '46px' }} className={classes.brdr}>
                                <Checkbox onChange={handleImmunoHaematol} name="PreNatal" checked={chemistry.ImmunoHaematol['PreNatal']} value={chemistry.ImmunoHaematol['PreNatal']} />
                                <td className={classes.brdr}>PRE-NATAL SCREEN (Blood group,
Antibody screen & titre, )</td>
                            </tr>
                            <tr style={{ height: '46px' }} className={classes.brdr}>
                                <Checkbox onChange={handleImmunoHaematol} name="RhHDN" checked={chemistry.ImmunoHaematol['RhHDN']} value={chemistry.ImmunoHaematol['RhHDN']} />
                                <td className={classes.brdr}>Rh HDN (Blood grouping, DCT, Antibody screen & titre, Blood film)</td>
                            </tr>

                            <tr style={{ height: '46px' }} className={classes.brdr}>
                                <p></p>
                                <td className={classes.brdr} style={{ width: '100%' }}></td>
                            </tr>

                            <tr style={{ height: '46px' }} className={classes.brdr}>
                                <p></p>
                                <td className={classes.brdr} style={{ width: '100%' }}></td>
                            </tr>
                            <tr style={{ height: '46px' }} className={classes.brdr}>
                                <p></p>
                                <td className={classes.brdr} style={{ width: '100%' }}></td>
                            </tr>
                            <tr style={{ height: '46px' }} className={classes.brdr}>
                                <p></p>
                                <td className={classes.brdr} style={{ width: '100%' }}></td>
                            </tr>
                            <tr style={{ height: '46px' }} className={classes.brdr}>
                                <p></p>
                                <td className={classes.brdr} style={{ width: '100%' }}></td>
                            </tr>


                            <tr style={{ height: '46px', backgroundColor: '#D3D3D3' }} className={classes.brdr}>
                                <p></p>

                                <td ><h4 >MICROBIOLOGY</h4></td>

                            </tr>

                            <tr style={{ height: '46px' }} className={classes.brdr}>
                                <p></p>
                                <td ><p >Samply Type:</p></td>

                            </tr>
                            <tr style={{ height: '46px' }} className={classes.brdr}>
                                <p></p>
                                <td ><p >Type of Sample:</p></td>

                            </tr>
                            <tr style={{ height: '46px' }} className={classes.brdr}>
                                <Checkbox value={chemistry.MicroBiology['CultureSenstivity']} checked={chemistry.MicroBiology['CultureSenstivity']} onChange={handleMicroBiology} name="CultureSenstivity" />
                                <td className={classes.brdr}>CULTURE AND SENSITIVITY</td>
                            </tr>
                            <tr style={{ height: '46px' }} className={classes.brdr}>
                                <Checkbox checked={chemistry.MicroBiology['CultureFungus']} onChange={handleMicroBiology} name="CultureFungus" />
                                <td className={classes.brdr}>CULTURE, MYCOLOGY (FUNGUS)</td>
                            </tr>
                            <tr style={{ height: '46px' }} className={classes.brdr}>
                                <p></p>
                                <td className={classes.brdr} style={{ width: '100%' }}></td>
                            </tr>
                            <tr style={{ height: '46px' }} className={classes.brdr}>
                                <p></p>
                                <td className={classes.brdr} style={{ width: '100%' }}></td>
                            </tr>
                            <tr style={{ height: '46px' }} className={classes.brdr}>
                                <p></p>
                                <td className={classes.brdr} style={{ width: '100%' }}></td>
                            </tr>
                            <tr style={{ height: '46px' }} className={classes.brdr}>
                                <p></p>
                                <td className={classes.brdr} style={{ width: '100%' }}></td>
                            </tr>
                        </table>
                    </td>

                    <td style={{ verticalAlign: "baseline" }}>
                        <table className={classes.brdr} >
                            <tr className={classes.brdr}>
                                <td className={classes.brdr}>

                                    <Checkbox onChange={handleImmunoserology} checked={chemistry.Immunoserology['AslO']} name="AslO" />

                                </td>
                                <td className={classes.brdr} style={{ width: '100%' }}>ASL - O</td>
                            </tr>
                            <tr style={{ height: '46px' }} className={classes.brdr}>
                                <td className={classes.brdr}>
                                    <Checkbox checked={chemistry.Immunoserology['Brucella']} onChange={handleImmunoserology} name="Brucella" />

                                </td>
                                <td className={classes.brdr}>BRUCELLA</td>
                            </tr>
                            <tr style={{ height: '46px' }} className={classes.brdr}>
                                <td className={classes.brdr}>
                                    <Checkbox value={chemistry.Immunoserology['CRP']} checked={chemistry.Immunoserology['CRP']} onChange={handleImmunoserology} name="CRP" />
                                </td>
                                <td className={classes.brdr}>CRP</td>
                            </tr>
                            <tr style={{ height: '46px' }} className={classes.brdr}>
                                <td className={classes.brdr}>
                                    <Checkbox value={chemistry.Immunoserology['DAT']} checked={chemistry.Immunoserology['DAT']} onChange={handleImmunoserology} name="DAT" />
                                </td>
                                <td className={classes.brdr}>DAT</td>
                            </tr>
                            <tr style={{ height: '46px' }} className={classes.brdr}>
                                <td className={classes.brdr}>
                                    <Checkbox value={chemistry.Immunoserology['Pylori']} checked={chemistry.Immunoserology['Pylori']} onChange={handleImmunoserology} name="Pylori" /> </td>
                                <td className={classes.brdr}>H. PYLORI </td>
                            </tr>
                            <tr style={{ height: '46px' }} className={classes.brdr}>
                                <td className={classes.brdr}>
                                    <Checkbox value={chemistry.Immunoserology['HbsAG']} checked={chemistry.Immunoserology['HbsAG']} onChange={handleImmunoserology} name="HbsAG" />
                                </td>
                                <td className={classes.brdr}>HBS Ag</td>
                            </tr>
                            <tr style={{ height: '46px' }} className={classes.brdr}>
                                <td className={classes.brdr}>
                                    <Checkbox value={chemistry.Immunoserology['HepatitisAnti']} checked={chemistry.Immunoserology['HepatitisAnti']} onChange={handleImmunoserology} name="HepatitisAnti" />
                                </td>
                                <td className={classes.brdr}>HEPATITIS C ANTIBODY</td>
                            </tr>
                            <tr style={{ height: '46px' }} className={classes.brdr}>
                                <td className={classes.brdr}>
                                    <Checkbox value={chemistry.Immunoserology['HIV']} checked={chemistry.Immunoserology['HIV']} onChange={handleImmunoserology} name="HIV" /></td>
                                <td className={classes.brdr}>HIV - USE SPECIAL FORM</td>
                            </tr>
                            <tr style={{ height: '46px' }} className={classes.brdr}>
                                <Checkbox value={chemistry.Immunoserology['Infectious']} checked={chemistry.Immunoserology['Infectious']} onChange={handleImmunoserology} name="Infectious" />
                                <td className={classes.brdr}>INFECTIOUS MONONUCLEOSIS</td>
                            </tr>
                            <tr style={{ height: '46px' }} className={classes.brdr}>
                                <Checkbox value={chemistry.Immunoserology['Rheumatoid']} checked={chemistry.Immunoserology['Rheumatoid']} onChange={handleImmunoserology} name="Rheumatoid" />
                                <td className={classes.brdr}>RHEUMATOID FACTOR</td>
                            </tr>
                            <tr style={{ height: '46px' }} className={classes.brdr}>
                                <Checkbox value={chemistry.Immunoserology['Rubella']} checked={chemistry.Immunoserology['Rubella']} onChange={handleImmunoserology} name="Rubella" />
                                <td className={classes.brdr}>RUBELLA</td>
                            </tr>
                            <tr style={{ height: '46px' }} className={classes.brdr}>
                                <Checkbox value={chemistry.Immunoserology['VDRL']} checked={chemistry.Immunoserology['VDRL']} onChange={handleImmunoserology} name="VDRL" />
                                <td className={classes.brdr}>VDRL</td>
                            </tr>
                            <tr style={{ height: '46px' }} className={classes.brdr} >
                                <Checkbox value={chemistry.Immunoserology['WEILOX19']} checked={chemistry.Immunoserology['WEILOX19']} onChange={handleImmunoserology} name="WEILOX19" />
                                <td className={classes.brdr} >WEIL-FELIX OX-19</td>
                            </tr>
                            <tr style={{ height: '46px' }} className={classes.brdr}>
                                <Checkbox onChange={handleImmunoserology} checked={chemistry.Immunoserology['WEILOX2']} value={chemistry.Immunoserology['WEILOX2']} name="WEILOX2" />
                                <td className={classes.brdr}>WEIL-FELIX OX-2</td>
                            </tr>
                            <tr style={{ height: '46px' }} className={classes.brdr} >
                                <Checkbox onChange={handleImmunoserology} checked={chemistry.Immunoserology['WEILOXK']} value={chemistry.Immunoserology['WEILOXK']} name="WEILOXK" />
                                <td className={classes.brdr}>WEIL-FELIX OX-K</td>
                            </tr>
                            <tr style={{ height: '46px' }} className={classes.brdr}>
                                <Checkbox onChange={handleImmunoserology} checked={chemistry.Immunoserology['WIDAL']} value={chemistry.Immunoserology['WIDAL']} name="WIDAL" />
                                <td className={classes.brdr}>WIDAL</td>
                            </tr>
                            <tr style={{ height: '46px' }} className={classes.brdr}>
                                <p></p>
                                <td className={classes.brdr} style={{ width: '100%' }}></td>
                            </tr>
                            <tr style={{ height: '43px' }} className={classes.brdr}>
                                <p></p>
                                <td className={classes.brdr} style={{ width: '100%' }}></td>
                            </tr>

                            <tr style={{ height: '46px' }} className={classes.brdr}>
                                <p></p>
                                <td className={classes.brdr} style={{ width: '100%' }}></td>
                            </tr>
                            <tr style={{ height: '46px' }} className={classes.brdr}>
                                <p></p>
                                <td className={classes.brdr} style={{ width: '100%' }}></td>
                            </tr>

                            <tr style={{ height: '46px', backgroundColor: '#D3D3D3' }} className={classes.brdr}>
                                <p></p>

                                <td ><h4 >THERAPEUTIC DRUGS</h4></td>

                            </tr>
                            <tr style={{ height: '46px' }} className={classes.brdr}>
                                <Checkbox value={chemistry.TherapeuticDrugs['Carbamazepine']} checked={chemistry.TherapeuticDrugs['Carbamazepine']} onChange={handleTherapeuticDrugs} name="Carbamazepine" />
                                <td className={classes.brdr}>CARBAMAZEPINE</td>
                            </tr>


                            <tr style={{ height: '46px' }} className={classes.brdr}>
                                <Checkbox value={chemistry.TherapeuticDrugs['Phenobarbital']} checked={chemistry.TherapeuticDrugs['Phenobarbital']} checked={chemistry.TherapeuticDrugs['Carbamazepine']} onChange={handleTherapeuticDrugs} name="Phenobarbital" />
                                <td className={classes.brdr}>PHENOBARBITAL</td>
                            </tr>
                            <tr style={{ height: '46px' }} className={classes.brdr}>
                                <Checkbox value={chemistry.TherapeuticDrugs['ValproicAcid']} checked={chemistry.TherapeuticDrugs['ValproicAcid']} onChange={handleTherapeuticDrugs} name="ValproicAcid" />
                                <td className={classes.brdr}>VALPROIC ACID</td>
                            </tr>
                            <tr style={{ height: '46px' }} className={classes.brdr}>
                                <p></p>
                                <td className={classes.brdr} style={{ width: '100%' }}></td>
                            </tr>
                            <tr style={{ height: '46px' }} className={classes.brdr}>
                                <p></p>
                                <td className={classes.brdr} style={{ width: '100%' }}></td>
                            </tr>
                            <tr style={{ height: '46px' }} className={classes.brdr}>
                                <p></p>
                                <td className={classes.brdr} style={{ width: '100%' }}></td>
                            </tr>
                            <tr style={{ height: '46px' }} className={classes.brdr}>
                                <p></p>
                                <td className={classes.brdr} style={{ width: '100%' }}></td>
                            </tr>
                            <tr style={{ height: '46px' }} className={classes.brdr}>
                                <p></p>
                                <td className={classes.brdr} style={{ width: '100%' }}></td>
                            </tr>
                            <tr style={{ height: '46px' }} className={classes.brdr}>
                                <p></p>
                                <td className={classes.brdr} style={{ width: '100%' }}></td>
                            </tr>
                            <tr style={{ height: '46px' }} className={classes.brdr}>
                                <p></p>
                                <td className={classes.brdr} style={{ width: '100%' }}></td>
                            </tr>
                            <tr style={{ height: '46px' }} className={classes.brdr}>
                                <p></p>
                                <td className={classes.brdr} style={{ width: '100%' }}></td>
                            </tr>
                            <tr style={{ height: '46px' }} className={classes.brdr}>
                                <p></p>
                                <td className={classes.brdr} style={{ width: '100%' }}></td>
                            </tr>
                            <tr style={{ height: '46px' }} className={classes.brdr}>
                                <p></p>
                                <td className={classes.brdr} style={{ width: '100%' }}></td>
                            </tr>
                        </table>
                    </td>


                </tr>
            </table>
        </Grid>

    );
}

export default ChemTable;