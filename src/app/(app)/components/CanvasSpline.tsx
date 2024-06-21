'use client'
import Spline from "@splinetool/react-spline";


const CanvasSpline = ({itemID, URLSpline, className}) => {


    return (
       <Spline key={itemID} className={`${className}`} scene={`${URLSpline}`} />
    )
}

export default CanvasSpline