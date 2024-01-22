import * as React from "react"
import { Link } from "gatsby"
import Logo from "../images/DealPrepLogo.svg"
import CobaltLogo from "../images/CobaltLogo.svg"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <div>
        <h1 className="main-heading">
          <Link to="/" alt={title}><Logo style={{ height: "2em" }} /></Link>
          <Link to="https://cobaltcounsel.com"><CobaltLogo style={{ height: "2em", width: "10rem" }} /></Link>
        </h1>
      </div>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built by
        {` `}
        <a href="https://www.cobaltcounsel.com">Cobalt</a>
      </footer>
    </div>
  )
}

export default Layout
