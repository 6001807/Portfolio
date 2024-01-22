import { forwardRef, useRef, useState } from "react";
import Experiencebedrijf from "./Experiencebedrijf";
import Experiencedoelen from "./Experiencedoelen";
import Experienceinleiding from "./Experienceinleiding";
import Experienceprojecten from "./Experienceprojecten";
import Experiencereflectie from "./Experiencereflectie";
import Experienceme from "./Experienceme";

const Experience = forwardRef((propTypes, ref) => {
    const [component, setComponent] = useState(Experienceme);

    const handleClick = (name) => {
        setComponent(name);
    };

    return ( 
        <div ref={ref} className="about-main">
            <div className="buttons">
                <button onClick={() => {
                    handleClick(Experienceme)}
                } className="infobuttons" id="test">Wie ben ik?</button>
                <button onClick={() => {
                    handleClick(Experienceinleiding)}
                } className="infobuttons">Inleiding</button>
                <button onClick={() => {
                    handleClick(Experiencebedrijf)}
                } className="infobuttons">Bedrijf</button>
                <button onClick={() => {
                    handleClick(Experiencedoelen)}
                } className="infobuttons">Doelen</button>
                <button onClick={() => {
                    handleClick(Experienceprojecten)}
                } className="infobuttons">Projecten</button>
                <button onClick={() => {
                    handleClick(Experiencereflectie)}
                } className="infobuttons">Reflectie</button>
            </div>
            <div className="infosheet">
                { component }    
            </div>  
        </div>
    );
})
 
export default Experience;