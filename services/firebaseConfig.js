/**
 * Nome do arquivo: index.js
 * Data de criação: 08/05/2024
 * Autor: Bruno Faria
 * Matrícula: 01616836
 *
 * Descrição:
 * responsável por inicializar e configurar o Firebase para ser utilizado em seu aplicativo. Ele utiliza as 
 * bibliotecas firebase/app e firebase/firestore para realizar operações de inicialização e acesso ao Firestore, 
 * respectivamente.
 *
 * Este script é parte o curso de ADS.
 */

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAT9iiQWHraUYudf7FKzgpGOwQQtBFauWU",
  authDomain: "crud-clients-5e4ce.firebaseapp.com",
  projectId: "crud-clients-5e4ce",
  storageBucket: "crud-clients-5e4ce.appspot.com",
  messagingSenderId: "924863263713",
  appId: "1:924863263713:web:983599275501b9bc0a58a0"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { firebaseApp, db };
