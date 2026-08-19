/***********************************************************************
 * @description: 애플리케이션 Main Logic
 **********************************************************************/

import { Route, Routes } from "react-router-dom";
import App_bak from "./bak/App_bak";
import PageLayout from "./components/layout/PageLayout";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    // 라우터 설정
    <Routes>
      <Route element={<PageLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/origin" element={<App_bak />} />
    </Routes>
  );
};

export default App;
