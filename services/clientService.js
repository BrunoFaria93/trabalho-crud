/**
 * Nome do arquivo: index.js
 * Data de criação: 08/05/2024
 * Autor: Bruno Faria
 * Matrícula: 01616836
 *
 * Descrição:
 * Este arquivo clientService.js contém funções para realizar operações CRUD (Create, Read, Update, Delete) no 
 * banco de dados Firestore do Firebase relacionadas aos clientes.
 *
 * Este script é parte o curso de ADS.
 */


import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '@/services/firebaseConfig';

export const addClient = async (clientData) => {
  try {
    const docRef = await addDoc(collection(db, 'clients'), clientData);
    console.log('Client added with ID: ', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error adding client: ', error);
    throw error;
  }
};

export const getClients = async () => {
  try {
    const clientsSnapshot = await getDocs(collection(db, 'clients'));
    const clients = clientsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return clients;
  } catch (error) {
    console.error('Error getting clients: ', error);
    throw error;
  }
};

export const updateClient = async (clientId, newData) => {
  try {
    const clientDocRef = doc(db, 'clients', clientId);
    await updateDoc(clientDocRef, newData);
    console.log('Client updated successfully');
  } catch (error) {
    console.error('Error updating client: ', error);
    throw error;
  }
};

export const deleteClient = async (clientId) => {
  try {
    const clientDocRef = doc(db, 'clients', clientId);
    await deleteDoc(clientDocRef);
    console.log('Client deleted successfully');
  } catch (error) {
    console.error('Error deleting client: ', error);
    throw error;
  }
};
