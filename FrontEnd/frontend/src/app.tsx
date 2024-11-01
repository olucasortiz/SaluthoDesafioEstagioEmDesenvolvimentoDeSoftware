import React, { useState } from 'react';

export function App() {
  const [inicio, setInicio] = useState<string>(''); // Define inicio como uma string
  const [fim, setFim] = useState<string>('');       // Define fim como uma string
  const [resultado, setResultado] = useState<number | null>(null); // Define resultado como number ou null
  const [erro, setErro] = useState<string>('');     // Define erro como uma string

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f3f3f3' }}>
      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', maxWidth: '400px', width: '100%' }}>
        
        {/* Título da Página */}
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#333', marginBottom: '20px' }}>Calculador de MMC</h1>

        {/* Formulário de Entrada */}
        <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div>
            <label style={{ fontSize: '14px', color: '#333' }}>Início do Intervalo</label>
            <input
              type="number"
              value={inicio}
              onChange={(e) => setInicio(e.target.value)} // vai aualizar o estado inicio
              placeholder="Digite o início do intervalo"
              style={{ width: '100%', padding: '10px', marginTop: '5px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
          </div>
          <div>
            <label style={{ fontSize: '14px', color: '#333' }}>Fim do Intervalo</label>
            <input
              type="number"
              value={fim}
              onChange={(e) => setFim(e.target.value)} //vai atualizar o estado fim
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

        {/* Exibição de Mensagem de Erro */}
        {erro && <p style={{ color: 'red', marginTop: '15px' }}>{erro}</p>}

        {/* Exibição de Resultado */}
        {resultado !== null && (
          <div style={{ marginTop: '20px' }}>
            <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>Resultado:</h2>
            <p style={{ color: '#555' }}>MMC = {resultado}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
