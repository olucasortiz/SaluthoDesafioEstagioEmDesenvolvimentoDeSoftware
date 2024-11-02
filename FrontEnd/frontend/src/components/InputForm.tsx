
import React, { useState } from 'react';

interface InputFormProps {
  onCalcularMMC: (inicio: string, fim: string) => void;
}

const InputForm: React.FC<InputFormProps> = ({ onCalcularMMC }) => {
  const [inicio, setInicio] = useState<string>(''); // Valor inicial do intervalo
  const [fim, setFim] = useState<string>('');       // Valor final do intervalo

  // funcao que chama ao enviar o formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // impede o comportamento padrão de envio do formulário
    onCalcularMMC(inicio, fim); // hama a função do app para calcular o MMC
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '20px' }}>
      <div style={{ textAlign: 'left' }}>
        <label style={{ fontSize: '14px', color: '#555', marginBottom: '5px', display: 'block' }}>Início do Intervalo</label>
        <input
          type="number"
          value={inicio}
          onChange={(e) => setInicio(e.target.value)}
          placeholder="Digite o início do intervalo"
          style={{
            width: '100%',
            padding: '10px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            fontSize: '16px',
            outline: 'none',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
          }}
        />
      </div>
      <div style={{ textAlign: 'left' }}>
        <label style={{ fontSize: '14px', color: '#555', marginBottom: '5px', display: 'block' }}>Fim do Intervalo</label>
        <input
          type="number"
          value={fim}
          onChange={(e) => setFim(e.target.value)}
          placeholder="Digite o fim do intervalo"
          style={{
            width: '100%',
            padding: '10px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            fontSize: '16px',
            outline: 'none',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
          }}
        />
      </div>
      <button
        type="submit"
        style={{
          width: '100%',
          backgroundColor: '#007bff',
          color: 'white',
          padding: '12px',
          borderRadius: '8px',
          border: 'none',
          cursor: 'pointer',
          fontSize: '16px',
          transition: 'background-color 0.3s',
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#007bff')}
      >
        Calcular
      </button>
    </form>
  );
};

export default InputForm;
