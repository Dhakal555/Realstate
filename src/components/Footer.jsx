import React from 'react';
import Icon from '../images/icon.png';
import Footerimg from '../images/footerimage.png';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


const Footer = () => {
    return (
        <>  
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gt-4">
                        <h3 className="text-center pt-4 pb-2">Contact Us</h3> 
                        <p className="text-center contact-links"> 
                            <a className="m-2" href="https://twitter.com/" target="_blank"><TwitterIcon /></a>
                            <a className="m-2" href="https://twitter.com/" target="_blank"><FacebookIcon /></a>
                            <a className="m-2" href="https://twitter.com/" target="_blank"><InstagramIcon /></a>
                            <a className="m-2" href="https://twitter.com/" target="_blank"><MailIcon /></a>
                            <a className="m-2" href="https://twitter.com/" target="_blank"><LinkedInIcon /></a>
                        </p>
                        <p className="text-center"></p>
                    </div>
                </div>
            </div>
        </div>
        <p className="text-center"> <img src={Icon} className="card-img-top icon-image" alt="Icon image" /> &copy; GharJagga.com | All Rights Reserved | Rupesh Dhakal.</p>     
        <img src={Footerimg} className="card-img-top footer-image" alt="footer image" />
        </>
    )
}

export default Footer;