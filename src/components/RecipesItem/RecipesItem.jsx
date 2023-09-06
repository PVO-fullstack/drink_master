import PropTypes from "prop-types";
import { RiDeleteBinLine } from "react-icons/ri";
import css from "./RecipesItem.module.scss";
import cssButton from "../Button/Button.module.scss";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  deleteRecipeThunk,
  fetchFavRecipesThunk,
  fetchRecipesThunk,
  updateFavRecipeThunk,
} from "../../redux/cockteil/cockteilsOperations";
import imageholder from "/placeholder_image.jpg";
import { Confirm } from "notiflix/build/notiflix-confirm-aio";
import { toast } from "react-hot-toast";

const toastOption = {
  duration: 3000,
  style: {
    borderRadius: "10px",
    background: "#161f37",
    color: "#fff",
  },
};

Confirm.init({
  width: "500px",
  backgroundColor: "#161f37",
  titleColor: "white",
  titleFontSize: "24px",
  messageColor: "white",
  messageFontSize: "18px",

  buttonsFontSize: "18px",
  okButtonColor: "#f8f8f8",
  okButtonBackground: "firebrick",

  cancelButtonColor: "#f8f8f8",
  cancelButtonBackground: "#a9a9a9",
});

export const RecipesItem = ({
  recipe,
  type,
  page,
  limit,
  totalPages,
  recipes,
}) => {
  const dispatch = useDispatch();
  const { _id, drinkThumb, drink, description } = recipe;

  const deleteRecipe = async () => {
    Confirm.show(
      "DELETE RECIPE?",
      `Do you want to delete "${drink}" from your collection?`,
      "Yes",
      "No",
      async () => {
        try {
          let newPage = page;
          if (totalPages > 1 && newPage === totalPages && recipes === 1)
            newPage -= 1;
          if (type === "own") {
            await dispatch(deleteRecipeThunk({ _id, type }));
            await dispatch(fetchRecipesThunk({ type, page: newPage, limit }));

            toast.success(
              `Recipe "${drink}" has has been successfully deleted!`,
              toastOption
            );
          } else if (type === "favorite") {
            await dispatch(updateFavRecipeThunk({ _id, type }));
            await dispatch(
              fetchFavRecipesThunk({ type, page: newPage, limit })
            );

            toast.success(
              `Recipe "${drink}" has has been successfully deleted!`,
              toastOption
            );
          }
        } catch (error) {
          toast.error("Something went wrong:", error.message);
        }
      },
      async () => {
        return;
      }
    );
  };

  return (
    <li className={css.recipes_item}>
      <div className={css.recipes_item__img_wrapper}>
        <img
          className={css.recipes_item__img}
          src={drinkThumb || imageholder}
          alt="Coctail"
        />
      </div>

      <div className={css.recipes_item__info_wrapper}>
        <div>
          <h2 className={css.recipes_item_title}>{drink}</h2>
          <p className={css.recipes_item__ingredients}>Ingredients</p>
        </div>

        <p className={css.recipes_item__description}>{description}</p>

        <div className={css.recipes_item__button_wrapper}>
          <NavLink
            className={`${cssButton.button} ${css.nav_link}`}
            to={`/recipes/${_id}`}
          >
            See recipe
          </NavLink>
          <button
            type="button"
            onClick={() => dispatch(deleteRecipe)}
            className={`${cssButton.button} ${cssButton.icon}`}
          >
            <RiDeleteBinLine style={{ width: "24px", height: "24px" }} />
          </button>
        </div>
      </div>
    </li>
  );
};

RecipesItem.propTypes = {
  recipe: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    drinkThumb: PropTypes.string.isRequired,
    drink: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  type: PropTypes.oneOf(["own", "favorite"]).isRequired,
  page: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  recipes: PropTypes.number.isRequired,
};
