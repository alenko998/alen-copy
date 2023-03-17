import {Outlet, Link, NavLink} from "react-router-dom";
import StackedLayout from "../layouts/StackedLayout.jsx";

export default function Root() {
    return (
        <>
            <StackedLayout content={
              <NavLink className="text-3xl" to='components'>Go to Components</NavLink>
            }>
            </StackedLayout>
        </>
    );
}

