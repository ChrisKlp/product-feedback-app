import GoBackLink from '../GoBackLink/GoBackLink'

export default function RoadmapHeader() {
  return (
    <header className="bg-darkBlue flex h-[100px] items-center px-6 md:h-[113px] md:rounded-[10px] md:px-8">
      <nav className="grid flex-1 gap-1">
        <GoBackLink />
        <h1 className="h1 text-[18px] text-white md:text-2xl">Roadmap</h1>
      </nav>
      <button className="btn">+ Add Feedback</button>
    </header>
  )
}
