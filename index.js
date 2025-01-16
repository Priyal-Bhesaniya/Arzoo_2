const express = require("express");
const app = express();
const port = 3000;

app.use(express.json()); // middleware jyare call ave tyare it will covert into json if data is in json formate 
var students = [
  {
    enrollment_no: "123456789",
    name: "Shamsaagazarzoo Alam",
    branch: "CE",
    sem: 6,
    div: "A",
    roll_no: 47,
  },
  //
];

app.get("/", (req, res) => res.json(students));

// to add a new student 
app.post("/", (req, res) => 
    {
        const {enrollment_no,name,branch,sem,div,roll_no} =  req.body;
        // students.push({en,name,branch,sem,div,roll_no});

        students = [...students,{enrollment_no,name,branch,sem,div,roll_no}];
        res.json(students); //Spread Operator 
    }); // i want send apde json ma j karvu padse server ma app ma call avse tyare   line -- 5

    // to update a student
app.put("/:enrollment_no", (req, res) => {
 //en kyathi avse
    const enrollment_no = req.params.enrollment_no; // simpele query
    const {name, branch, sem, div, roll_no} =  req.body;
    //map function to etrate all elements and return array
    students = students.map((student) =>
        student.enrollment_no == enrollment_no  // == type match
         ? {...student, name, branch, sem, div, roll_no} 
          : student
    );
    res.json(students);
});
app.listen(port, () =>
  console.log(`Server Started at http://localhost:${port}!`)
);
