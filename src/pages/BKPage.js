import { object } from "prop-types";
import React, { useEffect, useState } from "react";
import Button from "../component/Button";
import Navbar from "../component/Navbar";
import { useForm } from "react-hook-form";
export default function BKPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [selectedIndex, setSelectedIndex] = useState();
  const [status, setStatus] = useState();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    console.log(localStorage.getItem("pelanggaran"));
  }, []);

  const onSubmit = (data) => {
    console.log(data);
    const dataSiswa = getItemData();
    const copy = dataSiswa.slice();

    const item = copy[selectedIndex];
    const itemModify = { ...item, status: data["pelanggaran"] };
    copy.splice(selectedIndex, 1, itemModify);
    localStorage.setItem("pelanggaran", JSON.stringify(copy));
    setShowModal(false);
  };

  const coba = (index) => {
    setSelectedIndex(index);
  };

  const changeStatus = (status) => {
    setShowModal(true);
    setStatus(status);
  };

  const getPelanggaranMaster = () => {
    return JSON.parse(localStorage.getItem("pelanggaran_master"));
  };

  const getItemData = () => {
    return JSON.parse(localStorage.getItem("pelanggaran"));
  };

  const deleteData = (index) => {
    const data = getItemData();
    const copy = data.slice();
    copy.splice(index, 1);
    console.log(copy);
    localStorage.setItem("pelanggaran", JSON.stringify(copy));
    window.location.reload();
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
      <Navbar color="bg-red-900" link="/login-bk">
        <h2 className="h-10 justify-end">Selamat datang, Edi S.Pd (BK)</h2> 
        <div className="my-2 ml-2 text-md text-gray-800">Riwayat</div>
        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
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
                  PELAPOR
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-900 font-bold uppercase tracking-wider"
                >
                  STATUS
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-900 font-bold uppercase tracking-wider"
                >
                  AKSI
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
                      <div className="text-sm font-medium text-gray-900">
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
                        Bu Hartini.spd
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="text-sm font-medium text-gray-900">
                        {object.status}
                      </div>
                    </td>
                    <td className="px-1 flex py-4 whitespace-nowrap text-sm text-gray-500 ">
                      <Button
                        type="submit"
                        nolock
                        className="mt-2 bg-red-500"
                        onClick={() => {
                          deleteData(index);
                        }}
                      >
                        Hapus
                      </Button>
                      <Button
                        type="submit"
                        nolock
                        className="mt-2 mx-1 bg-green-500 open-btn"
                        id="open-btn"
                        setIndex={() => {
                          coba(index);
                        }}
                        setStatus={() => {
                          changeStatus(object.status);
                        }}
                      >
                        Edit
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {showModal && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div
              class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
              id="my-modal"
              onClick={() => {
                setShowModal(false);
              }}
            ></div>
            <div className="flex justify-center">
              <div class="fixed top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                <div class="mt-3 text-center"></div>
                <h3 class="text-lg text-center leading-6 font-medium text-gray-900">
                  Edit Status Pelanggaran Siswa
                </h3>
                <div class="mt-4 px-5 ">
                  <p class="text-sm text-gray-500">Status</p>
                </div>
                <div class="mt-2 px-4 mb-4">
                  <div>
                    {status === "Tidak Bersalah" ? (
                      <select
                        name="company-website"
                        id="company-website"
                        {...register("pelanggaran", { required: true })}
                        className="focus:ring-indigo-500 mt-1 focus:border-indigo-500 rounded-none w-full rounded-md sm:text-sm border-gray-300"
                        form="carform"
                      >
                        <option value="Tidak Bersalah" selected>
                          Tidak Bersalah
                        </option>

                        <option value="Bersalah">Bersalah</option>
                      </select>
                    ) : (
                      <select
                        name="company-website"
                        id="company-website"
                        {...register("pelanggaran", { required: true })}
                        className="focus:ring-indigo-500 mt-1 focus:border-indigo-500 rounded-none w-full rounded-md sm:text-sm border-gray-300"
                        form="carform"
                      >
                        <option value="Tidak Bersalah">Tidak Bersalah</option>

                        <option value="Bersalah" selected>
                          Bersalah
                        </option>
                      </select>
                    )}
                  </div>
                </div>

                <div class="items-center px-4 py-3">
                  <button
                    type="submit"
                    id="ok-btn"
                    class="px-4 py-2 bg-indigo-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                  >
                    SIMPAN
                  </button>
                </div>
              </div>
            </div>
          </form>
        )}
      </Navbar>
    </div>
  );
}
