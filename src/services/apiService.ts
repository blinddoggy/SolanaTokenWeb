// src/services/apiService.ts

export interface SendSPLTokenParams {
    secretKey: string;
    toPublicKey: string;
    amount: string;
    mint: string;
  }
  
  export const sendSPLToken = async (params: SendSPLTokenParams) => {
    try {
      const response = await fetch('/api/solana/send-spl-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
      });
  
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        const text = await response.text();
        throw new Error(`Unexpected content type: ${text}`);
      }
  
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error: ${response.status} - ${errorText}`);
      }
  
      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };
  

  export const getBalance = async (publicKey1: string, publicKey2: string) => {
    try {
      const response = await fetch(`/api/solana/get-balance-spl/${publicKey1}/${publicKey2}`);
  
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        const text = await response.text();
        throw new Error(`Unexpected content type: ${text}`);
      }
  
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error: ${response.status} - ${errorText}`);
      }
  
      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };