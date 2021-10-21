import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

const initial = [
  {
    nis: "E311",
    pelanggaran: 1,
    tanggal: "10/21/2021",
  },
  {
    nis: "E312",
    pelanggaran: 2,
    tanggal: "10/21/2021",
  },
];

const initialPelanggaranMaster = [
  {
    id: 1,
    pelanggaran: "Bermain hp dikelas",
    nilai: 10,
  },
  {
    id: 2,
    pelanggaran: "Bolos",
    nilai: 15,
  },
  {
    id: 3,
    pelanggaran: "Melawan guru",
    nilai: 30,
  },
  {
    id: 4,
    pelanggaran: "Sexual harrasment",
    nilai: 35,
  },
];
const initialSiswa = [
  {
    nis: "E311",
    nama: "Rais Maulana",
    kelas: "XI IPA 3",
  },
  {
    nis: "E312",
    nama: "Dito muhammad",
    kelas: "XI IPS 1",
  },
  {
    nis: "E313",
    nama: "Irvan djunaidi",
    kelas: "XI IPS 1",
  },
  {
    nis: "E314",
    nama: "Reza Rahardian",
    kelas: "XI IPS 2",
  },
];

if (localStorage.getItem("pelanggaran") === null) {
  localStorage.setItem("pelanggaran", JSON.stringify(initial));
}

if (localStorage.getItem("siswa") === null) {
  localStorage.setItem("siswa", JSON.stringify(initialSiswa));
}

if (localStorage.getItem("pelanggaran_master") === null) {
  localStorage.setItem(
    "pelanggaran_master",
    JSON.stringify(initialPelanggaranMaster)
  );
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
