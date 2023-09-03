import css from "../NotFound/NotFoundComponent.module.scss";

export const NotFoundComponent = () => {
    return (
      <div className={css.spots} >
        <div className={css.container}>
          <div className={css.containerWrap}>
            <img className={css.img} src="cocktailNotFoundDesctop.jpg" alt="img"/>
            <div className={css.textContainer}>
              <p className={css.text}>You haven't added any favorite cocktails yet</p>
            </div>
          </div>
        </div>
      </div>
    );
};
