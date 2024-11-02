// src/components/ResultDisplay.tsx
import React from 'react';

interface ResultDisplayProps {
  resultado: number | null;
  erro: string;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ resultado, erro }) => {
  return (
    <div style={{ marginTop: '30px', transition: 'opacity 0.3s', opacity: resultado || erro ? 1 : 0 }}>
      {erro ? (
        <div style={{
          color: '#ff4d4d',
          backgroundColor: '#ffe6e6',
          padding: '15px',
          borderRadius: '8px',
          fontSize: '16px',
          boxShadow: '0 4px 8px rgba(255, 77, 77, 0.2)',
        }}>
          {erro}
        </div>
      ) : resultado !== null ? (
        <div style={{
          color: '#4d4dff',
          backgroundColor: '#e6e6ff',
          padding: '15px',
          borderRadius: '8px',
          fontSize: '16px',
          boxShadow: '0 4px 8px rgba(77, 77, 255, 0.2)',
        }}>
          <strong>Resultado:</strong> MMC = {resultado}
        </div>
      ) : (
        <p style={{ color: '#555' }}>Insira os valores e clique em "Calcular" para ver o resultado.</p>
      )}
    </div>
  );
};

export default ResultDisplay;
