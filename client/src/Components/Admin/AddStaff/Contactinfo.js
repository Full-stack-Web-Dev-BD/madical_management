import React from 'react';

const Contactinfo = (props) => {
  return (
    <div style={{ clear: 'both' }}>

      <div class="form-row" style={{ paddingTop: '20px' }}>
        <div class="form-group col-md-12">
          <input type="text" class="form-control" name="address" onChange={(e) => props.updateInfo(e)} required id="inputEmail4" placeholder="Street Address" />
        </div>
      </div>

      <div class="form-row">

        <div class="form-group col-md-4">

          <select id="inputState" class="form-control" name="zone" required onChange={(e) => props.updateInfo(e)}>
            <option disabled selected>Zone</option>
            <option>Anseba</option>
            <option >Debub</option>
            <option>Debubawi Keyhi Bahri</option>
            <option >Gash-barka</option>
            <option>Maakel</option>
            <option>Semenawi Keyhi Bahri</option>
          </select>
        </div>

        <div class="form-group col-md-4">
          <select id="inputState" class="form-control" name="subZone" required onChange={(e) => props.updateInfo(e)}>
            <option disabled selected>Sub Zone</option>
            <option>Adi-Tekelezan</option>
            <option >Asmat</option>
            <option>Elabered</option>
            <option >Geleb</option>
            <option>Habero</option>
            <option>Hagaz</option>
            <option>Halhal</option>
            <option >Hamelmalo</option>
            <option>Keren</option>
            <option >Adi-Keih</option>
            <option>Adi-Quala</option>
            <option>Areza</option>
            <option>Dbarwa</option>
            <option >Dekemhare</option>
            <option>Emi-Haily</option>
            <option >May-Aynee</option>
            <option>May-Mine</option>
            <option>Mendefera</option>
            <option >Segheneyti</option>
            <option>Senafe</option>
            <option>Tsorena</option>
            <option>Areta</option>
            <option >Assab</option>
            <option>DE-Denkalia</option>
            <option >Makelay Keyhi Bahri</option>
            <option>Agordat</option>
            <option>Barentu</option>
            <option >Dighe</option>
            <option>Forto</option>
            <option>Gogne</option>
            <option>Guluj</option>
            <option >Haycota</option>
            <option>Kerkebet</option>
            <option >Laelay Gash</option>
            <option>Logo AN</option>
            <option>Mensura</option>
            <option >Mogolo</option>
            <option>Mulki</option>
            <option >Sela</option>
            <option>Shambuko</option>
            <option>Tesseney</option>
            <option>Berikh</option>
            <option>Ghala Nefhi</option>
            <option >North East Asmara</option>
            <option>North West Asmara</option>
            <option >Serejeka</option>
            <option>South East Asmara</option>
            <option>South West Asmara</option>
            <option >Adobha</option>
            <option>Afabet</option>
            <option >Dahlak</option>
            <option>Foro</option>
            <option>Ghelaelo</option>
            <option >Ghindae</option>
            <option>Karora</option>
            <option >Massawa</option>
            <option>Nakfa</option>
            <option>Shieb</option>
          </select>
        </div>
        <div class="form-group col-md-4">
          <input type="text" class="form-control" name="village" placeholder="Village" onChange={(e) => props.updateInfo(e)} id="inputCity" required />
        </div>
      </div>


      <div class="form-row">
        <div class="form-group col-md-4">

          <input type="text" class="form-control" name="homeNumber" placeholder="Home Number" onChange={(e) => props.updateInfo(e)} id="inputCity" required />

        </div>
        <div class="form-group col-md-4">
          <input type="text" class="form-control" name="mobileNumber" placeholder="Mobile Number" onChange={(e) => props.updateInfo(e)} id="inputCity" required />

        </div>
        <div class="form-group col-md-4">
          <input type="text" class="form-control" name="email" placeholder="Email" onChange={(e) => props.updateInfo(e)} id="inputCity" required />

        </div>
      </div>


    </div>
  );
}

export default Contactinfo;