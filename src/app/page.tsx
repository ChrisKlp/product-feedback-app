import Container from '@/components/Container/Container'
import FeedbackList from '@/components/FeedbackList/FeedbackList'
import Header from '@/components/Header/Header'
import SortingBar from '@/components/SortingBar/SortingBar'
import mockedData from '@/mockedData.json'

let data = mockedData.productRequests

export default function Home() {
  return (
    <Container>
      <Header />
      <main>
        <FeedbackList data={data} />
      </main>
    </Container>
  )
}
