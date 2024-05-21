
/**
 * Nome do arquivo: index.js
 * Data de criação: 21/05/2024
 * Autor: Bruno Faria
 * Matrícula: 01616836
 *
 * Descrição:
 * Este componente ModalDelete é responsável por exibir um modal de confirmação para a exclusão de um cliente. 
Quando acionado, ele oferece ao usuário a opção de confirmar ou cancelar a exclusão.
 *
 * Este script é parte o curso de ADS.
 */



import { deleteClient } from "@/services/clientService";
import { toast } from 'react-toastify';

const ModalDelete = ({ setOpenDeleteModal, clientID, clientList, setClientList  }) => {
  const handleDelete = async () => {
    try {
      await deleteClient(clientID);
      console.log("Client deleted successfully");
      setClientList(clientList.filter((client) => client.id !== clientID));
      toast.success("Cliente deletado com sucesso!");
      setOpenDeleteModal(false)
    } catch (error) {
      toast.error("Erro ao deletar cliente!");
      console.error("Error deleting client:", error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-80 max-w-md p-6 rounded-lg shadow-lg relative">
        <button
          onClick={() => setOpenDeleteModal(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <h2 className="text-xl text-center font-bold mb-8">Deletar cliente?</h2>
        <div className="flex justify-center items-center gap-x-5">
          <button onClick={handleDelete} className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md">Sim</button>
          <button onClick={() => setOpenDeleteModal(false)} className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-md">Não</button>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
