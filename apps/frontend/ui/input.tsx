import React from "react";

export default function InputBox({
  inputType,
  onChangehandler,
  placeholder,
}: {
  inputType: string;
  onChangehandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}) {
  return (
    <div className="flex flex-col items-start my-4 ">
      <label className="mb-2 text-sm font-medium text-gray-700">
        {placeholder}
      </label>
      <input
        type={inputType}
        placeholder={placeholder}
        onChange={onChangehandler}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150 ease-in-out bg-white text-gray-900"
      />
    </div>
  );
}