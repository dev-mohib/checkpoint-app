import React from 'react';

const Sidebar = () => {

  const menuOptions = ['Dashboard', 'Organization', 'Instructors', 'Students', 'Checkpoints']
  return (
    <aside className="fixed top-0 left-0 z-40 w-72 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <div className='h-56 flex flex-col justify-center items-center'>
          <h1 className='text-lg font-bold'>LOGO</h1>
        </div>
        <ul className="space-y-2 font-medium">
          {
            menuOptions.map((menu, index) =>  <li key={index}>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <svg aria-hidden="true" className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
              <span className="ml-3">{menu}</span>
            </a>
          </li>)
          }
          {/* Add other menu items here */}
        </ul>
      </div>
    </aside>
  );
};

const SideNav = () => {
  return (
    <>
      <Sidebar />

      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <div className="grid grid-cols-3 gap-4 mb-4">
            {/* Add content here */}
          </div>
          <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
            {/* Add content here */}
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            {/* Add content here */}
          </div>
          <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
            {/* Add content here */}
          </div>
          <div className="grid grid-cols-2 gap-4">
            {/* Add content here */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNav