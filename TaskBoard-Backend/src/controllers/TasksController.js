const TasksModel = require("../models/TasksModel");

exports.createTask = async (req, res) => {
  try {
    let reqBody = req.body;
    reqBody.email = req.headers["email"];
    let data = await TasksModel.create(reqBody);
    res.status(200).json({ status: "success", data: data });
  } catch (err) {
    res.status(400).json({ status: "fail", data: err });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await TasksModel.deleteOne({ _id: id });
    res.status(200).json({ status: "success", data: data });
  } catch (err) {
    res.status(400).json({ status: "fail", data: err });
  }
};

exports.updateTaskStatus = async (req, res) => {
  try {
    let id = req.params.id;
    let status = req.params.status;
    let data = await TasksModel.updateOne({ _id: id }, { status: status });
    res.status(200).json({ status: "success", data: data });
  } catch (err) {
    res.status(400).json({ status: "fail", data: err });
  }
};

exports.listTaskByStatus = async (req, res) => {
  try {
    let status = req.params.status;
    let email = req.headers["email"];
    let data = await TasksModel.aggregate([
      { $match: { status: status, email: email } },
      {
        $project: {
          _id: 1,
          title: 1,
          description: 1,
          status: 1,
          createdDate: {
            $dateToString: { date: "$createdDate", format: "%d-%m-%Y" },
          },
        },
      },
    ]);
    res.status(200).json({ status: "success", data: data });
  } catch (err) {
    res.status(400).json({ status: "fail", data: err });
  }
};

exports.taskStatusCount = async (req, res) => {
  try {
    let email = req.headers["email"];
    let data = await TasksModel.aggregate([
      { $match: { email: email } },
      { $group: { _id: "$status", sum: { $count: {} } } },
    ]);
    res.status(200).json({ status: "success", data: data });
  } catch (err) {
    res.status(400).json({ status: "fail", data: err });
  }
};
