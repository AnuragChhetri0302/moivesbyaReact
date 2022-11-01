import React from "react";
import { useGlobalContext } from "../contextApi/context";

const Search = () => {
  const { query, setQuery,isError } = useGlobalContext();

  return (
    <section>
      <div className="search">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="searchBox">
            <input
              type="text"
              value={query}
              onChange={(e) => {setQuery(
                e.target.value);
              }}
            />
            <button>Search</button>
          </div>
        </form>
        
      </div>
     {isError.show? <div className="err-search">{isError.msg}</div>:<></>}
    </section>
  );
};

export default Search;
