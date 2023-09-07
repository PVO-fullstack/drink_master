import sizes from "../../../constants/breakpoints";

const tablet = `@media screen and (min-width: ${sizes.tablet})`;
const desktop = `@media screen and (min-width: ${sizes.desktop})`;

export const makeStyles = ({ style }) => ({
  //
  control: (baseStyles, state) => ({
    ...baseStyles,
    backgroundColor: "#161F37",
    border: 0,
    borderRadius: 200,
    color: state.isFocused ? "#f3f3f3" : "rgba(243, 243, 243, 0.50)",
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 1.29,
    width: 335,
    marginTop: 0,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 18,
    cursor: "pointer",
    display: "flex",
    [tablet]: { width: 199, fontSize: 17, lineHeight: 1.56 },

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
    color: "#F3F3F3",
    width: "100%",

    ...style?.singleValue,
  }),

  dropdownIndicator: (baseStyles, state) => ({
    ...baseStyles,
    color: "#f3f3f3",
    transform: state.selectProps.menuIsOpen ? "rotate(0.5turn)" : "unset",
    marginLeft: -50,
    ...style?.dropdownIndicator,
  }),

  menu: (baseStyles) => ({
    ...baseStyles,
    backgroundColor: "#161f37",
    marginTop: 4,
    width: "100%",
    borderRadius: 20,
    padding: 8,

    ...style?.menu,
  }),

  menuList: (baseStyles) => ({
    ...baseStyles,
    overflowX: "hidden",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "transparent",
    cursor: "pointer",
    ...style?.menuList,
  }),

  option: (baseStyles, state) => ({
    ...baseStyles,
    color: state.isFocused ? "#f3f3f3" : "rgba(243, 243, 243, 0.5)",
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 1.29,
    cursor: "pointer",
    whiteSpace: "nowrap",
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: "#161f37",
      color: "#f3f3f3",
    },
    ...(state.isSelected && {
      backgroundColor: "#161f37",
      color: "#f3f3f3",
    }),
    [tablet]: { fontSize: 17, lineHeight: 1.56 },
    ...style?.option,
  }),

  placeholder: (baseStyles) => ({
    ...baseStyles,
    color: "#F3F3F3",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  }),
  indicatorSeparator: (baseStyles) => ({
    ...baseStyles,
    display: "none",
    ...style?.dropdownIndicator,
  }),
});
