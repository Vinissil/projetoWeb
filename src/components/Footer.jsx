import {} from 'react';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";



function Footer() {

  return (
    <>
    <container className="footerContainer">
      <h5 className='footer'>@2024-todos os direitos reservados.</h5>
      <div className='div-icons'>
        <a href="https://www.facebook.com/"><FaSquareFacebook className='icons'/></a>
        <a href="https://www.instagram.com/"><FaInstagram className='icons'/></a>
        <a href="https://linkedin.com"><FaLinkedin className='icons'/></a>
        <a href="https://gmail.com"><MdEmail className='icons'/></a>
      </div>
    </container>
    </>
  );
}
export default Footer;
