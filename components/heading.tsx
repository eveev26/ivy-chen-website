export function Heading({ title, id }: { title: string; id?: string }) {
  return (
    <div id={id} className='flex flex-row w-screen pl-48 pr-48 place-items-center justify-left container'>
      <div className='flex flex-col gap-12'>
        <p className='flex text-6xl text-justify text-dark-brown'>
          {title}
        </p>
      </div>
    </div>
  )
}