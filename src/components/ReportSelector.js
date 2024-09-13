import React, { useState } from 'react';

function ReportSelector({ onGenerateReport }) {
  const [reportType, setReportType] = useState('mensual');
  const [filterType, setFilterType] = useState('');
  const [filterValue, setFilterValue] = useState('');

  const handleGenerateReport = () => {
    onGenerateReport({ reportType, filterType, filterValue });
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <h3>Generar Reporte</h3>

      <label>Tipo de Reporte: </label>
      <select value={reportType} onChange={(e) => setReportType(e.target.value)}>
        <option value="mensual">Mensual</option>
        <option value="anual">Anual</option>
        <option value="semanal">Semanal</option>
      </select>

      <div style={{ marginTop: '10px' }}>
        <label>Filtrar por: </label>
        <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
          <option value="">Ninguno</option>
          <option value="cliente">Cliente</option>
          <option value="chofer">Chofer</option>
        </select>

        {filterType && (
          <input
            type="text"
            placeholder={`Ingrese ${filterType}`}
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
            style={{ marginLeft: '10px', padding: '5px' }}
          />
        )}
      </div>

      <button onClick={handleGenerateReport} style={{ marginTop: '10px', padding: '10px 15px', cursor: 'pointer' }}>
        Generar PDF
      </button>
    </div>
  );
}

export default ReportSelector;
