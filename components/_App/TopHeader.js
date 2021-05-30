import React from 'react';

const TopHeader = () => {
    return (
        <div className="top-header-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-8 col-md-9 col-sm-6">
                        <ul className="header-content-left">
                            <li>
                                <i className="bx bx-time"></i>
                                Lunes a Sábado 9am-8pm
                            </li>
                            <li>
                                <a href="tel:+5491158256997">
                                    <i className="bx bx-phone-call"></i>
                                    Llámenos: +5491158256997
                                </a>
                            </li>
                            <li>
                                <a href="mailto:info@tech-medical.ar">
                                    <i className="bx bxs-paper-plane"></i>
                                    Email: info@tech-medical.ar
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-4 col-md-3 col-sm-6">
                        <ul className="header-content-right">
                            <li>
                                <a href="#" target="_blank">
                                    <i className="bx bxl-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank">
                                    <i className="bx bxl-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank">
                                    <i className="bx bxl-pinterest-alt"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank">
                                    <i className="bx bxl-instagram"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeader;
