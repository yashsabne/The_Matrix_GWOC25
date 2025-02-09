import { useState } from "react";
import '../styles/orderContainer.css'

const OrderContainer = () => {

        const [orders, setOrders] = useState([
            {
                id: 1,
                customerName: "Amit Sharma",
                items: [
                    { name: "Banarasi Silk Saree", quantity: 1, price: 4999 },
                    { name: "Kanjeevaram Silk Saree", quantity: 1, price: 8999 },
                ],
                total: 13998,
                paymentMethod: "COD",
                paymentStatus: "Pending",
                address: "B-12, Sector 45, Noida, India, 201301",
                date: "08/02/2025",
                status: "Order Placed"
            },
            {
                id: 2,
                customerName: "Priya Mehta",
                items: [
                    { name: "Chiffon Saree", quantity: 2, price: 1599 },
                    { name: "Cotton Handloom Saree", quantity: 1, price: 2299 },
                ],
                total: 5497,
                paymentMethod: "COD",
                paymentStatus: "Completed",
                address: "Flat 3A, Tower 7, South City, Kolkata, India, 700001",
                date: "07/02/2025",
                status: "Order Placed"
            },
            {
                id: 3,
                customerName: "Rahul Verma",
                items: [
                    { name: "Silk Embroidered Saree", quantity: 1, price: 6999 },
                ],
                total: 6999,
                paymentMethod: "UPI",
                paymentStatus: "Completed",
                address: "D-Block, MG Road, Bangalore, India, 560001",
                date: "06/02/2025",
                status: "Order Placed"
            },
            {
                id: 4,
                customerName: "Divaldo Lee",
                items: [
                    { name: "Georgette Printed Saree", quantity: 1, price: 2599 },
                    { name: "Silk Zari Work Saree", quantity: 1, price: 7999 },
                ],
                total: 10598,
                paymentMethod: "Credit Card",
                paymentStatus: "Completed",
                address: "Lebuh Raya Bukit Jalil, Kuala Lumpur, Malaysia, 57000",
                date: "05/02/2025",
                status: "Order Placed"
            }
        ]);    // Update order status function
        const updateOrderStatus = (id, newStatus) => {
            setOrders(
                orders.map((order) =>
                    order.id === id ? { ...order, status: newStatus } : order
                )
            );
        };

    return (
        <div className="orders-container">
        {orders.map((order) => (
            <div key={order.id} className="order-card">
                {/* Order Left Section (Image) */}
                <div className="order-image">
                    <img src="data:image/svg+xml,%3csvg%20width='73'%20height='73'%20viewBox='0%200%2073%2073'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='0.5'%20y='0.5'%20width='72'%20height='72'%20fill='%23F9FAFB'%20stroke='%23D2D2D2'/%3e%3cpath%20d='M41.1484%2037.4871L38.6348%2038.9418V65.0908L61.2694%2052.0221V25.873L41.1484%2037.4871Z'%20fill='%23565656'/%3e%3cpath%20d='M45.247%2014.039L36.5423%209L13.2793%2022.4295L21.9956%2027.4684L45.247%2014.039Z'%20fill='%23565656'/%3e%3cpath%20d='M59.7945%2022.4307L49.7631%2016.7168L26.5117%2030.1463L27.8384%2030.8329L36.5431%2035.8602L45.2013%2030.8678L59.7945%2022.4307Z'%20fill='%23565656'/%3e%3cpath%20d='M24.7545%2039.7573L20.5883%2037.6161V30.9595L12%2026.0137V51.9765L34.4717%2064.9521V38.9893L24.7545%2033.3917V39.7573Z'%20fill='%23565656'/%3e%3c/svg%3e" alt="Package" />
                </div>

                {/* Order Details */}
                <div className="order-details">
                    <p className="order-items">
                        {order.items.map((item, index) => (
                            <span key={index}>
                                {item.name} x {item.quantity}
                                {index !== order.items.length - 1 ? ", " : ""}
                            </span>
                        ))}
                    </p>
                    <p className="order-address">
                        <strong>{order.customerName}</strong>
                    </p>
                    <p>{order.address}</p>
                </div>

                {/* Order Summary */}
                <div className="order-summary">
                    <p><strong>Items:</strong> {order.items.length}</p>
                    <p><strong>Total:</strong> ${order.total}</p>
                    <p><strong>Method:</strong> {order.paymentMethod}</p>
                    <p><strong>Payment:</strong> {order.paymentStatus}</p>
                    <p><strong>Date:</strong> {order.date}</p>
                </div>

                {/* Order Status Dropdown */}
                <div className="order-status">
                    {/* Status Dropdown */}
                    <select
                        className="order-status-dropdown"
                        value={order.status}
                        onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                    >
                        <option value="Pending">Pending</option>
                        <option value="Confirmed">Confirmed</option>
                        <option value="Packed">Packed</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Delivered">Delivered</option>
                    </select>

                    {/* Status Action Buttons */}
                    {order.status === "Pending" && (
                        <button className="status-btn confirm" onClick={() => updateOrderStatus(order.id, "Confirmed")}>
                            Confirm Order
                        </button>
                    )}

                    {order.status === "Confirmed" && (
                        <button className="status-btn pack" onClick={() => updateOrderStatus(order.id, "Packed")}>
                            Pack Order
                        </button>
                    )}

                    {order.status === "Packed" && (
                        <button className="status-btn ship" onClick={() => updateOrderStatus(order.id, "Shipped")}>
                            Ship Order
                        </button>
                    )}

                    {order.status === "Shipped" && (
                        <button className="status-btn deliver" onClick={() => updateOrderStatus(order.id, "Delivered")}>
                            Deliver Order
                        </button>
                    )}

                    {order.status === "Delivered" && (
                        <span className="delivered-status">✅ Order Delivered</span>
                    )}
                </div>


            </div>
        ))}
    </div>
    )
}
export default OrderContainer;