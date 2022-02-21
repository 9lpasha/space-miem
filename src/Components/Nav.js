import './Nav.css';
import NavElement from "./NavElement";
import {useEffect, useRef, useState} from "react";

function Nav({store, currentMenu, updateCurrentMenu}) {
    let NavElementCurrent = useRef(null)
    let NavLineCurrent = useRef(null)

    let [NavLine, setNavLine] = useState({
        width: '',
        top: '',
        left: ''
    })

    let navEls = store.map((el, i) => <NavElement updateCurrentMenu={updateCurrentMenu} refLine={NavLineCurrent} iter={i} key={i} name={store[i]}></NavElement>)

    let updateNavLine = ((currentMenu) => {
        setNavLine({
            width: NavElementCurrent.current.children[currentMenu].clientWidth + 'px',
            top: NavElementCurrent.current.children[currentMenu].offsetTop + 32 + 'px',
            left: NavElementCurrent.current.children[currentMenu].offsetLeft + 'px'
        })
    })

    useEffect(() => {
        updateNavLine(currentMenu)
        console.log(NavLine)
        window.addEventListener('resize', () => document.querySelector('.LineUnderOnePoint').style.left = NavElementCurrent.current.children[currentMenu].offsetLeft + 'px')
    }, [NavElementCurrent, currentMenu])


    return (
        <div className="Nav">
            <div ref={NavElementCurrent} className="NavEls">
                {navEls}
            </div>
            <div className="NavHorLine"></div>
            <div ref={NavLineCurrent} style={{width: NavLine.width, left: NavLine.left, top: NavLine.top}} className="LineUnderOnePoint"></div>
        </div>
    );
}

export default Nav;