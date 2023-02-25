const validateRegex = ["[a-zA-Z]", "[0-9]", "\\W"];

const PASSWORD_PROPERTIES = {
    PASSWORD_STRENGTH : {
        EMPTY: '',
        EASY: 'easy',
        MEDIUM: 'medium',
        STRONG: 'strong',
    },
    PASSWORD_LENGTH: {
        EMPTY: 0,
        MIN_LENGTH: 7,
    },
    STRENGTH_INCREMENTOR: 1,
}

export {
    validateRegex,
    PASSWORD_PROPERTIES,
}
