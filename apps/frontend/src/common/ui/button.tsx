
type ButtonProps = {
  children: React.ReactNode
}

export function Button({
  children
}: ButtonProps) {
  return (
    <button type="submit" className="w-full bg-orange-400 text-white font-semibold p-3 rounded-lg hover:bg-orange-500 transition">{children}</button>
  )
}