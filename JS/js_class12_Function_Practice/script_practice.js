const student = [
  {
    name: "Ali",
    marks: [55, 64, 58, 70, 61],
  },
  {
    name: "Ahmad",
    marks: [55, 64, 58, 70, 61],
  },
  {
    name: "Sara",
    marks: [55, 64, 58, 70, 61],
  },
  {
    name: "Hamza",
    marks: [55, 64, 58, 70, 61],
  },
];

function claculateTotal(marks) {
    let totalMarks = 0;
    for(let i = 0; i < marks.length; i++) {
        totalMarks = totalMarks + marks[i];
    }
    return totalMarks;
}

console.log(claculateTotal(student[0].marks));
