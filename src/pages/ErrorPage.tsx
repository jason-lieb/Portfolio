import { Link } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <main className="min-h-[calc(100vh-10.5rem)] flex flex-col items-center justify-center">
      <h1 className="text-accent text-4xl font-bold mb-4">404</h1>
      <p className="text-text mb-4">Page not found</p>
      <Link
        to="/Portfolio"
        className="border border-accent text-text hover:text-accent px-4 py-2 rounded-lg"
      >
        Go Home
      </Link>
    </main>
  )
}
