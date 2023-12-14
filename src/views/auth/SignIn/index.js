import React from 'react'
import SignInForm from './SignInForm'

const SignIn = () => {
    return (
        <>
            <div  >
                <div className="mb-8" >
                    <h3 className="mb-1 text-center text-white">Добро пожаловать</h3>
                    <p>Приветствую на нашей платформе</p>
                </div>
                <SignInForm disableSubmit={false} />
            </div>

        </>
    )
}

export default SignIn
