// const screenWidth = window.screen.width;

// if

export const makeStyles = (props) => ({
  //
  control: (baseStyles, state) => ({
    ...baseStyles,
    backgroundColor: props.style?.backgroundColor || 'transparent',
    border: props.style?.border || '1px solid rgba(243, 243, 243, 0.50)',
    borderRadius: props.style?.borderRadius || 200,
    padding: props.style?.control?.padding,
    color: state.isFocused ? '#f3f3f3' : 'rgba(243, 243, 243, 0.50)',
    width: '100%',
    display: 'flex',
    marginTop: props.style?.marginTop || 0,
    gap: 8,
    minHeight: props.style?.minHeight || 'auto',
    verticalAlign: 'text-top',
  }),

  container: (baseStyles) => ({
    ...baseStyles,
    fontSize: props.style?.fontSize || 'inherit',
    lineHeight: props.style?.lineHeight || '100%',
    display: 'flex',
    justifyContent: 'end',
    width: props.style?.width || 'auto',
    // width: '100%',
    flexGrow: props.style?.flexGrow,
    // backgroundColor: 'blueViolet',
  }),

  singleValue: (baseStyles) => ({
    ...baseStyles,
    color: 'currentColor',
    width: '100%',
    // maxWidth: 300,
  }),

  dropdownIndicator: (baseStyles, state) => ({
    ...baseStyles,
    color: '#f3f3f3',
    transform: state.selectProps.menuIsOpen ? 'rotate(0.5turn)' : 'unset',
    cursor: 'pointer',
  }),

  //   input: (baseStyles) => ({
  //     ...baseStyles,
  //     color: 'inherit',
  //     padding: 0,
  //   }),
  //   // loadingIndicator: (baseStyles) => ({...baseStyles}),
  //   // loadingMessage: (baseStyles) => ({...baseStyles}),

  menu: (baseStyles) => ({
    ...baseStyles,
    backgroundColor: 'transparent',
    marginTop: 4,
    width: props.style?.menu?.width || '100%', // 'max-content'
    maxWidth: props.style?.menu?.maxWidth,
  }),

  menuList: (baseStyles) => ({
    ...baseStyles,
    backgroundColor: '#161f37',
    borderRadius: 20,
    padding: props.style?.menuList?.padding || 14,
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  }),

  //   // noOptionsMessage: (baseStyles) => ({...baseStyles}),

  option: (baseStyles, state) => ({
    ...baseStyles,
    //   padding: 0,
    color: state.isFocused ? '#f3f3f3' : 'rgba(243, 243, 243, 0.5)',
    //   backgroundColor: 'transparent',
    //   fontSize: variant === 'addrecipe' ? 14 : 17,
    //   lineHeight: variant === 'addrecipe' ? '128%' : '156%',
    whiteSpace: 'nowrap',
  }),

  //   placeholder: (baseStyles) => ({
  //     ...baseStyles,
  //     whiteSpace: 'nowrap',
  //     overflow: 'hidden',
  //     textOverflow: 'ellipsis',
  //   }),

  //   valueContainer: (baseStyles) => ({
  //     ...baseStyles,
  //     // backgroundColor: 'yellow',
  //     // paddingLeft: variant === 'addrecipe' ? 12 : 0,
  //     padding: 0,
  // marginTop: -4,
  //   }),
});