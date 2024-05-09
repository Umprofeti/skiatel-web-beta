
import Spline from "@splinetool/react-spline";


const CanvasSpline = ({itemID, URLSpline}) => {


    return (
       <Spline className="relative bottom-9 m-auto w-1/2 h-1/2 z-20" scene={`${URLSpline}`} />
    )
}

export default CanvasSpline