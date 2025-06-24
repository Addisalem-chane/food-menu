import React, { Component } from "react";
import { useParams, Link } from "react-router-dom";
import { menu } from "../assets/data.js";

function FoodDetailWrapper() {
  // React Router hook to get URL param
  const { id } = useParams();
  return <FoodDetail id={parseInt(id)} />;
}

class FoodDetail extends Component {
  render() {
    const { id } = this.props;
    const food = menu.find((item) => item.id === id);

    if (!food) {
      return (
        <div style={{ padding: "20px" }}>
          <h2>Food item not found.</h2>
          <Link to="/">Back to Menu</Link>
        </div>
      );
    }

    // Related items in same category but different id
    const related = menu
      .filter((item) => item.category === food.category && item.id !== food.id)
      .slice(0, 2);

    return (
      <div
        className="single-container"
        style={{ maxWidth: "800px", margin: "2rem auto", padding: "1rem" }}
      >
        <img
          src={food.img}
          alt={food.title}
          style={{ width: "100%", borderRadius: "10px" }}
        />
        <h2
          className="single-title"
          style={{ color: "#e63946", margin: "1rem 0" }}
        >
          {food.title}
        </h2>
        <span
          className="badge"
          style={{
            backgroundColor: "#f1c40f",
            color: "#fff",
            padding: "0.3rem 0.7rem",
            borderRadius: "20px",
          }}
        >
          {food.category}
        </span>
        <p
          className="single-price"
          style={{ fontSize: "1.2rem", color: "#1d3557" }}
        >
          Price: ${food.price.toFixed(2)}
        </p>
        <div
          className="single-desc"
          style={{ marginTop: "1rem", lineHeight: "1.6" }}
        >
          {food.desc}
        </div>

        <div className="buttons" style={{ marginTop: "2rem" }}>
          <button
            onClick={() => window.print()}
            style={{
              backgroundColor: "#1d3557",
              color: "white",
              border: "none",
              padding: "0.6rem 1rem",
              marginRight: "0.5rem",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            🖨️ Print
          </button>
          <button
            onClick={() =>
              navigator.share &&
              navigator.share({ title: food.title, url: window.location.href })
            }
            style={{
              backgroundColor: "#1d3557",
              color: "white",
              border: "none",
              padding: "0.6rem 1rem",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            🔗 Share
          </button>
        </div>

        <div className="related-section" style={{ marginTop: "3rem" }}>
          <h3 style={{ color: "#1d3557", marginBottom: "1rem" }}>
            Related Dishes
          </h3>
          <div
            className="related-items"
            style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
          >
            {related.map((item) => (
              <Link
                key={item.id}
                to={`/food/${item.id}`}
                style={{
                  flex: "1 1 45%",
                  backgroundColor: "#f8f9fa",
                  padding: "0.8rem",
                  borderRadius: "8px",
                  boxShadow: "0 0 5px rgba(0,0,0,0.05)",
                  color: "#333",
                  textDecoration: "none",
                  transition: "0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#e9ecef")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#f8f9fa")
                }
              >
                <strong>{item.title}</strong>
                <br />
                <small>${item.price.toFixed(2)}</small>
              </Link>
            ))}
          </div>
        </div>

        <Link
          to="/"
          style={{
            display: "inline-block",
            marginTop: "2rem",
            backgroundColor: "#1d3557",
            color: "#fff",
            padding: "0.6rem 1.2rem",
            borderRadius: "5px",
            textDecoration: "none",
          }}
        >
          ⬅ Back to Menu
        </Link>
      </div>
    );
  }
}

export default FoodDetailWrapper;
