import React, { Fragment } from 'react'
import { HomePageScreen } from '../screens/HomePage'

import AppLayout from '../layout/AppLayout'
function HomePage() {
  return (
    <Fragment>
      <AppLayout>
        <HomePageScreen />
      </AppLayout>
    </Fragment>
  )
}

export default HomePage
