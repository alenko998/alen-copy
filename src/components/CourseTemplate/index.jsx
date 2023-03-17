import ConfirmButton from "../ConfirmButton"
import { NavLink } from "react-router-dom"

export default function CourseTemplate(props) {
 
    return (
      
      <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {props.courses.map((course) => (
          <li
            key={course.id}
            className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
          >
            <div className="flex flex-1 flex-col p-8">
              <div className='flex flex-col '>
                <img className="mx-auto h-40 w-52 rounded-lg flex-shrink-0 " src={course.imageUrl} alt="" />
                <NavLink to={"/basic-info/" + course.id} ><h3 className="mt-6 text-sm font-medium text-gray-900">{course.title}</h3></NavLink>
              </div>
             
  
              <div className="mt-1 flex flex-grow flex-col justify-between">
                <p className="text-sm text-gray-500">{course.description}</p>
                <div className="flex justify-evenly">
                  <p className="mt-2">
                    <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                      {course.tags}
                    </span>
                  </p>
                  <p className="mt-2">
                    <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                      {course.tags}
                    </span>
                  </p>
                  <p className="mt-2">
                    <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                      {course.tags}
                    </span>
                </p>
                </div>
                <p className="text-sm text-gray-500 mt-2">{course.departments}</p>
                <p className="text-sm text-gray-500 mt-2">{course.meta}</p>
              </div>
            </div>
          
            <div>
              <div className="-mt-px flex divide-x divide-gray-200 justify-center">
                <div className="flex w-0 flex-1">
                  <button className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900" onClick={()=>{props.setOpen(true); props.setTitle(course.title)}}>Edit</button>
                </div>
                <div className="-ml-px flex w-0 flex-1">
                <button className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900" onClick={()=>{props.handleDelete(course.id)}} >Delete</button> 
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    )
  }
  