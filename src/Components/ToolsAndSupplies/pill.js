import React from "react";

const Pill = ({title,handleRemove,...props}) =>{

    return (
        <>
        <div onClick={handleRemove} className="pill">{title} <i onClick={handleRemove} className="fa fa-close pill-close"></i></div>

        </>
    )
}
export default Pill;