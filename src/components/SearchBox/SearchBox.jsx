import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectTextFilter } from "../../redux/filters/selectors";

import css from "./SearchBox.module.css";

const SearchBox = () => {
  const searchId = useId();
  const dispatch = useDispatch();
  const textFilter = useSelector(selectTextFilter);

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={css.searchBox}>
      <label htmlFor={searchId} className={css.label}>
        Find contacts by name
      </label>
      <input
        type="text"
        id={searchId}
        value={textFilter}
        onChange={handleChange}
        className={css.input}
        aria-label="Search contacts"
      />
    </div>
  );
};

export default SearchBox;
