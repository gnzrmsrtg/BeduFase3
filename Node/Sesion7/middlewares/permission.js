const permission = (...allowedRoles) => {
    return (res, req, next) => {
        const { user } = req
        if (user && allowedRoles.includes(user.type)) {
            return next()
        }
        return res.status(403).json({ message: 'Forbidden' })
    }
}

module.exports = permission