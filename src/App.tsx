import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
// import Lab1Bai1 from "./lab1/bai1";
// import Lab1Bai2 from "./lab1/bai2";
// import Lab1Bai3 from "./lab1/bai3";
// import Lab1Bai4 from "./lab1/bai4";
// import Lab2Bai1 from "./lab2/bai1"; 
// import Lab2Bai2 from "./lab2/bai2";
// import Lab2Bai3 from "./lab2/bai3";
// import Lab3Bai12 from "./lab3/bai12";
import Lab3Bai3 from "./lab3/bai3";

function App() {
  return (
    <>
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="#" className="text-xl font-semibold">
            <strong>WEB2091 App</strong>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="#" className="hover:text-gray-200">
              Trang chủ
            </Link>
            <Link to="/list" className="hover:text-gray-200">
              Danh sách
            </Link>
            <Link to="/add" className="hover:text-gray-200">
              Thêm mới
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="#" className="hover:text-gray-200">
              Đăng nhập
            </Link>
            <Link to="#" className="hover:text-gray-200">
              Đăng ký
            </Link>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Chào mừng đến với WEB2091</h1>
        {/* <Lab1Bai1 /> */}
        {/* <Lab1Bai2 /> */}
        {/* <Lab1Bai3 />
            <Lab1Bai4 /> */}
        {/* <Lab2Bai1/> */}
        {/* <Lab2Bai2 /> */}
        {/* <Lab2Bai3 /> */}
        {/* <Lab3Bai12 /> */}
         <Lab3Bai3 />
      </div>

      <Toaster />
    </>
  );
}

export default App;
