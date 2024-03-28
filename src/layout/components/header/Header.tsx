import { useState } from "react";
import { Menu } from "./menu/Menu";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Header() {
    const [isMenuOpened, setMenuOpened] = useState(false);

    const onClose = () => {
        setMenuOpened(false);
    }

    return (
        <header id="site-header" className="fixed top-0 flex w-100 p-6 z-30"> 
            <div className="container-fluid"> 
                <div className="site-header__left"> 
                <button onClick={() => setMenuOpened(!isMenuOpened)} className="hover:text-blue" aria-expanded="false" aria-label="MENU>"> 
                    <span className="icon"> 
                        <FontAwesomeIcon icon={faBars} />
                    </span> 
                </button> 
                </div>
            </div>
            {isMenuOpened && <Menu onClose={onClose} />}
        </header>
    );
}