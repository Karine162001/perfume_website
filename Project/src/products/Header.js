import { useDispatch, useSelector } from 'react-redux';
import './Header.css';
import { AiFillShopping } from 'react-icons/ai';
import { CgColorPicker } from 'react-icons/cg';

export default function Header() {
    const money = useSelector(state => state.money);
    const shopList = useSelector(state => state.shopList);
    const dispatch = useDispatch();
    const openClosed = useSelector(state => state.openClosed);
    const forName = useSelector(state => state.forName);
    
    return (
        <header>
            <div className="header">
                <div className="box">
                    <h1 onClick={() => window.location.reload()}>Only Shop</h1>
                    <div className="opacity">{forName}</div>
                    <div className="money">{money}Դ.</div>
                    <div className="btns">
                        <button onClick={() => {
                            dispatch({ type : 'openClosed' });
                            document.body.style.overflowY = openClosed ? "visible" : "hidden";
                        }}>
                            <span>{shopList.length}</span>
                            <AiFillShopping />
                        </button>
                        <button onClick={() => dispatch({ type: 'toggleColors' })} >
                            <CgColorPicker />
                            <input type="color" />
                        </button>
                    </div>
                </div>
            </div> 
        </header>
    )
}
