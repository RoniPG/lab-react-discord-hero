import Image from "./Image";
import './Navbar.css';

function Navbar() {
    return (
        <>
            <div className="container">
                <Image src= "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/discord-logo-bg.png" alt="discord-logo"></Image>
                <Image src= "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-icon-bg.png" alt="menu-icon"></Image>
            </div>
        </>
    );
}

export default Navbar;