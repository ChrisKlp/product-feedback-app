import RoadmapHeader from '@/components/Roadmap/RoadmapHeader'

export default function RoadmapLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="c-container md:pb-[95px] md:pt-14 lg:pb-[180px] lg:pt-[78px]">
      <RoadmapHeader />
      <main>{children}</main>
    </div>
  )
}
