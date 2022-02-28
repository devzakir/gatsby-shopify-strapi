import * as React from "react"
import { Link } from "gatsby"
// markup
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <h1>
        Congratulations
        <br />
        <span >— you just made a Gatsby site! </span>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>
      <Link to={`/products`}> Products </Link>
    </main>
  )
}

export default IndexPage
