import React, { useState } from 'react';

function ServiceForm({ onSave, onCancel, initialData }) {
  const [formData, setFormData] = useState(initialData || {
    client: '',
    type: '',
    moviles: [''],
    choferes: [''],
    origin: '',
    destination: '',
    schedule: '',
    comments: '',
    isCompleted: false,
  });

  // Función para agregar un móvil adicional
  const addMovil = () => {
    setFormData({ ...formData, moviles: [...formData.moviles, ''] });
  };

  // Función para agregar un chofer adicional
  const addChofer = () => {
    setFormData({ ...formData, choferes: [...formData.choferes, ''] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData); // Guardamos los datos del formulario
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Cliente:</label>
        <input
          type="text"
          value={formData.client}
          onChange={(e) => setFormData({ ...formData, client: e.target.value })}
          required
        />
      </div>
      <div>
        <label>Tipo de Servicio:</label>
        <input
          type="text"
          value={formData.type}
          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          required
        />
      </div>

      {/* Sección de Móviles */}
      <div>
        <label>Móviles:</label>
        {formData.moviles.map((movil, index) => (
          <input
            key={index}
            type="text"
            value={movil}
            onChange={(e) => {
              const newMoviles = [...formData.moviles];
              newMoviles[index] = e.target.value;
              setFormData({ ...formData, moviles: newMoviles });
            }}
            placeholder={`Móvil ${index + 1}`}
            required={index === 0}
          />
        ))}
        <button type="button" onClick={addMovil}>Añadir Móvil</button>
      </div>

      {/* Sección de Choferes */}
      <div>
        <label>Choferes:</label>
        {formData.choferes.map((chofer, index) => (
          <input
            key={index}
            type="text"
            value={chofer}
            onChange={(e) => {
              const newChoferes = [...formData.choferes];
              newChoferes[index] = e.target.value;
              setFormData({ ...formData, choferes: newChoferes });
            }}
            placeholder={`Chofer ${index + 1}`}
            required={index === 0}
          />
        ))}
        <button type="button" onClick={addChofer}>Añadir Chofer</button>
      </div>

      {/* Sección de Origen y Destino */}
      <div>
        <label>Origen:</label>
        <input
          type="text"
          value={formData.origin}
          onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
          required
        />
      </div>
      <div>
        <label>Destino:</label>
        <input
          type="text"
          value={formData.destination}
          onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
          required
        />
      </div>

      {/* Sección de Horario */}
      <div>
        <label>Horario:</label>
        <input
          type="text"
          value={formData.schedule}
          onChange={(e) => setFormData({ ...formData, schedule: e.target.value })}
          required
        />
      </div>

      {/* Sección de Comentarios */}
      <div>
        <label>Comentarios:</label>
        <textarea
          value={formData.comments}
          onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
          placeholder="Añade cualquier comentario relevante"
        />
      </div>

      <div>
        <button type="submit">Guardar</button>
        <button type="button" onClick={onCancel}>Cancelar</button>
      </div>
    </form>
  );
}

export default ServiceForm;
