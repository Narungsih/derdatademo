'use client';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { FloatLabel } from 'primereact/floatlabel';
import { InputText } from 'primereact/inputtext';
import React, { useEffect, useState } from 'react';
import { ProductService } from './service';

export default function SaveData() {
  interface Product {
    id: string;
    code: string;
    name: string;
    description: string;
  }

  const [value, setValue] = useState<string>('');
  const [value2, setValue2] = useState<string>('');
  const [value3, setValue3] = useState<string>('');
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    ProductService.getDataSetsMin().then((data) => setProducts(data));
  }, []);

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

  return (
    <div className="flex flex-col">
      <h1 className="text-gray-800 text-2xl mb-10 font-bold">Save Data</h1>
      <div className="flex justify-center">
        <div className="flex w-full md:w-fit flex-col justify-center bg-white border-1 border-gray-200 rounded-lg shadow-md p-10">
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

          <div className="flex flex-wrap w-full justify-center my-10 gap-10">
            <FloatLabel>
              <InputText
                className="w-full md:w-14rem"
                id="text1"
                value={value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
              />
              <label htmlFor="text1">TextField 1</label>
            </FloatLabel>
            <FloatLabel>
              <InputText
                className="w-full md:w-14rem"
                id="text2"
                value={value2}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue2(e.target.value)}
              />
              <label htmlFor="text1">TextField 2</label>
            </FloatLabel>
            <FloatLabel>
              <InputText
                className="w-full md:w-14rem"
                id="text3"
                value={value3}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue3(e.target.value)}
              />
              <label htmlFor="text1">TextField 3</label>
            </FloatLabel>
          </div>
          <div className="flex flex-wrap justify-center w-full mb-10 gap-5">
            <DataTable value={products} tableStyle={{ minWidth: '50rem' }}>
              <Column field="id" header="id"></Column>
              <Column field="code" header="Code"></Column>
              <Column field="name" header="Name"></Column>
              <Column field="description" header="Description"></Column>
            </DataTable>
          </div>
          <div className="flex w-full justify-end">
            <Button label="Save" className="w-[200] md:w-14rem" />
          </div>
        </div>
      </div>
    </div>
  );
}
