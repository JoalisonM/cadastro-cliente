import { useContext } from "react";

import { PaginationItem } from "./PaginationItem";
import { ClientsContext } from "../../contexts/ClientContext";

const siblingsCount = 1;

const generatePagesArray = (from, to) => {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter(page => page > 0)
};

export const PaginationTable = ({
  registersPerPage = 10,
}) => {
  const { page, totalCount } = useContext(ClientsContext);
  const currentPage = page;

  const lastPage = Math.round(totalCount / registersPerPage);

  const previousPages = currentPage > 1
    ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
    : [];

  const nextPage = currentPage < lastPage
    ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
    : [];

  return (
    <div className="d-flex align-items-center justify-content-end gap-2">
      {currentPage > (1 + siblingsCount) && (
        <>
          <PaginationItem number={1} />
          {currentPage > (2 + siblingsCount) && (
            <div>...</div>
          )}
        </>
      )}

      {previousPages.length > 0 && previousPages.map(page => {
        return <PaginationItem key={page} number={page} />
      })}

      <PaginationItem number={currentPage} isCurrent />

      {nextPage.length > 0 && nextPage.map(page => {
        return <PaginationItem key={page} number={page} />
      })}

      {(currentPage + siblingsCount) < lastPage && (
        <>
          {(currentPage + 1 + siblingsCount) < lastPage && (
            <div>...</div>
          )}
          <PaginationItem number={lastPage} />
        </>
      )}
    </div>
  );
};