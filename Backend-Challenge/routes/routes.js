const utilList = require("../utils/numList");
let numList = [];

module.exports = {
  getNumbers: function(request, response) {
    response.json({ response: "joey", error: 9 });
  }
};

// const numberRoutes = app => {
//   app.get("/butt", (_req, res) => {
//     res.status(200).json({
//       status: "ok",
//       message: "connected."
//     });
//   });

//   app.get("/data", (_req, res) => {
//     if (numList.length === 500) {
//       res.status(200).json({ status: "ok", data: numList });
//     } else {
//       res.status(403).json({
//         status: "error",
//         message: "Please POST a list of 500 numbers first"
//       });
//     }
//   });

//   app.post("/data", (req, res) => {
//     let input = req.body.data;

//     if (input && utilList.isValidInputList(input)) {
//       numList = utilList.sortList(input);
//       res
//         .status(201)
//         .json({ status: "ok", message: "500-Number List Created!" });
//       return;
//     }

//     res.status(400).json({
//       status: "error",
//       message:
//         'Please include { "data": [500 valid numbers] } in the request body'
//     });
//   });

//   app.patch("/data", (req, res) => {
//     if (numList.length !== 500) {
//       res.status(403).json({
//         status: "error",
//         message: "Please POST a list of 500 numbers first"
//       });
//       return;
//     }

//     let input = req.body.data;
//     if (input && utilList.isValidInputNum(input)) {
//       utilList.updateElement(input, numList);
//       res.status(200).json({ status: "ok", message: "List updated!" });
//       return;
//     }

//     res.status(403).json({
//       status: "error",
//       message: 'Please include { "data": <a valid number> } in the request body'
//     });
//   });
// };

// module.exports = numberRoutes;
