import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      const renderLeftNavbarMenu = () => (
        <div className="left-navbar-container">
          <h1 className="body-headings">Left Navbar Menu</h1>
          <ul className="items-list-container">
            <li className="items">Item 1</li>
            <li className="items">Item 2</li>
            <li className="items">Item 3</li>
            <li className="items">Item 4</li>
          </ul>
        </div>
      )

      const renderContentView = () => (
        <div className="content-view">
          <h1 className="content-heading">Content</h1>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
      )

      const renderRightNavbarMenu = () => (
        <div className="right-navbar-container">
          <h1 className="body-headings">Right Navbar</h1>
          <div className="items-right-list-container">
            <p className="boxes">Ad 1</p>
            <p className="boxes">Ad 2</p>
          </div>
        </div>
      )

      return (
        <div className="body-container">
          {showLeftNavbar ? renderLeftNavbarMenu() : null}
          {showContent ? renderContentView() : null}
          {showRightNavbar ? renderRightNavbarMenu() : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
