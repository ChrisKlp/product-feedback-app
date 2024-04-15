type Props = {
  status: {
    name: string
    color: string
  }
  count: number
}

export default function Status({ count, status }: Props) {
  return (
    <div className="flex w-full items-center gap-4">
      <div
        className="bg-lightOrange h-2 w-2 rounded-full"
        style={{ backgroundColor: status.color }}
      />
      <p className="flex-1 text-[16px]">{status.name}</p>
      <p className="text-[16px] font-bold">{count}</p>
    </div>
  )
}
