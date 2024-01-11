import "./SearchBox.css"
const SearchBox = ({placeholder, onChangeHandler}) => {
    return (
      <div>
          <input 
            className="search-box"
            type="search" 
            placeholder={placeholder}
            onChange={onChangeHandler} 
          />
      </div>
    )
  }

export default SearchBox;