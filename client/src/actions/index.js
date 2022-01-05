import * as Types from '../const/reduxTypes'

export const googleSignIn = () => {
    return {
        type: Types.GOOGLE_SIGN_IN
    }
}

export const googleSignOut = () => {
    return {
        type: Types.GOOGLE_SIGN_OUT
    }
}