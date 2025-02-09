import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";

export default function Pagination() {
  return (
    <nav aria-label="Page navigation example" style={{ marginTop: "30px" }}>
      <ul
        className="pagination custom-pagination "
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <li className="page-item  ">
          <a
            className="page-link border-0"
            href="#"
            aria-label="Previous"
            style={{
              color: "black",
            }}
          >
            <span aria-hidden="true">
              <ArrowBackIosNewOutlinedIcon fontSize="xs" />
            </span>
          </a>
        </li>
        <li className="page-item">
          <a
            className="page-link  border-0"
            href="#"
            style={{ color: "black" }}
          >
            1
          </a>
        </li>
        <li className="page-item">
          <a
            className="page-link  border-0"
            href="#"
            style={{ color: "black" }}
          >
            2
          </a>
        </li>
        <li className="page-item">
          <a
            className="page-link  border-0"
            href="#"
            style={{ color: "black" }}
          >
            3
          </a>
        </li>
        <li className="page-item">
          <a
            className="page-link  border-0"
            href="#"
            style={{ color: "black" }}
          >
            4
          </a>
        </li>
        <li className="page-item">
          <a
            className="page-link  border-0"
            href="#"
            style={{ color: "black" }}
          >
            5
          </a>
        </li>
        <li className="page-item">
          <a
            className="page-link  border-0"
            href="#"
            aria-label="Next"
            style={{ color: "black" }}
          >
            <span aria-hidden="true">
              <ArrowForwardIosOutlinedIcon fontSize="xs" />
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
