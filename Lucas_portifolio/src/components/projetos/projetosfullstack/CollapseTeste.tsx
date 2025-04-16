import { useState } from 'react';

function Collapse() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {isOpen ? 'Fechar' : 'Abrir'} Detalhes
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="mt-4 bg-gray-100 p-4 rounded text-black">
          Este é o conteúdo colapsável. Você pode colocar texto, imagens, ou até outro componente aqui.
        </p>
      </div>
    </div>
  );
}

export default Collapse;