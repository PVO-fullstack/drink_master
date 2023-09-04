import css from "../404/404Component.module.scss";

export const Error = () => {
    return(
        <div className={css.container}>
            <div className={css.thumb}>
                <img className={css.img} src="images/PNG/glassError.png" alt="img" />
                <p className={css.label}> <span>4</span><span>4</span> </p>
            </div>
        </div>
    );
};