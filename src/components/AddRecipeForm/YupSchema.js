import { string, array, object, mixed } from 'yup';

export const yupSchema = object({
  drink: string()
    .max(40, 'Title must be 40 characters or less')
    .required('Title is required'),
  description: string()
    .max(100, 'Must be 100 characters or less')
    .required('Please provide a description'),
  category: string().required('Please select a glass'),
  glass: string().required('Please select a glass'),
  ingredients: array()
    .of(
      object().shape({
        title: string().required('Please select an ingredient'),
        measure: string().required('Please specify measure'),
      })
    )
    .required('Please add at least one ingredient')
    .min(1, 'Must contain at least one ingredient'),
  instructions: array()
    .of(string())
    .required('Please leave instructions on how to mix the ingredients'),
  drinkThumb: mixed().required('Please upload an image for your recipe'),
  //   drinkThumb: mixed().test('is-file-too-big', 'File exceeds 2MB', () => {
  //     let valid = true;
  //     const files = fileRef?.current?.files;
  //     if (files) {
  //       //   const fileArr = Array.from(files);
  //       const size = files[0].size / 1024 / 1024;
  //       if (size > 10) {
  //         valid = false;
  //       }
  //     }
  //     return valid;
  //   }),
});
