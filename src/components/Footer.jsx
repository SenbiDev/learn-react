const Footer = () => (
    <footer className="bg-[#F2DE9F] w-full flex flex-col box-border px-[40px] m-[0] gap-[20px] items-center max-[500px]:items-start max-[500px]:px-[14px]">
        <h3 className="h-[39px] font-medium text-[32px] mt-[30px]">News</h3>
        <div className="flex flex-row gap-[40px] p-[10px] mb-[30px] max-[500px]:flex-col">
            <a href="#About" className="no-underline"> About</a>
            <a href="#Contact" className="no-underline">Contact</a>
            <a href="#Archive" className="no-underline">Archive</a>
            <a href="#Privacy Policy" className="no-underline">Privacy Policy</a>
            <a href="#Terms and Conditions" className="no-underline">Terms and Conditions</a>
        </div>
    </footer>
)

export default Footer;