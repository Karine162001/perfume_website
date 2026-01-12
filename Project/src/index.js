import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import p1 from './slider/1.jpg';
import p2 from './slider/2.jpg';
import p3 from './slider/3.jpg';
import p4 from './slider/4.jpg';
import p5 from './slider/5.jpg';
import i1 from './image/1.jpg'; import i2 from './image/2.jpg'; import i3 from './image/3.jpg';
import i4 from './image/4.jpg'; import i5 from './image/5.jpg'; import i6 from './image/6.jpg';
import i7 from './image/7.jpg'; import i8 from './image/8.jpg'; import i9 from './image/9.jpg';
import i10 from './image/10.jpg'; import i11 from './image/11.jpg'; import i12 from './image/12.jpg';
import i13 from './image/13.jpg'; import i14 from './image/14.jpg'; import i15 from './image/15.jpg';
import i16 from './image/16.jpg';

const defaultState = {
  forProduct: [
    { id: 1, img: i1, price: 1000, count: 1, isQuan: 1000, name: 'Soir Vert' },
    { id: 2, img: i2, price: 1500, count: 1, isQuan: 1500, name: 'Historine Dure' },
    { id: 3, img: i3, price: 2000, count: 1, isQuan: 2000, name: 'Rois Nocturne' },
    { id: 4, img: i4, price: 2500, count: 1, isQuan: 2500, name: 'Iris Roise' },
    { id: 5, img: i5, price: 3000, count: 1, isQuan: 3000, name: 'Potchouli Memoires' },
    { id: 6, img: i6, price: 3500, count: 1, isQuan: 3500, name: 'Terre Hermes' },
    { id: 7, img: i7, price: 4000, count: 1, isQuan: 4000, name: 'Patchouli Sauvage' },
    { id: 8, img: i8, price: 4500, count: 1, isQuan: 4500, name: 'Pivoine Souveraine' },
    { id: 9, img: i9, price: 5000, count: 1, isQuan: 5000, name: 'Niche Women' },
    { id: 10, img: i10, price: 5500, count: 1, isQuan: 5500, name: 'Sauvage Parfum' },
    { id: 11, img: i11, price: 6000, count: 1, isQuan: 6000, name: 'Sideris Maria' },
    { id: 12, img: i12, price: 6500, count: 1, isQuan: 6500, name: 'Cologne Intense' },
    { id: 13, img: i13, price: 7000, count: 1, isQuan: 7000, name: 'Cosmetiqua Magazine' },
    { id: 14, img: i14, price: 7500, count: 1, isQuan: 7500, name: 'Imperium Fragrance' },
    { id: 15, img: i15, price: 8000, count: 1, isQuan: 8000, name: 'Hysteric Ixirait' },
    { id: 16, img: i16, price: 8500, count: 1, isQuan: 8500, name: 'Perfume Mixology' },
  ],
  money: Math.round(Math.random() * 200) * 500,
  slider: [p1, p2, p3, p4, p5],
  sliderCount: 0,
  result: 0,
  shopList: [],
  openClosed: false,
  total: 0,
  forName: 'Name for Product',
  delate: '',
  opnClose: false,
  SET_OPEN_CLOSE: false
};


function rootReducer(state = defaultState, action) {
  if (action.type === 'closeCard') {  
    return { ...state, opnClose: action.payload }
  }
  if (action.type === 'openCard') {
    return { ...state, opnClose: action.payload }
  }
  if (action.type === 'delate') {
    return {
      ...state,
      shopList: state.shopList.filter(item => item.id !== action.payload.id),
      total: state.total - (action.payload.price * action.payload.count),
      money: state.money + (action.payload.price * action.payload.count),
    };
  }
  if (action.type === 'disincrement') {
    return {
      ...state,
      total: state.total - action.payload.price,
      money: state.money + action.payload.price
    };
  }
  if (action.type === 'increment') {
    return {
      ...state,
      total: state.total + action.payload.price,
      money: state.money - action.payload.price,
    }
  }
  if (action.type === 'openClosed') {
    return { ...state, openClosed: !state.openClosed }
  }
  if (action.type === 'addElement') {
    if (!state.shopList.includes(action.payload) && state.money >= action.payload.price) {
      return {
        ...state,
        shopList: [...state.shopList, action.payload],
        total: state.total + action.payload.price,
        money: state.money - action.payload.price,
        forName: action.payload.name,
      }
    }
  }
  if (action.type === 'forRight') {
    if (state.sliderCount !== -80) {
      return { ...state, sliderCount: state.sliderCount -= action.payload }
    }
    else {
      return { ...state, sliderCount: 0 }
    }
  }
  if (action.type === 'forLeft') {
    if (state.sliderCount === 0) {
      return { ...state, sliderCount: -80 }
    }
    else {
      return { ...state, sliderCount: state.sliderCount += action.payload }
    }
  }
  if (action.type === 'add') {
    return { ...state, result: state.result + action.payload }
  }

  return state;
}

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);