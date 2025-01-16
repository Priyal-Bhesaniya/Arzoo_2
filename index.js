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
];

app.get("/", (req, res) => res.json(students));
app.post("/", (req, res) => 
    {
        const {enrollment_no,name,branch,sem,div,roll_no} =  req.body;
        // students.push({en,name,branch,sem,div,roll_no});

        students = [...students,{enrollment_no,name,branch,sem,div,roll_no}];
        res.json(students); //Spread Operator 
    }); // i want send apde json ma j karvu padse server ma app ma call avse tyare   line -- 5
app.listen(port, () =>
  console.log(`Server Started at http://localhost:${port}!`)
);
