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
      <div className='content'>
        {courses.length === 0 ? (<div><h2>Kursların Hepsi Silindi</h2><button onClick={() => {fetchCourse()}}>Yenile</button></div>) : (<div></div>)}
        {loading ? (<Loading></Loading>) : (<Courses courses={courses} removeCourse = {deleteCourse}></Courses>)}
      </div>
    </div>
  )
}

export default App
