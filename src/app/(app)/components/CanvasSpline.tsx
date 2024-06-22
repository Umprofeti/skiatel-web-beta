'use client'
import React, { Suspense } from "react";
const Spline = React.lazy(() => import('@splinetool/react-spline'));

const CanvasSpline = ({itemID, URLSpline, className}) => {


    return (
       <Suspense fallback={<div>Cargando animación...</div>}>
            <Spline key={itemID}  className={`${className}`} scene={`${URLSpline}`} />
       </Suspense>
    )
}

export default CanvasSpline