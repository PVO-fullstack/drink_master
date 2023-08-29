import PropTypes from "prop-types";
import css from "./Paginator.module.scss";

export const Paginator = ({ currentPage, totalPages, onPageChange }) => {
  const pagesToShow = [];
  const maxPagesToShow = 5;

  for (let i = 1; i <= totalPages; i++) {
    if (pagesToShow.length >= maxPagesToShow) {
      break;
    }
    pagesToShow.push(i);
  }

  return (
    <div className={css.button__wrapper}>
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </button>
      <div className={css.button__wrapper}>
        {pagesToShow.map((page) => (
          <button
            key={page}
            className={css.button}
            //   className={page === currentPage ? css.active : ""}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        //   className={page === currentPage ? css.active : ""}
        onClick={() => onPageChange(totalPages)}
      >
        {totalPages}
      </button>
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
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
