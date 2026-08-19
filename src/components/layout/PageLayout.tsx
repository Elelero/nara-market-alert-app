import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const PageLayout = () => (
    <div>
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        <div className="flex flex-1 flex-col overflow-hidden">
          {/* Header */}
          <Header />

          {/* Main Content */}
          <main className="flex-1 overflow-y-auto p-6">
            {/* 컨텐츠 유동 변환 */}
            <Outlet />
          </main>
        </div>
      </div>
    </div>
);

export default PageLayout;