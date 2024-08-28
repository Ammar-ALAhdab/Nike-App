type ButtonProps = {
  label: string;
  iconURL?: string;
  bgColor?: string;
  borderColor?: string;
  txtColor?: string;
  type?: "button" | "submit" | "reset";
  onSubmit?: (e: Event) => void;
};

function Button({
  label,
  iconURL,
  borderColor = "",
  bgColor = "",
  txtColor = "text-white",
  type = "button",
}: ButtonProps) {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full  border-coral-red ${bgColor} ${borderColor} ${txtColor}`}
      type={type}
    >
      {label}
      {iconURL && <img src={iconURL} alt="button icon" />}
    </button>
  );
}

export default Button;
