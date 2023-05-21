import blueOLXLogo from '../../images/blue-olx-logo.png';
import motorsIcon from '../../images/icons8-car-16.png';
import propertyIcon from '../../images/icons8-building-16.png';
import blackOLXLogo from '../../images/olx-logo-new.png';
import dropDownIcon from '../../images/dropdownicon.png';
import './Header.css';

export default function Header( {setParentState} ) {
    return (
        <div id="header">
			<div id="logobar">
				<a href=""><img src={blueOLXLogo} alt="OLX logo" id="olxlogo" /></a>
				<ul>
					<li> <a href="https://www.olx.com.pk/motors/"> <img src={motorsIcon} alt="car icon" /> MOTORS</a> </li>
					<li> <a href="https://www.olx.com.pk/properties/" id="building"> <img src={propertyIcon} alt="property icon" /> PROPERTY</a> </li>
				</ul>
			</div>
			<div id="searchbar">
				<img src={blackOLXLogo} alt="Main OLX logo" height="40" width='65' id="mainolxlogo" />
				<input type="search" class="icon1" value="Pakistan" id="searchbox1" />
				<input type="search" id="searchbox2" placeholder="Find Cars, Mobile Phones and more..." />
				<a href="#login" onClick={ () => setParentState(true) }>Login</a>
				<input type="button" value="SELL" title="Sell" id="sellbutton"/>
			</div>
            <div id="navbar">
			<nav>
				<ul>
					<li id="firstitem"> <a href="#all_categories">All categories</a> </li>
					<li id="seconditem"> <a href="#all_categories"><img src={dropDownIcon} alt="\/" /></a> </li>
					<li> <a href="https://www.olx.com.pk/mobile-phones_c1453">Mobile Phones</a> </li>
					<li> <a href="https://www.olx.com.pk/cars_c84">Cars</a> </li>
					<li> <a href="https://www.olx.com.pk/motorcycles_c81">Motorcycles</a> </li>
					<li> <a href="https://www.olx.com.pk/houses_c1721">Houses</a> </li>
					<li> <a href="https://www.olx.com.pk/tv-video-audio_c729">TV - Video - Audio</a> </li>
					<li> <a href="https://www.olx.com.pk/tablets_c1455">Tablets</a> </li>
					<li> <a href="https://www.olx.com.pk/land-plots_c40">Lands & Plots</a> </li>
				</ul>
			</nav>
		</div>
		</div> 
    );
}


