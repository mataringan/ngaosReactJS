import React from "react";
import { Card } from "flowbite-react";
import Carou from "../components/Carousel";

export default function Home() {
  return (
    <div className="box-border mb-96">
      <Carou />
      <div className="card p-3 md:flex md:justify-between md:p-14 md:gap-10">
        <div className="max-w-sm mx-auto md:mx-0 mt-7">
          <Card imgSrc={require("../assets/rice-6739554.jpg")}>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Sejarah Kami
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
              saepe similique odio autem cupiditate eius ab repellat quibusdam
              molestiae aliquam?
            </p>
          </Card>
        </div>
        <div className="max-w-sm mx-auto md:mx-0  mt-7">
          <Card imgSrc={require("../assets/landscape-6681586.jpg")}>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Wilayah Kerja
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
              saepe similique odio autem cupiditate eius ab repellat quibusdam
              molestiae aliquam?
            </p>
          </Card>
        </div>
        <div className="max-w-sm mx-auto md:mx-0 md:mt-24 text-center  mt-7">
          <h1 className="text-[30px] font-semibold">
            Lebih dari 7 tahun berdiri, kami bangga menjadi{" "}
            <span className="font-bold italic">"Pasarnya Petani"</span>
          </h1>
          <div className="w-40 h-10 mt-10 p-2 rounded-md text-center bg-[#FFE64C] font-bold mx-auto cursor-pointer">
            <p>TENTANG NGAOS</p>
          </div>
        </div>
      </div>
      <div className="p-3">
        <div className="md:p-14 mt-10 sm:mt-10 md:-mt-9 md:-mb-28">
          <h1 className="text-center font-bold text-2xl mb-2">Produk Kami</h1>
          <h3 className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            minima quisquam error, suscipit esse ducimus, unde reiciendis
            assumenda repellendus, beatae minus ea ad deleniti. Fuga dolore
            excepturi obcaecati modi voluptate.
          </h3>
        </div>
        <div className="card md:flex md:justify-between md:p-14 md:gap-10">
          <div className="max-w-sm mx-auto md:mx-0 mt-7">
            <Card imgSrc={require("../assets/rice-6739554.jpg")}>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                BENIH PADI
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
                saepe similique odio autem cupiditate eius ab repellat quibusdam
                molestiae aliquam?
              </p>
            </Card>
          </div>
          <div className="max-w-sm mx-auto md:mx-0  mt-7">
            <Card imgSrc={require("../assets/vegetables-3017412.jpg")}>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                SAYURAN
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
                saepe similique odio autem cupiditate eius ab repellat quibusdam
                molestiae aliquam?
              </p>
            </Card>
          </div>
          <div className="max-w-sm mx-auto md:mx-0  mt-7">
            <Card imgSrc={require("../assets/rice-498688.jpg")}>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                BERAS
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
                saepe similique odio autem cupiditate eius ab repellat quibusdam
                molestiae aliquam?
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
