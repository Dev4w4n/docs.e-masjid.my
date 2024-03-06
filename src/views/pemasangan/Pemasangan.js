import React from "react"

const Pemasangan = () => {

    return (
        <div>
            <h1>Pemasangan Sistem</h1>
            <hr />
            <p>
               Terdapat 2 kaedah untuk memasang sistem E-Masjid.My untuk masjid/surau anda.
            </p>

            <h2>Kaedah 1</h2>
            <p>
                Cara termudah untuk memasang sistem ini ialah dengan mendaftar akaun bersama E-Masjid.My.
            </p>
            <p>
                Klik 'Daftar akaun percuma' di web <a target='_blank' rel="noreferrer" href="https://e-masjid.my">E-Masjid.My</a>
            </p>
            <p>
                Setelah berdaftar dengan E-Masjid.My, anda akan menerima URL masjid, login dan kata laluan.
            </p>
            <p>
                URL masjid anda akan kelihatan seperti, <i>https://nama-masjid.e-masjid.my</i>
            </p>
            <p>
                Dengan kaedah ini, hak data akan dimiliki sepenuhnya oleh E-Masjid.My.
            </p>

            <br />

            <h2>Kaedah 2</h2>
            <p>
                Jika anda mahir bidang IT, anda boleh memasang sistem ini ke server anda sendiri.
            </p>
            <p>
                Kod aturcara penuh boleh didapatkan secara percuma di <a target='_blank' rel="noreferrer" href="https://github.com/Dev4w4n/e-masjid.my">Github E-Masjid.My</a>
            </p>
            <p>
                Dengan kaedah ini, hak data akan dimiliki oleh anda sepenuhnya.
            </p>
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

export default Pemasangan