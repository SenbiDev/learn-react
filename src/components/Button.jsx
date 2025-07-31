const Button = ({ children, variant = "default", ...props }) => {
    const base = "flex font-medium text-[16px] py-[10px] px-[20px] rounded-[6px]";
    const styles = {
        default: "bg-transparent text-[#1E1E1E]",
        primary: "bg-[#1E1E1E] text-white"
    };

    return (
        <button className={`${base} ${styles[variant]}`} {...props}>
            {children}
        </button>
    );
};

export default Button;