export const checkLength = (pass) => {
    if (pass === undefined) {
        return false
    }
    if (pass.length > 7) {
        return true
    }

    return false
}

export const checkLetterAndNumber = (pass) => {
    if (pass === undefined) {
        return false
    }
    const number = pass[pass.search(/\d+/)]
    const letter = pass[pass.search(/[a-z]/i)]
    // const upper = pass[pass.search(/[A-Z]/)]

    if (number === undefined || number.length < 0) {
        return false
    }

    if (letter === undefined || letter.length < 0) {
        return false
    }

    return true
}

export const checkSpecial = (pass) => {
    if (pass === undefined) {
        return false
    }
    const special = pass[pass.search(/[^a-zA-Z0-9]+/)]
    if (special === undefined || special.length < 0) {
        return false
    }

    return true
}

export const checkUpperLower = (pass) => {
    if (pass === undefined) {
        return false
    }
    const lower = pass[pass.search(/[a-z]/)]
    const upper = pass[pass.search(/[A-Z]/)]

    if (lower === undefined || lower.length < 0) {
        return false
    }

    if (upper === undefined || upper.length < 0) {
        return false
    }

    return true
}

export const validateEmail = (email) => {
    if (String(email).toLowerCase().match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) { return true; }

    return false
};

export const validatePass = (pass) => {
    if (pass === undefined) {
        pass = ''
    }
    if (!checkLength(pass)) {
        return false;
    }

    if (!checkSpecial(pass)) {
        return false;
    }

    if (!checkLetterAndNumber(pass)) {
        return false;
    }

    if (!checkUpperLower(pass)) {
        return false;
    }
    return true;
}