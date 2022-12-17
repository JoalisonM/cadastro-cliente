import { useState, useEffect, createContext } from "react";

export const ClientsContext = createContext();

export const ClientsProvider = ({ children }) => {
  const [clients, setClients] = useState([]);

  const fetchClients = async () => {
    await fetch("http://localhost:3333/clientes?_sort=createdAt&_order=desc&_limit=10", { method: "GET" })
      .then((response) => response.json()) // retorna uma promessa
      .then((data) => setClients(data)) // seta o data
      .catch((err) => console.log("deu falha"));
  };

  const searchClient = (value) => {
    fetch(`http://localhost:3333/clientes?q=${value}&_sort=createdAt&_order=desc&_limit=10`, { method: "GET" })
      .then((response) => response.json()) // retorna uma promessa
      .then((data) => setClients(data)) // seta o data
      .catch((err) => console.log("deu falha"));
  };

  const createClient = (client) => {
    const { name, email, birth, cep } = client;
    fetch("http://localhost:3333/clientes",
      {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          birth,
          cep,
          createdAt: new Date(),
        }),
        headers: { "Content-Type": "application/json" }
      }
    )
      .then((response) => response.json())
      .then((data) => setClients((state) => [data, ...state]))
      .catch((err) => console.log("erro ao criar cliente"));
  };

  useEffect(() => {
    fetchClients();
  }, []);

  return (
    <ClientsContext.Provider
      value={{
        clients,
        fetchClients,
        createClient,
        searchClient,
      }}
    >
      {children}
    </ClientsContext.Provider>
  );
};