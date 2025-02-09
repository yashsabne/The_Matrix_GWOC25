import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/categorycards.css";

const CategoryCards = () => {
  return (
    <div
      className="container-fluid mb-5"
      style={{ marginTop: "35px", padding: "0 90px 0 90px" }}
    >
      <div className="row justify-content-center g-3">
        {" "}
        {/* Reduced gap */}
        {/* Card 1 */}
        <div className="col-4">
          <div className="card border-0">
            <img
              src="https://cdn.shopify.com/s/files/1/1760/4649/products/cotton-saree-lemon-yellow-cotton-saree-silk-saree-online-31927309664449.jpg?v=1648544697"
              className="card-img-top"
              alt="24 Hr Dispatch"
            />
            <div className="gradient-overlay"></div>
            <div className="overlay-text">24 Hr Dispatch</div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="col-4">
          <div className="card border-0">
            <img
              src="https://i.pinimg.com/originals/a0/36/8e/a0368ef9bd182caa3b45a344dbd884ad.jpg"
              className="card-img-top"
              alt="New Arrivals"
            />
            <div className="gradient-overlay"></div>
            <div className="overlay-text">New Arrivals</div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="col-4">
          <div className="card border-0">
            <img
              src="https://th.bing.com/th/id/R.5fae7ce86ce8787098a825ad169379d5?rik=8BYwEPoeTYVtWA&riu=http%3a%2f%2fgopivaid.com%2fcdn%2fshop%2ffiles%2f7_5cf0c8d8-e1ce-4bc0-85fa-dccddb836030.png%3fv%3d1698874130&ehk=DmSYGiwxldXXKglbHXsPNnqPVyNgVcdOJtcODtDe0vU%3d&risl=&pid=ImgRaw&r=0"
              className="card-img-top"
              alt="Wedding Sarees"
            />
            <div className="gradient-overlay"></div>
            <div className="overlay-text">Wedding Sarees</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCards;
