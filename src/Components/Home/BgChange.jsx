import React from 'react'
import { useState } from 'react';

function BgChange() {
    let colorObject = {
        Original: "bg-original",
        Orange: "bg-orange-500",
        Yellow: "bg-yellow-200",
        Indigo: "bg-indigo-600",
        DarkOrange: "bg-orange-800",
        Rose: "bg-rose-600",
        Green: "bg-green-500",
        Teal: "bg-teal-300",
    }


    const [selectedColor, setSelectedColor] = useState(null);

    const changeBgColor = (colorName) => {
        document.body.className = `${colorObject[colorName]}`;
        setSelectedColor(colorName);
    };

    const additionalClasses = "cursor-pointer mx-2 rounded-md border-2 border-indigo-200 bgColor";
    return (
        <div>
            <div className="colorContainer flex mt-10 justify-center">
                {Object.entries(colorObject).map(([colorName, className]) => (
                    <div key={colorName} className={`${className} ${additionalClasses} ${selectedColor === colorName ? 'selected' : ''}`} onClick={() =>changeBgColor(colorName)} >
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BgChange