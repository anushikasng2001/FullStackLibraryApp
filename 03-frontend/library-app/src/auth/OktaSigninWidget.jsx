import OktaSignIn from '@okta/okta-signin-widget'
import { oktaConfig } from '../lib/oktaConfig'
import { useEffect, useRef } from 'react'

const OktaSigninWidget = ({ onSuccess, onError }) => {

    const widgetRef = useRef()

    useEffect(() => {
        if (!widgetRef.current) {
            return false
        }

        const widget = new OktaSignIn(oktaConfig)

        widget.showSignInToGetTokens({
            el: widgetRef.current,
        }).then(onSuccess).catch(onError)

        return () => (widget.remove())
    }, [onSuccess, onError])

    return (
        <div className='container mt-5 mb-5'>
            <div ref={widgetRef}></div>
        </div>
    )
}

export default OktaSigninWidget