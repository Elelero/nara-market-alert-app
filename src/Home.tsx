import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const Home = () => {

  return (
    <div>
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        <div className="flex flex-1 flex-col overflow-hidden">
          {/* Header */}
          <Header />

          {/* Main Content */}
          <main></main>
        </div>
      </div>
    </div>
  );
};

export default Home;
