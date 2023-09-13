// import sizes from '../../../constants/breakpoints';

// const tablet = `@media screen and (min-width: ${sizes.tablet})`;
// const desktop = `@media screen and (min-width: ${sizes.desktop})`;

// eslint-disable-next-line no-unused-vars
export const makeStyles = ({ style }, { touched, error }) => ({
  //
  control: (baseStyles, state) => ({
    ...baseStyles,
    backgroundColor: 'transparent',
    border: '1px solid',
    borderColor:
      touched && error
        ? 'rgba(178, 34, 34, 0.40)'
        : state.isFocused
        ? '#f3f3f3'
        : 'rgba(243, 243, 243, 0.50)',
    // borderColor: state.isFocused ? '#f3f3f3' : 'rgba(243, 243, 243, 0.50)',
    borderRadius: 200,
    color: 'rgba(243, 243, 243, 0.50)',
    width: '100%',
    marginTop: 0,
    gap: 8,
    minHeight: 'auto',
    verticalAlign: 'text-top',
    cursor: state.selectProps.isSearchable ? 'text' : 'pointer',
    display: 'flex',
    ...style?.control,
  }),

  container: (baseStyles) => ({
    ...baseStyles,
    fontSize: 'inherit',
    lineHeight: '100%',
    display: 'flex',
    justifyContent: 'center',
    width: 'auto',
    ...style?.container,
  }),

  singleValue: (baseStyles) => ({
    ...baseStyles,
    color: 'currentColor',
    width: '100%',
    ...style?.singleValue,
  }),

  dropdownIndicator: (baseStyles, state) => ({
    ...baseStyles,
    color: touched && error ? 'rgba(178, 34, 34, 0.80)' : '#f3f3f3',
    transition: 'transform 200ms ease-out',
    transform: state.selectProps.menuIsOpen ? 'rotate(0.5turn)' : 'unset',
    cursor: 'pointer',
    ...style?.dropdownIndicator,
  }),

  // input: (baseStyles) => ({
  //   ...baseStyles,
  //   color: 'red',
  //   padding: 0,
  //   ...style?.input,
  // }),
  //   // loadingIndicator: (baseStyles) => ({...baseStyles}),
  //   // loadingMessage: (baseStyles) => ({...baseStyles}),

  menu: (baseStyles) => ({
    ...baseStyles,
    backgroundColor: '#161f37',
    marginTop: 4,
    width: '100%', // 'max-content'
    borderRadius: 20,
    padding: 8,
    // maxHeight:
    ...style?.menu,
  }),

  menuList: (baseStyles) => ({
    ...baseStyles,
    overflowX: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    padding: 6,
    ...style?.menuList,
  }),

  //   // noOptionsMessage: (baseStyles) => ({...baseStyles}),

  option: (baseStyles, state) => ({
    ...baseStyles,
    color: state.isFocused ? '#f3f3f3' : 'rgba(243, 243, 243, 0.5)',
    //   fontSize: variant === 'addrecipe' ? 14 : 17,
    //   lineHeight: variant === 'addrecipe' ? '128%' : '156%',
    lineHeight: '128%',
    whiteSpace: 'nowrap',
    ...style?.option,
  }),

  //   placeholder: (baseStyles) => ({
  //     ...baseStyles,
  //     whiteSpace: 'nowrap',
  //     overflow: 'hidden',
  //     textOverflow: 'ellipsis',
  //   }),

  // valueContainer: (baseStyles) => ({
  //   ...baseStyles,
  //   // backgroundColor: 'yellow',
  //   // paddingLeft: variant === 'addrecipe' ? 12 : 0,
  //   //     padding: 0,
  //   // marginTop: -4,
  // }),
});
