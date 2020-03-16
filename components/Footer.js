import React from 'react';
import './footer.scss';

class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="footer--container">
                <section className="footer-atas lozad" data-loaded="true">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 paddingright80">
                                <div className="ftitle">
                                    PT XL Axiata Tbk
                            </div>
                                <div className="fkonten">
                                    Kav 11 Kav X-2 5 Jalan Haji R. Rasuna Said No.5 RT.7/RW.2 Kuningan, Kuningan Tim., Kota Jakarta
                                    Selatan, Daerah Khusus Ibukota Jakarta 12950</div>
                                <div className="fkontenphone">
                                    (021) 5761881</div>
                            </div>
                            <div className="col-md-4 col-7 borderSamping">
                                <div className="ftitle">Connect with us</div>
                                <div className="fkonten">
                                    <ul className="sosmed">
                                        <li>
                                            <a href="https://www.youtube.com/user/xlaxiata" target="_blank"><img className="lozad" src="https://d17e22l2uh4h4n.cloudfront.net/corpweb/pub-xlaxiata/2019-05/social-media_youtube.png" width="100%" alt="" data-loaded="true" /></a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/myXL" target="_blank"><img className="lozad" src="https://d17e22l2uh4h4n.cloudfront.net/corpweb/pub-xlaxiata/2018-12/social%20media_twitter.png" width="100%" alt="" data-loaded="true" /></a>
                                        </li>
                                        <li>
                                            <a href="https://web.facebook.com/myXL/" target="_blank"><img className="lozad" src="https://d17e22l2uh4h4n.cloudfront.net/corpweb/pub-xlaxiata/2018-12/social%20media_facebook.png" width="100%" alt="" data-loaded="true" /></a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/myxl/" target="_blank"><img className="lozad" src="https://d17e22l2uh4h4n.cloudfront.net/corpweb/pub-xlaxiata/2018-12/social%20media_instagram.png" width="100%" alt="" data-loaded="true" /></a>
                                        </li>
                                    </ul>
                                </div>
                                <div style={{clear: 'both'}}></div>
                                <div className="ftitle martop40">Visit us</div>
                                <div className="fkonten">
                                    <ul className="sosmed">
                                        <li>
                                            <a href="#" target="_blank"><img className="lozad" src="https://d17e22l2uh4h4n.cloudfront.net/corpweb/pub-xlaxiata/2019-05/social-media_youtube.png" width="100%" alt="" data-loaded="true" /></a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank"><img className="lozad" src="https://d17e22l2uh4h4n.cloudfront.net/corpweb/pub-xlaxiata/2018-12/social%20media_twitter.png" width="100%" alt="" data-loaded="true" /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4 col-5 paddingleft80">
                                <div className="ftitle">Quick Link</div>
                                <div className="fkonten">
                                    <ul className="quick">
                                        {/* <li><a href="#" target="_blank">XL Store</a></li>
                                        <li><a href="#" target="_blank">Payment Billing</a></li>
                                        <li><a href="#" target="_blank">Career</a></li>
                                        <li><a href="#" target="_blank">FAQ</a></li> */}
                                        <li><a href="https://www.xl.co.id/id/bantuan/xlcenter-lokasi" target="_blank">XL Center</a></li>
                                        <li><a href="https://www.xl.co.id/id/bantuan" target="_blank">Help</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="bawah">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9 col-12 footer-bawah">
                                <ul>
                                    {/* <li>
                                        <a href="#" target="_blank">Sitemap</a>
                                    </li> */}
                                    <li>
                                        <a href="https://www.xl.co.id/id/syarat-dan-ketentuan" target="_blank">Term &amp; Conditions</a>
                                    </li>
                                    <li>
                                        <a href="https://www.xl.co.id/id/kebijakan-privasi" target="_blank">Privaci Policy</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-12 copyright">© 2018 PT XL Axiata Tbk.</div>
                        </div>
                    </div>
                </section>
            </div >
        )
    }
}

export default Footer;