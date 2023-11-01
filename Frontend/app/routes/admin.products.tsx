import AdminSidebar from "~/component/adminSidebar";
import styles from "../styles/admin.css";
import AdminHeader from "~/component/adminHeader";
import { getProducts } from "~/controllers/productController";
import { useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";
const AdminProducts = () => {
  const loaderData: any = useLoaderData();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (loaderData?.products) {
      console.log(loaderData?.products);
      setProducts(loaderData?.products);
    }
  }, [loaderData]);

  return (
    <>
      <div className="dash-container">
        <AdminSidebar />
        <div className="dash-main">
          <AdminHeader />
          <div className="dash-body">
            <div className="dash-content">
              <table className="pro-table" border={1}>
                <thead>
                  <tr>
                    <th>Sr. No.</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Created At</th>
                    <th>Updated At</th>
                    <th>Delete</th>
                    <th>Update</th>
                  </tr>
                </thead>
                <tbody>
                  {products.length > 0 &&
                    products.map((product: any, index) => {
                      return (
                        <tr>
                          <td width={10}>{index + 1}</td>
                          <td>{product?.name}</td>
                          <td className="pro-price">
                            {product?.offerPrice ? (
                              <>
                                Rs.
                                {product?.offerPrice}{" "}
                                <span>Rs.{product?.price}</span>
                              </>
                            ) : (
                              <>Rs.{product?.price}</>
                            )}
                          </td>
                          <td>{product?.created_date}</td>
                          <td>{product?.updated_date}</td>
                          <td width={100}>
                            <button className="delete">Delete</button>
                          </td>
                          <td width={100}>
                            <button className="edit">Edit</button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminProducts;

export const links = () => [
  {
    rel: "stylesheet",
    href: styles,
  },
];

export const loader = async () => {
  try {
    return await getProducts();
  } catch (e) {
    return { message: "something went wrong" };
  }
};
