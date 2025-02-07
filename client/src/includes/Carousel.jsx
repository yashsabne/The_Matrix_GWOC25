 
export default function Carousel() {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div
          className="carousel-item active"
          data-bs-interval="3000"
          style={{ cursor: "pointer" }}
        >
          <img
            src="https://static.showit.co/1200/frBJ4TKwRJyiTnZjEL9C5Q/59335/ombrebyhj_le-9529.jpg"
            className="d-block w-100"
            style={{
              width: "100%", // Ensures full width
              height: "650px", // Adjust height to fit viewport
              objectFit: "cover",
              filter: "brightness(70%)",
            }}
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block mb-5">
            <h6>
              <i>Making Every Bride's</i>
            </h6>
            <h2>Dream Come True</h2>
          </div>
        </div>
        <div
          className="carousel-item"
          data-bs-interval="3000"
          style={{ cursor: "pointer" }}
        >
          <img
            src="https://i.pinimg.com/originals/67/0e/49/670e49f72ecd161dc2e8972b5b9ba54d.jpg"
            className="d-block w-100"
            style={{
              width: "100%", // Ensures full width
              height: "650px", // Adjust height to fit viewport

              objectFit: "cover",
              filter: "brightness(70%)",
            }}
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block mb-5">
            <h6>
              <i>Simple celebrations, </i>
            </h6>
            <h2>Timeless memories!</h2>
          </div>
        </div>

        <div
          className="carousel-item "
          data-bs-interval="3000"
          style={{ cursor: "pointer" }}
        >
          <img
            src="https://www.rishabhagarwal.com/wp-content/new-uploads/2019/05/AR_Wedding_Blog_070.jpg"
            className="d-block w-100"
            style={{
              width: "100%", // Ensures full width
              height: "650px", // Adjust height to fit viewport

              objectFit: "cover",
              filter: "brightness(70%)",
            }}
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block mb-5">
            <h6>
              <i>Curating Every</i>
            </h6>
            <h2>Wedding Emotion</h2>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}  