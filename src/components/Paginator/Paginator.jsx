import PropTypes from "prop-types";
import css from "./Paginator.module.scss";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useEffect } from "react";

export const Paginator = ({ currentPage, totalPages, onPageChange }) => {
  const maxPagesToShow = 5;

  useEffect(() => {
    window.scroll({
      top: 100,
      behavior: "instant",
    });
  }, [currentPage]);

  const generatePageNumbers = () => {
    const pagesToShow = [];
    for (let i = 1; i <= totalPages; i++) {
      pagesToShow.push(i);
    }
    return pagesToShow;
  };

  const pageNumbers = generatePageNumbers();
  const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
  const visiblePageNumbers = pageNumbers.slice(startPage - 1, endPage);

  return (
    <div className={css.button__wrapper}>
      <button
        type="button"
        className={css.paginator_Btn}
        disabled={currentPage === 1}
        onClick={() => onPageChange(1)}
      >
        <FiChevronLeft className={css.svg_Btn} size={27} />
      </button>

      <ul className={css.button_number__wrapper}>
        {visiblePageNumbers.map((page) => (
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
      </ul>

      <button
        type="button"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(totalPages)}
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
