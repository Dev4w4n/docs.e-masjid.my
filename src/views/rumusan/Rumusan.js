import React from "react"
import { CImage } from '@coreui/react'

import rumusan1png from '../../assets/images/rumusan1.png'
import rumusan2png from '../../assets/images/rumusan2.png'

const Rumusan = () => {

    return(
        <div>
            <h1>Rumusan Sistem</h1>
            <hr />
            <p>
                Sistem E-Masjid.My mengandungi dua komponen, iaitu Web Awam Masjid dan Web AJK Masjid. 
            </p>

            <h2>Web Awam Masjid</h2>
            <p>
                Web Awam Masjid adalah digunakan untuk menyediakan informasi semasa tentang masjid kepada anak kariah.
            </p>
            <p>
                Ia juga boleh digunakan untuk mendapatkan maklumat dari anak kariah.
            </p>
            <p>
                Berikut adalah contoh paparan web awam masjid.
            </p>
            <div className="clearfix">
              <CImage align="center" rounded src={rumusan1png} fluid width={500} height={500} />
            </div>

            <br />
            <h2>Web AJK Masjid</h2>
            <p>
                Web AJK Masjid adalah digunakan oleh pihak masjid.
            </p>
            <p>
                Berikut adalah contoh paparan web AJK masjid.
            </p>
            <div className="clearfix">
              <CImage align="center" rounded src={rumusan2png} fluid width={500} height={500} />
            </div>
            <br />

            <div align="right" className="clearfix">
              <a href="#/akandatang">
                Seterusnya →
              </a>
            </div>

            <br />
        </div>
    )
}

export default Rumusan