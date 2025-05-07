import React from 'react';
import { MenuItem } from 'primereact/menuitem';
import { PanelMenu } from 'primereact/panelmenu';

export default function Home() {
  const items: MenuItem[] = [
    {
      label: 'Files',
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
    <div className="flex m-5 w-1/4 flex-col justify-center">
      <h1 className="text-gray-800 text-2xl">ระบบนำเข้าข้อมูล</h1>
      <PanelMenu model={items} className="w-full md:w-20rem" />
    </div>
  );
}
