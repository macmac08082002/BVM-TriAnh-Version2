import React, { useState } from "react";
import { BiHome, BiCalendar, BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { openPhone } from "zmp-sdk/apis";
// Định nghĩa kiểu cho các giá trị của activeTab
type Tab = "home" | "booking" | "consultation" | "account";

const BottomNavigationComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>("home");

  const openCallScreen = async () => {
    try {
      await openPhone({
        phoneNumber: "0363936912",
      });
    } catch (error) {
      // xử lý khi gọi api thất bại
      console.log(error);
    }
  };
  return (
    <div className="fixed bottom-0 left-0 w-full bg-green-600 p-1">
      <div className="flex justify-around">
        <Link
          to="/"
          onClick={() => setActiveTab("home")}
          style={{ textDecoration: "none" }}
        >
          <button
            className={`flex flex-col items-center text-white ${
              activeTab === "home"
                ? "font-bold bg-gradient-to-r from-green-400 rounded-md"
                : ""
            }`}
          >
            <BiHome size={20} />
            <span className="mt-1 text-xs no-underline">Trang chủ</span>
          </button>
        </Link>
        <Link
          to="/booking"
          onClick={() => setActiveTab("booking")}
          style={{ textDecoration: "none" }}
        >
          <button
            className={`flex flex-col items-center text-white ${
              activeTab === "booking"
                ? "font-bold bg-gradient-to-r from-green-400 rounded-md"
                : ""
            }`}
          >
            <BiCalendar size={20} />
            <span className="mt-1 text-xs no-underline">Lịch tư vấn</span>
          </button>
        </Link>
        <div
          onClick={() => setActiveTab("consultation")}
          style={{ textDecoration: "none" }}
        >
          <button
            onClick={openCallScreen}
            className={`flex flex-col items-center text-white ${
              activeTab === "consultation"
                ? "font-bold bg-gradient-to-r from-green-400 rounded-md"
                : ""
            }`}
          >
            <FaPhone size={20} />
            <span className="mt-1 text-xs no-underline">Tư vấn</span>
          </button>
        </div>
        <Link
          to="/my-profile"
          onClick={() => setActiveTab("account")}
          style={{ textDecoration: "none" }}
        >
          <button
            className={`flex flex-col items-center text-white ${
              activeTab === "account"
                ? "font-bold bg-gradient-to-r from-green-400 rounded-md"
                : ""
            }`}
          >
            <BiUser size={20} />
            <span className="mt-1 text-xs no-underline">Tài khoản</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BottomNavigationComponent;
