import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import img from '../../asset/product/img.jpg';

interface ProductCardProps {
  categoryName: string;
}

const ProductListComponent: React.FC<ProductCardProps> = ({ categoryName }) => {
  return (
    <div className="bg-white rounded-lg" style={{ width: "200px", height: "270px" }}>
      <Link to="/booking" style={{ textDecoration: "none" }}>
        <Card className="h-full flex flex-col justify-between">
          <div className="flex justify-center">
            <Card.Img className="h-48 w-auto mt-2 rounded" variant="top" src={img} alt="ảnh" style={{ width: "80%", height: "150px" }} />
          </div>
          <Card.Body className="flex flex-col justify-between">
            <Card.Title className="text-center" style={{ fontSize: "14px" }}>
              {categoryName}
            </Card.Title>

            <button className=" mb-6 text-white font-bold py-2 px-4 rounded text-xs w-[80%] mx-auto mt-6" style={{
            background: "linear-gradient(90deg, #dc1f18 0%, #f8954f 100%)"
          }}>
              Đăng ký ngay
            </button>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};

export default ProductListComponent;
