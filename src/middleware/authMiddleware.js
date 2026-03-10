export const authenticateUser = (req, res, next) => {
    if (!req.isAuthenticated()) {
        return res.redirect('/');
    }
    next();
};
