import { useState } from "react"
import Navbar from "./elements/navbar"
import Footer from "./elements/footer"
import NotificationBanner from "./elements/notification-banner"
import AlertItem from './AlertItem';
const Layout = ({ children, global, pageContext }) => {
  const { navbar, footer, notificationBanner } = global.attributes

  const [bannerIsShown, setBannerIsShown] = useState(true)
  return (
    <div>
      {/* Aligned to the top */}
      <div>
        {notificationBanner && bannerIsShown && (
          <AlertItem data={notificationBanner} setBannerIsShown={setBannerIsShown} bannerIsShown={bannerIsShown}/>
        )}
        <Navbar navbar={navbar} pageContext={pageContext} />
        <div>{children}</div>
      </div>
      {/* Aligned to the bottom */}
      <Footer footer={footer} />
    </div>
  )
}

export default Layout
