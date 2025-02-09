import React, {  useState } from "react";
import "../styles/dashboard.css";
import OrderContainer from "../components/OrdersContainer";
import InventoryProducts from "../components/InventoryProducts";
import NewProductAdd from "../components/NewProductAdd";
 
/**
 * 
 * @returns https://api.whatsapp.com/send?phone=+917276462261&text=Hello
 * 
 */

const Dashboard = () => {

    const [activeTab, setActiveTab] = useState("list-products");

    return (
        <div className="admin-container">

            <aside className="sidebar-admin">
                <h2 style={{ marginRight: '20px' }} >Kashvi</h2>
                <ul>
                    <li className={activeTab === "add-product" ? "active" : ""} onClick={() => setActiveTab("add-product")}>
                        + Add Product
                    </li>
                    <li className={activeTab === "list-products" ? "active" : ""} onClick={() => setActiveTab("list-products")}>
                        ✔ Listed Products
                    </li>
                    <li className={activeTab === "orders" ? "active" : ""} onClick={() => setActiveTab("orders")}>
                        ✔ Orders
                    </li>
                </ul>
            </aside>
 
            <div className="admin-content">
                <div className="admin-header">
                    <h2>{activeTab === "add-product" ? "Add New Product" : activeTab === "list-products" ? "All Products List" : "Order Management"}</h2>
                    <button className="logout-btn">Logout</button>
                </div>

                {activeTab === "add-product" && (
                  <NewProductAdd/>
                )}


                {/* Product Table Section */}
                {activeTab === "list-products" && (
                    <InventoryProducts/>
                )}

                {/* Orders Section */}
                {activeTab === "orders" && (
                    <OrderContainer/>
                )}


            </div>
        </div>
    );
};

export default Dashboard;   