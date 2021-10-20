import React from "react";
import Button from "../component/Button";
import Navbar from "../component/Navbar";

export default function GuruPage() {
  return (
    <div>
      <Navbar>
        <div class="flex flex-col">
          <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="text-center my-4 font-weight-800 text-base font-bold tracking-widest">
              FORM SANKSI
            </div>
            <div class="py-2 flex justify-center align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div class="grid grid-rows-2 grid-flow-col gap-1 mt-1">
                <div class="row-span-3">
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
                <div class="">
                  <div>
                    <input
                      type="text"
                      name="company-website"
                      id="company-website"
                      class="focus:ring-indigo-500 focus:border-indigo-500 rounded-none rounded-md sm:text-sm border-gray-300"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="company-website"
                      id="company-website"
                      class="focus:ring-indigo-500 mt-1 focus:border-indigo-500 rounded-none rounded-md sm:text-sm border-gray-300"
                    />
                  </div>
                  <Button type="button" nolock className="w-1/2 mt-2">
                    Submit
                  </Button>
                </div>
              </div>
            </div>
            <div className="my-2 ml-2 text-md text-gray-800">Riwayat</div>
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
                      NIS
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-900 font-bold uppercase tracking-wider"
                    >
                      SISWA
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-900 font-bold uppercase tracking-wider"
                    >
                      KELAS
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-900 font-bold uppercase tracking-wider"
                    >
                      PELANGGARAN
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-900 font-bold uppercase tracking-wider"
                    >
                      POIN
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="text-sm font-medium text-gray-700">
                          14 February 2021
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm font-medium text-gray-700">
                        Main hp dikelas
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm font-medium text-gray-1000">
                        Bu Hartini.spd
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div class="text-sm font-medium text-gray-700">IPA 1</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div class="text-sm font-medium text-gray-900">Mencuri hp</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div class="text-sm font-medium text-gray-900">100</div>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="text-sm font-medium text-gray-700">
                          14 February 2021
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm font-medium text-gray-700">
                        Main hp dikelas
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm font-medium text-gray-1000">
                        Bu Hartini.spd
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div class="text-sm font-medium text-gray-900">IPS 4</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div class="text-sm font-medium text-gray-900">bermain</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div class="text-sm font-medium text-gray-900">100</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Navbar>
    </div>
  );
}
