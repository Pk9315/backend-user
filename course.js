const {initializeDatabase} = require("./db/db.connect")
// const fs = require("fs")
const Course = require("./Course_Management/course.model")

initializeDatabase()

// const jsonData = fs.readFileSync("course.json", "utf-8")
// const coursesData = JSON.parse(jsonData)

// function readCourseData(){
//     try{
//         for(let course of coursesData){
//             const newCourse = new Course({
//                 courseName: course.courseName,
//                 subject: course.subject,
//                 medium: course.medium,
//                 duration: course.duration,
//                 price: course.price,
//                 instructor: course.instructor
//             })
//            newCourse.save()
//         }


//     }
//     catch(error){
//          console.log("error seeding the data", error)
//     }

// }
// readCourseData()

const newCourse =  {
    courseName: "Node.js Backend Development",
    subject: "Backend Development",
    medium: "English",
    duration: "4 Months",
    price: 18000,
    instructor: "Pritam Kumar"
  }


async function manageCourse(handleCourse){
    try{
        const newCourse =  new Course(handleCourse)
        const saveCourse = await newCourse.save()
        
    }
    catch(error){
        throw error
    }
}
manageCourse(newCourse)