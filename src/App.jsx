import { useEffect , useState} from 'react'
import axios from 'axios'
import './App.css'
import Courses from './Companents/Courses'
import Loading from './Companents/Loading'

function App() {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const deleteCourse = (id) => {
    const afterDelete = courses.filter((course) => course.id !== id)
    setCourses(afterDelete)
  }
  const fetchCourse = async () => {
    setLoading(true);
    try{
      const response = await axios.get("http://localhost:3004/courses")
      setCourses(response.data)
      setLoading(false)
    }catch(error){
      setLoading(true)
    }
  }
  useEffect(() => {
    fetchCourse()
  } , [])
  return (
    <div className='app'>
      {loading ? (<Loading></Loading>) : (<Courses courses={courses} removeCourse = {deleteCourse}></Courses>)}
    </div>
  )
}

export default App
