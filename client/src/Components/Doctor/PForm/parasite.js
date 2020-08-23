import React from 'react';

const Parasite = (props) => {
    return (  
        <div>
            
<div class="form-row">
    <div class="form-group col-md-12"> 
<h3 style={{fontWeight:'bold',fontSize:'20px'}}>Stool Parasite</h3>
</div>
<div class="form-group col-md-4">

<span style={{fontWeight:'bold',fontSize:'15px'}}>Appearance & Consistency</span>

</div>

<div class="form-group col-md-8">
    
<textarea type="text" class="form-control" name="hemoParasite" required id="inputEmail4" placeholder="" onChange={(e)=>props.updateInfo(e)}/>
</div>
</div>


<div class="form-row">
<div class="form-group col-md-4">

<span style={{fontWeight:'bold',fontSize:'15px'}}>Occult Blood</span>

</div>

<div class="form-group col-md-8">
    
<input type="text" class="form-control" name="occultBlood" required id="inputEmail4" placeholder="Occult Blood" onChange={(e)=>props.updateInfo(e)}/>
</div>
</div>

<div class="form-row">
<div class="form-group col-md-4">

<span style={{fontWeight:'bold',fontSize:'15px'}}>Ova/Parasite</span>

</div>

<div class="form-group col-md-8">
    
<textarea type="text" class="form-control" name="hemoParasite" required id="inputEmail4" placeholder="" onChange={(e)=>props.updateInfo(e)}/>
</div>
</div>


<div class="form-row">
<div class="form-group col-md-12"> 
<h3 style={{fontWeight:'bold',fontSize:'20px',paddingTop:'20px',paddingBottom:'20px'}}>Blood and Tissue Parasites</h3>
</div>
<div class="form-group col-md-4">

<span style={{fontWeight:'bold',fontSize:'15px'}}>Hemo-parasite</span>

</div>

<div class="form-group col-md-8">
    
<textarea type="text" class="form-control" name="hemoParasite" required id="inputEmail4" placeholder="" onChange={(e)=>props.updateInfo(e)}/>
</div>
</div>
<div class="form-row">
<div class="form-group col-md-4">

<span style={{fontWeight:'bold',fontSize:'15px'}}>Leishmania Donovani</span>

</div>

<div class="form-group col-md-8">
    
<input type="text" class="form-control" name="hemoParasite" required id="inputEmail4" placeholder="Leishmania Donovani" onChange={(e)=>props.updateInfo(e)}/>
</div>
</div>
<div class="form-row">
<div class="form-group col-md-4">

<span style={{fontWeight:'bold',fontSize:'15px'}}>Leishmania Tropica</span>

</div>

<div class="form-group col-md-8">
    
<input type="text" class="form-control" name="hemoParasite" required id="inputEmail4" placeholder="Leishmania Tropica" onChange={(e)=>props.updateInfo(e)}/>
</div>
</div>
<div class="form-row">
<div class="form-group col-md-4">

<span style={{fontWeight:'bold',fontSize:'15px'}}>Onchosercus volvulus</span>

</div>

<div class="form-group col-md-8">
    
<input type="text" class="form-control" name="hemoParasite" required id="inputEmail4" placeholder="Onchosercus volvulus" onChange={(e)=>props.updateInfo(e)}/>
</div>
</div>
<div class="form-row">
<div class="form-group col-md-4">

    <span style={{fontWeight:'bold',fontSize:'15px'}}>Onchosercus</span>

</div>

<div class="form-group col-md-8">
    
<input type="text" class="form-control" name="hemoParasite" required id="inputEmail4" placeholder="Onchosercus" onChange={(e)=>props.updateInfo(e)}/>
</div>
</div>

<div class="form-row">
<div class="form-group col-md-4">

    <span style={{fontWeight:'bold',fontSize:'15px'}}>Others(Please Specify)</span>

</div>

<div class="form-group col-md-8">
    
<input type="textarea" class="form-control" name="hemoParasite" required id="inputEmail4" placeholder="" onChange={(e)=>props.updateInfo(e)}/>
</div>
</div>

        </div>
    );
}
 
export default Parasite;