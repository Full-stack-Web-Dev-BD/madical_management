import React, { useState } from 'react'

const ZoneSelection = ({ updateInfo }) => {
    const [subZone, setsubZone] = useState([])
    const switchZone = (e) => {
        updateInfo(e)
        var subzones = {
            Anseba: ["Adi-Tekelezan", "Asmat", "Elabered", "Geleb", "Habero", "Hagaz", "Halhal", "Hamelmalo", "Keren"],
            Debub: ["Adi-Keih", "Adi-Quala", "Areza", "Dbarwa", "Dekemhare", "Emi-Haily", "May-Aynee", "May-Mine", "Mendefera", "Segheneyti", "Senafe", "Tsorena"],
            Debubawi_Keyhi_Bahri: ["Areta", "Assab", "DE-Denkalia", "Makelay Keyhi Bahri"],
            Gash_Barka: ["Agordat", "Barentu", "Dighe", "Forto", "Gash Barka Village", "Gogne", "Guluj", "Haycota", "Kerkebet", "Laelay Gash", "Logoanseba", "Mensura", "Megolo", "Molqi", "Sela", "Shambqo", "Tesseney"],
            Maekel: ["Aba Shawil", "Akriya", "Arbate-Asmara", "Idaga Hamus", "Gejeret", "Godaif", "Mai Temenai", "Paradizo", "Sembel", "Travelo", "Berik", "Gala Nefhi", "Serejeka"],
            Semenawi_Keyhi_Bahri: ["Adobha", "Afabet", "Dahlak", "Foro", "Ghelaelo", "Ghindae", "Karora", "Massawa", "Nakfa", "Shieb"]
        }

        if (e.target.value === "Anseba") {
            setsubZone(subzones.Anseba)
        } else if (e.target.value === "Debub") {
            setsubZone(subzones.Debub)
        } else if (e.target.value === "Debubawi Keyhi Bahri") {
            setsubZone(subzones.Debubawi_Keyhi_Bahri)
        } else if (e.target.value === "Gash-barka") {
            setsubZone(subzones.Gash_Barka)
        } else if (e.target.value === "Maakel") {
            setsubZone(subzones.Maekel)
        } else if (e.target.value === "Semenawi Keyhi Bahri") {
            setsubZone(subzones.Semenawi_Keyhi_Bahri)
        }
    }
    return (

        <div class="form-row">

            <div class="form-group col-md-4">
                <input type="text" class="form-control" name="village" required id="inputEmail4" onChange={(e) => updateInfo(e)} placeholder="Village" />
            </div>
            <div class="form-group col-md-4">
                <select id="inputState" class="form-control" name="zone" onChange={(e) => switchZone(e)} required >
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
                <select id="inputState" class="form-control" name="subZone" required onChange={(e) => updateInfo(e)}>
                    <option disabled selected>Sub Zone</option>
                    {
                        subZone.map(single => {
                            return (
                                <option>{single}</option>
                            )
                        })
                    }
                </select>
            </div>
        </div>

    )
}

export default ZoneSelection
