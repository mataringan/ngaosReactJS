import React from "react";

export default function Footer() {
  return (
    <>
      <div className="p-10 md:p-14 text-white font-semibold text-center">
        <div className="md:p-14 sm:mt-10  md:-mb-28 md:flex bg-[#3B74CE] justify-around items-center p-4 rounded-lg">
          <div className="list-none leading-8">
            <li>
              <a href="">Tentang Ngaos</a>
            </li>
            <li>
              <a href="">Produk Kami</a>
            </li>
            <li>
              <a href="">Mitra Kami</a>
            </li>
            <li>
              <a href="">Hubungi Kami</a>
            </li>
          </div>
          <div className="list-none leading-8">
            <li>
              <a href="">Tata Kelola Perusahaan</a>
            </li>
            <li>
              <a href="">Laporan Tahunan</a>
            </li>
          </div>
          <div>
            <ul className="flex gap-5 mt-3 justify-center">
              <li>
                <a
                  href="https://www.facebook.com/ksp.berkahfamili.7"
                  target={"_blank"}
                >
                  <img
                    src={require("../assets/fb.png")}
                    alt=""
                    className="h-8 md:h-12 cursor-pointer"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/ngaos_kspberkahfamily/"
                  target={"_blank"}
                >
                  <img
                    src={require("../assets/ig.png")}
                    alt=""
                    className="h-8 md:h-12 cursor-pointer"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCklVvNekVl8ZY5OQB5eWfSA/featured"
                  target={"_blank"}
                >
                  <img
                    src={require("../assets/yt.png")}
                    alt=""
                    className="h-8 md:h-12 cursor-pointer"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://ngadimanngaos.wordpress.com/"
                  target={"_blank"}
                >
                  <img
                    src={require("../assets/www.png")}
                    alt=""
                    className="h-8 mb-3 md:h-12 cursor-pointer"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="p-10 md:p-14 -mt-7 md:-mt-0 text-white font-bold text-center">
        <div className="md:mt-6 md:h-16 h-20 flex items-center justify-center bg-[#f4d613]">
          <p>@ 2022 HAK CIPTA NGAOS KSP BERKAH FAMILY</p>
        </div>
      </div>
    </>
  );
}
