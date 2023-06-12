import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './component/Header';
import Main from './pages/Main';
import MainProfile from './pages/MainProfile';
import ProfileSell from './pages/ProfileSell';
import CardDetail from './pages/CardDetail';
import CardDetailMy from './pages/CardDetailMy';
import CardBuy from './pages/CardBuypage';
import Items from './pages/Items';
import MainpageProfile from './pages/MainpageProfile';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

function getLibrary(provider) {
  const library = new Web3Provider(provider, "any");
  return library;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Header/>
        <Routes>
          {/* 메인 페이지 이동 기본 값 */}
          <Route path="/" element={<Main/>}/>
          {/* 프로필 페이지 이동 */}
          <Route path="/mainprofile" element={<MainProfile/>}/>
          <Route path="/mainpageprofile" element={<MainpageProfile/>}/>
          {/* 프로필 구매 페이지 페이지 이동 */}
          <Route path="/profilesell" element={<ProfileSell/>}/>
          {/* 명함 상세 페이지 페이지 이동 */}
          <Route path="/carddetail" element={<CardDetail/>}/>
          <Route path="/carddetailmy" element={<CardDetailMy/>}/>
          {/* 명함 구매 페이지 페이지 이동 */}
          <Route path="/cardbuy" element={<CardBuy/>}/>
          {/* 명함 판매 목록 페이지 이동 */}
          <Route path ="/items" element= {<Items/>}/>
        </Routes>
      </Web3ReactProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
