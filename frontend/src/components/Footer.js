import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between py-8">
          <div className="w-full md:w-1/4">
            <h5 className="font-bold mb-2">
              Experience Hassle-Free Online Shopping in Nepal with Shop
            </h5>
            <p className="mb-4">
              E-commerce has evolved over the past few years and since it’s
              easier and more convenient, it is evident that customers are
              actually switching to the trend of online shopping. Shop, the
              Nepali shopping store, brings a whole new concept by showcasing a
              number of famous brands under one roof. Not only does it fulfill
              clothing necessities of both men and women but you can also shop
              for all kinds of appliances like air conditioners, heaters,
              refrigerators, LED TVs and a lot more. Simply select your favorite
              brand like Samsung, Apple, HP, Huawei, Dell, Canon, Nikon, etc and
              get yourself the best electronic items.
            </p>

          </div>

          <div className="w-full md:w-1/4">
            <h5 className="font-bold mb-2">Top Categories & Brands</h5>
            <p className="mb-4">
              NEW MOBILE PHONES IN NEPAL Samsung Mobile Phones, Xiaomi Mobiles,
              Nokia Mobiles, Oppo Mobiles, Apple iPhones, OnePlus, Sony Mobiles,
              Huawei Mobiles, Lenovo Mobiles, Colors Mobiles, Gionee Mobiles,
              HTC Mobiles, Umidigi Mobiles, Tablets, Samsung Tablet, Mobile
              Accessories LATEST LAPTOPS Apple Laptops, Samsung Laptops, Asus
              Laptops, Acer Laptops, HP Laptops, Dell Laptops LED TVS PRICES
              Samsung LED TVs, Sony LED TVs, Videocon LED TVs SUMMER APPLIANCES
              Air Conditioners, Refrigerators & Fridges, Samsung Refrigerators,
              Deep Freezers, Generators & Portable Power, Water Dispensers
            </p>
          </div>

          <div className="w-full md:w-1/4">
          <h5 className="font-bold mb-2">
              Convenient Online Shopping in Nepal
            </h5>
            <p className="mb-4">
              Shop is the ultimate Nepali eCommerce website that offers a
              solution for all needs of the customers. It has a wide and
              assorted range of products including clothing, electronics, mobile
              phones, home and living, health and beauty and much more. Daraz
              strives to provide customers the best shopping experience in
              Nepal. The online store
            </p>

          </div>
        </div>
      </div>

      <div className="container mx-auto pt-8 pb-4">
      <p className="mb-4 text-center">Have a great time with us</p>
      <h5 className="font-bold mb-2 text-center">Follow us</h5>
      <ul className="footer-ul2-amrc flex justify-center gap-3 text-center mb-2">
        <li>
          <a href="#">
            <FaFacebook size={22} className="text-blue-500" />
          </a>
        </li>
        <li>
          <a href="#">
            <FaInstagram size={22} className="text-purple-500" />
          </a>
        </li>
        <li>
          <a href="#">
            <FaLinkedin size={22} className="text-indigo-500" />
          </a>
        </li>
        <li>
          <a href="#">
            <FaTwitter size={22} className="text-blue-400" />
          </a>
        </li>
      </ul>
      <p className="text-center text-gray-500">
        Copyright @2024 | Designed With by{" "}
        <a href="#" className="text-gray-500">
          Shop
        </a>
      </p>
    </div>
    </footer>
  );
};

export default Footer;
