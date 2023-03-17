import {Outlet, Link, useLocation} from "react-router-dom";
import SideBarLayout from "../layouts/SideBarLayout.jsx";
import {FolderIcon, HomeIcon, InboxIcon, UsersIcon} from "@heroicons/react/24/outline/index.js";

export default function Components() {
  const navigation = [
    {name: 'All Components', href: 'all', icon: InboxIcon, current: true},
    {name: 'Buttons', href: 'buttons', icon: HomeIcon, current: false},
    {name: 'Forms', href: 'forms', icon: UsersIcon, current: false},
    {name: 'Data Display', href: 'data-display', icon: FolderIcon, current: false}
  ]

  function headerTitle() {
    const location = useLocation();
    console.log(location.pathname);
    switch (location.pathname) {
      case '/components/all':
        return <span>All Components</span>;
      case '/components/buttons':
        return <span>Buttons</span>;
      case '/components/forms':
        return <span>Forms</span>;
      case '/components/data-display':
        return <span>Data Display</span>;
      default:
      // code block
    }
  }
  return (
    <>
      <SideBarLayout navigation={navigation} headerTitle={headerTitle()} content={<Outlet />}></SideBarLayout>
      {/*<StackedLayout content={<Outlet />}></StackedLayout>*/}
      {/*<div >*/}
      {/*    <Outlet />*/}
      {/*</div>*/}
    </>
  );
}