import React, { useState } from 'react'
import CourseLayout from '../../layouts/CourseLayout'
import { InboxIcon, HomeIcon, UsersIcon, FolderIcon } from '@heroicons/react/24/outline';
import { Outlet } from 'react-router-dom';
import SideWindow from '../../components/SideWindow';
import FilterLayout from '../../layouts/FilterLayout';
import QuestionsTable from '../../components/Tables';
import CourseForm from '../../forms/CourseForm';
import MyPrimaryButton from '../../components/MyPrimaryButton';
import QuestionPoolForm from '../../forms/QuestionPoolForm';
import LessonForm from '../../forms/LessonForm';
import QuizForm from '../../forms/QuizForm';
import ContentTable from '../../components/Tables/contentTable';

export default function PoolManagementPage() {
    const navigation = [
        {name: 'Basic information', href: '/single-course/basic-info', icon: InboxIcon, current: true},
        {name: 'Content', href: 'content', icon: HomeIcon, current: false},
        {name: 'Pool management', href: 'pool-management', icon: UsersIcon, current: false},
        {name: 'All courses', href: 'courses', icon: FolderIcon, current: false}
      ]
    
      function headerTitle() {
        const location = useLocation();
        console.log(location.pathname);
        switch (location.pathname) {
          case '/single-course/basic-info':
            return <span>All Components</span>;
          case '/single-course/content':
            return <span>Buttons</span>;
          case '/single-course/pool-management':
            return <span>Forms</span>;
          case '/single-course/courses':
            return <span>Data Display</span>;
          default:
          // code block
        }
      }
      const [open,setOpen] = useState(false);
      const [title,setTitle] = useState(false);

      const filters = [
        {
          id: 'type',
          name: 'Type of content',
          options: [
            { value: 'quiz', label: 'Quiz', checked: false },
            { value: 'Lesson', label: 'Lesson', checked: false },
          ],
        },
        {
          id: 'lesson',
          name: 'Lesson',
          options: [
            { value: 'short', label: 'name of some lesson', checked: false },
            { value: 'medium', label: 'name of some lesson', checked: false },
            { value: 'long', label: 'name of some lesson', checked: false },
          ],
        },
      ]

      const [openQuiz,setOpenQuiz] = useState(false);

      const buttonName = "Add quiz";
      const secondName = "Add Lesson";

      const people = [
        { name: 'Lindsay Walton', title: 'lesson', email: '1 hour 54 min'},
        { name: 'Lindsay Walton', title: 'quiz', email: '1 hour 54 min'},
        { name: 'Lindsay Walton', title: 'quiz', email: '1 hour 54 min'},
        { name: 'Lindsay Walton', title: 'lesson', email: '1 hour 54 min'},
        { name: 'Lindsay Walton', title: 'lesson', email: '1 hour 54 min'},
        // More people...
      ]

      const tableTitle = 'Course content'
      const tableSubTitle = 'A list of content of the course'
  return (
    <div>
        <SideWindow content={<QuizForm/> } open={openQuiz} setOpen={setOpenQuiz}/>
        <SideWindow content={<LessonForm/> } open={open} setOpen={setOpen}/>
        <CourseLayout navigatopn={navigation} headerTitle={headerTitle} content={<FilterLayout secondButton={<MyPrimaryButton buttonName={secondName} setOpen={setOpen}/>} button={<MyPrimaryButton buttonName={buttonName} setOpen={setOpenQuiz}/>}  filters={filters} setTitle={setTitle} setOpen = {setOpen} name={"Content of the course"} content={<ContentTable people={people} setOpen={setOpen} title={tableTitle} subtitle={tableSubTitle}/>}/>}/>
    </div>
  )
}
