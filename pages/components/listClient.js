/**
 * Nome do arquivo: index.js
 * Data de criação: 21/05/2024
 * Autor: Bruno Faria
 * Matrícula: 01616836
 *
 * Descrição:
 * Essa página representa a lista de clientes do sistema, exibindo suas informações básicas, como nome, e-mail, telefone e 
 * observação. Cada cliente é exibido em um formato de cartão, permitindo uma rápida visualização dos detalhes.
 *
 * Este script é parte o curso de ADS.
 */

import { useState } from "react";
import ModalShow from "./Modal";
import { IoMenuOutline, IoPencil, IoTrash } from "react-icons/io5";
import ModalDelete from "./ModalDelete";

const ClientList = ({ clients, onEdit, onDelete, isMobile, setClientList }) => {
  const [showClient, setShowClient] = useState(null);
  const [deleteClientId, setDeleteClientId] = useState(null);

  const handleShowModal = (client) => {
    setShowClient(client);
  };

  return (
    <div
      className={
        clients?.length > 0
          ? "overflow-y-auto overflow-x-hidden h-[50vh] w-full lg:w-[80vw] rounded-lg p-4"
          : "overflow-y-auto hidden shadow-lg rounded-lg p-4"
      }
    >
      <ul className="divide-y divide-gray-200">
        {clients?.map((client) => (
          <li
            key={client.id}
            className="flex flex-col md:flex-row gap-x-2 justify-between items-start md:items-center p-4 my-2 bg-gray-100 hover:rounded-md text-black"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-x-4 gap-y-2 md:gap-y-0 w-full md:w-auto">
              <div className="flex-1">
                <div className="flex flex-col">
                  <span className="font-bold text-gray-900">Nome:</span>
                  <span className="inline-block text-gray-900 whitespace-nowrap">
                    {client.name}
                  </span>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col">
                  <span className="font-bold text-gray-900">E-mail:</span>{" "}
                  {client.email}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col">
                  <span className="font-bold text-gray-900">Tel:</span>{" "}
                  {client.phone}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col">
                  <span className="font-bold text-gray-900">Observação:</span>{" "}
                  <span
                    className={
                      client.observation.length > 50 || isMobile
                        ? "inline-block text-gray-900 text-ellipsis overflow-hidden w-[250px]"
                        : "inline-block text-gray-900 whitespace-nowrap"
                    }
                  >
                    {client.observation}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-2 mt-4 md:mt-0">
              <button
                onClick={() => handleShowModal(client)}
                className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                <IoMenuOutline className="text-white" />
              </button>
              <button
                onClick={() => onEdit(client)}
                className="p-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
              >
                <IoPencil className="text-white" />
              </button>
              <button
                onClick={() => setDeleteClientId(client.id)}
                className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                <IoTrash className="text-white" />
              </button>
            </div>

            {showClient && showClient.id === client.id && (
              <ModalShow client={client} setShowClient={setShowClient} />
            )}
            {deleteClientId === client.id && (
              <ModalDelete
                setOpenDeleteModal={setDeleteClientId}
                clientID={client.id}
                clientList={clients}
                setClientList={setClientList}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientList;
