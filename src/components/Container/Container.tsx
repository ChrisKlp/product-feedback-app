export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="c-container grid lg:grid-flow-col lg:grid-cols-[255px_1fr] lg:gap-[30px]">
      {children}
    </div>
  )
}
