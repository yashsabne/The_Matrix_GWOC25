import { Container, Row, Col } from "react-bootstrap";

const ExploreMore = () => {
  const sarees = [
    {
      title: "Read Pleated Sarees",
      description: "Draping under 60 seconds!",
      image:
        "https://th.bing.com/th/id/R.d9fcc8aaf5dd4973b834e94d5d7fc658?rik=KH%2fpaKSAJtUpmQ&riu=http%3a%2f%2fdubai-on.com%2fwp-content%2fuploads%2f2022%2f04%2fGhungat-by-Shaveta-Anuj-Meena-Bazaar.jpg&ehk=KCWik5z%2f6ZblHoyInABGBO8T%2fhF9rej43v2Z0prm1AA%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      title: "Embroidered Sarees",
      description: "Intricate Elegance to Make a Statement",
      image:
        "https://th.bing.com/th/id/R.d9fcc8aaf5dd4973b834e94d5d7fc658?rik=KH%2fpaKSAJtUpmQ&riu=http%3a%2f%2fdubai-on.com%2fwp-content%2fuploads%2f2022%2f04%2fGhungat-by-Shaveta-Anuj-Meena-Bazaar.jpg&ehk=KCWik5z%2f6ZblHoyInABGBO8T%2fhF9rej43v2Z0prm1AA%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      title: "Printed Sarees",
      description: "Vibrant Patterns for Every Occasion!",
      image:
        "https://th.bing.com/th/id/R.d9fcc8aaf5dd4973b834e94d5d7fc658?rik=KH%2fpaKSAJtUpmQ&riu=http%3a%2f%2fdubai-on.com%2fwp-content%2fuploads%2f2022%2f04%2fGhungat-by-Shaveta-Anuj-Meena-Bazaar.jpg&ehk=KCWik5z%2f6ZblHoyInABGBO8T%2fhF9rej43v2Z0prm1AA%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      title: "Classic Sarees",
      description: "Timeless Drapes That Never Go Out",
      image:
        "https://th.bing.com/th/id/R.d9fcc8aaf5dd4973b834e94d5d7fc658?rik=KH%2fpaKSAJtUpmQ&riu=http%3a%2f%2fdubai-on.com%2fwp-content%2fuploads%2f2022%2f04%2fGhungat-by-Shaveta-Anuj-Meena-Bazaar.jpg&ehk=KCWik5z%2f6ZblHoyInABGBO8T%2fhF9rej43v2Z0prm1AA%3d&risl=&pid=ImgRaw&r=0",
    },
  ];

  return (
    <Container fluid className="mt-4 mb-4">
      <p className="mb-4 text-start" style={{ fontSize: "25px" }}>
        Explore More
      </p>
      <Row className="gx-3 gy-3">
        {" "}
        {/* Equal gap between rows and cols */}
        {sarees.map((saree, index) => (
          <Col md={6} key={index}>
            <div className="position-relative overflow-hidden">
              <img
                src={saree.image}
                alt={saree.title}
                className="img-fluid w-100"
                style={{
                  height: "250px",
                  objectFit: "cover",
                }}
              />
              <div
                className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center text-white"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                  cursor: "pointer",
                }}
              >
                <p className="text-start ms-4" style={{ fontSize: "20px" }}>
                  {saree.title}
                </p>
                <p className=" text-start ms-4" style={{ fontSize: "13px" }}>
                  {saree.description} <br /> Shop Now
                </p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ExploreMore;
