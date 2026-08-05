import { useNavigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import logo from "@images/logo.png"

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* 로고 */}
      <div className="flex">
        <img src={logo} width={70} />
        <span>나라장터 알리미</span>
      </div>

      {/* 원래 페이지 */}
      {/* <button onClick={() => navigate("/origin")}>원래페이지</button> */}
      {/* Title */}
      {/* <div className="text-white font-semibold text-sm tracking-tight">
        나라장터 알리미
      </div> */}

      <div>
        {/* Sidebar */}
        <Sidebar />

        <div>
          {/* Header */}

          {/* Main Content */}
          <main></main>
        </div>
      </div>
    </div>
  );
};

export default Home;
