import React from "react"
import { CImage, CLink } from '@coreui/react'

import intro1png from '../../assets/images/intro1.png'
import intro2png from '../../assets/images/intro2.png'
import intro3png from '../../assets/images/intro3.png'

const Pengenalan = () => {
    return (
        <div>
            <h1>Pengenalan</h1>
            <hr />
            <p>
                Selamat Datang ke laman web rujukan Sistem E-Masjid.My. 
                Di sini anda dapat mempelajari tentang sistem E-Masjid.My.
            </p>
            <p>
                Untuk mempelajari lebih lanjut tentang sistem E-Masjid.My, 
                anda perlu memahami cara untuk menggunakan laman web ini.
            </p>

            <h2>Cara mengguna laman web ini</h2>
            <hr />
            <h4>Komputer</h4>
            <p>
                Sekiranya anda menggunakan sebuah komputer, anda boleh menggunakan menu di sebelah kiri laman web ini, untuk pergi ke tutorial modul yang diingini.
            </p>
            <div className="clearfix">
              <CImage align="center" rounded src={intro1png} fluid width={500} height={500} />
            </div>
            <br />
            <h4>Peranti mudah alih</h4>
            <p>
              Sekiranya anda menggunakan peranti mudah alih, laman web ini akan diperkecilkan untuk menyesuaikan saiz paparan peranti anda.
            </p>
            <p>
              Untuk pergi ke tutorial yang diingini, anda boleh klik ke butang yang berada di sebelah atas kiri laman web ini.
            </p>
            <div align="center" className="clearfix">
              <CImage rounded src={intro2png} width={150} height={250} />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <CImage rounded src={intro3png} width={150} height={250} />
            </div>

            <br />

            <div align="right" className="clearfix">
              <CLink to="/dashboard">Seterusnya →</CLink>
            </div>

            <br />
        </div>
        )
        
}

export default Pengenalan