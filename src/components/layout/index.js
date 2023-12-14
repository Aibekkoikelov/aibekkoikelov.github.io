import React, { memo, useMemo, lazy, Suspense } from 'react'
import { Loading } from 'components/shared'
import useAuth from 'utils/hooks/useAuth'
import useDirection from 'utils/hooks/useDirection'
import useLocale from 'utils/hooks/useLocale'



const Layout = () => {

    const { authenticated } = useAuth()
    useDirection()
    useLocale()

    const AppLayout = useMemo(() => {
        if (authenticated) {
            return lazy(() => import('./ModernLayout'))
        }
        return lazy(() => import('./AuthLayout'))
    }, [authenticated])

    return (
        <Suspense
            fallback={
                <div className="flex flex-auto flex-col h-[100vh]">
                    <Loading loading={true} />
                </div>
            }
        >
            <AppLayout />
        </Suspense>
    )
}

export default memo(Layout)
