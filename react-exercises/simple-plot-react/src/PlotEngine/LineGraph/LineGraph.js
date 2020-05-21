import React from 'react'
import Tooltip from './Tooltip'
import Descriptor from './Descriptor';
import Title from './Title';

const LineGraph = ({ y_data, x_axis , colors , ...props }) => {
    const [horizontal_segments, set] = React.useState(0)
    const [point, setPoint] = React.useState({show: false})

    const [point_array, setPointArray] = React.useState([])
    const ref = React.useRef(null)

    React.useEffect(() => {
        const canvas = ref.current
        const ctx = canvas.getContext('2d')
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        const {max, min} = getMaxMin(y_data)

        let calc_horizontal_segments = 0;

        if (max > min) {
            calc_horizontal_segments = (max / 50 + 1) * 2
        } else {
            calc_horizontal_segments = (min / 50 + 1) * 2;
        }
        set(calc_horizontal_segments)

        // horizontal lines

        for (let i = 0; i < calc_horizontal_segments; i += 1) {
            ctx.font = 'italic 9px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = '#000';
            ctx.fillText(max + 50 - i * 50, 10, i * (canvas.height / calc_horizontal_segments));


            ctx.moveTo(25, i * (canvas.height / calc_horizontal_segments));
            ctx.lineTo(canvas.width, i * (canvas.height / calc_horizontal_segments));
            ctx.strokeStyle = '#f7f7f7';
            ctx.lineWidth = 0.1;
            ctx.stroke();
        }

        // vertical lines 

        const y_length = x_axis.length + 1;

        for (let i = 1; i < y_length; i += 1) {
            ctx.font = 'italic 9px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = '#000';
            ctx.fillText(x_axis[i - 1], i * (canvas.width / y_length), canvas.height - 9);

            ctx.moveTo(i * (canvas.width / y_length), 0);
            ctx.lineTo(i * (canvas.width / y_length), canvas.height - 18);
            ctx.strokeStyle = '#f7f7f7';
            ctx.lineWidth = 0.1;
            ctx.stroke();
        }

        // marking (0,0)

        ctx.font = ' 9px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = '#AAAAAA';
        ctx.fillText("(0,0)", canvas.width / 2 + 15, canvas.height / 2 - 15);


        ctx.moveTo(18, canvas.height / 2);
        ctx.lineTo(canvas.width, canvas.height / 2);
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 0.1
        ctx.stroke();

        ctx.moveTo(canvas.width / 2, 0);
        ctx.lineTo(canvas.width / 2, canvas.height);
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 0.1
        ctx.stroke();
        
    }, [horizontal_segments])

    const drawGraph = (y_axis, color) => {
        
        const canvas = ref.current
        const ctx = canvas.getContext('2d')
        const y_length = x_axis.length + 1;        

        ctx.beginPath();
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.strokeStyle = color
        ctx.lineWidth = '2'
        if (y_axis[0] >= 0) {
            ctx.moveTo(canvas.width / y_length, canvas.height / 2 - (y_axis[0] / 50) * (canvas.height / horizontal_segments));
        } else {
            ctx.moveTo(canvas.width / y_length, canvas.height / 2 + (y_axis[0] / 50) * -1 * (canvas.height / horizontal_segments));
        }

        for (let i = 1; i < y_axis.length + 1; i++) {
            if (y_axis[i - 1] >= 0) {
                ctx.lineTo(i * (canvas.width / y_length), canvas.height / 2 - (y_axis[i - 1] / 50) * (canvas.height / horizontal_segments));
            } else {
                ctx.lineTo(i * (canvas.width / y_length), canvas.height / 2 - (y_axis[i - 1] / 50) * (canvas.height / horizontal_segments));
            }
        }

        ctx.stroke();
    }

    const getMaxMin = (y_data) =>{
        let max = 0, min = 0; 
        for(let i = 0; i<y_data.length; i++){
            for(let j = 0; j<y_data[i].length; j++){
                if(y_data[i][j]>=0){
                    if(y_data[i][j]>max) max = y_data[i][j]
                }else{
                    if(y_data[i][j]<0){
                        if(y_data[i][j]<min) min = y_data[i][j]
                    }    
                }
            }
        }

        //180 /50 -> 50*4
        max = parseInt(max/50)
        max = (max+1)*50
        
        min = parseInt(min/50)
        min = (min+1)*50

        console.log('mm',max, min);
        

        return {max, min}
    }

    const updateHorizontalBars = () =>{
        const {max, min} = getMaxMin(y_data)

        let calc_horizontal_segments = 0;

        if (max > min) {
            calc_horizontal_segments = (max / 50 + 1) * 2
        } else {
            calc_horizontal_segments = (min / 50 + 1) * 2;
        }
        set(calc_horizontal_segments)
    }


    const drawCircle = (y_axis, color) => {

        const canvas = ref.current
        const ctx = canvas.getContext('2d')
        const y_length = x_axis.length + 1;
        let p_array = []

        for (let i = 1; i < y_axis.length + 1; i++) {
            if (y_axis[i - 1] >= 0) {
                var centerX = i * (canvas.width / y_length);
                var centerY = canvas.height / 2 - (y_axis[i - 1] / 50) * (canvas.height / horizontal_segments);
            } else {
                centerX = i * (canvas.width / y_length);
                centerY = canvas.height / 2 + (y_axis[i - 1] / 50) * -1 * (canvas.height / horizontal_segments);
            }
            p_array.push({
                x: centerX,
                y: centerY,
                yval: y_axis[i - 1],
                xval: x_axis[i - 1]
            })
            ctx.beginPath()
            ctx.arc(centerX, centerY, 2, 0, 2 * Math.PI);
            ctx.stroke();

        }
        setPointArray([...point_array, ...p_array])
        console.log(point_array);

    }

    React.useEffect(() => {
        updateHorizontalBars()
        for(let i = 0 ; i<y_data.length ; i++){
            drawGraph(y_data[i], colors[i])
            drawCircle(y_data[i], colors[i])   
        }

    }, [horizontal_segments, y_data])

    const findGraphPoints = e => {

        const canvas = ref.current
        let rect = canvas.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = (e.clientY - rect.top);

         for(let i = 0; i<point_array.length; i++){
            var point = point_array[i]
            var x_boundary = [point.x - 8, point.x + 8];
            var y_boundary = [point.y - 8, point.x + 8];
           
            if ((x >= x_boundary[0] && x <= x_boundary[1])
                &&
                (y >= y_boundary[0] && y <= y_boundary[1])
            ) {
                const newPoint = {...point, dispX: e.clientX, dispY: e.clientY , show: true  }
                setPoint(newPoint)
                break; 
            }
        };
    }

    return <>
        <canvas ref={ref}
            width={window.innerWidth / 1.5}
            height={window.innerHeight / 1.5}
            onMouseDown={(e) => findGraphPoints(e)}
            style={{
                border: "2px #AAAAAA solid",
                overflow: "hidden",
                marginTop: "20px"
            }}
        />
        { <Tooltip point = {point} /> }
        { props.children }
    </>
}

LineGraph.Descriptor = Descriptor; 
LineGraph.Title = Title;

export default LineGraph; 