let classRoom = [
  {
    Marnie: [
      { Monday: true },
      { Tuesday: true },
      { Wednesday: true },
      { Thursday: true },
      { Friday: true },
    ],
  },
  {
    Lena: [
      { Monday: false },
      { Tuesday: false },
      { Wednesday: true },
      { Thursday: false },
      { Friday: true },
    ],
  },
  {
    Shoshanna: [
      { Monday: true },
      { Tuesday: true },
      { Wednesday: false },
      { Thursday: true },
      { Friday: false },
    ],
  },
  {
    Jessa: [
      { Monday: false },
      { Tuesday: false },
      { Wednesday: false },
      { Thursday: false },
      { Friday: true },
    ],
  },
];

//classRoom ==> student(object type) ==> name(key of student)
//  ==> schedule(array type) ==> dayObject[checkDay]===true ? present.push(name):null;

// YOUR CODE BELOW
function attendanceCheck(checkDay) {
  let present = [];
  for (let i = 0; i < classRoom.length; i++) {
    let student = classRoom[i];
    // console.log(student); //checkpoint

    let name = Object.keys(student)[0];
    // console.log(name); //checkpoint

    let schedule = student[name];
    // console.log(schedule); //checkpoint

    for (let dayObject of schedule) {
      if (dayObject[checkDay]) {
        present.push(name);
        break;
      }
    }
  }
  console.log(present);

  return present;
}

attendanceCheck("Monday");
attendanceCheck("Wednesday");
