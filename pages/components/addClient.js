/**
 * Nome do arquivo: index.js
 * Data de criação: 21/05/2024
 * Autor: Bruno Faria
 * Matrícula: 01616836
 *
 * Descrição:
 * Este componente AddClient é responsável por fornecer um formulário para adicionar novos clientes ao sistema. 
 * Ele captura os dados inseridos pelo usuário e os envia para o serviço addClient para serem processados e armazenados no 
 * banco de dados.
 *
 * Este script é parte o curso de ADS.
 */

import { addClient, getClients } from "@/services/clientService";
import { toast } from "react-toastify";

const AddClient = ({
  setClientList,
  setEditClient,
  setOpenClientADD,
  isMobile,
}) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const observation = formData.get("observation");
    const address = {
      street: formData.get("street"),
      number: formData.get("number"),
      neighborhood: formData.get("neighborhood"),
      complement: formData.get("complement"),
      city: formData.get("city"),
      state: formData.get("state"),
    };
    try {
      await addClient({ name, email, phone, observation, address });
      setEditClient(false);
      setOpenClientADD(false);
      toast.success("Cliente adicionado com sucesso!");
      const clients = await getClients();
      setClientList(clients);
    } catch (error) {
      toast.error("Falha ao adicionar cliente");
      console.error("Failed to add client:", error);
    }
  };

  return (
    <main className="flex flex-col justify-center items-center p-4 h-[90vh] md:h-screen w-full md:w-auto bg-gray-100 rounded-md overflow-y-auto md:overflow-hidden">
    <h2 className="text-black text-left w-full my-2 font-bold text-xl mt-5">
      Adicionar clientes
    </h2>
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-2 md:gap-4 text-black max-w-screen-md w-full h-[90vh] md:h-full bg-gray-100 rounded-md overflow-y-auto md:overflow-visible"
    >
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">Nome</label>
          <input
            type="text"
            name="name"
            placeholder="Nome"
            required
            className="p-2 mb-2 rounded-md border"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">E-mail</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="p-2 mb-2 rounded-md border"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">Telefone</label>
          <input
            type="text"
            name="phone"
            placeholder="Telefone"
            className="p-2 mb-2 rounded-md border"
          />
        </div>
        <div className="flex flex-col md:col-span-2">
          <label className="text-sm font-semibold mb-1">Observação</label>
          <textarea
            name="observation"
            placeholder="Observação"
            className="p-2 mb-2 rounded-md border w-full"
          ></textarea>
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">Rua</label>
          <input
            type="text"
            name="street"
            placeholder="Rua"
            className="p-2 mb-2 rounded-md border"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">Nº</label>
          <input
            type="text"
            name="number"
            placeholder="Nº"
            className="p-2 mb-2 rounded-md border"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">Bairro</label>
          <input
            type="text"
            name="neighborhood"
            placeholder="Bairro"
            className="p-2 mb-2 rounded-md border"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">Complemento</label>
          <input
            type="text"
            name="complement"
            placeholder="Complemento"
            className="p-2 mb-2 rounded-md border"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">Cidade</label>
          <input
            type="text"
            name="city"
            placeholder="Cidade"
            className="p-2 mb-2 rounded-md border"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">Estado</label>
          <input
            type="text"
            name="state"
            placeholder="Estado"
            className="p-2 mb-2 rounded-md border"
          />
        </div>
        <button
          type="submit"
          className="flex justify-center items-center p-3 md:p-2 bg-blue-500 mb-5 md:mb-2 text-white rounded-md hover:bg-blue-600 mt-4 md:col-span-2"
        >
            Adicionar Cliente
        </button>
      </form>
    </main>
  );
};

export default AddClient;
