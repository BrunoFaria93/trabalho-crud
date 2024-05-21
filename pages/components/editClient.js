/**
 * Nome do arquivo: index.js
 * Data de criação: 21/05/2024
 * Autor: Bruno Faria
 * Matrícula: 01616836
 *
 * Descrição:
 * Este componente EditClient é responsável por fornecer um formulário para editar informações de um cliente existente.
 * Ele permite que o usuário altere os dados do cliente, incluindo nome, e-mail, telefone, observação e endereço.
 *
 * Este script é parte o curso de ADS.
 */

import { updateClient } from "@/services/clientService";
import { toast } from "react-toastify";

const EditClient = ({
  editClient,
  clientList,
  setClientList,
  setEditClient,
  isMobile,
}) => {
  const handleEditSubmit = async (event) => {
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
      await updateClient(editClient.id, {
        name,
        email,
        phone,
        observation,
        address,
      });

      const updatedClients = clientList.map((client) =>
        client.id === editClient.id
          ? { ...client, name, email, phone, observation, address }
          : client
      );
      setClientList(updatedClients);
      toast.success("Cliente atualizado com sucesso!");
      setEditClient(null);
    } catch (error) {
      toast.error("Erro ao atualizar cliente");
      console.error("Error updating client:", error);
    }
  };

  return (
    <main className="flex flex-col justify-center items-center p-4 h-[90vh] md:h-full bg-gray-100 rounded-md w-full md:w-1/2">
      <h2 className="text-black text-left w-full my-2 font-bold text-xl">
        Editar clientes
      </h2>
      {editClient && (
        <form
          onSubmit={handleEditSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full overflow-y-auto h-[90vh] md:h-full"
        >
          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-1 text-black">
              Nome
            </label>
            <input
              type="text"
              name="name"
              defaultValue={editClient.name}
              placeholder="Nome"
              required
              className="p-2 mb-2 rounded-md border text-gray-600"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-1 text-black">
              E-mail
            </label>
            <input
              type="email"
              name="email"
              defaultValue={editClient.email}
              placeholder="E-mail"
              required
              className="p-2 mb-2 rounded-md border text-gray-600"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-1 text-black">
              Telefone
            </label>
            <input
              type="text"
              name="phone"
              defaultValue={editClient.phone}
              placeholder="Telefone"
              className="p-2 mb-2 rounded-md border text-gray-600"
            />
          </div>
          <div className="flex flex-col md:col-span-2">
            <label className="text-sm font-semibold mb-1 text-black">
              Observação
            </label>
            <textarea
              name="observation"
              defaultValue={editClient.observation}
              placeholder="Observação"
              className="p-2 mb-2 rounded-md border text-gray-600 w-full"
            ></textarea>
          </div>
          {editClient.address && (
            <>
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1 text-black">
                  Rua
                </label>
                <input
                  type="text"
                  name="street"
                  defaultValue={editClient.address.street}
                  placeholder="Rua"
                  className="p-2 mb-2 rounded-md border text-gray-600"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1 text-black">
                  Nº
                </label>
                <input
                  type="text"
                  name="number"
                  defaultValue={editClient.address.number}
                  placeholder="Número"
                  className="p-2 mb-2 rounded-md border text-gray-600"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1 text-black">
                  Bairro
                </label>
                <input
                  type="text"
                  name="neighborhood"
                  defaultValue={editClient.address.neighborhood}
                  placeholder="Bairro"
                  className="p-2 mb-2 rounded-md border text-gray-600"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1 text-black">
                  Complemento
                </label>
                <input
                  type="text"
                  name="complement"
                  defaultValue={editClient.address.complement}
                  placeholder="Complemento"
                  className="p-2 mb-2 rounded-md border text-gray-600"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1 text-black">
                  Cidade
                </label>
                <input
                  type="text"
                  name="city"
                  defaultValue={editClient.address.city}
                  placeholder="Cidade"
                  className="p-2 mb-2 rounded-md border text-gray-600"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1 text-black">
                  Estado
                </label>
                <input
                  type="text"
                  name="state"
                  defaultValue={editClient.address.state}
                  placeholder="Estado"
                  className="p-2 mb-2 rounded-md border text-gray-600"
                />
              </div>
            </>
          )}
          <button
            type="submit"
            className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mt-4 md:col-span-2"
          >
            Salvar alterações
          </button>
        </form>
      )}
    </main>
  );
};

export default EditClient;
