# authentication

Base Url: https://authentication-khaki.vercel.app/


/--------- User registration -------------/

@route POST api/v1/signup
@access public

/--------- User Login -------------/

@route POST api/v1/login
@access public


/--------- Get all Users -------------/

@route GET api/users
@access private

/--------- Get One User by Id -------------/

@route GET api/users/:id
@access private
