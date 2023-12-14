import React from 'react'
import Side from './Side'
import View from 'views'

const AuthLayout = (props) => {
    return (
        <div className="app-layout-blank flex flex-auto flex-col h-[100vh]">
             <Side>
                <View {...props} />
             </Side>
        </div>
    )
}



export default AuthLayout
