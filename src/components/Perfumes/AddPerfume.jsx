import React, { useState } from 'react';

function AddPerfume() {
  const [nombre, setNombre] = useState('');
  const [marcaId, setMarcaId] = useState('');
  const [mililitros, setMililitros] = useState('');
  const [modelo, setModelo] = useState('');
  const [sexo, setSexo] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const response = await fetch('http://localhost:5000/perfumes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTczMTY0MDI1MCwianRpIjoiNzQ1NjczYWUtN2M5Zi00M2U1LThiOGItNmJkMTVhYWY3OWU5IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6ImFkbWluIiwibmJmIjoxNzMxNjQwMjUwLCJjc3JmIjoiZTEzMjQ1MmItYjM5ZC00ZTQyLWFhNTQtOWM2ZDRkNjUzZmU3IiwiZXhwIjoxNzMxNjQxNDUwLCJhZG1pbmlzdHJhZG9yIjp0cnVlfQ.vT200asWjHSlsxjkmR9EdlY0RZ0FDAzHEGs-ijom3ho`
      },
      body: JSON.stringify({ nombre, marca_id: marcaId, mililitros, modelo, sexo })
    });
    if (response.ok) {
      alert('Perfume agregado con éxito');
    } else {
      alert('Error al agregar el perfume');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Agregar Perfume</h2>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Nombre"
        required
      />
      <input
        type="number"
        value={marcaId}
        onChange={(e) => setMarcaId(e.target.value)}
        placeholder="ID de la Marca"
        required
      />
      <input
        type="number"
        value={mililitros}
        onChange={(e) => setMililitros(e.target.value)}
        placeholder="Mililitros"
        required
      />
      <input
        type="text"
        value={modelo}
        onChange={(e) => setModelo(e.target.value)}
        placeholder="Modelo"
        required
      />
      <select value={sexo} onChange={(e) => setSexo(e.target.value)} required>
        <option value="">Sexo</option>
        <option value="Hombre">Hombre</option>
        <option value="Mujer">Mujer</option>
        <option value="Unisex">Unisex</option>
      </select>
      <button type="submit">Agregar Perfume</button>
    </form>
  );
}

export default AddPerfume;
