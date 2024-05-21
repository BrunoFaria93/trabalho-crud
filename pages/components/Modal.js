/**
 * Nome do arquivo: index.js
 * Data de criação: 21/05/2024
 * Autor: Bruno Faria
 * Matrícula: 01616836
 *
 * Descrição:
 * 
Este componente ModalShow exibe informações detalhadas de um cliente em um modal quando acionado. Ele apresenta o nome, 
e-mail, telefone, observação e endereço do cliente.
 *
 * Este script é parte o curso de ADS.
 */

const ModalShow = ({ client, setShowClient }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-80 max-w-md p-6 rounded-lg shadow-lg relative">
        <button
          onClick={() => setShowClient(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">Mais informações</h2>
        <div className="space-y-2">
          <p><span className="font-bold">Nome:</span> {client.name}</p>
          <p><span className="font-bold">Email:</span> {client.email}</p>
          <p><span className="font-bold">Telefone:</span> {client.phone}</p>
          <p className="truncate"><span className="font-bold">Observação:</span> {client.observation}</p>
          <p><span className="font-bold">Rua:</span> {client.address.street}</p>
          <p><span className="font-bold">Nº:</span> {client.address.number}</p>
          <p><span className="font-bold">Bairro:</span> {client.address.neighborhood}</p>
          <p><span className="font-bold">Complemento:</span> {client.address.complement}</p>
          <p><span className="font-bold">Cidade:</span> {client.address.city}</p>
          <p><span className="font-bold">Estado:</span> {client.address.state}</p>
        </div>
      </div>
    </div>
  );
};

export default ModalShow;
