const SearchField = () => {
  const { searchedValue, setSearchedValue } = useToDoListContext();

  return <TextField name="search" label="جستجو" value={searchedValue} onValueChange={setSearchedValue} />;
};

export default SearchField;
