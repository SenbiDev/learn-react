const Footer = () => (
    <footer className="w-full bg-[#5A38EE] box-border px-[3%]">
        <h5 className="text-[#FFFFFF] text-[32px] py-[30px] font-bold capitalize">Movies</h5>
        <div className="w-[90%] flex flex-row justify-between pb-[30px] max-[769px]:w-full max-[502px]:flex-col">
            <div className="text-[#FFFFFF] font-medium text-[16px]">
                <p className="p-[10px]">FAQ</p>
                <p className="p-[10px]">Investor Relations</p>
                <p className="p-[10px]">Corporate Information</p>
                <p className="p-[10px]">Privacy Policy</p>
            </div>
            <div className="text-[#FFFFFF] font-medium text-[16px]">
                <p className="p-[10px]">Help Center</p>
                <p className="p-[10px]">Jobs</p>
                <p className="p-[10px]">Terms of Use</p>
                <p className="p-[10px]">Contact Us</p>
            </div>
            <div className="text-[#FFFFFF] font-medium text-[16px]">
                <p className="p-[10px]">Media Center</p>
                <p className="p-[10px]">Buy Gift Cards</p>
                <p className="p-[10px]">Cookie References</p>
                <p className="p-[10px]">Legal Notices</p>
            </div>
        </div>
    </footer>
)

export default Footer;