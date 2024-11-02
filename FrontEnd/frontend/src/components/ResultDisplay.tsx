// src/components/ResultDisplay.tsx
import React from 'react';

interface ResultDisplayProps {
  resultado: number | null;
  erro: string;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ resultado, erro }) => {
  return (
    <div style={{ marginTop: '20px' }}>
      {erro ? (
        <p style={{ color: 'red' }}>{erro}</p>
      ) : resultado !== null ? (
        <div>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>Resultado:</h2>
          <p style={{ color: '#555' }}>MMC = {resultado}</p>
        </div>
      ) : (
        <p style={{ color: '#555' }}>Insira os valores e clique em "Calcular" para ver o resultado.</p>
      )}
    </div>
  );
};

export default ResultDisplay;
