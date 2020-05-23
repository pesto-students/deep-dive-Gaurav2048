import React from "react";

const Descriptor = ({descriptors, colors}) =>{
    return <div>
        <span>Descriptors</span>
        {
            descriptors.map((descriptor, index)=>(
                <div key={index} > {descriptor} <span style={{width:"20px", height:"10px" , backgroundColor:'red'}} > </span> </div>
            ))
        }
    </div>
}

export default Descriptor