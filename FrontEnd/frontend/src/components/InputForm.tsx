
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
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
      <div>
        <label style={{ fontSize: '14px', color: '#333' }}>Início do Intervalo</label>
        <input
          type="number"
          value={inicio}
          onChange={(e) => setInicio(e.target.value)}
          placeholder="Digite o início do intervalo"
          style={{ width: '100%', padding: '10px', marginTop: '5px', border: '1px solid #ccc', borderRadius: '4px' }}
        />
      </div>
      <div>
        <label style={{ fontSize: '14px', color: '#333' }}>Fim do Intervalo</label>
        <input
          type="number"
          value={fim}
          onChange={(e) => setFim(e.target.value)}
          placeholder="Digite o fim do intervalo"
          style={{ width: '100%', padding: '10px', marginTop: '5px', border: '1px solid #ccc', borderRadius: '4px' }}
        />
      </div>
      <button
        type="submit"
        style={{ width: '100%', backgroundColor: '#007bff', color: 'white', padding: '10px', borderRadius: '4px', border: 'none', cursor: 'pointer' }}
      >
        Calcular
      </button>
    </form>
  );
};

export default InputForm;
