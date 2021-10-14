import style from "../css/SearchInput.module.css";

interface SearchInputProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchInput({
  searchTerm,
  setSearchTerm,
}: SearchInputProps): JSX.Element {
  const handleSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className={style.searchContainer}>
      <input
        className={style.input}
        value={searchTerm}
        onChange={handleSearchTerm}
        placeholder="search post"
      ></input>
    </div>
  );
}
