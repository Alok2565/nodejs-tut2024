module.exports = regFilter = (req, resp, next) => {
    //console.log('reqFilter');
    if (!req.query.age) {
      resp.send("Please provide the age");
    } else if (req.query.age < 18) {
      resp.status(401).send("You are not allowed to access this resource");
      return;
    } else {
      next();
    }
  };