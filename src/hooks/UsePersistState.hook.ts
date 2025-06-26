import { localStorage } from "@shared-vendor/services";

const toValue = (value: unknown) => {
  if (typeof value === "function") return value();

  return value;
};

export const usePersistState = (initialState: unknown, key: string, storage = localStorage) => {
  const [value, setValue] = useState(() => {
    const storedValue = storage.getItem(key);

    return storedValue || toValue(initialState);
  });

  useEffect(() => {
    storage.setItem(key, value);
  }, [storage, value, key]);

  return [value, setValue];
};
