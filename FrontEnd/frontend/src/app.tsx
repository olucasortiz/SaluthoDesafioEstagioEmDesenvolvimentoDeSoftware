// src/App.tsx
import React, { useState } from 'react';
import axios from 'axios';
import InputForm from './components/InputForm';
import ResultDisplay from './components/ResultDisplay';

interface RespostaAPI {
  resultado: number;
}

const App: React.FC = () => {
  const [resultado, setResultado] = useState<number | null>(null);
  const [erro, setErro] = useState<string>('');

  const calcularMMC = async (inicio: string, fim: string) => {
    setErro('');

    if (parseInt(inicio) <= 0 || parseInt(fim) <= 0) {
      setErro('Os números devem ser inteiros positivos.');
      setResultado(null);
      return;
    }
    if (parseInt(inicio) >= parseInt(fim)) {
      setErro('O valor inicial deve ser menor que o valor final.');
      setResultado(null);
      return;
    }

    try {
      // passando a interface RespostaAPI como tipo para o axios
      const resposta = await axios.post<RespostaAPI>('http://localhost:8080/api/calcular', {
        inicio: parseInt(inicio),
        fim: parseInt(fim),
      });
      setResultado(resposta.data.resultado);
    } catch (erro) {
      setErro('Erro ao calcular. Verifique os valores inseridos ou tente novamente.');
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f3f3f3' }}>
      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', maxWidth: '400px', width: '100%' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#333', marginBottom: '20px' }}>Calculador de MMC</h1>

        <InputForm onCalcularMMC={calcularMMC} />
        <ResultDisplay resultado={resultado} erro={erro} />
      </div>
    </div>
  );
};

export default App;
