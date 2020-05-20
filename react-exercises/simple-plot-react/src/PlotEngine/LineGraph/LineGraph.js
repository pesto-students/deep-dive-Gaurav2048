import React from 'react'


const LineGraph = () =>{
    const ref = React.useRef(null)

    React.useEffect(()=>{
        const canvas = ref.current
        const ctx = canvas.getContext('2d')
        

        for (let i = 10; i < canvas.height; i += (canvas.height/10)) 
        {
          ctx.moveTo(0, i);
          ctx.lineTo(canvas.width, i);
          ctx.strokeStyle = '#cbcbcb';
          ctx.lineWidth = 0.2;
          ctx.stroke();
         }
    })

    return <canvas ref= {ref} 
                   width={window.innerWidth/1.5}
                   height={window.innerHeight/1.5}
                   style={{
                       border: "2px #f7f7f7 solid", 
                       overflow: "hidden", 
                       margin:"auto", 
                   }}
    />
}

export default LineGraph; 