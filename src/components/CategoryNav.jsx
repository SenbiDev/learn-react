const CategoryNav = () =>
    (<nav className="w-[400px] relative left-[18px] flex justify-between mb-[30px] max-[768px]:w-[80%] max-[768px]:left-[24px] px-[10px]">
        {["Latest", "World", "Sports", "Technology"].map((label, i) => (
            <button key={i} className="bg-transparent border-none text-[14px] font-medium">
                {label}
            </button>
        ))}
    </nav>
    );
export default CategoryNav