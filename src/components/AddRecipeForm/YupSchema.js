import { string, array, object, mixed } from 'yup';

export const yupSchema = object({
  drink: string()
    .max(40, 'Title must be 40 characters or less')
    .required('Title is required'),
  description: string()
    .max(500, 'Must be 500 characters or less')
    .required('Please provide a description'),
  category: string().required('Please choose a category'),
  glass: string().required('What glass to serve in?'),
  ingredients: array()
    .of(
      object().shape({
        title: string().required('Please select an ingredient'),
        measure: string().required('Please specify measure'),
      })
    )
    .required('Please add at least one ingredient')
    .min(1, 'Must contain at least one ingredient'),
  instructions: string().required(
    'Please leave instructions on how to mix the ingredients'
  ),
  imageOfRecipe: mixed().required('Please upload an image for your recipe'),
  // imageOfRecipe: mixed().test('is-file-too-big', 'File exceeds 2MB', () => {
  //   let valid = true;
  //   const file = fileRef?.current?.files[0];
  //   if (file && file.size / 1024 / 1024 > 10) valid = false;
  //   }
  //   return valid;
  // }),
});
