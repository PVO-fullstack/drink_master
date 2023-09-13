import { string, array, object, mixed, number } from 'yup';

export const yupSchema = object({
  drink: string()
    .max(40, 'Title must be 40 characters or less')
    .required('Title is required'),
  description: string()
    .max(600, 'Must be 600 characters or less')
    .required('Please provide a description'),
  category: string().required('Please choose a category'),
  glass: string().required('What glass to serve in?'),
  ingredients: array()
    .of(
      object().shape({
        title: string().required('Required'),
        // measure: string().required('Required'),
        quantity: number().required('Required'),
        unit: string().required('Required'),
      })
    )
    .required('Please add at least one ingredient')
    .min(1, 'Must contain at least one ingredient'),
  instructions: string().required('Please supply preparation directions'),
  imageOfRecipe: mixed().required('Please upload a recipe image'),
  // imageOfRecipe: mixed().test('is-file-too-big', 'File exceeds 2MB', () => {
  //   let valid = true;
  //   const file = fileRef?.current?.files[0];
  //   if (file && file.size / 1024 / 1024 > 10) valid = false;
  //   }
  //   return valid;
  // }),
});
