import SearchInput from "./SearchInput";
import Button from "./Button";

const Header = ({ searchTerm, setSearchTerm }) => (
    <header className="bg-[#F2DE9F] flex justify-between items-center px-[40px] py-4 mb-[30px] flex-wrap gap-4">
        <SearchInput value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <div className="text-[32px] font-medium text-center flex-1">News</div>
        <div className="flex gap-4">
            <Button>Login</Button>
            <Button variant="primary">Register</Button>
        </div>
    </header>
);

export default Header;