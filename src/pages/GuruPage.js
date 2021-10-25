import React, { useState, useEffect } from "react";
import Button from "../component/Button";
import Navbar from "../component/Navbar";
import { useForm } from "react-hook-form";

export default function GuruPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const dt = JSON.parse(localStorage.getItem("pelanggaran"));
    const copy = dt.slice();
    data = { ...data, tanggal: new Date().toLocaleDateString("en-US") + "", status: "Bersalah" };
    copy.push(data);
    localStorage.setItem("pelanggaran", JSON.stringify(copy));
  };

  const getPelanggaranMaster = () => {
    return JSON.parse(localStorage.getItem("pelanggaran_master"));
  };

  const getItemData = () => {
    return JSON.parse(localStorage.getItem("pelanggaran"));
  };

  const getNilaiPelanggaran = (id) => {
    const dataPelanggaran = JSON.parse(
      localStorage.getItem("pelanggaran_master")
    );
    for (let index = 0; index < dataPelanggaran.length; index++) {
      if (dataPelanggaran[index].id === parseInt(id)) {
        // console.log(nis);
        return dataPelanggaran[index].nilai;
        break;
      } else {
        continue;
      }
    }
  };
  const getPelanggaran = (id) => {
    const dataPelanggaran = JSON.parse(
      localStorage.getItem("pelanggaran_master")
    );
    for (let index = 0; index < dataPelanggaran.length; index++) {
      if (dataPelanggaran[index].id === parseInt(id)) {
        // console.log(nis);
        return dataPelanggaran[index].pelanggaran;
      } else {
        continue;
      }
    }
  };

  const getNameSiswa = (nis) => {
    const dataSiswa = JSON.parse(localStorage.getItem("siswa"));
    for (let index = 0; index < dataSiswa.length; index++) {
      if (dataSiswa[index].nis === nis) {
        // console.log(nis);
        return dataSiswa[index].nama;
        break;
      } else {
        continue;
      }
    }
  };

  const getKelasSiswa = (nis) => {
    const dataSiswa = JSON.parse(localStorage.getItem("siswa"));
    for (let index = 0; index < dataSiswa.length; index++) {
      if (dataSiswa[index].nis === nis) {
        // console.log(nis);
        return dataSiswa[index].kelas;
      } else {
        continue;
      }
    }
  };

  return (
    <div>
      <Navbar color="bg-indigo-900" link="/login-guru">
        <h2 className="h-10 justify-end">Selamat datang, Hartini S.Pd</h2> 
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="text-center my-4 font-weight-800 text-base font-bold tracking-widest">
              FORM SANKSI
            </div>
            <div className="py-2 flex justify-center align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="grid grid-rows-2 grid-flow-col gap-1 mt-1">
                <div className="row-span-3">
                  <div
                    className="flex justify-end content-center"
                    style={{ height: "38px" }}
                  >
                    <span className="p-1">NIS :</span>
                  </div>
                  <div
                    className="flex justify-end content-center"
                    style={{ height: "38px" }}
                  >
                    <span className="p-1 mt-1">PELANGGARAN :</span>
                  </div>
                </div>
                <div className="">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                      <input
                        type="text"
                        name="company-website"
                        {...register("nis", { required: true })}
                        id="company-website"
                        className="focus:ring-indigo-500 focus:border-indigo-500 rounded-none rounded-md sm:text-sm border-gray-300"
                      />
                    </div>
                    <div>
                      <select
                        name="company-website"
                        id="company-website"
                        {...register("pelanggaran", { required: true })}
                        className="focus:ring-indigo-500 mt-1 focus:border-indigo-500 rounded-none w-full rounded-md sm:text-sm border-gray-300"
                        form="carform"
                      >
                        {getPelanggaranMaster().map((object) => {
                          return (
                            <option value={object.id}>
                              {object.pelanggaran}
                            </option>
                          );
                        })}
                      </select>
                    </div>

                    <Button type="submit" nolock className="w-1/2 mt-2 bg-indigo-500">
                      Submit
                    </Button>
                  </form>
                </div>
              </div>
            </div>
            <div className="my-2 ml-2 text-md text-gray-800">Riwayat</div>
            <div className="shadow overflow-auto border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-white">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium font-bold text-gray-900 uppercase tracking-wider"
                    >
                      Tanggal
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-900 font-bold uppercase tracking-wider"
                    >
                      NIS
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-900 font-bold uppercase tracking-wider"
                    >
                      SISWA
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-900 font-bold uppercase tracking-wider"
                    >
                      KELAS
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-900 font-bold uppercase tracking-wider"
                    >
                      PELANGGARAN
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-900 font-bold uppercase tracking-wider"
                    >
                      POIN
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-900 font-bold uppercase tracking-wider"
                    >
                      STATUS
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {getItemData().map((object, index) => {
                    return (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="text-sm font-medium text-gray-700">
                              {object.tanggal}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-700">
                            {object.nis}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-1000">
                            {getNameSiswa(object.nis)}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="text-sm font-medium text-gray-700">
                            {getKelasSiswa(object.nis)}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="text-sm font-medium text-gray-900">
                            {getPelanggaran(object.pelanggaran)}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="text-sm font-medium text-gray-900">
                            {getNilaiPelanggaran(object.pelanggaran)}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="text-sm font-medium text-gray-900">
                            {object.status}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Navbar>
    </div>
  );
}
