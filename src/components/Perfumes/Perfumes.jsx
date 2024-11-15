import React, { useEffect, useState } from 'react';

function Perfumes() {
  const [perfumes, setPerfumes] = useState([]);

  useEffect(() => {
    const fetchPerfumes = async () => {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5000/perfumes', {
        headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTczMTY0MDI1MCwianRpIjoiNzQ1NjczYWUtN2M5Zi00M2U1LThiOGItNmJkMTVhYWY3OWU5IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6ImFkbWluIiwibmJmIjoxNzMxNjQwMjUwLCJjc3JmIjoiZTEzMjQ1MmItYjM5ZC00ZTQyLWFhNTQtOWM2ZDRkNjUzZmU3IiwiZXhwIjoxNzMxNjQxNDUwLCJhZG1pbmlzdHJhZG9yIjp0cnVlfQ.vT200asWjHSlsxjkmR9EdlY0RZ0FDAzHEGs-ijom3ho` }
      });
      const data = await response.json();
      setPerfumes(data);
    };
    fetchPerfumes();
  }, []);

  return (
    <div>
      <h2>Lista de Perfumes</h2>
      <ul>
        {perfumes.map((perfume) => (
          <li key={perfume.id}>
            {perfume.nombre} - {perfume.marca.nombre} - {perfume.mililitros}ml - {perfume.sexo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Perfumes;
