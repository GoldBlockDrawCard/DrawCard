import "./App.css";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Route, Routes } from "react-router-dom";

import { WagmiConfig } from "wagmi";
import { config } from "./wagmi";

import Header from "./components/Header";

import Main from "./pages/Main";
import MainProfile from "./pages/MainProfile";
import ProfileSell from "./pages/ProfileSell";
import DesignInfo from "./pages/DesignInfo";
import DesignExample from "./pages/DesignExample";
import DesignBuy from "./pages/DesignBuy";
import CardDetailMy from "./pages/CardDetailMy";
import Items from "./pages/Items";
import DesignerProfile from "./pages/DesignerProfile";

function App() {
  return (
    <div className="wrap-container">
      <WagmiConfig config={config}>
        <Header />
        <Routes>
          {/* 메인 페이지 이동 기본 값 */}
          <Route path="/" element={<Main />} />
          {/* 프로필 페이지 이동 */}
          <Route path="/mainprofile" element={<MainProfile />} />
          <Route path="/desingerprofile" element={<DesignerProfile />} />
          {/* 프로필 구매 페이지 페이지 이동 */}
          <Route path="/profilesell" element={<ProfileSell />} />
          {/* 명함 상세 페이지 페이지 이동 */}
          <Route path="/designinfo" element={<DesignInfo />} />
          <Route path="/carddetailmy" element={<CardDetailMy />} />
          {/* 명함 구매 페이지 페이지 이동 */}
          <Route path="/designexample" element={<DesignExample />} />
          <Route path="/designbuy" element={<DesignBuy />} />
          {/* 명함 판매 목록 페이지 이동 */}
          <Route path="/items" element={<Items />} />
        </Routes>
      </WagmiConfig>
    </div>
  );
}

export default App;
