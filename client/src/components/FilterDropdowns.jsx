import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/dropdown.css"; // Scoped styles
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FilterDropdowns = () => {
  const filters = ["Occasion", "Select Size", "Delivery"];
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const sortOptions = [
    "Trending",
    "Best Sellers",
    "New",
    "Price: high to low",
    "Price: low to high",
    "Biggest Saving",
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

  const [selectedSort, setSelectedSort] = useState("Trending");

  return (
    <div className="filter-dropdowns-container d-flex justify-content-between align-items-center">
      {/* Filter Buttons */}
      <div className="d-flex gap-2">
        {filters.map((filter, index) => (
          <Dropdown key={index} onToggle={() => toggleDropdown(index)}>
            <Dropdown.Toggle
              variant="outline-dark"
              className="custom-dropdown"
              id={`dropdown-${index}`}
              style={{
                fontSize: "12px",
                padding: "2px 10px 2px 10px",
              }}
            >
              {filter}{" "}
              <span>
                {openDropdown === index ? (
                  <ExpandLessIcon />
                ) : (
                  <ExpandMoreIcon />
                )}
              </span>
            </Dropdown.Toggle>

            <Dropdown.Menu className="rounded-dropdown">
              <div className="dropdown-options">
                {(filter === "Occasion"
                  ? Occasions
                  : filter === "Select Size"
                  ? sizes
                  : filter === "Delivery"
                  ? shippingData
                  : []
                ).map((item, i) => (
                  <button
                    key={i}
                    className="dropdown-option"
                    onClick={() =>
                      console.log(
                        `${filter} - ${item.name || item.label || item}`
                      )
                    }
                  >
                    {item.name || item.label || item}{" "}
                    {(item.count || item.count === 0) && (
                      <span className="count">({item.count})</span>
                    )}
                  </button>
                ))}
              </div>
            </Dropdown.Menu>
          </Dropdown>
        ))}
      </div>

      {/* Sort Dropdown */}
      <div className="d-flex align-items-center">
        <span className="me-2" style={{ fontSize: "13px" }}>
          Sort By
        </span>
        <Dropdown onSelect={(eventKey) => setSelectedSort(eventKey)}>
          <Dropdown.Toggle
            variant="outline-dark"
            className="custom-dropdown sort-dropdown"
            style={{
              fontSize: "12px",
              padding: "2px 12px 2px 12px",
            }}
          >
            {selectedSort}
            <span className="text-end">
              <ExpandMoreIcon />
            </span>
          </Dropdown.Toggle>

          <Dropdown.Menu className="rounded-sort-dropdown">
            {sortOptions.map((option, index) => (
              <Dropdown.Item
                key={index}
                eventKey={option}
                active={selectedSort === option}
              >
                {option}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default FilterDropdowns;
