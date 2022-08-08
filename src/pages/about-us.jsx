import React, { Fragment } from 'react'
import { AboutScreen } from '@/screens/AboutScreen'
import AppLayout from '../layout/AppLayout'

 export default function AboutPage() {
    return (
        <Fragment>
            <AppLayout>
                <AboutScreen />
            </AppLayout>
        </Fragment>
    )
}
