const express = require("express");
const app = express();
const teachers = require("./data.js");
const bodyParser = require("body-parser");

//app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//GET methods

app.get("/teachers", (req, res) => {
  res.status(200).json({
    data: teachers,
  });
});

app.get("/teachers/:id", (req, res) => {
  const id = req.params.id;
  const teacherId = parseInt(id);
  const requiredTeacher = teachers.find((each) => each.id === teacherId);

  if (requiredTeacher) {
    res.status(200).json({ data: requiredTeacher });
  } else {
    res.status(400).send("Teacher unavailable");
  }
});

app.get("/teachers/:tid/students/:sid", (req, res) => {
  const tid = req.params.tid;
  const sid = req.params.sid;
  const teacherId = parseInt(tid);
  const studentId = parseInt(sid);

  const requiredTeacher = teachers.find((each) => each.id === teacherId);

  if (requiredTeacher) {
    res.status(200).json({ data: requiredTeacher.students[studentId] });
  } else {
    res.status(400).send("unavailable");
  }
});

//POST methods

app.post("/teachers", (req, res) => {
  if (
    req.body.id &&
    req.body.firstName &&
    req.body.students &&
    req.body.age &&
    req.body.class
  ) {
    teachers.push(req.body);
    res.status(200).json({
      message: "teacher added Successfully",
      data: req.body,
    });
  } else {
    res.status(400).send("Invalid Teacher");
  }
});

//DELETE method

app.delete("/teachers/:id", (req, res) => {
  const id = req.params.id;
  const teacherId = parseInt(id);

  let requiredTeacherIndex;
  for (let i = 0; i < teachers.length; i++) {
    if (teachers[i].id === teacherId) {
      requiredTeacherIndex = i;
      break;
    }
  }

  if (requiredTeacherIndex != undefined) {
    teachers.splice(requiredTeacherIndex, 1);
    res.status(200).json({ msg: "deleted!" });
  } else {
    res.status(400).send("Teacher unavailable");
  }
});

app.delete("/teachers/:tid/students/:sid", (req, res) => {
  const tid = req.params.tid;
  const sid = req.params.sid;
  const teacherId = parseInt(tid);
  const studentId = parseInt(sid);

  let requiredTeacherIndex;
  for (let i = 0; i < teachers.length; i++) {
    if (teachers[i].id === teacherId) {
      requiredTeacherIndex = i;
      break;
    }
  }

  if (requiredTeacherIndex != undefined) {
    teachers[requiredTeacherIndex].students.splice(studentId, 1);
    // teachers.splice(requiredTeacherIndex, 1);
    res.status(200).json({ msg: "Student Deleted!" });
  } else {
    res.status(400).send("Teacher or Student unavailable");
  }
});

//PUT METHOD

app.put("/teachers:id", (req, res) => {
  const tid = req.params.id;
  const teachersId = parseInt(tid);
  let requiredTeachersIndex;
  for (let i = 0; i < teachers.length; i++) {
    if (teachers[i].id === teachersId) {
      requiredTeachersIndex = i;
      break;
    }
  }
  if (requiredTeachersIndex != undefined) {
    const originalTeacher = teachers[requiredTeachersIndex];
    const newTeacher = {
      ...originalTeacher,
      ...req.body,
    };
    teachers.splice(requiredTeachersIndex, 1, newTeacher);
    res.status(200).json({
      message: "Teacher details updated!",
      data: newTeacher,
    });
  } else {
    res.status(400).send("Invalid Teacher");
  }
});

app.put("/teachers:tid/students/:sid", (req, res) => {
  const tid = req.params.tid;
  const sid = req.params.sid;
  const teachersId = parseInt(tid);
  const studentId = parseInt(sid);
  let requiredTeachersIndex;
  for (let i = 0; i < teachers.length; i++) {
    if (teachers[i].id === teachersId) {
      requiredTeachersIndex = i;
      break;
    }
  }
  if (requiredTeachersIndex != undefined) {

    teachers[requiredTeachersIndex].students.splice(studentId, 0, req.body);
    res.status(200).json({
      message: "Details updated!",
      data: teachers[requiredTeachersIndex].students,
    });
  } else {
    res.status(400).send("Invalid");
  }
});

app.listen(3000 || 8080);
