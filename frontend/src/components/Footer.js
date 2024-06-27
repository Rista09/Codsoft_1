import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between py-8">
          <div className="w-full md:w-1/4">
            <h5 className="font-bold mb-2">Find us</h5>
            <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            <p><i className="fas fa-map-marker-alt"></i> 9878/25 sec 9 rohini 35 </p>
            <p><i className="fas fa-phone"></i> +91-9999878398 </p>
            <p><i className="fas fa-envelope"></i> info@example.com </p>
          </div>


          <div className="w-full md:w-1/4">
            <h5 className="font-bold mb-2">Quick links</h5>
            <ul className="footer-ul-amrc">
              <li><a href="http://webenlance.com">Remove Background</a></li>
              <li><a href="http://webenlance.com">Shadows & Mirror Reflection</a></li>
              <li><a href="http://webenlance.com">Logo Design</a></li>
              <li><a href="http://webenlance.com">Vectorization</a></li>
              <li><a href="http://webenlance.com">Hair Masking/Clipping</a></li>
              <li><a href="http://webenlance.com">Image Cropping</a></li>
            </ul>
          </div>

          <div className="w-full md:w-1/4">
            <h5 className="font-bold mb-2">Follow us</h5>
            <ul className="footer-ul2-amrc">
              <li><a href="#"><i className="fab fa-twitter"></i></a>
                <p className="ml-2">Lorem Ipsum is simply dummy text of the printing... <a href="#">https://www.lipsum.com/</a></p>
              </li>
              <li><a href="#"><i className="fab fa-twitter"></i></a>
                <p className="ml-2">Lorem Ipsum is simply dummy text of the printing... <a href="#">https://www.lipsum.com/</a></p>
              </li>
              <li><a href="#"><i className="fab fa-twitter"></i></a>
                <p className="ml-2">Lorem Ipsum is simply dummy text of the printing... <a href="#">https://www.lipsum.com/</a></p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container mx-auto pt-8 pb-4">
        <ul className="foote-bottom-ul-amrc flex justify-center gap-4">
          <li><a href="http://webenlance.com">Home</a></li>
          <li><a href="http://webenlance.com">About</a></li>
          <li><a href="http://webenlance.com">Services</a></li>
          <li><a href="http://webenlance.com">Pricing</a></li>
          <li><a href="http://webenlance.com">Blog</a></li>
          <li><a href="http://webenlance.com">Contact</a></li>
        </ul>
        <p className="text-center text-gray-500">Copyright @2024 | Designed With by <a href="#" className="text-gray-500">Shop</a></p>

        <ul className="social_footer_ul flex justify-center mt-4">
          <li><a href="http://webenlance.com"><i className="fab fa-facebook-f"></i></a></li>
          <li><a href="http://webenlance.com"><i className="fab fa-twitter"></i></a></li>
          <li><a href="http://webenlance.com"><i className="fab fa-linkedin"></i></a></li>
          <li><a href="http://webenlance.com"><i className="fab fa-instagram"></i></a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
