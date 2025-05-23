'use client';
import { MenuItem } from 'primereact/menuitem';
import { PanelMenu } from 'primereact/panelmenu';
import React, { useState } from 'react';

const Dashboard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const items: MenuItem[] = [
    {
      label: 'DataSet 1',
      icon: 'pi pi-file',
      items: [
        {
          label: 'Import Data',
          icon: 'fa-solid fa-file-import',
          url: '/import',
        },
        {
          label: 'Save Data',
          icon: 'fa-solid fa-floppy-disk',
          url: '/savedata',
        },
      ],
    },
    {
      label: 'Menu 2',
      icon: 'pi pi-cloud',
      items: [
        {
          label: 'demo21',
          icon: 'pi pi-cloud-upload',
        },
        {
          label: 'demo22',
          icon: 'pi pi-cloud-download',
        },
        {
          label: 'demo23',
          icon: 'pi pi-refresh',
        },
      ],
    },
    {
      label: 'Menu 3',
      icon: 'pi pi-desktop',
      items: [
        {
          label: 'demo31',
          icon: 'pi pi-mobile',
        },
        {
          label: 'demo32',
          icon: 'pi pi-desktop',
        },
        {
          label: 'demo33',
          icon: 'pi pi-tablet',
        },
      ],
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between h-16 px-6 border-b">
          <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Sidebar Menu */}
        <nav className="mt-6">
          <div className="px-3">
            <PanelMenu model={items} className="w-full md:w-20rem my-10" />
          </div>
        </nav>

        {/* Sidebar Footer */}
        {/* <div className="absolute bottom-0 w-full p-4 border-t">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <svg
                className="h-4 w-4 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-700">John Doe</p>
              <p className="text-xs text-gray-500">john@example.com</p>
            </div>
          </div>
        </div> */}
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden lg:ml-0">
        {/* Navbar */}
        <header className="bg-white shadow-sm border-b">
          <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
            {/* Left side - Menu button and title */}
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-md hover:bg-gray-100 mr-3"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              <h2 className="text-lg font-semibold text-gray-800">Overview</h2>
            </div>

            {/* Right side - Search and notifications */}
            {/* <div className="flex items-center space-x-4">
              <button className="flex items-center p-2 rounded-lg hover:bg-gray-100">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg
                    className="h-4 w-4 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
              </button>
            </div> */}
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-auto sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
};

export default Dashboard;
