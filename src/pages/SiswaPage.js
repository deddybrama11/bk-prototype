import React from "react";
import Navbar from "../component/Navbar";

function SiswaPage() {
  const getDataSiswa = (nis) => {
    const data = JSON.parse(localStorage.getItem("pelanggaran"));
    const tmp = [];
    for (let index = 0; index < data.length; index++) {
      if (data[index].nis === nis) tmp.push(data[index]);
    }
    return tmp;
  };
  const getTotalPoin = () => {
    const data = getDataSiswa("E311");
    var tmp = 0;
    data.map((object) => {
      tmp = tmp + getNilaiPelanggaran(object.pelanggaran);
    });
    return tmp;
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

  return (
    <Navbar>
      <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="flex justify-center text-3xl text-center font-extrabold mx-auto py-6 px-4 sm:px-6 lg:px-8">
              <div className="p-8 inline-block border-solid border-4">
                {getTotalPoin()}/100
              </div>
            </div>
            <div className="my-2 ml-2 text-md text-gray-800">
              Riwayat dosamu
            </div>

            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-white">
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium font-bold text-gray-900 uppercase tracking-wider"
                    >
                      Tanggal
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-900 font-bold uppercase tracking-wider"
                    >
                      Pelanggaran
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-900 font-bold uppercase tracking-wider"
                    >
                      Pelapor
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-900 font-bold uppercase tracking-wider"
                    >
                      Poin
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  {getDataSiswa("E311").map((object) => {
                    return (
                      <tr>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="text-sm font-medium text-gray-700">
                              {object.tanggal}
                            </div>
                          </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <div class="text-sm font-medium text-gray-700">
                            {getPelanggaran(object.pelanggaran)}
                          </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <div class="text-sm font-medium text-gray-1000">
                            Bu Hartini.spd
                          </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div class="text-sm font-medium text-gray-700">
                            {getNilaiPelanggaran(object.pelanggaran)}
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
      </div>
    </Navbar>
  );
}

export default SiswaPage;
