import './Card.css';
import { HiOutlineArrowLeftStartOnRectangle } from "react-icons/hi2";
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import front from '../upDown/cardFront.png';
import back from '../upDown/cardBack.png';
import { AutoTabProvider } from 'react-auto-tab';
import Typewriter from 'typewriter-effect';

export default function Card() {
  const [state, setState] = useState(["You are", "Welcome", "Write to", "Validation", "Program"]);
  const opnClose = useSelector(state => state.opnClose);
  const dispatch = useDispatch();
  const [rotate, setRotate] = useState(false);

  return (
    <div className='card_product' style={{ clipPath: opnClose ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)" : "polygon(0 0, 100% 0, 100% 0, 0 0)" }}>
      <h3>
        <Typewriter options={{
          autoStart: true,
          strings: state,
          loop: true
        }}></Typewriter>
      </h3>
      <div className="box">
        <button onClick={() => { dispatch({ type: 'closeCard', payload: false }) }}>
          <HiOutlineArrowLeftStartOnRectangle />
        </button>
        <div className="cardForm" style={{
          transform: rotate ? 'rotateY(180deg)' : 'rotateY(0deg)',
          transition: 'transform 0.6s ease',
        }}>
          <div className="front"></div>
          <div className="back"></div>
        </div>
        <form>
          <AutoTabProvider>
            <input tabbable="false" type="text" placeholder='Number' required maxLength={19} />
            <input tabbable="false" type="text" placeholder='Cvv' required maxLength={3} onClick={() => setRotate(true)}
              />
            <input tabbable="false" type="text" placeholder='Date' required maxLength={5} />
            <input tabbable="false" type="text" placeholder='Name Surname' required />
          </AutoTabProvider>
        </form>
      </div>
      <button className='end'>Accept</button>
    </div>
  )
}
