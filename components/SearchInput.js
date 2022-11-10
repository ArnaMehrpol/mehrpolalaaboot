import React from "react";

const SearchInput = () => {
  return (
    <div className="searchParent">
      {/* <span className="searchButton">
        <i className="bi bi-search "></i>
      </span> */}
      <input
        type="text"
        className="form-control searchInput"
        id="mainSearch"
        placeholder="در بیشتر از یک میلیون کالا و خدمات جستجو کنید..."
      />
    </div>
  );
};

export default SearchInput;
