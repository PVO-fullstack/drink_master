import PropTypes from 'prop-types';
import { useField } from 'formik';

// import style from './FormikIngredient.module.scss';

// ###################################################

export const FormikIngredient = (props) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <label htmlFor="ingredient">Ingredient</label>
      <select name="ingredient" id="ingredient" {...field} {...props}>
        <option value="horilka">Horilka</option>
        <option value="lemon">Lemon</option>
      </select>
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}

      <label htmlFor="measure">Measure</label>
      <select name="measure" id="measure" {...field} {...props}>
        <option value="1">1 cl</option>
        <option value="2">2 cl</option>
      </select>
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </div>
  );
};

FormikIngredient.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
};
