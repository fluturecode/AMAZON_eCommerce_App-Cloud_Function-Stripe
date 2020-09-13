import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const fadeImages = [
	"https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MTc0Y2M5Y2Mt/MTc0Y2M5Y2Mt-ZTMzMTk5Yjct-w1500._CB406837584_.jpg",
	"https://images-na.ssl-images-amazon.com/images/G/01/img18/home/journeys/MTIzMTg1NGEt/MTIzMTg1NGEt-YzQzZjY0OGQt-w1500._CB404804090_.jpg",
	"https://images-na.ssl-images-amazon.com/images/G/01/ape/static/fallback/US_CENTER_PROMO_BACKUP._CB1578606135_.jpg",
	"https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YjJkZWQ0NTgt/YjJkZWQ0NTgt-MWE1MmNlZDAt-w1500._CB406132032_.jpg",
];

const Slider = () => {
	return (
		<div className="slider">
			<div className="slide-container">
				<Fade>
					<div className="each-fade">
						<div className="image-container">
							<img src={fadeImages[0]} />
						</div>
					</div>
					<div className="each-fade">
						<div className="image-container">
							<img src={fadeImages[1]} />
						</div>
					</div>
					<div className="each-fade">
						<div className="image-container">
							<img src={fadeImages[2]} />
						</div>
					</div>
				</Fade>
			</div>
		</div>
	);
};

export default Slider;
