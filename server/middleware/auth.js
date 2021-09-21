import jwt from 'jsonwebtoken';

// const secret = 'test'

//middleware has the next 
const auth = async (req, res, next) => {
    try {
        //after we split this the token is at the first position of the array
        const token = req.headers.authorization.split(" ")[1];
        const isCustomAuth = token.length < 500;

        let decodedData;

        if(token && isCustomAuth) {
            //this will give us the data from each specific token
            decodedData = jwt.verify(token, 'test');

            req.userId = decodedData?.id;
        } else {
            decodedData = jwt.decode(token);
            //sub is googles own version of id. 
            req.userId = decodedData?.sub;
        }

        //middleware allows us to call a next function which will then chain a function
        //after the above is complete.
        next();
    } catch (error) {
        console.log(error);
    }
};

export default auth;