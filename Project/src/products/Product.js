import { useDispatch, useSelector } from 'react-redux';
import { GiShoppingBag } from "react-icons/gi";
import './Product.css';

export default function Product() {
  const forProduct = useSelector(state => state.forProduct);
  const longText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quibusdam aperiam eos dicta temporibus quo id illo.";
  const dispatch = useDispatch();
  const shopList = useSelector(state => state.shopList);


  return (
    <div className='product' >
      {
        forProduct.map((elem, index) => {
          return (
            <div className="productItems" key={elem.id}>
              <div className="block"> 
                <h3>{elem.name}</h3>
                <div style={{ background: `linear-gradient(#2e1f0c8a, transparent), url(${elem.img}` }} className="pictures"></div>
                <p>{longText}</p>
                <span>{elem.price} Դ․</span>
                <button onClick={() => {
                    dispatch({type : 'addElement', payload : elem, em : index });
                }}>
                  <GiShoppingBag />
                </button>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
