/**
 * Nome do arquivo: index.js
 * Data de criação: 08/05/2024
 * Autor: Bruno Faria
 * Matrícula: 01616836
 *
 * Descrição:
 * Este arquivo implementa as funcionalidades de um sistema de gerenciamento de clientes.
   Ele inclui componentes para adicionar, editar, excluir e exibir detalhes dos clientes,
   além de se comunicar com uma API para realizar essas operações.
 *
 * Este script é parte o curso de ADS.
 */

   
import { useEffect, useState } from "react";
import { getClients } from "../services/clientService";
import AddClient from "./components/addClient";
import ClientList from "./components/listClient";
import EditClient from "./components/editClient";
import { IoArrowBack } from "react-icons/io5";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function MainPage() {
  const [clientList, setClientList] = useState([]);
  const [editClient, setEditClient] = useState(null);
  const [openClientADD, setOpenClientADD] = useState(false);
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    function isMobile() {
      return window.innerWidth <= 768; 
    }
    const result = isMobile()
    setIsMobile(result)
  }, [])
 

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const clients = await getClients();
        setClientList(clients);
      } catch (error) {
        console.error("Error fetching clients:", error);
      }
    };

    fetchClients();
  }, []);

  const handleEdit = (client) => {
    setEditClient(client);
  };

  const resetar = () => {
    setOpenClientADD(false);
    setEditClient(false);
  };

  return (
    <div className="p-4 bg-gradient-to-t from-blue-500 via-teal-400 to-blue-500 h-screen w-screen flex flex-col justify-center items-center overflow-hidden">
      <div className="flex justify-center items-center">
        {openClientADD && (
          <button
            onClick={resetar}
            className="flex items-center gap-2 p-1 md:p-2 mb-5 mr-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105"
          >
            <IoArrowBack className="text-2xl" />
          </button>
        )}
        {editClient && (
          <button
            onClick={resetar}
            className="flex items-center gap-2 p-1 md:p-2 mb-5 mr-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105"
          >
            <IoArrowBack className="text-2xl" />
          </button>
        )}
        <h1 className="text-2xl md:text-5xl font-bold mb-5">CRUD - Clientes</h1>
      </div>

      {editClient && (
        <EditClient
          editClient={editClient}
          clientList={clientList}
          setClientList={setClientList}
          setEditClient={setEditClient}
          isMobile={isMobile}
        />
      )}
      {!openClientADD && !editClient && (
        <>
          <ClientList
            clients={clientList}
            onEdit={handleEdit}
            onDelete={() => setOpenDeleteModal(true)}
            isMobile={isMobile}
            setClientList={setClientList}
          />
          <button
            onClick={() => setOpenClientADD(!openClientADD)}
            className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-700 text-white font-semibold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-800 transition-all duration-300 mt-5"
          >
            Adicionar clientes
          </button>
        </>
      )}
      {openClientADD && (
        <AddClient
          setClientList={setClientList}
          setEditClient={setEditClient}
          setOpenClientADD={setOpenClientADD}
          isMobile={isMobile}
        />
      )}
      <ToastContainer />
    </div>
  );
}
