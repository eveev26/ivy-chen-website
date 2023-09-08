import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-[#E5FCFF]">
      <div className='flex h-1/6 w-1/2 p-4 text-[#468189] text-3xl text-left'>
        hello my name is
      </div>
      <div className='flex h-1/6 w-1/2 p-4 text-[#E78F8E] text-6xl text-left'>
        Ivy Chen
      </div>
    </main>
  )
}
