export const authenticateUser = (req, res, next) => {

   if (!req.isAuthenticated()) {

      return res.status(401).json({
         success:false,
         message:"Not authenticated"
      });

   }

   next();
};