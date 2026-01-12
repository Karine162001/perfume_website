import { useDispatch, useSelector } from 'react-redux';
import './ProductItems.css';
import { AiFillDelete } from 'react-icons/ai';
import { useState } from 'react';

export default function ProductItems() {
    const shopList = useSelector(state => state.shopList);
    const longText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed pariatur deleniti non cumque nemo voluptas totam ex!";
    const openClosed = useSelector(state => state.openClosed);
    const total = useSelector(state => state.total);
    const dispatch = useDispatch();
    const [forCount, setForCount] = useState(1);
    const [forMoney, setForMoney] = useState(0);
    const money = useSelector(state => state.money);
    const opnClose = useSelector(state => state.opnClose);

    return (
        <div className='product_items' style={{ clipPath: openClosed ? "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" : "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}>
            <div className="box">
                {
                    shopList.map((elem, index) => {
                        return (
                            <div className="shopItems" key={elem.id}>
                                <div className="effectItem">
                                    <img src={elem.img} alt="" />
                                    <span>{elem.name}</span>
                                    <p>{longText}</p>
                                    <span>{elem.isQuan}Դ․</span>
                                    <div className="btns">
                                        <button onClick={() => {
                                            if (elem.count > 0) {
                                                dispatch({ type: 'disincrement', payload: elem });
                                                setForCount(elem.count -= 1);
                                                setForMoney(elem.isQuan -= elem.price);
                                            }
                                        }}>-</button>
                                        <em>{elem.count}</em>
                                        <button onClick={() => {
                                            if (money > elem.price) {
                                                dispatch({ type: 'increment', payload: elem })
                                                setForCount(elem.count += 1);
                                                setForMoney(elem.isQuan += elem.price);
                                            }
                                        }}>+</button>
                                    </div>
                                    <button className='but_3' onClick={() => {
                                        dispatch({ type: 'delate', payload: elem })
                                    }}>
                                        <AiFillDelete />
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
                <div className="forBtns">
                    <button onClick={() => {
                        dispatch({type: 'openCard', payload : true});
                        // document.body.style.overflowY = opnClose ? "visible" : "hidden"; 
                    }}>Pay With Card</button>
                    <button>Total : {total}Դ․</button>
                </div>
            </div>
        </div>
    )
}