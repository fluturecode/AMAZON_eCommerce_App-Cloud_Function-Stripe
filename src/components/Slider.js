import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const fadeImages = [
	"https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020/TV/BRND/BRND_MTH20_00000_GWBleedingHero_1500x600_Final_en-US_PVD5529_B._CB406173267_.jpg",
	"https://images-na.ssl-images-amazon.com/images/G/01/sm/Evergreen_Shared/RebrandAssets/Sept2020/GW_Banner_1500x600_US_1x._CB404913951_.jpg",
	"https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2020/Marketing/012020_AMHD_Q1/US-EN_012020_AMUHD_Q1promo_OS_GW_Hero_D_1500x600_1X_CV2B._CB426550131_.jpg",
	"https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MTU0NGZhYWQt/MTU0NGZhYWQt-Mzc1NDBkNTct-w1500._CB405104207_.jpg",
	"https://images-na.ssl-images-amazon.com/images/G/01/img18/home/journeys/MTIzMTg1NGEt/MTIzMTg1NGEt-YzQzZjY0OGQt-w1500._CB404804090_.jpg",
	"https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MTU0NGZhYWQt/MTU0NGZhYWQt-Mzc1NDBkNTct-w1500._CB405104207_.jpg",
	"https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YjJkZWQ0NTgt/YjJkZWQ0NTgt-MWE1MmNlZDAt-w1500._CB406132032_.jpg",
	"https://images-na.ssl-images-amazon.com/images/G/01/IMDbTV/gateway/theoutpost/GW_DHERO_TheOutpost_1500x600_EN-US_5538_v2._CB407273330_.jpg",
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
					<div className="each-fade">
						<div className="image-container">
							<img src={fadeImages[3]} />
						</div>
					</div>
					<div className="each-fade">
						<div className="image-container">
							<img src={fadeImages[4]} />
						</div>
					</div>
					<div className="each-fade">
						<div className="image-container">
							<img src={fadeImages[5]} />
						</div>
					</div>
					<div className="each-fade">
						<div className="image-container">
							<img src={fadeImages[6]} />
						</div>
					</div>
					<div className="each-fade">
						<div className="image-container">
							<img src={fadeImages[7]} />
						</div>
					</div>
				</Fade>
			</div>
		</div>
	);
};

export default Slider;
