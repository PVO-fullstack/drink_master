// import sizes from '../../../constants/breakpoints';

// const tablet = `@media screen and (min-width: ${sizes.tablet})`;
// const desktop = `@media screen and (min-width: ${sizes.desktop})`;

export const makeStyles = ({ style }) => ({
  //
  control: (baseStyles, state) => ({
    ...baseStyles,
    backgroundColor: "#161F37",
    border: 0,
    borderRadius: 200,
    color: state.isFocused ? "#f3f3f3" : "rgba(243, 243, 243, 0.50)",
    width: "100%",
    marginTop: 0,
    gap: 8,
    minHeight: "auto",
    verticalAlign: "text-top",
    cursor: "pointer",
    display: "flex",
    ...style?.control,
  }),

  container: (baseStyles) => ({
    ...baseStyles,
    fontSize: "inherit",
    lineHeight: "100%",
    display: "flex",
    justifyContent: "center",
    width: "auto",
    ...style?.container,
  }),

  singleValue: (baseStyles) => ({
    ...baseStyles,
    color: "currentColor",
    width: "100%",
    // maxWidth: 300,
    ...style?.singleValue,
  }),

  dropdownIndicator: (baseStyles, state) => ({
    ...baseStyles,
    color: "#f3f3f3",
    transform: state.selectProps.menuIsOpen ? "rotate(0.5turn)" : "unset",
    // cursor: 'pointer',
    ...style?.dropdownIndicator,
  }),

  menu: (baseStyles) => ({
    ...baseStyles,
    backgroundColor: "#161f37",
    marginTop: 4,
    width: "100%", // 'max-content'
    borderRadius: 20,
    padding: 8,
    ...style?.menu,
  }),

  menuList: (baseStyles) => ({
    ...baseStyles,
    overflowX: "hidden",
    display: "flex",
    flexDirection: "column",
    gap: 8,
    padding: 6,

    ...style?.menuList,
  }),

  option: (baseStyles, state) => ({
    ...baseStyles,
    color: state.isFocused ? "#f3f3f3" : "rgba(243, 243, 243, 0.5)",
    //   fontSize: variant === 'addrecipe' ? 14 : 17,
    //   lineHeight: variant === 'addrecipe' ? '128%' : '156%',
    lineHeight: "128%",
    whiteSpace: "nowrap",
    "&:hover": {
      backgroundColor: "#161f37", // Замініть на свій бажаний колір
      color: "#your-hover-text-color", // Замініть на колір тексту при наведенні
    },
    ...style?.option,
  }),

  placeholder: (baseStyles) => ({
    ...baseStyles,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  }),

  // valueContainer: (baseStyles) => ({
  //   ...baseStyles,
  //   // backgroundColor: 'yellow',
  //   // paddingLeft: variant === 'addrecipe' ? 12 : 0,
  //   padding: 0,
  //   marginTop: -4,
  // }),
});
