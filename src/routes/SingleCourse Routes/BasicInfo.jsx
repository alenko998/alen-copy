import React, { useState } from 'react'
import CourseLayout from '../../layouts/CourseLayout'
import { InboxIcon, HomeIcon, UsersIcon, FolderIcon } from '@heroicons/react/24/outline';
import { Outlet, useParams } from 'react-router-dom';
import SideWindow from '../../components/SideWindow';
import FilterLayout from '../../layouts/FilterLayout';
import QuestionsTable from '../../components/Tables';
import CourseForm from '../../forms/CourseForm';
import ButtonGroup from '../../components/ButtonGroup';
import DataDisplay from '../DataDisplay';

export default function BasicInfoPage() {
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
      const {id} = useParams()
  return (
    <div>
        <SideWindow content={<CourseForm id={id} setOpen={setOpen}/> } open={open} setOpen={setOpen}/>
        <CourseLayout navigatopn={navigation} headerTitle={headerTitle}  content={<CourseForm setTitle={setTitle} setOpen = {setOpen} name={"Pool of questions"} content={<QuestionsTable setOpen={setOpen}/>}/>}/>
        <div>{id}</div>
    </div>
  )
}
