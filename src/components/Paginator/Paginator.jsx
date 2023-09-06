import PropTypes from "prop-types";
import css from "./Paginator.module.scss";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useEffect } from "react";

export const Paginator = ({ currentPage, totalPages, onPageChange }) => {
  const pagesToShow = [];
  const maxPagesToShow = 5;

  useEffect(() => {
    window.scroll({
      top: 100,
      behavior: "instant",
    });
  }, [currentPage]);

  for (let i = 1; i <= totalPages; i++) {
    if (pagesToShow.length >= maxPagesToShow) {
      break;
    }
    pagesToShow.push(i);
  }

  return (
    <div className={css.button__wrapper}>
      <button
        type="button"
        className={css.paginator_Btn}
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <FiChevronLeft className={css.svg_Btn} size={27} />
      </button>

      <ul className={css.button_number__wrapper}>
        {pagesToShow.map((page) => (
          <li key={page}>
            <button
              type="button"
              className={`${css.paginator_Btn} ${
                page === currentPage ? css.active : ""
              }`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          </li>
        ))}
        {currentPage > maxPagesToShow && (
          <>
            <span>...</span>
            <button
              type="button"
              className={`${css.paginator_Btn} ${css.active}`}
            >
              {currentPage}
            </button>
          </>
        )}
      </ul>

      <button
        type="button"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className={css.paginator_Btn}
      >
        <FiChevronRight className={css.svg_Btn} size={27} />
      </button>
    </div>
  );
};

Paginator.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Paginator;
