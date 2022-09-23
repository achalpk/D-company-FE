import React, { useState } from 'react';
import image1 from '../../assets/images/1.jpg';
import image2 from '../../assets/images/2.jpg';
import image3 from '../../assets/images/3.jpg';
import image4 from '../../assets/images/4.jpg';
import image5 from '../../assets/images/5.jpg';
import './slider.css';

function Slider() {
    const img_arr : string[] =[image1,image2,image3,image4,image5];
    const [index,changeIndex] = useState(0);
    const updateImage=(btn : string)=>{
        let ind = index;
        if(btn === 'left'){
            ind--;
            if(ind < 0){
                ind = img_arr.length-1;
            }
        } 
        if(btn === 'right'){
            ind++;
            if(ind >= 5){
                ind = 0;
            }  
        }
        changeIndex(ind);
    }
    return (
        <div className="slide" style={{backgroundImage: `url(${img_arr[index]})`}}>
            <button className="button" onClick={()=>updateImage('left')}>{'<'}</button>
            <button className="button" onClick={()=>updateImage('right')}>{'>'}</button>
        </div>
    )
}

export default Slider