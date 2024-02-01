import { useState, useContext } from "react";

// Context
import ShowsContext from "../context/shows/showsContext";
import AlertsContext from "../context/alerts/alertsContext";

// Components
import Alert from "./Alert";

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchInitiated, setSearchInitiated] = useState(false);
  const showsContext = useContext(ShowsContext);

  const { searchShows, shows } = showsContext;

  const { alert, setAlert } = useContext(AlertsContext);

  const onSearchHandler = (e) => {
    e.preventDefault();
    setSearchInitiated(true);

    if (searchTerm === "") {
      setAlert("Please enter something", "danger");
    } else {
      searchShows(searchTerm);
    }
  };

  return (
    <div className="searchbar">
      {alert ? <Alert message={alert.message} type={alert.type} /> : null}
      <form className="searchbar__form">
        <input
          type="text"
          placeholder="Search For Tv Show"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn btn-block" onClick={onSearchHandler}>
          SEARCH
        </button>
      </form>
      {searchInitiated && shows.length === 0 && (
        <div className="not-found">
          <div className="not-found__content">
            Sorry! We could not find that show
            <img
              src="https://img.freepik.com/premium-vector/search-result-find-illustration_585024-17.jpg"
              alt="Not found"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Searchbar;
