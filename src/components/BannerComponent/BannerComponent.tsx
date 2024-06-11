import React from "react";
import "../../css/app.scss";
import imgBanner from "../../asset/banner/banner.png";

const BannerComponent: React.FC = () => {
  // Tạo mảng ký tự từ chuỗi "Trí Anh, mắt sáng sáng tương"
  const text = "Trí Anh, mắt sáng sáng tương";
  const characters = text.split("");

  return (
    <div className="setBanner bg-gradient-to-r from-[#dc1f18] to-[#f8954f] w-full rounded-lg flex flex-col justify-between items-center text-white relative">
      <div className="flex justify-center items-center">
        {characters.map((char, index) => (
          <span
            key={index}
            className="font-bold mb-4 text-sm mt-3 bg- animated-text text-white shadow-lg"
          >
            {char}
          </span>
        ))}
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-1 ">
        <button
          className="w-48 text-white font-sans py-2 px-4 rounded-full border border-white"
          style={{
            background: "linear-gradient(45deg, #df16b7 0%, #f8bfec 100%)",
          }}
        >
          Tư vấn với bác sĩ
        </button>
      </div>
      <div className="flex justify-center items-end">
        <img
          src={imgBanner}
          alt="Banner Image"
          className="imgbanner mt-6 w-60"
        />
      </div>
    </div>
  );
};

export default BannerComponent;
