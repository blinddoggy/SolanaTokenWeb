// src/app/layout.tsx
"use client";

import React from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>My Solana App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
        <main className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
          {children}
        </main>
      </body>
    </html>
  );
};

export default Layout;
