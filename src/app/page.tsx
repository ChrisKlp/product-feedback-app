import FeedbackCard from '@/components/FeedbackCard/FeedbackCard'
import SortingBar from '@/components/SortingBar/SortingBar'
import mockedData from '@/mockedData.json'

let data = mockedData.productRequests

export default function Home() {
  return (
    <main>
      <SortingBar />
      <div className="grid gap-4 px-6 pb-[55px] pt-8 md:px-0 md:pb-[120px] md:pt-6">
        {data.map((el) => (
          <FeedbackCard data={el} />
        ))}
      </div>
    </main>
  )
}
