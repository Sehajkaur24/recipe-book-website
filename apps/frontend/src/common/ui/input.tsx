
// type InputTypeEnum = "text" | "email" | "password"

type InputProps = {
  type: React.HTMLInputTypeAttribute, // it is an inbuilt type
  placeholder: string,
  value?: string | number,
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

export function Input({
  type,
  placeholder,
  value,
  onChange
}: InputProps) {
  return (
    <input onChange={onChange} value={value} type={type} placeholder={placeholder} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400" />
  )
}