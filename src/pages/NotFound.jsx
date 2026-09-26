import { Link } from 'react-router-dom'
import { Head } from 'vite-react-ssg'
import { PageHero } from '../components/Sections'

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Page not found | Isafab Engineering</title>
        <meta name="robots" content="noindex" />
      </Head>
      <PageHero eyebrow="404" title="Page not found">
        The page you're looking for doesn't exist.
      </PageHero>
      <div className="container-x py-12">
        <Link to="/" className="btn-primary">
          Back to home
        </Link>
      </div>
    </>
  )
}
