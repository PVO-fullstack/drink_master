import PropTypes from 'prop-types';
import css from './RecipeIngredientsList.module.scss';

export const RecipeIngredientsList = ({ ingredients }) => {
  return (
    <div className={css.ingredient}>
      <h3 className={css.ingredient_title}>Ingredients</h3>
      <ul className={css.ingredient_list}>
        {ingredients.map(({ title, measure, ingredientThumb }) => (
          <li className={css.ingredient_item} key={title}>
            {ingredientThumb === '' ? (
              <svg
                className={css.svg}
                xmlns="http://www.w3.org/2000/svg"
                width="131"
                height="133"
                viewBox="0 0 131 133"
                fill="none"
              >
                <path
                  d="M51.1 132.9C50.5952 132.9 50.1111 132.7 49.7541 132.345C49.3972 131.989 49.1967 131.507 49.1967 131.004C49.1967 130.501 49.3972 130.019 49.7541 129.664C50.1111 129.308 50.5952 129.108 51.1 129.108H72.7586V87.7353L26.3359 30.4159C26.1437 30.1284 26.0297 29.7961 26.0051 29.4514C25.9804 29.1068 26.0461 28.7617 26.1955 28.4499C26.345 28.1381 26.5731 27.8703 26.8576 27.6727C27.1421 27.4751 27.4732 27.3544 27.8186 27.3225H89.5285L100.428 1.17751C100.582 0.836447 100.828 0.545245 101.14 0.337059C101.452 0.128873 101.816 0.0120827 102.191 0H102.592L129.48 5.66806C129.725 5.71599 129.959 5.81327 130.165 5.95396C130.372 6.09464 130.548 6.27579 130.682 6.48634C130.82 6.69236 130.916 6.9237 130.964 7.16692C131.013 7.41014 131.012 7.6604 130.962 7.90334C130.858 8.32626 130.617 8.70345 130.277 8.97732C129.937 9.25119 129.516 9.40671 129.079 9.42017H128.698L103.353 4.07145L93.6559 27.3025H121.606C121.963 27.3125 122.312 27.4178 122.615 27.6073C122.918 27.7968 123.164 28.0637 123.329 28.3803C123.469 28.7044 123.521 29.0599 123.479 29.4105C123.437 29.7611 123.302 30.0943 123.088 30.3761L76.5654 87.8151V129.108H98.224C98.5249 129.01 98.845 128.984 99.158 129.032C99.4709 129.081 99.7679 129.203 100.024 129.388C100.281 129.573 100.49 129.816 100.634 130.097C100.778 130.378 100.853 130.689 100.853 131.004C100.853 131.32 100.778 131.631 100.634 131.912C100.49 132.193 100.281 132.436 100.024 132.621C99.7679 132.806 99.4709 132.928 99.158 132.976C98.845 133.025 98.5249 132.999 98.224 132.9H51.1ZM74.7021 84.2027L104.756 47.1407H85.4813L76.4251 68.8351C76.2686 69.1724 76.0206 69.4595 75.7091 69.664C75.3976 69.8685 75.035 69.9824 74.662 69.9927C74.4145 69.9965 74.1688 69.9489 73.9407 69.8529C73.4893 69.6432 73.1325 69.2735 72.9399 68.816C72.7473 68.3585 72.7327 67.8459 72.8989 67.3782L87.9857 31.2742H31.8858L41.7234 43.4086H72.939L71.316 47.2006H44.7087L74.7021 84.2027ZM92.073 31.2542L87.024 43.3487H107.801L117.639 31.1943L92.073 31.2542Z"
                  fill="#F3F3F3"
                  fillOpacity="0.1"
                />
                <path
                  d="M23.7148 51C21.8776 50.9957 20.0468 50.7794 18.258 50.3551C12.6033 49.0014 7.63641 45.5944 4.29986 40.7806C0.963306 35.9668 -0.510756 30.0811 0.157359 24.2405C0.825473 18.3998 3.58928 13.0105 7.92436 9.09521C12.2594 5.17988 17.8641 3.01095 23.675 3C25.5123 3.00323 27.3432 3.2196 29.1318 3.64485C32.8502 4.53949 36.3002 6.32936 39.1885 8.86239C42.0767 11.3954 44.3178 14.5967 45.7212 18.194L46 18.8791H42.0169L41.8775 18.597C41.3197 17.4271 40.6529 16.3137 39.886 15.272L39.1292 14.204L30.7648 22.6071L30.4262 22.1234C29.9126 21.4019 29.2872 20.7691 28.5741 20.2494L28.0962 19.9068L36.4606 11.5038L35.425 10.738C32.1178 8.24929 28.115 6.88747 23.9936 6.84887H22.6991L24.5114 18.6776H23.6351C23.1745 18.6787 22.7148 18.7191 22.261 18.7985C21.9439 18.8576 21.6312 18.9384 21.325 19.0403L20.7673 19.2015L18.9551 7.43327L17.7402 7.81615C13.9862 8.99876 10.6653 11.2857 8.2008 14.3854L7.38427 15.4131L17.7004 21.2972L17.322 21.7607C16.7614 22.4477 16.3172 23.224 16.0076 24.058L15.8084 24.602L5.53217 18.6977L5.07412 19.9068C4.77796 20.7186 4.52532 21.546 4.31733 22.3854C3.56267 25.653 3.61741 29.0587 4.47666 32.2998L4.81521 33.5491L15.4898 28.6322L15.6491 29.1965C15.8893 30.0582 16.2659 30.8749 16.7644 31.6146L17.083 32.1184L6.30886 36.9949L7.02581 38.0831C9.0656 41.23 11.9355 43.736 15.3106 45.3174L16.4856 45.8413L19.6521 34.3149L20.1898 34.5768C20.9885 34.9556 21.8427 35.2006 22.719 35.3023H23.2966L20.1301 46.8085L21.4046 46.9496C22.1509 47.0461 22.9027 47.0933 23.6551 47.0907C24.9236 47.1048 26.1906 46.9968 27.439 46.7682H27.7178L30.3665 50.0731L29.6296 50.2745C27.694 50.7556 25.7081 50.9992 23.7148 51Z"
                  fill="#F3F3F3"
                  fillOpacity="0.1"
                />
              </svg>
            ) : (
              <img className={css.img} src={ingredientThumb} alt="Coctail" />
            )}

            <p className={css.ingredient_name}>
              {title} <span className={css.ingredient_measure}>{measure}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

RecipeIngredientsList.propTypes = {
  ingredients: PropTypes.arrayOf(
    PropTypes.exact({
      title: PropTypes.string.isRequired,
      measure: PropTypes.string.isRequired,
      ingredientThumb: PropTypes.string.isRequired,
    })
  ),
};
