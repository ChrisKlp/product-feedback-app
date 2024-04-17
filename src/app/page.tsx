import Container from '@/components/Container/Container'
import FeedbackList from '@/components/FeedbackList/FeedbackList'
import Header from '@/components/Header/Header'
import mockedData from '@/mockedData.json'

const data = mockedData.productRequests

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
