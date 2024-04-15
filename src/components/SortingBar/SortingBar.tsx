export default function SortingBar() {
  return (
    <div className="bg-darkBlue text-blue200 flex h-[56px] items-center justify-between px-[24px] md:rounded-[10px]">
      <div className="text-small">
        <span>Sort by : </span>
        <button className="font-bold">Most Upvotes</button>
      </div>
      <button className="btn h-[40px] px-[16px]">+ Add Feedback</button>
    </div>
  )
}
