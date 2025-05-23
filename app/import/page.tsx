'use client';
import { Button } from 'primereact/button';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { FileUpload } from 'primereact/fileupload';
import { FloatLabel } from 'primereact/floatlabel';
import { Toast } from 'primereact/toast';
import React, { useRef, useState } from 'react';

export default function ImportData() {
  const toast = useRef<Toast>(null);

  interface dataSet {
    name: string;
    code: string;
  }

  const [selectedDataSet, setSelectedDataSet] = useState<dataSet | null>(null);
  const [selectedVersion, setSelectedVersion] = useState<dataSet | null>(null);
  const datasets: dataSet[] = [
    { name: 'Data Set 1', code: 'DS1' },
    { name: 'Data Set 2', code: 'DS2' },
    { name: 'Data Set 3', code: 'DS3' },
    { name: 'Data Set 4', code: 'DS4' },
    { name: 'Data Set 5', code: 'DS5' },
  ];

  const versions: dataSet[] = [
    { name: 'Version 1', code: 'v1' },
    { name: 'Version 2', code: 'v2' },
    { name: 'Version 3', code: 'v3' },
  ];

  const onUpload = () => {
    toast.current?.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-gray-600 text-2xl mb-10 font-bold">Import Data</h1>
      <div className="flex justify-center">
        <div className="flex w-fit flex-col justify-center bg-white border-1 border-gray-200 rounded-lg shadow-md p-10">
          <div className="flex flex-wrap justify-center gap-10">
            <div className="flex w-full md:w-[350]">
              <FloatLabel className="w-full md:w-14rem">
                <Dropdown
                  inputId="dd-dataset"
                  value={selectedDataSet}
                  onChange={(e: DropdownChangeEvent) => setSelectedDataSet(e.value)}
                  options={datasets}
                  optionLabel="name"
                  className="w-full md:w-14rem"
                />
                <label htmlFor="dd-dataset">Select Dataset</label>
              </FloatLabel>
            </div>
            <div className="flex w-full md:w-[200]">
              <FloatLabel className="w-full md:w-14rem">
                <Dropdown
                  inputId="dd-version"
                  value={selectedVersion}
                  onChange={(e: DropdownChangeEvent) => setSelectedVersion(e.value)}
                  options={versions}
                  optionLabel="name"
                  placeholder="Select a Version"
                  className="w-full md:w-14rem"
                />
                <label htmlFor="dd-version">Select Version</label>
              </FloatLabel>
            </div>
          </div>

          <div className="flex flex-wrap justify-start my-10 gap-5">
            <Toast ref={toast}></Toast>
            <FileUpload
              mode="basic"
              name="demo[]"
              url="/api/upload"
              accept="image/*"
              maxFileSize={1000000}
              onUpload={onUpload}
            />
          </div>
          <div className="flex flex-wrap justify-end gap-5">
            <Button className='w-[200]' label="Import" />
          </div>
        </div>
      </div>
    </div>
  );
}
