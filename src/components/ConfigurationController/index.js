import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const onChangeContent = () => {
        onToggleShowContent()
      }

      const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const onChangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="configuration-container">
          <div className="configuration-context">
            <h1 className="layout-heading">Layout</h1>
            <ul className="controllers-container">
              <li className="each-check-box">
                <input
                  id="content"
                  type="checkbox"
                  className="check-box"
                  checked={showContent}
                  onChange={onChangeContent}
                />
                <label htmlFor="content" className="label-text">
                  Content
                </label>
              </li>
              <li className="each-check-box">
                <input
                  id="leftNavbar"
                  type="checkbox"
                  className="check-box"
                  onChange={onChangeLeftNavbar}
                  checked={showLeftNavbar}
                />
                <label htmlFor="leftNavbar" className="label-text">
                  Left Navbar
                </label>
              </li>
              <li className="each-check-box">
                <input
                  id="rightNavbar"
                  type="checkbox"
                  className="check-box"
                  onChange={onChangeRightNavbar}
                  checked={showRightNavbar}
                />
                <label htmlFor="rightNavbar" className="label-text">
                  Right Navbar
                </label>
              </li>
            </ul>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
