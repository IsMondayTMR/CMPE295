import * as TYPES from '../const/reduxTypes'
import BASEAPI from '../apis/mockup'

export const googleSignIn = (auth) => {
    var profile = auth.currentUser.get().getBasicProfile()

    var user = {
        ID: profile.getId(),
        FullName: profile.getName(),
        GivenName: profile.getGivenName(),
        FamilyName: profile.getFamilyName(),
        ImageURL: profile.getImageUrl(),
        Email: profile.getEmail()
    }

    sessionStorage.setItem("user", JSON.stringify(user))
    return {
        type: TYPES.GOOGLE_SIGN_IN,
        payload: user,
        authInstance: auth
    }
}

export const googleSignOut = () => {
    return {
        type: TYPES.GOOGLE_SIGN_OUT
    }
}

export const signIn = (formValue) => {
    
    return async (dispatch) => {
        
        const {data} = await BASEAPI.get('/createUser')
        
        let check = false

        for (const key in data) {
           
            if (data[key].Email === formValue.signInEmail && data[key].Password === formValue.signInPassword) {
                check = true
                let user = {
                    Email:data[key].Email,
                }
                sessionStorage.setItem("user", JSON.stringify(user))
                break
            } 
        }
        
        dispatch ({type: TYPES.SIGN_IN, payload: check})
    }   
}

export const signOut = (auth) => {

    
    if (auth.authType === TYPES.GOOGLE_SIGN_IN) {
        auth.authInstance.signOut()
        
    }
    sessionStorage.removeItem("user")
    return {
        type: TYPES.SIGN_OUT
    }
}

export const createUser = (formValue) => {

    return async (dispatch) => {
        
        const registerValue = {
            Email : formValue.registerEmail,
            Password: formValue.registerPassword
        }
        const {status, statusText} = await BASEAPI.post('/createUser', registerValue)

        if (status === 201 && statusText === "Created") {
            dispatch ({
                type: TYPES.CREATE_SUCESS,
                payload: true
            })
        } else {
            
            dispatch ({
                type: TYPES.CREATE_FAIL,
                payload: false
            })
        }
    }
}