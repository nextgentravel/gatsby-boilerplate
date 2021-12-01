import React from 'react'
import Breadcrumbs from './Breadcrumbs'

const Header = () => {
    return (
        <header className="mb-0">
        <div className="container">
          <div className="row my-3 mx-2">
            <nav className="skiphold" id="header-skiplink">
              <a className="sr-only sr-only-focusable aurora-skip skiplink" aria-label="main skiplink" href="#main-content">Skip to the main content</a>
            </nav>
              <div className="align-self-center" property="publisher" typeof="GovernmentOrganization">
               LOGO
              </div>
            <section className='text-right align-self-center ml-auto'>
              <h2 className="sr-only sr-only-focusable aurora-skip">LANGUAGE SELECT</h2>
              {/* <SelectLanguage /> */}
            </section>
          </div>
        </div>
        <Breadcrumbs/>
        <div className="py-4 header-background mb-3">
          <div className="container">
            <div className="row">
                <div className="col-sm-12">
                  <h1 className="text-light">Government of Canada travel calculator</h1>
                </div>
            </div>
          </div>
        </div>
      </header>
    )
}

export default Header
