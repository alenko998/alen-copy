import React, { useEffect, useState } from 'react'
import CourseTemplate from '../components/CourseTemplate'
import MyPrimaryButton from '../components/MyPrimaryButton'
import MyPrimaryButtonInvisible from '../components/MyPrimaryButton/invisible'
import SideWindow from '../components/SideWindow'
import CourseForm from '../forms/CourseForm'
import EditForm from '../forms/EditForm'
import FilterLayout from '../layouts/FilterLayout'

import CoursesLayout from '../layouts/FilterLayout'
import StackedLayout from '../layouts/StackedLayout'


export default function CoursesPage() {
    const [courses,setCourses] = useState([  {
      "id": 1,
      "title": "Online course for something else ",
      "description": "Learn web design in 1 hour with 25+ simarn web design in 1 hour with 25+ simarn web design in 1 hour with 25+ simple-to-use rules and guidelines, tons of amazing web design resources included!'",
      "tags": "tags",
      "email": "janecooper@example.com",
      "departments": "departments",
      "meta": "meta data",
      "imageUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
    },
  ])

      useEffect(()=>{
        fetch('http://localhost:3000/courses')
          .then(res =>{
            return res.json()
          })
          .then((data)=>{
            setCourses(data);
          })
      },[])

      const filters = [
        {
          id: 'level',
          name: 'Level',
          options: [
            { value: 'beginner', label: 'Beginner', checked: false },
            { value: 'intermediate', label: 'Intermediate', checked: false },
            { value: 'expert', label: 'Expert', checked: false },
            { value: 'all levels', label: 'All levels', checked: false },
          ],
        },
        {
          id: 'duration',
          name: 'Duration',
          options: [
            { value: 'short', label: '0-1 hour', checked: false },
            { value: 'medium', label: '1-2 hours', checked: false },
            { value: 'long', label: '2+ hours', checked: false },
          ],
        },
        {
          id: 'subtitles',
          name: 'Subtitles',
          options: [
            { value: 'english', label: 'English', checked: false },
            { value: 'espagnol', label: 'Espanol', checked: false },
            { value: 'francais', label: 'Francais', checked: false },
          ],
        },
      ]
      const [open,setOpen] = useState(false)
      const [openEdit,setOpenEdit] = useState(false)
      const [title,setTitle] = useState(null);
     
      const buttonName = "Add course";

      const handleDelete = (id)=>{
        fetch('http://localhost:3000/courses' + id , {
          method: 'DELETE'
        })
      }

  return (
    <div>
        <SideWindow content={<EditForm title={title} setTitle = {setTitle}  setOpen={setOpenEdit}/> } open={openEdit} setOpen={setOpenEdit}/>
        <SideWindow content={<CourseForm title={title} setTitle = {setTitle}  setOpen={setOpen}/> } open={open} setOpen={setOpen}/>
        <StackedLayout content={<FilterLayout  button={<MyPrimaryButton buttonName={buttonName} setOpen={setOpen}/>} filters={filters} name={"My courses"} setOpen = {setOpen} setTitle={setTitle}  content={ <CourseTemplate handleDelete={handleDelete} courses={courses} setTitle={setTitle} setOpen={setOpenEdit}/>} />}/>
  
    </div>
  )
}
