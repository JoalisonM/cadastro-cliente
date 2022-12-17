import * as yup from "yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Modal, Form, Button, Row, Col } from "react-bootstrap";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";

import { ClientsContext } from "../../contexts/ClientContext";


const createClientFormSchema = yup.object().shape({
  cep: yup.string().required("CEP obrigatório"),
  name: yup.string().required("Nome obrigatório"),
  birth: yup.string().required("Data de nascimento obrigatória"),
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
});

export const NewClientModal = ({ showModal, onHideModal }) => {
  const { createClient } = useContext(ClientsContext);
  const { register, reset, handleSubmit, formState } = useForm({
    resolver: yupResolver(createClientFormSchema),
  });
  const { errors } = formState;

  const handleCreateClient = (data) => {
    const { name, email, birth, cep } = data;

    createClient({
      name,
      email,
      birth,
      cep,
    });

    reset();
  }

  return (
    <Modal show={showModal} onHide={onHideModal}>
      <Modal.Header closeButton>
        <Modal.Title>Cadastro de cliente</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit(handleCreateClient)}>
        <Modal.Body>
          <Row className="mb-3">
            <Col className="d-flex justify-content-between align-items-center">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                required
                className="w-75"
                error={errors.name}
                {...register("name")}
                placeholder="Digite o nome"
              />
            </Col>
          </Row>

          <Row className=" mb-3">
            <Col className="d-flex justify-content-between align-items-center">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                className="w-75"
                error={errors.email}
                {...register("email")}
                type="email" placeholder="Digite o e-mail"
              />
            </Col>
          </Row>

          <Row className=" mb-3">
            <Col className="d-flex justify-content-between align-items-center">
              <Form.Label>CEP</Form.Label>
              <Form.Control
                required
                className="w-75"
                error={errors.cep}
                {...register("cep")}
                placeholder="Digite o seu CEP"
              />
            </Col>
          </Row>

          <Row>
            <Col className="d-flex justify-content-between align-items-center">
              <Form.Label>Nascimento</Form.Label>
              <Form.Control
                required
                type="date"
                className="w-75"
                error={errors.birth}
                {...register("birth")}
                placeholder="Digite a data de nascimento"
              />
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Header className="d-flex justify-content-end border-bottom-0">
          <Form.Group>
            <Button
              className="mx-3"
              variant="danger"
              onClick={() => reset()}
            >
              Limpar
            </Button>
            <Button
              type="submit"
              variant="primary"
            >
              Cadastrar
            </Button>
          </Form.Group>
        </Modal.Header>
      </Form>
    </Modal >
  );
};