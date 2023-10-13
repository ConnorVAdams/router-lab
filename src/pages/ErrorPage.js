import { useRouteError } from 'react-router-dom'
import NavBar from '../components/NavBar.js'

const ErrorPage = () => {
  const error = useRouteError()
  console.log(error)
  return (
    <>
      <NavBar />
      <h1>Something went wrong.</h1>
    </>
  )
}

export default ErrorPage