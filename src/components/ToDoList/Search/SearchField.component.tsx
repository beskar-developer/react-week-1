const SearchField = () => {
  const { searchedValue, setSearchedValue } = useToDoListContext();

  return (
    <TextField
      name="search"
      label="جستجو"
      value={searchedValue}
      onChange={(event) => setSearchedValue(event.target.value)}
    />
  );
};

export default SearchField;
