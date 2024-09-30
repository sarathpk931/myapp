import React, { useState, useEffect } from 'react';
import './DataFetcher.css';
function DataFetcher() {
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect to fetch data from an API when the component mounts
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts') // Example API
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);  // Set the fetched data
        setLoading(false); 
      })
      .catch((error) => {
        setError(error);  
        setLoading(false);  
      });
  }, []);  

  
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="DataPage">
      <h2>Fetched Data</h2>
      <ul>
        {data.slice(0, 10).map((item) => (  
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetcher;
