import React from "react";
import Navbar from "../component/Navbar";

function SiswaPage() {
  const getDataSiswa = (nis) => {
    const data = JSON.parse(localStorage.getItem("pelanggaran"));
    const tmp = [];
    for (let index = 0; index < data.length; index++) {
      if (
        data[index].nis === nis &&
        data[index].status === "Bersalah"
      )
        tmp.push(data[index]);
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
    <Navbar color="bg-blue-800" link="/login-siswa">
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="flex justify-center text-3xl text-center font-extrabold mx-auto py-6 px-4 sm:px-6 lg:px-8">
              <div className="p-8 inline-block border-solid border-4">
                {getTotalPoin()}/100
              </div>
            </div>
            <div className="my-2 ml-2 text-md text-gray-800">
              Riwayat dosamu
            </div>

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
                      Pelanggaran
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-900 font-bold uppercase tracking-wider"
                    >
                      Pelapor
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-900 font-bold uppercase tracking-wider"
                    >
                      Poin
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {getDataSiswa("E311").map((object,key) => {
                    return (
                      <tr key={key}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="text-sm font-medium text-gray-700">
                              {object.tanggal}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-700">
                            {getPelanggaran(object.pelanggaran)}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-1000">
                            Bu Hartini.spd
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="text-sm font-medium text-gray-700">
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
