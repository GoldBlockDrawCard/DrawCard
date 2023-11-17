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
import DesignInfo from "./pages/DesignInfo";
import DesignExample from "./pages/DesignExample";
import DesignBuy from "./pages/DesignBuy";
import PurchasedCard from "./pages/PurchasedCard";
import DesignerProfile from "./pages/DesignerProfile";
import Blank from "pages/Blank";

const App = () => {
  return (
    <div className="wrap-container">
      <WagmiConfig config={config}>
        <Header />
        <Routes>
          {/* 메인 페이지 이동 기본 값 */}
          <Route path="/" element={<Main />} />
          <Route path="/:#category" element={<Main />} />
          {/* 프로필 페이지 이동 */}
          <Route path="/mainprofile" element={<MainProfile />} />
          <Route path="/desingerprofile/:idx" element={<DesignerProfile />} />
          {/* 프로필 구매 페이지 페이지 이동 */}
          {/* 명함 상세 페이지 페이지 이동 */}
          <Route path="/designinfo/:idx" element={<DesignInfo />} />
          <Route path="/purchased/:idx" element={<PurchasedCard />} />
          {/* 명함 구매 페이지 페이지 이동 */}
          <Route path="/designinfo/:idx/preview" element={<DesignExample />} />
          <Route path="/designbuy/:idx" element={<DesignBuy />} />
          {/* 명함 판매 목록 페이지 이동 */}
          <Route path="*" element={<Blank />} />
        </Routes>
      </WagmiConfig>
    </div>
  );
}

export default App;
