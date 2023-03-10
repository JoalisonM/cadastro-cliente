import { useContext } from "react";
import { Table } from "react-bootstrap";

import { ClientsContext } from "../../contexts/ClientContext";

export const ClientsTable = () => {
  const { clients } = useContext(ClientsContext);

  return (
    <Table striped>
      <thead>
        <tr>
          <th>Nome</th>
          <th>E-mail</th>
          <th>CEP</th>
          <th>Nascimento</th>
        </tr>
      </thead>
      <tbody>
        {
          clients && clients.map((client) => (
            <tr key={client.id}>
              <td>{client.name}</td>
              <td>{client.email}</td>
              <td>{client.cep}</td>
              <td>{client.birth}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};