import { Set } from "@shared-vendor/helpers";

type Key = string | Array<string>;

export const useSearch = <T>(items: Array<T>, key: Key = "name", uniqueKey: string = "id") => {
  const [searchedValue, setSearchedValue] = useState("");

  const getSearchedItems = (key: string) =>
    items.filter((item) => (String(getValueByPath(item, key)) || "").includes(searchedValue));

  const getUniqueSearchedItems = () => {
    const searchedItems = (key as Array<string>).reduce(
      (acc: Array<T>, key: string) => [...acc, ...getSearchedItems(key)],
      [],
    );

    const searchedSet = new Set(searchedItems, (item: T) => getValueByPath(item, uniqueKey));

    return searchedSet.toArray();
  };

  const searchedItems: Array<T> =
    (Array.isArray(key) ? getUniqueSearchedItems() : getSearchedItems(key)) || [];

  return { items: searchedItems, searchedValue, setSearchedValue };
};
