import React from 'react';

const TestingValues = (props) => {
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
<input type="text" class="form-control" name="resultWBC" onChange={(e)=>props.updateInfo(e)} placeholder="Result"  id="inputEmail4" />

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
  
<input type="text" class="form-control" name="resultRBC"  id="inputEmail4" placeholder="Result" onChange={(e)=>props.updateInfo(e)}/>

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
    
<input type="text" class="form-control" name="resultHGB"  id="inputEmail4" placeholder="Result" onChange={(e)=>props.updateInfo(e)}/>
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
    
<input type="text" class="form-control" name="resultHCT"  id="inputEmail4" placeholder="Result" onChange={(e)=>props.updateInfo(e)}/>
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
    
<input type="text" class="form-control" name="mcvResult"  id="inputEmail4" placeholder="Result" onChange={(e)=>props.updateInfo(e)}/>
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
    
<input type="text" class="form-control" name="mchResult"  id="inputEmail4" placeholder="Result" onChange={(e)=>props.updateInfo(e)}/>
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
    
<input type="text" class="form-control" name="mchcResult"  id="inputEmail4" placeholder="Result" onChange={(e)=>props.updateInfo(e)}/>
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
    
<input type="text" class="form-control" name="esrResult"  id="inputEmail4" placeholder="Result" onChange={(e)=>props.updateInfo(e)}/>
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
    
<input type="text" class="form-control" name="retcResult"  id="inputEmail4" placeholder="Result" onChange={(e)=>props.updateInfo(e)}/>
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
    
<input type="text" class="form-control" name="pltResult"  id="inputEmail4" placeholder="Result" onChange={(e)=>props.updateInfo(e)}/>
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
    
<input type="text" class="form-control" name="bltResult"  id="inputEmail4" placeholder="Result" onChange={(e)=>props.updateInfo(e)}/>
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
    
<input type="text" class="form-control" name="cltTime"  id="inputEmail4" placeholder="Result" onChange={(e)=>props.updateInfo(e)}/>
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
    
<input type="text" class="form-control" name="ptSecResult"  id="inputEmail4" placeholder="Result" onChange={(e)=>props.updateInfo(e)}/>
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
    
<input type="text" class="form-control" name="ptInrResult"  id="inputEmail4" placeholder="Result" onChange={(e)=>props.updateInfo(e)}/>
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
    
<input type="text" class="form-control" name="pttSecResult"  id="inputEmail4" placeholder="Result" onChange={(e)=>props.updateInfo(e)}/>
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
    
<input type="text" class="form-control" name="diffResult"  id="inputEmail4" placeholder="Result" onChange={(e)=>props.updateInfo(e)}/>
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
    
<input type="text" class="form-control" name="neutrophilSegResult"  id="inputEmail4" placeholder="Result" onChange={(e)=>props.updateInfo(e)}/>
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
    
<input type="text" class="form-control" name="neutrophilBandResult"  id="inputEmail4" placeholder="Result" onChange={(e)=>props.updateInfo(e)}/>
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
    
<input type="text" class="form-control" name="lymphocyteResult"  id="inputEmail4" placeholder="Result" onChange={(e)=>props.updateInfo(e)}/>
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
    
<input type="text" class="form-control" name="monocyteResult"  id="inputEmail4" placeholder="Result" onChange={(e)=>props.updateInfo(e)}/>
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
    
<input type="text" class="form-control" name="eosinophilResult"  id="inputEmail4" placeholder="Result" onChange={(e)=>props.updateInfo(e)}/>
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
    
<input type="text" class="form-control" name="basophilResult"  id="inputEmail4" placeholder="Result" onChange={(e)=>props.updateInfo(e)}/>
</div>
</div>

<div class="form-row">
<div class="form-group col-md-4">

<span style={{fontWeight:'bold',fontSize:'15px'}}>Hemo-parasite</span>

</div>

<div class="form-group col-md-8">
    
<textarea type="text" class="form-control" name="hemoParasite"  id="inputEmail4" placeholder="" onChange={(e)=>props.updateInfo(e)}/>
</div>
</div>

<div class="form-row">
<div class="form-group col-md-4">

<span style={{fontWeight:'bold',fontSize:'15px'}}>Cell Morphology</span>

</div>

<div class="form-group col-md-8">
    
<textarea type="text" class="form-control" name="cellMorphology"  id="inputEmail4" placeholder="" onChange={(e)=>props.updateInfo(e)}/>
</div>
</div>

<div class="form-row">
<div class="form-group col-md-4">

<span style={{fontWeight:'bold',fontSize:'15px'}}>Others</span>

</div>

<div class="form-group col-md-8">
    
<textarea type="text" class="form-control" name="other"  id="inputEmail4" placeholder="" onChange={(e)=>props.updateInfo(e)}/>
</div>
</div>
        </div>
     );
}
 
export default TestingValues;