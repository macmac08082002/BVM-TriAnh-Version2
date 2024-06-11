import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import '../../css/app.scss'
const HeaderComponent: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const getHeaderTitle = (): string => {
    switch (location.pathname) {
      case "/":
        return "Bệnh viện mắt Trí Anh";
      case "/booking":
        return "Đăng ký lịch hẹn";
      case "/my-profile":
        return "Tài Khoản";
      case "/edit-profile":
        return "Chỉnh sửa thông tin";
      case "/history-booking":
        return "Lịch sử đăng ký";
      default:
        return "Bệnh viện mắt Sài Gòn";
    }
  };

  const handleBackClick = (): void => {
    if (navigate) {
      navigate(-1);
    } else {
      window.history.goBack();
    }
  };

  return (
    <header className="set-height text-white h-[80px] flex items-center fixed top-0 w-full z-50">
      <div className="container mx-auto flex items-center mt-3">
        <button type="button" onClick={handleBackClick}>
          <IoIosArrowBack className="text-white text-2xl ml-2" />
        </button>
        <p className="text-xl font-bold ml-4 mt-2">{getHeaderTitle()}</p>
      </div>
    </header>
  );
};

export default HeaderComponent;
