import React, { useState, useRef } from "react";
import './Collapsible.css'

export default function Collapsible (props) {
    const [open, setOPen] = useState(false);

    const contentRef = useRef();

    const toggle = () => {
        setOPen(!open)
    }

    return (
        <div className={`collapse-container  ${open ? '' : 'inactive'}`} >
            <button className={`toggle ${open ? '' : 'inactive'}`} onClick={toggle}>{props.label}<i className={open ? "fa-solid fa-angle-up" : "fa-solid fa-angle-down"}></i></button>

            <div className="content-parent"
                ref={contentRef}
                style={open ? { height: contentRef.current.scrollHeight + "px" } : { height: "0px" }}>
                <div className="content">{props.children}</div>
            </div>
        </div>
    )
}