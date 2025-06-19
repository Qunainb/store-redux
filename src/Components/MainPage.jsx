import { useState, useEffect } from "react";

export default function MainPage() {
  const [storedData, setStoredData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [limit, setLimit] = useState(10);

  useEffect(() => {
    async function store() {
      try {
        setIsLoading(true);
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setStoredData(data);
      } catch (error) {
        setError(error.message);
      }

      setIsLoading(false);
    }

    store();
  }, []);

  function handleLimitChange(event) {
    setLimit(Number(event.target.value));
  }

  const limitedData = storedData.slice(0, limit);

  return (
    <>
      <h2>Products</h2>

      {storedData.length > 0 && (
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="limitInput">Show number of products: </label>
          <input
            type="number"
            id="limitInput"
            value={limit}
            min="1"
            max={storedData.length}
            onChange={handleLimitChange}
          />
        </div>
      )}

      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="main-container">
        {limitedData.map((data) => {
          return (
            <div className="box" key={data.id}>
              <div className="content">
                <h5>{data.title}</h5>
                <p>{data.description}</p>
              </div>
              <img className="product-image" src={data.image} />
            </div>
          );
        })}
      </div>
    </>
  );
}
