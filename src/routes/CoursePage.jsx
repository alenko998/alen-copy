import CourseTemplate from "../components/CourseTemplate";
import SideWindow from "../components/SideWindow";
import CourseForm from "../forms/CourseForm";
import CoursesLayout from "../layouts/CourseLayout";
import { useState } from "react";

export default function CoursePage() {
    const courses = [
        {
          title: 'Web Design for Web Developers: Build Beautiful Websites! ',
          description: 'Learn web design in 1 hour with 25+ simarn web design in 1 hour with 25+ simarn web design in 1 hour with 25+ simple-to-use rules and guidelines, tons of amazing web design resources included!',
          tags: 'tags',
          email: 'janecooper@example.com',
          departments: "departments",
          meta: "meta data",
          imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
        },
        {
            title: 'Web Design for Web Developers: Build Beautiful Websites! ',
            description: 'Learn web design in 1 hour with 25+ simarn web design in 1 hour with 25+ simarn web design in 1 hour with 25+ simple-to-use rules and guidelines, tons of amazing web design resources included!',
            tags: 'tags',
            email: 'janecooper@example.com',
            departments: "departments",
            meta: "meta data",
            imageUrl:
              'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
        },
        {
            title: 'Web Design for Web Developers: Build Beautiful Websites! ',
            description: 'Learn web design in 1 hour with 25+ simarn web design in 1 hour with 25+ simarn web design in 1 hour with 25+ simple-to-use rules and guidelines, tons of amazing web design resources included!',
            tags: 'tags',
            email: 'janecooper@example.com',
            departments: "departments",
            meta: "meta data",
            imageUrl:
              'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
        },
        {
          title: 'Web Design for Web Developers: Build Beautiful Websites! ',
          description: 'Learn web design in 1 hour with 25+ simple-to-use rules and guidelines, tons of amazing web design resources included!',
          tags: 'tags',
          email: 'janecooper@example.com',
          departments: "departments",
          meta: "meta data",
          imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
        },
        {
          title: 'Web Design for Web Developers: Build Beautiful Websites! ',
          description: 'Learn web design in 1 hour with 25+ simple-to-use rules and guidelines, tons of amazing web design resources included!',
          tags: 'tags',
          email: 'janecooper@example.com',
          departments: "departments",
          meta: "meta data",
          imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
        },
      
        // More people...
      ]
      const [openSlideOver, setOpenSlideOver] = useState(true)
  return (
    <div>
       
        <CoursesLayout content={<CourseTemplate courses={courses}/>} open={openSlideOver} setOpen={setOpenSlideOver}/>
        <SideWindow form={<CourseForm setOpen={setOpenSlideOver} />} open={openSlideOver} setOpen={setOpenSlideOver}/>
    </div>
  )
}
