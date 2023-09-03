import css from "../NotFound/NotFoundComponent.module.scss";
import PropTypes from "prop-types";

export const NotFoundComponent = ({ type }) => {
  return (
    <div className={css.spots}>
      <div className={css.container}>
        <div className={css.containerWrap}>
          <img
            className={css.img}
            src="cocktailNotFoundDesctop.jpg"
            alt="img"
          />
          <div className={css.textContainer}>
            <p className={css.text}>
              You have not added any {type} cocktails yet
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

NotFoundComponent.propTypes = {
  type: PropTypes.string.isRequired,
};
