import React,{useState,useEffect} from 'react';

const ResultFill = (props) => {

    const [result,setResult] = useState(props.data["Results"])
    console.log(props.data["Results"])
    useEffect(() => {
        
        console.log(props.data["Results"])
      
       
    }, [])
  
    return ( 
         
            <div style={{clear:'both'}}>
            <div class="form-row" style={{paddingTop:'20px'}}>
         <div class="form-group col-md-4">
         
         <p style={{fontWeight:'bold',fontSize:'15px'}}>Elements</p>
             </div>
         <div class="form-group col-md-4">
         
         
         <p style={{fontWeight:'bold',fontSize:'15px'}}>Normal Range</p>
         </div>
         
         <div class="form-group col-md-4">
         <p style={{fontWeight:'bold',fontSize:'15px'}}>Results</p>
         </div>
         </div>
         
         <div class="form-row">
         
         <div class="form-group col-md-4">
         
         <span style={{fontWeight:'bold',fontSize:'15px'}}>WBC * 10<sup>3</sup>µl</span>
         
         </div>
         <div class="form-group col-md-4">
         <span style={{fontWeight:'bold',fontSize:'15px'}}>4.0-9.0</span>
         </div>
         
         <div class="form-group col-md-4">
         <input type="text" class="form-control" name="resultWBC" value={props.data.Results['resultWBC']} onChange={(e)=>props.updateInfo(e)} placeholder="Result"  id="inputEmail4" />
         
         </div>
         </div>
         <div class="form-row">
             <div class="form-group col-md-4">
         
         <span style={{fontWeight:'bold',fontSize:'15px'}}>RBC * 10<sup>6</sup>µl</span>
         
         </div>
         <div class="form-group col-md-4">
         <span style={{fontWeight:'bold',fontSize:'15px'}}>4.0-6.0</span>
         </div>
         
         <div class="form-group col-md-4">
           
         <input type="text" class="form-control" name="resultRBC" value={props.data.Results['resultRBC']} id="inputEmail4" placeholder="Result" onChange={(e)=>props.updateInfo(e)}/>
         
         </div>
         </div>
         
         
         <div class="form-row">
         <div class="form-group col-md-4">
         
         <span style={{fontWeight:'bold',fontSize:'15px'}}>HGB g/dl</span>
         
         </div>
         <div class="form-group col-md-4">
         <span style={{fontWeight:'bold',fontSize:'15px'}}>12.5.0-16.0</span>
         </div>
         
         <div class="form-group col-md-4">
             
         <input type="text" class="form-control" name="resultHGB" value={props.data.Results['resultHGB']} id="inputEmail4" placeholder="Result" onChange={(e)=>props.updateInfo(e)}/>
         </div>
         </div>
         
         <div class="form-row">
         <div class="form-group col-md-4">
         
         <span style={{fontWeight:'bold',fontSize:'15px'}}>HCT%</span>
         
         </div>
         <div class="form-group col-md-4">
         <span style={{fontWeight:'bold',fontSize:'15px'}}>37-52</span>
         </div>
         
         <div class="form-group col-md-4">
             
         <input type="text" class="form-control" name="resultHCT" value={props.data.Results['resultHCT']} id="inputEmail4" placeholder="Result" onChange={(e)=>props.updateInfo(e)}/>
         </div>
         </div>
         
         <div class="form-row">
         <div class="form-group col-md-4">
         
         <span style={{fontWeight:'bold',fontSize:'15px'}}>MCV µ<sup>3</sup></span>
         
         </div>
         <div class="form-group col-md-4">
         <span style={{fontWeight:'bold',fontSize:'15px'}}>80-94</span>
         </div>
         
         <div class="form-group col-md-4">
             
         <input type="text" class="form-control" name="mcvResult" value={props.data.Results['mcvResult']}  id="inputEmail4" placeholder="Result" onChange={(e)=>props.updateInfo(e)}/>
         </div>
         </div>
         
         <div class="form-row">
         <div class="form-group col-md-4">
         
         <span style={{fontWeight:'bold',fontSize:'15px'}}>MCH Pg</span>
         
         </div>
         <div class="form-group col-md-4">
         <span style={{fontWeight:'bold',fontSize:'15px'}}>27-31</span>
         </div>
         
         <div class="form-group col-md-4">
             
         <input type="text" class="form-control" name="mchResult" value={props.data.Results['mchResult']} id="inputEmail4" placeholder="Result" onChange={(e)=>props.updateInfo(e)}/>
         </div>
         </div>
         
         <div class="form-row">
         <div class="form-group col-md-4">
         
         <span style={{fontWeight:'bold',fontSize:'15px'}}>MCHC%</span>
         
         </div>
         <div class="form-group col-md-4">
         <span style={{fontWeight:'bold',fontSize:'15px'}}>32-36</span>
         </div>
         
         <div class="form-group col-md-4">
             
         <input type="text" class="form-control" name="mchcResult" value={props.data.Results['mchcResult']} id="inputEmail4" placeholder="Result" onChange={(e)=>props.updateInfo(e)}/>
         </div>
         </div>
         
         <div class="form-row">
         <div class="form-group col-md-4">
         
         <span style={{fontWeight:'bold',fontSize:'15px'}}>ESR mm/hr</span>
         
         </div>
         <div class="form-group col-md-4">
         <span style={{fontWeight:'bold',fontSize:'15px'}}>&lt;20</span>
         </div>
         
         <div class="form-group col-md-4">
             
         <input type="text" class="form-control" name="esrResult" value={props.data.Results['esrResult']} id="inputEmail4" placeholder="Result" onChange={(e)=>props.updateInfo(e)}/>
         </div>
         </div>
         
         <div class="form-row">
         <div class="form-group col-md-4">
         
         <span style={{fontWeight:'bold',fontSize:'15px'}}>Retc%</span>
         
         </div>
         <div class="form-group col-md-4">
         <span style={{fontWeight:'bold',fontSize:'15px'}}>0.1-1.5</span>
         </div>
         
         <div class="form-group col-md-4">
             
         <input type="text" class="form-control" value={props.data.Results['retcResult']} name="retcResult"  id="inputEmail4" placeholder="Result" onChange={(e)=>props.updateInfo(e)}/>
         </div>
         </div>
         
         <div class="form-row">
         <div class="form-group col-md-4">
         
         <span style={{fontWeight:'bold',fontSize:'15px'}}>PLT*106/µ/</span>
         
         </div>
         <div class="form-group col-md-4">
         <span style={{fontWeight:'bold',fontSize:'15px'}}>150-450</span>
         </div>
         
         <div class="form-group col-md-4">
             
         <input type="text" class="form-control" value={props.data.Results['pltResult']} name="pltResult"  id="inputEmail4" placeholder="Result" onChange={(e)=>props.updateInfo(e)}/>
         </div>
         </div>
         
         <div class="form-row">
         <div class="form-group col-md-4">
         
         <span style={{fontWeight:'bold',fontSize:'15px'}}>BLT-TIME</span>
         
         </div>
         <div class="form-group col-md-4">
         <span style={{fontWeight:'bold',fontSize:'15px'}}>1-6</span>
         </div>
         
         <div class="form-group col-md-4">
             
         <input type="text" class="form-control" name="bltResult" value={props.data.Results['bltResult']} id="inputEmail4" placeholder="Result" onChange={(e)=>props.updateInfo(e)}/>
         </div>
         </div>
         
         <div class="form-row">
         <div class="form-group col-md-4">
         
         <span style={{fontWeight:'bold',fontSize:'15px'}}>CLT-TIME</span>
         
         </div>
         <div class="form-group col-md-4">
         <span style={{fontWeight:'bold',fontSize:'15px'}}>5-12</span>
         </div>
         
         <div class="form-group col-md-4">
             
         <input type="text" class="form-control" name="cltTime" value={props.data.Results['cltResult']} id="inputEmail4" placeholder="Result" onChange={(e)=>props.updateInfo(e)}/>
         </div>
         </div>
         
         <div class="form-row">
         <div class="form-group col-md-4">
         
         <span style={{fontWeight:'bold',fontSize:'15px'}}>PTsec</span>
         
         </div>
         <div class="form-group col-md-4">
         <span style={{fontWeight:'bold',fontSize:'15px'}}>-</span>
         </div>
         
         <div class="form-group col-md-4">
             
         <input type="text" class="form-control" name="ptSecResult" value={props.data.Results['ptSecResult']} id="inputEmail4" placeholder="Result" onChange={(e)=>props.updateInfo(e)}/>
         </div>
         </div>
         
         <div class="form-row">
         <div class="form-group col-md-4">
         
         <span style={{fontWeight:'bold',fontSize:'15px'}}>PTinr</span>
         
         </div>
         <div class="form-group col-md-4">
         <span style={{fontWeight:'bold',fontSize:'15px'}}>-</span>
         </div>
         
         <div class="form-group col-md-4">
             
         <input type="text" class="form-control" name="ptInrResult" value={props.data.Results['ptInrResult']} id="inputEmail4" placeholder="Result" onChange={(e)=>props.updateInfo(e)}/>
         </div>
         </div>
         
         <div class="form-row">
         <div class="form-group col-md-4">
         
         <span style={{fontWeight:'bold',fontSize:'15px'}}>PTT sec</span>
         
         </div>
         <div class="form-group col-md-4">
         <span style={{fontWeight:'bold',fontSize:'15px'}}>-</span>
         </div>
         
         <div class="form-group col-md-4">
             
         <input type="text" class="form-control" name="pttSecResult" value={props.data.Results['pttSecResult']} id="inputEmail4" placeholder="Result" onChange={(e)=>props.updateInfo(e)}/>
         </div>
         </div>
         
         <div class="form-row">
         <div class="form-group col-md-4">
         
         <span style={{fontWeight:'bold',fontSize:'15px'}}>Diff Count</span>
         
         </div>
         <div class="form-group col-md-4">
         <span style={{fontWeight:'bold',fontSize:'15px'}}>%</span>
         </div>
         
         <div class="form-group col-md-4">
             
         <input type="text" class="form-control" name="diffResult" value={props.data.Results['diffResult']} id="inputEmail4" placeholder="Result" onChange={(e)=>props.updateInfo(e)}/>
         </div>
         </div>
         
         <div class="form-row">
         <div class="form-group col-md-4">
         
         <span style={{fontWeight:'bold',fontSize:'15px'}}>Neutrophil Seg.</span>
         
         </div>
         <div class="form-group col-md-4">
         <span style={{fontWeight:'bold',fontSize:'15px'}}>54-62</span>
         </div>
         
         <div class="form-group col-md-4">
             
         <input type="text" class="form-control" name="neutrophilSegResult" value={props.data.Results['neutrophilSegResult']} id="inputEmail4" placeholder="Result" onChange={(e)=>props.updateInfo(e)}/>
         </div>
         </div>
         
         <div class="form-row">
         <div class="form-group col-md-4">
         
         <span style={{fontWeight:'bold',fontSize:'15px'}}>Neutrophil Band</span>
         
         </div>
         <div class="form-group col-md-4">
         <span style={{fontWeight:'bold',fontSize:'15px'}}>3-5</span>
         </div>
         
         <div class="form-group col-md-4">
             
         <input type="text" class="form-control" name="neutrophilBandResult" value={props.data.Results['neutrophilBandResult']} id="inputEmail4" placeholder="Result" onChange={(e)=>props.updateInfo(e)}/>
         </div>
         </div>
         
         <div class="form-row">
         <div class="form-group col-md-4">
         
         <span style={{fontWeight:'bold',fontSize:'15px'}}>Lymphocyte</span>
         
         </div>
         <div class="form-group col-md-4">
         <span style={{fontWeight:'bold',fontSize:'15px'}}>25-39</span>
         </div>
         
         <div class="form-group col-md-4">
             
         <input type="text" class="form-control" name="lymphocyteResult" value={props.data.Results['lymphocyteResult']} id="inputEmail4" placeholder="Result" onChange={(e)=>props.updateInfo(e)}/>
         </div>
         </div>
         
         <div class="form-row">
         <div class="form-group col-md-4">
         
         <span style={{fontWeight:'bold',fontSize:'15px'}}>Monocyte</span>
         
         </div>
         <div class="form-group col-md-4">
         <span style={{fontWeight:'bold',fontSize:'15px'}}>3-7</span>
         </div>
         
         <div class="form-group col-md-4">
             
         <input type="text" class="form-control" name="monocyteResult" value={props.data.Results['monocyteResult']} id="inputEmail4" placeholder="Result" onChange={(e)=>props.updateInfo(e)}/>
         </div>
         </div>
         
         <div class="form-row">
         <div class="form-group col-md-4">
         
         <span style={{fontWeight:'bold',fontSize:'15px'}}>Eosinophil</span>
         
         </div>
         <div class="form-group col-md-4">
         <span style={{fontWeight:'bold',fontSize:'15px'}}>1-3</span>
         </div>
         
         <div class="form-group col-md-4">
             
         <input type="text" class="form-control" name="eosinophilResult"  value={props.data.Results['eosinophilResult']} id="inputEmail4" placeholder="Result" onChange={(e)=>props.updateInfo(e)}/>
         </div>
         </div>
         
         <div class="form-row">
         <div class="form-group col-md-4">
         
         <span style={{fontWeight:'bold',fontSize:'15px'}}>Basophil</span>
         
         </div>
         <div class="form-group col-md-4">
         <span style={{fontWeight:'bold',fontSize:'15px'}}>0-0.75</span>
         </div>
         
         <div class="form-group col-md-4">
             
         <input type="text" class="form-control" name="basophilResult" value={props.data.Results['basophilResult']} id="inputEmail4" placeholder="Result" onChange={(e)=>props.updateInfo(e)}/>
         </div>
         </div>
         
         <div class="form-row">
         <div class="form-group col-md-4">
         
         <span style={{fontWeight:'bold',fontSize:'15px'}}>Hemo-parasite</span>
         
         </div>
         
         <div class="form-group col-md-8">
             
         <textarea type="text" class="form-control" name="hemoParasite" value={props.data.Results['hemoParasite']} id="inputEmail4" placeholder="" onChange={(e)=>props.updateInfo(e)}/>
         </div>
         </div>
         
         <div class="form-row">
         <div class="form-group col-md-4">
         
         <span style={{fontWeight:'bold',fontSize:'15px'}}>Cell Morphology</span>
         
         </div>
         
         <div class="form-group col-md-8">
             
         <textarea type="text" class="form-control" name="cellMorphology" value={props.data.Results['cellMorphology']} id="inputEmail4" placeholder="" onChange={(e)=>props.updateInfo(e)}/>
         </div>
         </div>
         
         <div class="form-row">
         <div class="form-group col-md-4">
         
         <span style={{fontWeight:'bold',fontSize:'15px'}}>Others</span>
         
         </div>
         
         <div class="form-group col-md-8">
             
         <textarea type="text" class="form-control" name="other" value={props.data.Results['other']} id="inputEmail4" placeholder="" onChange={(e)=>props.updateInfo(e)}/>
         </div>
         </div>
                 </div>
     );
}
 
export default ResultFill;