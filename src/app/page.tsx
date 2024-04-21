import mockedData from '@/mockedData.json'
import Header from '@/app/_components/header/header'
import FeedbackList from '@/app/_components/feedback-list'

const data = mockedData.productRequests

export default function Home() {
  return (
    <div className="mx-auto grid max-w-[1180px] md:px-10 md:pt-14 lg:grid-flow-col lg:grid-cols-[255px_1fr] lg:gap-[30px] lg:pt-[94px]">
      <Header />
      <main>
        <FeedbackList data={data} />
      </main>
    </div>
  )
}
