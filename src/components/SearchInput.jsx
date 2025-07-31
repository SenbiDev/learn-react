const SearchInput = ({ value, onChange }) => (
    <input
    type="search"
    value={value}
    onChange={onChange}
    placeholder="Seacrh"
    className="font-medium text-[16px] w-[264px] h-[39px] rounded-[5px] bg-white px-3"
    />
);

export default SearchInput;