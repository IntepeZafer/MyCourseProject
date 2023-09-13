import Course from "./Course";

function Courses({courses , removeCourse}) {
    return ( 
        <div className="courseContainer">
            <div className="titleContainer">
                <h2>Kurslarım</h2>
            </div>
            <div className="courseContent">
                {
                    courses.map((array , index) => {
                        return (
                            <Course key={index} {...array} removoOneCourse={removeCourse}></Course>
                        )
                    })
                }
            </div>
        </div>
     );
}
export default Courses;