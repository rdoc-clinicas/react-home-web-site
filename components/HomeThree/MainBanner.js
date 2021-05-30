import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    items:1,
    loop:true,
    nav:false,
    mouseDrag: true,
    dots: true,
    autoplay: true,
    autoplayHoverPause: true,
};

const MainBanner = () => {
    // Slider
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    // Popup Video
	const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <div className="hero-slider-area">
                {display ? <OwlCarousel
                    className="hero-slider-wrap owl-carousel owl-theme"
                    {...options}
                >
                    <div className="slider-item slider-item-bg-1">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-lg-9">
                                            <div className="slider-text one">
                                                <h1>Centro Médico especializado en tratamiento y prevención de enfermedades modernas</h1>
                                                <p>
                                                    Las enfermedades modernas son producidas por un ritmo de vida vertiginoso, mala dieta, stress constante y una sociedad que atraviesa situaciones complejas que afectan
                                                    nuestra forma de pensar, sentir y vivir. Nuestra salud mental, física y familiar es lo más valioso que tenemos como personas. Te acompañaremos a mejorar tu calidad de vida día a día por un futuro más sano y feliz.
                                                </p>

                                                <div className="slider-btn">
                                                    <Link href="/appointment">
                                                        <a className="default-btn">
                                                            Solicitar turno
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-3">
                                            <div
                                                onClick={e => {e.preventDefault(); openModal()}}
                                                className="video-btn popup-youtube"
                                            >
                                                <i className="flaticon-play-button-2"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="slider-item slider-item-bg-2">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-lg-9">
                                            <div className="slider-text two">
                                                <h1>Salud y tecnología</h1>
                                                <p>
                                                    Nuestra misión es contribuir a mejorar la calidad de vida de nuestros pacientes a través de la educación, prevención y tratamiento de enfermedades como
                                                    <ul>
                                                        <li>Diabetes</li>
                                                        <li>Hipertensión</li>
                                                        <li>Problemas Cardiovasculares</li>
                                                        <li>Stress</li>
                                                        <li>Obesidad</li>
                                                        <li>Tabaquismo</li>
                                                        <li>Trastornos del sueño</li>
                                                    </ul>
                                                </p>
                                                <p>
                                                    Combinamos las mejores prácticas médicas con modernas tecnologías digitales para ofrecer un servicios de salud <strong>personalizados, efectivos y a precios accesibles</strong>.
                                                </p>
                                                <div className="slider-btn">
                                                    <Link href="/appointment">
                                                        <a className="default-btn">
                                                            Solicitar turno
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-3">
                                            <div
                                                onClick={e => {e.preventDefault(); openModal()}}
                                                className="video-btn popup-youtube"
                                            >
                                                <i className="flaticon-play-button-2"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="slider-item slider-item-bg-3">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-lg-9">
                                            <div className="slider-text two">
                                                <h1>Free Health Checkup Ensure A Better Life!</h1>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil architecto laborum eaque! Deserunt maxime, minus quas molestiae reiciendis esse natus nisi iure.</p>

                                                <div className="slider-btn">
                                                    <Link href="/appointment">
                                                        <a className="default-btn">
                                                            Solicitar turno
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-3">
                                            <div
                                                onClick={e => {e.preventDefault(); openModal()}}
                                                className="video-btn popup-youtube"
                                            >
                                                <i className="flaticon-play-button-2"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel> : ''}
            </div>
        </>
    )
}

export default MainBanner;
