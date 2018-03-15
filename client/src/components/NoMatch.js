import React from "react"
import {Header} from "semantic-ui-css"
import {Link} from "react-router-dom"

const NoMatch = () => (
  <Header textAlign="center" as="h3">
    404 Page Not Found
    <Link to="/">Home</Link>
  </Header>
)

export default NoMatch