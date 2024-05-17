// src/app/page.tsx
"use client";

import React, { useState } from 'react';
import Layout from './layout';
import { sendSPLToken, SendSPLTokenParams } from '../services/apiService';

const HomePage: React.FC = () => {
  const [formData, setFormData] = useState<SendSPLTokenParams>({
    secretKey: '',
    toPublicKey: '',
    amount: '',
    mint: '',
  });
  const [response, setResponse] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setResponse(null);
    try {
      const result = await sendSPLToken(formData);
      setResponse(JSON.stringify(result, null, 2));
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <Layout>
      <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Formulario de Ejemplo</h1>
      <p className="text-gray-600 mb-6 text-center">Por favor, rellena los siguientes campos:</p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Clave Secreta</label>
          <input
            type="password"
            name="secretKey"
            value={formData.secretKey}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Ingresa tu clave secreta"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Llave Pública del Destinatario</label>
          <input
            type="text"
            name="toPublicKey"
            value={formData.toPublicKey}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Ingresa la llave pública del destinatario"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Cantidad</label>
          <input
            type="text"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Ingresa la cantidad"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Mint</label>
          <input
            type="text"
            name="mint"
            value={formData.mint}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Ingresa el mint"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Enviar
        </button>
      </form>
      {response && (
        <pre className="mt-6 bg-gray-100 p-4 rounded shadow-sm">
          <code>{response}</code>
        </pre>
      )}
      {error && (
        <p className="mt-6 text-red-500">
          {error}
        </p>
      )}
    </Layout>
  );
};

export default HomePage;
