import React from "react";
import DoctorCardComponent from "./CardDoctorComponent";
import nguyenngocnguyen from "../../asset/doctors/nguyenngocnguyen.jpg";
import nguyendoanhnhan from "../../asset/doctors/nguyendoanhnhan.jpg";
import hodoanthanhnhat from "../../asset/doctors/hodoanthanhnhat.jpg";
import tuthanhnutuyetminh from "../../asset/doctors/tuthanhnutuyetminh.jpg";
import vuhailong from "../../asset/doctors/vuhailong.jpg";
import bactronghoang from "../../asset/doctors/bactronghoang.jpg";
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
      name: "BS.Nguyễn Ngọc Nguyên",
      department: "Bác sĩ",
      hospital: "Mắt Sài Gòn Nguyễn Du",
      rating: 4.7,
      experience: "25 năm",
      image: nguyenngocnguyen,
    },
    {
      id: 2,
      name: "BS.Nguyễn Danh Nhân",
      department: "Bác sĩ lâm sàng",
      hospital: "Bệnh viện Mắt Sài Gòn Sông Hàn",
      rating: 4.6,
      experience: "7 năm",
      image: nguyendoanhnhan,
    },
    {
      id: 3,
      name: "BS.Hồ Đoàn Thanh Nhất",
      department: "Bác sĩ",
      hospital: "Bệnh viện Mắt TP.HCM",
      rating: 4.8,
      experience: "10 năm",
      image: hodoanthanhnhat,
    },
    {
      id: 4,
      name: "BS.CKI Từ Thanh Nữ Thuyết Minh",
      department: "Bác sĩ CKI",
      hospital: "Mắt Sài Gòn Ngô Gia Tự",
      rating: 4.7,
      experience: "7 năm",
      image: tuthanhnutuyetminh,
    },
    {
      id: 5,
      name: "Ths BS. Vũ Hải Long",
      department: "Trưởng phòng KHTH",
      hospital: "Mắt Sài Gòn Nguyễn DU",
      rating: 4.7,
      experience: "7 năm",
      image: vuhailong,
    },
    {
      id: 6,
      name: "BS. Bạc Trọng Hoàng",
      department: "Bác sĩ lâm sàng",
      hospital: "Mắt Sài Gòn Ngô Gia Tự",
      rating: 4.5,
      experience: "11 năm",
      image: bactronghoang,
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
