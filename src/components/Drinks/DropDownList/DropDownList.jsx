import Select from "react-select";
import React, { useState, useEffect } from "react";
import { selectCategories } from "../../../redux/preparation/selectors";
import instance from "../../../shared/api/instance";

const DropDownList = () => {
  const [drinksCategory, setDrinksCategory] = useState([]);
  useEffect(() => {
    instance.get("/category").then((res) => {
      const data = res.data;
    });
  });
  return (
    <div>
      <Select />
    </div>
  );
};

export default DropDownList;
