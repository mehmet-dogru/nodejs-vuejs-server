const errorHandling = (err, req, res, next) => {
  res.json({
    statusCode: err.statusCode || 500,
    message: err.message,
    success: false,
  });
};

module.exports = errorHandling;
