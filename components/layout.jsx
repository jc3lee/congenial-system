
import Header from "./header"
import TopNav from "./topNav"

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <TopNav />
      {children}
    </div>
  )
}

export default Layout