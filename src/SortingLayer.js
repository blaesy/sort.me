import React from 'react';
import { Stage, Layer, Rect } from 'react-konva';

const SortingLayer = ({size, speed, rects}) => {

    let 
    width = window.innerWidth - 100, 
    height = window.innerHeight;

    return (
        <>
            <Stage width={width} height={window.innerHeight - 100}>
                <Layer>
                    {rects.map((item, i) => 
                        <Rect
                            key={i}
                            x={(width / size) * i}
                            y={window.innerHeight - 100}
                            width={(width / size) - ((width / size) * 0.1 )}
                            height={-(((height - 200) / size) * item?.value)}
                            fill={item?.active ? '#FFBC67' : '#455C7B'}
                        />
                    )}
                </Layer>
            </Stage>
        </>
    )
}

export default SortingLayer;