import Header from '@/components/Header/Header'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto grid max-w-[1100px] md:px-10 md:pt-14 lg:grid-flow-col lg:grid-cols-[255px_1fr] lg:gap-[30px] lg:pt-[94px]">
      <Header />
      {children}
    </div>
  )
}
