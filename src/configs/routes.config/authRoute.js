import React from 'react'

const authRoute = [
    {
        key: 'signIn',
        path: `/sign-in`,
        component: React.lazy(() => import('views/auth/SignIn')),
        authority: [],
    },
    {
        key: 'signUp',
        path: `/sign-up`,
        component: React.lazy(() => import('views/auth/SignUp')),
        authority: [],
    },
    {
        key: 'forgotPassword',
        path: `/forgot-password`,
        component: React.lazy(() => import('views/auth/ForgotPassword')),
        authority: [],
    },
    {
        key: 'resetPassword',
        path: `/reset-password`,
        component: React.lazy(() => import('views/auth/ResetPassword')),
        authority: [],
    },
    {
        key: 'firstSlide',
        path: `/first-slide`,
        component: React.lazy(() => import('views/auth/FirstSlide')),
        authority: [],
    },
    {
        key: 'secondSlide',
        path: `/second-slide`,
        component: React.lazy(() => import('views/auth/SecondSlide')),
        authority: [],
    },
]

export default authRoute
