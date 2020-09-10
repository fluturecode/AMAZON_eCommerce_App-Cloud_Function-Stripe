import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<div className="home__row">
					<Product
						id="49038500"
						title="ASUS VivoBook 15 Thin and Light Laptop, 15.6” FHD, Intel Core i3-8145U CPU"
						price={541.0}
						rating={4}
						image="https://images-na.ssl-images-amazon.com/images/I/81mZ4eDWYkL._AC_SX679_.jpghttps://www.bhphotovideo.com/images/images2500x2500/samsung_c49hg90dmn_49_curved_va_panel_1345182.jpg"
					/>
					<Product
						id="23445930"
						title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
						price={98.99}
						rating={5}
						image="http://mobileimages.lowes.com/product/converted/841667/841667162096.jpg?size=pdhi"
					/>
					<Product
						id="32543543"
						title="New Apple iPad Pro (12.9-inch, WiFi, 128GB) - Silver (4th Generation"
						price={598.99}
						rating={4}
						image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202003?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1583552356577"
					/>
				</div>
				<div className="home__row">
					<Product
						id="39025829"
						title="Audio-Technica AT-LP120XUSB-BK Direct-Drive Turntable (Analog & USB)"
						price={249.0}
						image="https://images-na.ssl-images-amazon.com/images/I/81LDEgi0awL._AC_SX679_.jpg"
						rating={5}
					/>
					<Product
						id="33020829"
						title="Power Theory iPhone X/iPhone Xs Glass Screen Protector [2-Pack]"
						price={11.85}
						image="https://images-na.ssl-images-amazon.com/images/I/81wdDf6o-QL._AC_SL1500_.jpg"
						rating={2}
					/>
					<Product
						id="53634666"
						title="Edifier R1700BT Bluetooth Bookshelf Speakers - Active Near-Field Studio Monitors - Powered Speakers"
						price={149.99}
						image="https://images-na.ssl-images-amazon.com/images/I/71J1U2tVdYL._AC_SL1500_.jpg"
						rating={4}
					/>
					<Product
						id="09344829"
						title=" 49.2FT LED Strip Lights, QZYL Lights Strip Music Sync, App Control with Remote"
						price={13.76}
						image="https://images-na.ssl-images-amazon.com/images/I/81lmAL14poL._AC_SL1500_.jpg"
						rating={3}
					/>
				</div>
				<div className="home__row">
					<Product
						id="49453968"
						title=" Sceptre 30-Inch 21: 9 Curved Creative Monitor C305W-2560UN 2560x1080p Ultra Wide Ultra Slim HDMI DisplayPort Up to 85Hz Mprt 1ms FPS-RTS Build-in Speakers, Machine Black 2020"
						price={228.87}
						image="https://images-na.ssl-images-amazon.com/images/I/81uNJ%2B-LyJL._AC_SL1500_.jpg"
						rating={5}
					/>
					<Product
						id="90829332"
						title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
						price={1094.98}
						rating={4}
						image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
					/>
				</div>
			</div>
		</div>
	);
}
export default Home;
