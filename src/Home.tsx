import { useNavigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* 원래 페이지 */}
      {/* <button onClick={() => navigate("/origin")}>원래페이지</button> */}

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
