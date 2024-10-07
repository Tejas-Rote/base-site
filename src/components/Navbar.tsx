import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-col gap-2 w-full ">
      <nav className="flex  gap-2 w-full">
        <ul className="flex gap-2 w-full ">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isActive
                  ? "text-blue-800"
                  : isPending
                  ? "pending"
                  : "text-green-800"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/archive"
              className={({ isActive, isPending }) =>
                isActive
                  ? "text-blue-800"
                  : isPending
                  ? "pending"
                  : "text-green-800"
              }
            >
              Archive
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/editor"
              className={({ isActive, isPending }) =>
                isActive
                  ? "text-blue-800"
                  : isPending
                  ? "pending"
                  : "text-green-800"
              }
            >
              Editor
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
