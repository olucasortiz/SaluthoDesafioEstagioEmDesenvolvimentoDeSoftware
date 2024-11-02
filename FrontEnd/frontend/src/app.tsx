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
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f9f9f9', padding: '20px' }}>
      <div style={{
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '12px',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
        maxWidth: '500px',
        width: '100%',
        textAlign: 'center',
        transition: 'box-shadow 0.3s',
      }}>
        <h1 style={{
          fontSize: '28px',
          fontWeight: 'bold',
          color: '#333',
          marginBottom: '20px',
          borderBottom: '2px solid #eee',
          paddingBottom: '10px',
        }}>
          Calculador de MMC
        </h1>
        <InputForm onCalcularMMC={calcularMMC} />
        <ResultDisplay resultado={resultado} erro={erro} />
      </div>
    </div>
  );
};

export default App;
