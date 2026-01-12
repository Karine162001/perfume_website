import { useDispatch, useSelector } from 'react-redux';
import './Slider.css';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

export default function Silder() {
    const arr = useSelector(state => state.slider);
    const sliderCount = useSelector(state => state.sliderCount);
    const dispatch = useDispatch();
    
  return (
    <div className='slider'>
        <aside>
            <button onClick={() => {
                dispatch({ type : 'forLeft', payload : 100 / arr.length })
            }}> <SlArrowLeft  /> </button>
            <button onClick={() => {
                dispatch({ type : 'forRight', payload : 100 / arr.length })
            }}> <SlArrowRight /> </button>
        </aside>
        <div className="sliderBox">
            {
                arr.map((elem, index) => {
                    return (
                        <div className="items" key={index} style={{left : sliderCount + '%', background : `url(${elem})`}}></div>
                    )
                })
            }
        </div>
    </div>
  )
}