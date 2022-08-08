import React, { Fragment } from 'react'
import { FeaturesScreen } from '@/screens/FeaturesScreen'

import AppLayout from '../layout/AppLayout'
export default  function FeaturePages() {
    return (
        <Fragment>
            <AppLayout>
                <FeaturesScreen />
            </AppLayout>
        </Fragment>
    )
}
