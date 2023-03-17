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
          id: 'level',
          name: 'Dificulty of questions',
          options: [
            { value: 'easy', label: 'Easy', checked: false },
            { value: 'medium', label: 'Medium', checked: false },
            { value: 'hard', label: 'Hard', checked: false },
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

      const buttonName = "Add question";

      const people = [
        { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'easy', role: 'multi-choice' },
        { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'medium', role: 'single-choice' },
        { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'hard', role: 'drag and drop' },
        { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'easy', role: 'multi-choice' },
        { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'easy', role: 'multi-choice' },
        // More people...
      ]

      const tableTitle = 'Questions'
      const tableSubTitle = 'A list of content of the questions'

      const tableRows = ['Name', 'Title', 'Email', 'Row'];
  return (
    <div>
        <SideWindow content={<QuestionPoolForm/> } open={open} setOpen={setOpen}/>
        <CourseLayout navigatopn={navigation} headerTitle={headerTitle} content={<FilterLayout button={<MyPrimaryButton buttonName={buttonName} setOpen={setOpen}/>}  filters={filters} setTitle={setTitle} setOpen = {setOpen} name={"Pool of questions"} content={<QuestionsTable people={people} setOpen={setOpen} title={tableTitle} subtitle={tableSubTitle}/>}/>}/>
    </div>
  )
}
