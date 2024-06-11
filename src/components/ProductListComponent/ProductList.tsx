import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductListComponent from "./ProductListComponent";
import { TiStarFullOutline } from "react-icons/ti";
interface Product {
  name: string;
  // Thêm các trường dữ liệu khác của sản phẩm nếu cần
}

const ProductList: React.FC = () => {
  const [data, setData] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Product[]>(
          "https://hongducgroup.tech/api/categories"
        );
        setData(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="mt-3">
      <span className="whitespace-nowrap text-sm font-semibold">
        <p className="flex items-center font-boild">
          <span className="whitespace-nowrap ">
            <TiStarFullOutline className="text-yellow-400" />
          </span>
          Dịch vụ về mắt đa dạng
        </p>
      </span>
      <div className="flex disscorllbar overflow-x-auto mt-3">
        {data.map((product, index) => (
          <div
            key={index}
            className={`mr-4 ${index !== data.length - 1 ? "" : "mr-0"}`}
          >
            <ProductListComponent categoryName={product.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
