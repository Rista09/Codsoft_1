import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { GoPackage } from "react-icons/go";

import { FaRegCircle } from 'react-icons/fa'; 
import ROLE from "../common/role";

const AdminPanel = () => {
  const user = useSelector((state) => state?.user?.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role !== ROLE.ADMIN) {
      navigate("/");
    }
  }, [user]);

  return (
    <div className="min-h-[calc(100vh-120px)] md:flex hidden">
      <aside className="bg-white min-h-full w-full max-w-60 customShadow">
        <div className="h-36 flex justify-center items-center flex-col">
          <div className="text-5xl cursor-pointer relative flex justify-center mt-2">
            {user?.profilePic ? (
              <img
                src={user?.profilePic}
                className="w-20 h-20 rounded-full"
                alt={user?.name}
              />
            ) : (
              <FaUser className="w-20 h-20 text-gray-400" />
            )}
          </div>
          <p className="capitalize text-lg font-semibold">{user?.name}</p>
          <p className="text-sm">{user?.role}</p>
        </div>

        {/* Navigation */}
        <div>
          <nav className="p-4">
            <Link
              to={"all-users"}
              className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-100  hover:text-gray-500 transition-colors"
            >
              <FaUser className="mr-2 text-gray-400" />
              <span className="">All Users</span>
            </Link>
            <Link
              to={"all-products"}
              className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-100 hover:text-gray-500 transition-colors"
            >
              <FaShoppingCart className="mr-2 text-gray-400" />
              <span>All Products</span>
            </Link>
            <Link
              to={"all-orders"}
              className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-100 hover:text-gray-500 transition-colors"
            >
              <GoPackage className="mr-2 text-gray-400" />
              <span>Manage Orders</span>
            </Link>
          </nav>
        </div>
      </aside>

      <main className="w-full h-full p-2">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminPanel;
