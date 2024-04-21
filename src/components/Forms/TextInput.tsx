export default function TextInput() {
  return (
    <div>
      <label className="h4 mb-1 text-[13px]">Feedback Title</label>
      <p className="mb-4">Add a short, descriptive headline</p>
      <input
        className="h-12 rounded-[5px] bg-@blue-100 px-6 text-[15px] text-@blue-900 placeholder-@blue-900 placeholder-opacity-50 transition-shadow hover:ring-1 hover:ring-@blue-500 focus:outline-none focus:ring-1 focus:ring-@blue-500"
        type="text"
        name=""
        id=""
      />
      <p className="mt-1 text-[14px] text-@red-500"> Can’t be empty</p>
    </div>
  )
}
