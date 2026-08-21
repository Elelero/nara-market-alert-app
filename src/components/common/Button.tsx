/***********************************************************************
 * @description: 공통 Button 컴포넌트
 **********************************************************************/
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger" | "light" | "dark";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const Button = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  disabled = false,
  type = "button",
}: ButtonProps) => {
  const baseStyle =
    "w-full bg-blue-500 hover:bg-blue-700 transition-colors text-white text-xs font-semibold py-2 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed";

  const variantStyle = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-cyan-400 hover:bg-cyan-700",
    danger: "bg-red-600 text-white hover:bg-red-700",
    light: "bg-slate-100 hover:bg-slate-400",
    dark: "bg-slate-600 text-white hover:bg-slate-700",
  };

  const sizeStyle = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`${baseStyle} ${variantStyle[variant]} ${sizeStyle[size]}`}>
      {children}
    </button>
  );
};

export default Button;
