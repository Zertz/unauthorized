module.exports = function (method) {
  let unauthorized = function (req, res, next) {
    if (req.method.toLowerCase() === method.toLowerCase()) {
      res.sendStatus(401)
    } else {
      next()
    }
  }

  return unauthorized
}
