import { Link, useNavigate , useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const Details = () => {
  const { id } = useParams();
  const [producte, producteRender] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => producteRender(json));
  }, []);
 
  return (
    <>
      <header className="text-bg-primary py-3 shadow sticky-top">
        <nav className="container d-flex align-items-center justify-content-between">
          <Link className="text-warning text-decoration-none fs-2" to="/">
            Najot Market
          </Link>

          <Link className="btn btn-primary fs-4" to="/">
            <i className="fa-solid fa-arrow-right-from-bracket"></i>{" "}
          </Link>
        </nav>
      </header>

      <div className="container justify-content-between d-flex details-card">
        <div className=" detls-card-text mt-5 mb-3">
          <h2 className="detls-h2 fs-1">{producte.title}</h2>
          <p className="detls-description fs-3">
            <span className="des-span ">Description:</span>{" "}
            {producte.description}
          </p>
          <p className="more-price text-info fs-3">
            <span className="des-span fw-bold text-dark">Price:</span>{" "}
            {producte.price}$
          </p>
          <p className="detls-category fs-3">
            <span className="des-span">Categoria:</span> {producte.category}
          </p>
        </div>

        <img
          src={producte.image}
          className="d-flex detls-img w-50"
          alt="rasm"
        />
      </div>
    </>
  );
};

export default Details;
