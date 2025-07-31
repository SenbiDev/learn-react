const Footer = () => (
  <footer className="bg-[#F2DE9F] flex flex-col gap-[20px] p-[20px]">
    <div className="font-medium text-[32px] text-center py-[10px] max-[768px]:text-start">News</div>
    <div className="flex justify-center gap-[40px] flex-wrap max-[768px]:flex-col text-center">
      {["About", "Contact", "Archive", "Privacy Policy", "Terms and Condition"].map((item, i) => (
        <div key={i} className="p-[10px]">{item}</div>
      ))}
    </div>
  </footer>
);

export default Footer;