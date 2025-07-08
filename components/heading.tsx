export default function Heading({ title }: { title: string }) {
  return (
    <div className='flex flex-row w-screen pl-48 pr-48 place-items-center justify-left'>
      <div className='flex flex-col gap-12'>
        <p className='flex text-6xl text-justify text-dark-brown'>
          {title}
        </p>
      </div>
    </div>
  )
}