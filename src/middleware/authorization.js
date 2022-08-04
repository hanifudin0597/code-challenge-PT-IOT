module.exports = {
    isAdmin: (req, res, next) => {
        if (req.APP_DATA.tokenDecoded.role_id === 1) {
        next();
        } else {
            res.json({
                code: 403,
                message: "You don't have permission!",
                error: 'Forbidden',
            })
        }
    },
    isUser: (req, res, next) => {
        if (req.APP_DATA.tokenDecoded.role_id === 2) {
        next();
        } else {
            res.json({
                code: 403,
                message: "You don't have permission! Please contact Admin",
                error: 'Forbidden',
            })
        }
    },
    isNonActive: (req, res, next) => {
        if (req.APP_DATA.tokenDecoded.role_id === 3) {
        next();
        } else {
            res.json({
                code: 403,
                message: "You don't have permission!",
                error: 'Forbidden',
            })
        }
    },
}