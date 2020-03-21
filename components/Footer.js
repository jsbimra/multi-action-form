import React from 'react';
import './footer.scss';

class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="footer--container">

                <section className="footer-atas lozad" data-loaded="true" style={{ padding: '20px', minHeight: '60px', height: 'auto' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9 col-12 footer-bawah">
                                Thank you
                            </div>
                            <div className="col-md-3 col-12 copyright">© 2020 MDF</div>
                        </div>
                        {/* <div className="row">
                            <div className="col-md-4 col-12">
                               Footer Area 1
                            </div>
                            <div className="col-md-4 col-12">
                               Footer Area 2
                            </div>
                            <div className="col-md-4 col-12">
                               Footer Area 3
                            </div>
                        </div> */}
                    </div>
                </section>
                {/* <section id="bawah">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9 col-12 footer-bawah">
                                Thank you
                            </div>
                            <div className="col-md-3 col-12 copyright">© 2020 MDF</div>
                        </div>
                    </div>
                </section> */}
            </div >
        )
    }
}

export default Footer;