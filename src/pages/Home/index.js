import { useContext, useState } from "react";
import { MagnifyingGlass, PlusCircle } from "phosphor-react"
import { Button, Container, Row, Col } from "react-bootstrap";

import styles from "./styles.module.css"
import { NewClientModal } from "../../components/NewClientModal";
import { ClientsContext } from "../../contexts/ClientContext";
import { ClientsTable } from "../../components/ClientsTable";
import { PaginationTable } from "../../components/Pagination";

export const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [filterClient, setFilterClient] = useState("");
  const { searchClient } = useContext(ClientsContext);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const handleChangeFilter = (event) => {
    setFilterClient(event);
  }

  const handleClick = () => {
    searchClient(filterClient);
  }

  return (
    <div className={styles.container}>
      <Container className="p-4 rounded-4 shadow">
        <h1 className="mb-3">Clientes</h1>
        <Row className="mb-5">
          <Col className="d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <input
                className={styles.inputSearchClient}
                placeholder="Filtrar cliente"
                value={filterClient}
                onChange={(event) => handleChangeFilter(event.target.value)}
              />
              <Button
                className="mx-2 d-flex align-items-center gap-2"
                variant="outline-primary"
                onClick={() => handleClick()}
              >
                <MagnifyingGlass size={16} />
                Pesquisar
              </Button>
            </div>

            <Button
              className="d-flex align-items-center gap-2"
              variant="primary"
              onClick={handleShowModal}
            >
              <PlusCircle size={16} />
              Adicionar cliente
            </Button>
          </Col>
        </Row>

        <ClientsTable />
        <PaginationTable />

        <NewClientModal showModal={showModal} onHideModal={handleShowModal} />
      </Container>
    </div>
  );
}