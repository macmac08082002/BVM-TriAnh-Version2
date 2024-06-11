import React from "react";
import DoctorCardComponent from "./CardDoctorComponent";
import lehongduc from "../../asset/doctors/lehongduc.png";
import nguyencaoky from "../../asset/doctors/nguyencaoky.png";
import caohoangphuc from "../../asset/doctors/caohoangphuc.png";
import tranthimyuyen from "../../asset/doctors/tranthimyuyen.png";
import bachtuyetnhi from "../../asset/doctors/bachtuyetnhi.png";
import caomy from "../../asset/doctors/caomy.png";
import { TiStarFullOutline } from "react-icons/ti";
import "../../css/app.scss";

// Define the Doctor type
interface Doctor {
  id: number;
  name: string;
  department: string;
  hospital: string;
  rating: number;
  experience: string;
  image: string;
}

const DoctorList: React.FC = () => {
  const doctors: Doctor[] = [
    {
      id: 1,
      name: "BS.Lê Hồng Đức",
      department: "Bác sĩ",
      hospital: "BVM Trí Anh",
      rating: 4.7,
      experience: "25 năm",
      image: lehongduc,
    },
    {
      id: 2,
      name: "BS.Nguyễn Cao Kỳ",
      department: "Bác sĩ lâm sàng",
      hospital: "BVM Trí Anh",
      rating: 4.6,
      experience: "7 năm",
      image: nguyencaoky,
    },
    {
      id: 3,
      name: "BS.Cao Hoàng Phúc",
      department: "Bác sĩ",
      hospital: "BVM Trí Anh",
      rating: 4.8,
      experience: "10 năm",
      image: caohoangphuc,
    },
    {
      id: 4,
      name: "BS.CKI Trần Thị Mỹ Uyên",
      department: "Bác sĩ CKI",
      hospital: "BVM Trí Anh",
      rating: 4.7,
      experience: "7 năm",
      image: tranthimyuyen,
    },
    {
      id: 5,
      name: "Ths BS. Bạch Tuyết Nhi",
      department: "Trưởng phòng KHTH",
      hospital: "BVM Trí Anh",
      rating: 4.7,
      experience: "7 năm",
      image: bachtuyetnhi,
    },
    {
      id: 6,
      name: "BS. Cao Mỹ",
      department: "Bác sĩ lâm sàng",
      hospital: "BVM Trí Anh",
      rating: 4.5,
      experience: "11 năm",
      image: caomy,
    },
  ];

  return (
    <div className="mt-3">
      <span className="whitespace-nowrap text-sm  font-semibold">
        <p className="flex items-center font-boild">
          <span className="whitespace-nowrap ">
            <TiStarFullOutline className="text-yellow-400" />
          </span>
          Đội ngũ bác sĩ tận tình, giàu kinh nghiệm
        </p>
      </span>
      <div className="disscorllbar flex overflow-x-auto">
        {doctors.map((doctor, index) => (
          <div
            key={doctor.id}
            className={`mr-4 ${index !== doctors.length - 1 ? "" : "mr-0"}`}
          >
            <DoctorCardComponent doctor={doctor} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorList;
