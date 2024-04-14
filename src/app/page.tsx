import NoFeedback from '@/components/NoFeedback/NoFeedback'
import SortingBar from '@/components/SortingBar/SortingBar'
import mockedData from '@/mockedData.json'

let data = mockedData.productRequests[0]

export default function Home() {
  return (
    <main className="">
      <SortingBar />
      <div className="px-6 pt-8">
        <NoFeedback />
      </div>
    </main>
  )
}
