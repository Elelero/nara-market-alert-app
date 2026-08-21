import { InputHTMLAttributes } from "react";

/***********************************************************************
 * @description: 공통 Input 컴포넌트
 **********************************************************************/
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = ({ label, error, className, id, ...props }: InputProps) => {
  const baseStyle =
    "w-full rounded-md border px-3 py-2 text-sm transition focus:outline-none focus:ring-2 disable:opacity-50 disabled:cursor-not-allowed";

  const stateStyle = error
    ? "border-red-400 focus:ring-red-300"
    : "border-slate-300 focus:ring-blue-300";

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="{id}" className="text-sm font-medium text-slate-700">
        {label}
      </label>
      <input id={id} className={`${baseStyle} ${stateStyle} ${className ?? ''}`} {...props} />
    </div>
  );
};

export default Input;
