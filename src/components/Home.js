import React, { useState, useEffect } from "react";
import { fetchImages } from "../api/unsplash";
export function Home(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchDefaultImages();
  }, []);

  const fetchDefaultImages = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await fetchImages("random", 100); // Fetch 100 default Random Images
      setImages(data.results);
    } catch (error) {
      console.error("Error fetching default images:", error);
      setError("Error fetching default images. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (e) => {
    try {
      setLoading(true);
      setError("");
      const data = await fetchImages(searchTerm, 20);
      setImages(data.results);
    } catch (error) {
      console.error(`Error In Fetching Images ${error}`);
      setError("Error In Fethcing Images No Images Found...");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="container home-container">
      <h1 className="Abouth1">
        Discover The World Of Images With..{" "}
        <strong className="home-prop">{props.name}</strong>
      </h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Images Here...."
          id="searchBox"
          name="searchBox"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button id="searchBtn" onClick={handleSearch}>
          Search
        </button>

        {loading && <p style={{ textAlign: "center" }}>Loading...</p>}
        {!loading && !error && images.length == 0 && (
          <p style={{ textAlign: "center" }}>No Image Found ...</p>
        )}
        {!loading && error && <p style={{ color: "red" }}>{error}</p>}
      </div>
      <div className="images">
        {images.map((image) => (
          <div key={image.id} className="image">
            <a
              href={image.links.html}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={image.urls.small} alt={image.alt_description} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
