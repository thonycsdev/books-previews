import React, { FormEvent, useState } from "react";

type SearchBarProps = {
  onSearch: (userInput: string) => void;
};

function SearchBar(props: SearchBarProps) {
  const [userInput, setUserInput] = useState("");
  const handleSubmitSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(userInput);
  };
  const { onSearch } = props;
  return (
    <div className="pt-10">
      <form onSubmit={handleSubmitSearch} className="flex gap-8">
        <input
          type="text"
          onChange={(e) => setUserInput(e.target.value)}
          className="rounded-xl p-3"
        />
        <button
          type="submit"
          className="w-auto h-auto p-2 rounded-xl bg-green-400 hover:bg-green-300"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
