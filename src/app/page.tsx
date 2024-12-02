import Link from "next/link"

const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      Click
      <Link href="/documents/123">
        <span className="text-blue-500">&nbsp;Here&nbsp;</span> to go document
        id
      </Link>
    </div>
  )
}

export default Home
