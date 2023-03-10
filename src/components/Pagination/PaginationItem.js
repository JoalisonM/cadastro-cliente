import { useContext } from "react";
import { Button } from "react-bootstrap";

import { ClientsContext } from "../../contexts/ClientContext";

export const PaginationItem = ({ number, isCurrent = false }) => {
  const { setPage } = useContext(ClientsContext);

  const handlePageChange = () => {
    setPage(number);
  };

  if (isCurrent) {
    return (
      <Button
        disabled
        className="border-secondary bg-secondary"
      >
        {number}
      </Button>
    );
  }

  return (
    <Button
      active
      onClick={() => handlePageChange()}
    >
      {number}
    </Button>
  );
};