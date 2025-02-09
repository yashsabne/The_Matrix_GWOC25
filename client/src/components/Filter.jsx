import { useState } from "react";
import "../styles/filter.css";
import FilterDropdowns from "./FilterDropdowns";
import ProductCard from "./Productcard";
import Pagination from "./Pagination";
import ExploreMore from "./ExploreMore";

const Filter = () => {
  const filters = [
    "Price",
    "Sub Categories",
    "Color",
    "Fabric",
    "Occasion",
    "Select Size",
    "Delivery",
  ];

  const sizes = [
    "Fabric Only",
    "US 0",
    "US 2",
    "US 4",
    "US 6",
    "US 8",
    "US 10",
    "US 12",
    "US 14",
    "US 16",
    "US 17",
    "US 18",
    "US 19",
    "US 20",
    "US 21",
  ];

  const subCategories = [
    { name: "Bandhani Saree", count: 20 },
    { name: "Printed Saree", count: 139 },
    { name: "Embroidered Saree", count: 391 },
    { name: "Ready Pleated Saree", count: 95 },
    { name: "Banarasi Saree", count: 25 },
    { name: "Embroidered Blouse", count: 2 },
    { name: "Plain Saree", count: 93 },
    { name: "Plain Saree with Border", count: 136 },
    { name: "Sequins Saree", count: 59 },
    { name: "Woven Saree", count: 193 },
    { name: "Embellished Sarees", count: 15 },
  ];

  const Occasions = [
    { name: "Wedding", count: 233 },
    { name: "Festive", count: 619 },
    { name: "Pooja", count: 257 },
    { name: "Haldi", count: 94 },
    { name: "Mehendi", count: 106 },
    { name: "Engagement", count: 225 },
    { name: "Sangeet", count: 265 },
    { name: "Party", count: 131 },
    { name: "Cocktail", count: 164 },
    { name: "Reception", count: 145 },
    { name: "Casual", count: 68 },
  ];

  const shippingData = [
    { label: "Ready to Ship", count: 1100 },
    { label: "Within 10 Days", count: 2 },
    { label: "Within 15 Days", count: 12 },
    { label: "Within 20 Days", count: 31 },
    { label: "Within 25 Days", count: 14 },
    { label: "Within 30 Days", count: 30 },
    { label: "Within 35 Days", count: 12 },
    { label: "Within 40 Days", count: 4 },
    { label: "Within 45 Days", count: 2 },
    { label: "Within 50 Days", count: 11 },
    { label: "Within 60 Days", count: 3 },
  ];

  const products = [
    {
      id: "1",
      title:
        " Green Khaddi Georgette Bandhani Saree With Zari Jaal Motif Weave",
      mrp: 7995,
      url: "https://cdn.shopify.com/s/files/1/1760/4649/products/cotton-saree-lemon-yellow-cotton-saree-silk-saree-online-31927309664449.jpg?v=1648544697",
    },
    {
      id: "2",
      title:
        " Green Khaddi Georgette Bandhani Saree With Zari Jaal Motif Weave",
      mrp: 7995,
      url: "https://cdn.shopify.com/s/files/1/1760/4649/products/cotton-saree-lemon-yellow-cotton-saree-silk-saree-online-31927309664449.jpg?v=1648544697",
    },
    {
      id: "3",
      title:
        " Green Khaddi Georgette Bandhani Saree With Zari Jaal Motif Weave",
      mrp: 7995,
      url: "https://cdn.shopify.com/s/files/1/1760/4649/products/cotton-saree-lemon-yellow-cotton-saree-silk-saree-online-31927309664449.jpg?v=1648544697",
    },
    {
      id: "4",
      title:
        " Green Khaddi Georgette Bandhani Saree With Zari Jaal Motif Weave",
      mrp: 7995,
      url: "https://cdn.shopify.com/s/files/1/1760/4649/products/cotton-saree-lemon-yellow-cotton-saree-silk-saree-online-31927309664449.jpg?v=1648544697",
    },
    {
      id: "1",
      title:
        " Green Khaddi Georgette Bandhani Saree With Zari Jaal Motif Weave",
      mrp: 7995,
      url: "https://cdn.shopify.com/s/files/1/1760/4649/products/cotton-saree-lemon-yellow-cotton-saree-silk-saree-online-31927309664449.jpg?v=1648544697",
    },
    {
      id: "2",
      title:
        " Green Khaddi Georgette Bandhani Saree With Zari Jaal Motif Weave",
      mrp: 7995,
      url: "https://cdn.shopify.com/s/files/1/1760/4649/products/cotton-saree-lemon-yellow-cotton-saree-silk-saree-online-31927309664449.jpg?v=1648544697",
    },
    {
      id: "3",
      title:
        " Green Khaddi Georgette Bandhani Saree With Zari Jaal Motif Weave",
      mrp: 7995,
      url: "https://cdn.shopify.com/s/files/1/1760/4649/products/cotton-saree-lemon-yellow-cotton-saree-silk-saree-online-31927309664449.jpg?v=1648544697",
    },
    {
      id: "4",
      title:
        " Green Khaddi Georgette Bandhani Saree With Zari Jaal Motif Weave",
      mrp: 7995,
      url: "https://cdn.shopify.com/s/files/1/1760/4649/products/cotton-saree-lemon-yellow-cotton-saree-silk-saree-online-31927309664449.jpg?v=1648544697",
    },
    {
      id: "1",
      title:
        " Green Khaddi Georgette Bandhani Saree With Zari Jaal Motif Weave",
      mrp: 7995,
      url: "https://cdn.shopify.com/s/files/1/1760/4649/products/cotton-saree-lemon-yellow-cotton-saree-silk-saree-online-31927309664449.jpg?v=1648544697",
    },
    {
      id: "2",
      title:
        " Green Khaddi Georgette Bandhani Saree With Zari Jaal Motif Weave",
      mrp: 7995,
      url: "https://cdn.shopify.com/s/files/1/1760/4649/products/cotton-saree-lemon-yellow-cotton-saree-silk-saree-online-31927309664449.jpg?v=1648544697",
    },
    {
      id: "3",
      title:
        " Green Khaddi Georgette Bandhani Saree With Zari Jaal Motif Weave",
      mrp: 7995,
      url: "https://cdn.shopify.com/s/files/1/1760/4649/products/cotton-saree-lemon-yellow-cotton-saree-silk-saree-online-31927309664449.jpg?v=1648544697",
    },
    {
      id: "4",
      title:
        " Green Khaddi Georgette Bandhani Saree With Zari Jaal Motif Weave",
      mrp: 7995,
      url: "https://cdn.shopify.com/s/files/1/1760/4649/products/cotton-saree-lemon-yellow-cotton-saree-silk-saree-online-31927309664449.jpg?v=1648544697",
    },
  ];

  const [openFilters, setOpenFilters] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedFabric, setSelectedFabric] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [selectedOccasion, setSelectedOccasion] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedShipping, setSelectedShipping] = useState(null);

  const toggleFilter = (index) => {
    if (openFilters.includes(index)) {
      setOpenFilters(openFilters.filter((i) => i !== index));
    } else {
      setOpenFilters([...openFilters, index]);
    }
  };

  const handleSubcategory = (subcategory) => {
    setSelectedSubCategory(subcategory);
    console.log(selectedSubCategory);
  };

  const handleApplyPrice = () => {
    console.log(`Filtering prices from ₹${minPrice} to ₹${maxPrice}`);
  };

  // Function to handle fabric selection
  const handleFabricSelect = (fabric) => {
    setSelectedFabric(fabric);
    console.log(selectedFabric);
  };

  const handleOccasion = (size) => {
    setSelectedSize(size);
    console.log(selectedSize);
  };

  const handleSizeSelect = (occasion) => {
    setSelectedOccasion(occasion);
    console.log(selectedOccasion);
  };

  const handleShipping = (shipping) => {
    setSelectedShipping(shipping);
    console.log(selectedShipping);
  };

  return (
    <div className="container mt-4 px-0" style={{ maxWidth: "100vw" }}>
      <div className="row ">
        <div className="col-md-2 me-4 mt-1">
          <div className="accordion" id="filtersAccordion">
            <h6
              className="fw-bold text-start"
              style={{ fontSize: "13px", marginBottom: "5px" }}
            >
              FILTERS
            </h6>
            {filters.map((filter, index) => (
              <div className="accordion-item rounded-0" key={index}>
                <h2 className="accordion-header">
                  <button
                    className="accordion-button d-flex justify-content-between align-items-center"
                    type="button"
                    onClick={() => toggleFilter(index)}
                    style={{ fontSize: "15px", fontWeight: "400" }}
                  >
                    {filter}
                    <span>{openFilters.includes(index) ? "−" : "+"}</span>
                  </button>
                </h2>
                <div
                  className={`accordion-collapse collapse ${
                    openFilters.includes(index) ? "show" : ""
                  }`}
                >
                  <div className="accordion-body">
                    {filter === "Price" ? (
                      <div className="price-filter">
                        <div className="price-input-container">
                          <span className="currency-symbol">₹</span>
                          <input
                            type="number"
                            placeholder="From"
                            value={minPrice}
                            onChange={(e) => setMinPrice(e.target.value)}
                          />
                          <span>-</span>
                          <input
                            type="number"
                            placeholder="To"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(e.target.value)}
                          />
                        </div>
                        <button
                          className="apply-button"
                          onClick={handleApplyPrice}
                        >
                          Apply
                        </button>
                      </div>
                    ) : filter === "Sub Categories" ? (
                      <div className="subcategories-filter">
                        <ul className="subcategory-list">
                          {subCategories.map((item, index) => (
                            <li
                              key={index}
                              className={
                                selectedSubCategory === item.name
                                  ? "selected"
                                  : ""
                              }
                              onClick={() => handleSubcategory(item.name)}
                            >
                              {item.name}{" "}
                              <span className="count">{item.count}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : filter === "Color" ? (
                      <div className="color-filter">
                        {[
                          "#5A2A1B",
                          "#A22222",
                          "#D38441",
                          "#E2C44B",
                          "#204B0C",
                          "#162B6B",
                          "#D4C3A1",
                          "#DA4167",
                          "#E8A497",
                          "#9D8BC5",
                          "#CAB469",
                          "#000000",
                          "#8B8B8B",
                          "#FFFFFF",
                          "#5A0E0E",
                          "#891919",
                          "#C4C4C4",
                        ].map((color, index) => (
                          <div
                            key={index}
                            className={`color-circle ${
                              selectedColor === color ? "selected" : ""
                            }`}
                            style={{ backgroundColor: color }}
                            onClick={() => setSelectedColor(color)}
                          ></div>
                        ))}
                      </div>
                    ) : filter === "Fabric" ? (
                      <div className="subcategories-filter">
                        <ul className="subcategory-list">
                          {[
                            { name: "Cotton", count: 5 },
                            { name: "Georgette", count: 135 },
                            { name: "Chiffon", count: 7 },
                            { name: "Jacquard", count: 6 },
                            { name: "Linen", count: 12 },
                            { name: "Lycra", count: 16 },
                            { name: "Net", count: 41 },
                            { name: "Organza", count: 205 },
                            { name: "Silk", count: 155 },
                            { name: "Satin", count: 127 },
                            { name: "Tissue", count: 157 },
                            { name: "Chanderi", count: 16 },
                            { name: "Crepe", count: 43 },
                            { name: "Tussar", count: 37 },
                          ].map((fabric, index) => (
                            <li
                              key={index}
                              className={
                                selectedFabric === fabric.name ? "selected" : ""
                              }
                              onClick={() => handleFabricSelect(fabric.name)}
                            >
                              {fabric.name}{" "}
                              <span className="count">{fabric.count}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : filter === "Occasion" ? (
                      <div className="subcategories-filter">
                        <ul className="subcategory-list">
                          {Occasions.map((occasion, index) => (
                            <li
                              key={index}
                              className={
                                selectedFabric === occasion.name
                                  ? "selected"
                                  : ""
                              }
                              onClick={() => handleOccasion(occasion.name)}
                            >
                              {occasion.name}{" "}
                              <span className="count">{occasion.count}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : filter === "Select Size" ? (
                      <div className="size-filter">
                        {sizes.map((size, index) => (
                          <button
                            key={index}
                            className={`size-button ${
                              selectedSize === size ? "selected" : ""
                            }`}
                            onClick={() => handleSizeSelect(size)}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    ) : filter === "Delivery" ? (
                      <div className="subcategories-filter">
                        <ul className="subcategory-list">
                          {shippingData.map((shipping, index) => (
                            <li
                              key={index}
                              className={
                                selectedShipping === shipping.label
                                  ? "selected"
                                  : ""
                              }
                              onClick={() => handleShipping(shipping.label)}
                            >
                              {shipping.label}{" "}
                              <span className="count">{shipping.count}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      `${filter} filter content`
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-md-9" style={{ fontSize: "15px" }}>
          <h2 className="text-start mb-4 josefin-sans-josefin">
            Discover the Latest Saree (साड़ी) Collection for Women
          </h2>
          <p className="text-start">
            Young or aged, preferring classic or contemporary, sarees are a
            versatile choice of Indian clothing that can cater to all kinds of
            personalities and preferences. Women have been enthralled with the
            saree for decades. From classic silk and cotton to georgette and
            chiffon, a saree is ideal for any event, whether it's a wedding,
            festival, or informal get-together.
          </p>
          <p className="text-start text-secondary">1163 items</p>
          <div className="filter-dropdowns-container">
            <FilterDropdowns />
          </div>
          <div className="product-grid">
            {products.map((product, index) => (
              <div className="product-card-wrapper" key={index}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          <Pagination />
          <ExploreMore />
        </div>
      </div>
    </div>
  );
};

export default Filter;
