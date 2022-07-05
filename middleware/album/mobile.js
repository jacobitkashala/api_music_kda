const express = require('express');

const mobileChecking = express();

mobileChecking.use(async (req, res, next) => {
  try {

    const { apiKey } = req.query;
    // console.log(req.query)

    if (apiKey === 'c8697268acc5406f1d3c61343bbfd606') next();
    else
      res
        .status(400)
        .json({
          status_code: 7,
          status_message: 'Invalid API key: You must be granted a valid key.',
          success: false
        });
  } catch (error) {
    // console.log(error);
    res.status(500).json({ errors: error });
  }
  // return res.status(400).json({ errors: "d" });
});

module.exports = mobileChecking;
