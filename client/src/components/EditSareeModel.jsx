import { useState } from "react";
import "../styles/EditSareeModal.css";

const EditSareeModal = ({ saree, onClose }) => {
    const [sareeName, setSareeName] = useState(saree.name);
    const [sareeDesc, setSareeDesc] = useState(saree.description);
    const [category, setCategory] = useState(saree.category);
    const [fabric, setFabric] = useState(saree.fabric);
    const [workType, setWorkType] = useState(saree.workType);
    const [occasion, setOccasion] = useState(saree.occasion);
    const [color, setColor] = useState(saree.color);
    const [price, setPrice] = useState(saree.price);
    const [outOfStock, setOutOfStock] = useState(saree.stock === 0);
    const [featured, setFeatured] = useState(saree.featured);
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState(""); // ✅ Success Badge

    const handleUpdate = async (e) => {
        e.preventDefault();
        setLoading(true);

        const updatedSaree = {
            name: sareeName,
            description: sareeDesc,
            category,
            fabric,
            workType,
            occasion,
            color,
            price,
            stock: outOfStock ? 0 : saree.stock,
            featured,
        };

        try {
            const response = await fetch(`http://localhost:3001/saree-related/update-saree/${saree._id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedSaree),
            });

            if (!response.ok) throw new Error("Failed to update saree");

            setSuccessMessage("✅ Saree updated successfully may need to update to reflect changes!");  
            setTimeout(() => {
                setSuccessMessage("");
                onClose();
            }, 4000);
        } catch (error) {
            console.error("Update error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="modal-overlay-edit">
            <div className="modal-content-edit">
                <h2>Edit Saree</h2>
                 
                { successMessage &&  <div className="success-badge">{successMessage}</div>}
                
                <form onSubmit={handleUpdate}>
                    <label>Saree Name</label>
                    <input type="text" value={sareeName} onChange={(e) => setSareeName(e.target.value)} required />

                    <label>Saree Description</label>
                    <textarea value={sareeDesc} onChange={(e) => setSareeDesc(e.target.value)} required></textarea>

                    <div className="product-details">
                        <div>
                            <label>Category</label>
                            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                                <option>Banarasi</option>
                                <option>Kanjeevaram</option>
                                <option>Chiffon</option>
                                <option>Cotton</option>
                                <option>Silk</option>
                                <option>Handloom</option>
                            </select>
                        </div>

                        <div>
                            <label>Fabric</label>
                            <select value={fabric} onChange={(e) => setFabric(e.target.value)}>
                                <option>Silk</option>
                                <option>Cotton</option>
                                <option>Chiffon</option>
                                <option>Georgette</option>
                                <option>Net</option>
                            </select>
                        </div>

                        <div>
                            <label>Work Type</label>
                            <select value={workType} onChange={(e) => setWorkType(e.target.value)}>
                                <option>Zari</option>
                                <option>Embroidery</option>
                                <option>Handwoven</option>
                                <option>Printed</option>
                                <option>Stone Work</option>
                            </select>
                        </div>
                    </div>

                    <div className="product-details">
                        <div>
                            <label>Occasion</label>
                            <select value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                                <option>Casual</option>
                                <option>Party</option>
                                <option>Wedding</option>
                                <option>Festive</option>
                                <option>Bridal</option>
                            </select>
                        </div>

                        <div>
                            <label>Color</label>
                            <input type="text" value={color} onChange={(e) => setColor(e.target.value)} required />
                        </div>
                    </div>

                    <label>Price</label>
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />

                    <div className="checkbox-group">
                        <input type="checkbox" id="outOfStock" checked={outOfStock} onChange={(e) => setOutOfStock(e.target.checked)} />
                        <label htmlFor="outOfStock">Out of Stock</label>
                    </div>

                    <div className="checkbox-group">
                        <input type="checkbox" id="featured" checked={featured} onChange={(e) => setFeatured(e.target.checked)} />
                        <label htmlFor="featured">Add to Featured</label>
                    </div>

                    <div className="btn-div">
                        <button type="submit" className="edit-product-btn" disabled={loading}>
                            {loading ? "UPDATING..." : "UPDATE SAREE"}
                        </button>
                        <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditSareeModal;
