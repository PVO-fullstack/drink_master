// import React from 'react'
// import PropTypes from "prop-types";

// import { Button } from '../Button/Button';

// ###################################################

export const AddRecipeForm = () => {
  return (
    <form>
      <div>
        <label htmlFor="name">Enter your name: </label>
        <input type="text" name="name" id="name" required />
      </div>
      <div>
        <label htmlFor="email">Enter your email: </label>
        <input type="email" name="email" id="email" required />
      </div>
      <div>{/* <input type="file" value="Add imag" /> */}</div>

      <button type="submit">Submit</button>
    </form>
  );
};

// AddRecipeForm.propTypes = {
//     children: PropTypes.node,
//     variant: PropTypes.string,
//     disabled: PropTypes.bool,
//   };
