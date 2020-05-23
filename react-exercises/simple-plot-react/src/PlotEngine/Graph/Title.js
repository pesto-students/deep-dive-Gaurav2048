import React from "react";


const Title = ( {title, styles} )=>{
    return <div style={{...styles, marginTop:"28px", marginLeft: window.innerWidth/2-30}} > {title} </div>
}

export default Title; 