import React, { useEffect, useState } from "react";
import "./tabel.css";
const Tabel = () => {
  const [search, setSearch] = useState("");
  const [showTable, setShowTable] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 50;
  const [data, setData] = useState([
    {
      distributor: "/",
      partner: "/",
      klijent: "emir",
      pib: 32423423,
      jid: "swqe2uesh12ejkwed",
      statuslicence: "istekla",
      datumizdavanja: "2.3.2021",
      env: "dev",
      istorijat: "/",
      arc: "/",
    },
    {
      distributor: "/",
      partner: "/",
      klijent: "emir",
      pib: 32423423,
      jid: "swqe2uesh12ejkwed",
      statuslicence: "istekla",
      datumizdavanja: "2.3.2021",
      env: "dev",
      istorijat: "/",
      arc: "/",
    },
    {
      distributor: "/",
      partner: "emir",
      klijent: "tim2",
      pib: 23567523,
      jid: "sASD2e2sh12ejkwed",
      statuslicence: "istice uskoro",
      datumizdavanja: "2.1.2024",
      env: "dev",
      istorijat: "dev",
      arc: "/",
    },
    {
      distributor: "/",
      partner: "/",
      klijent: "tim3",
      pib: 237523,
      jid: "@ad3rh12ejkwed",
      statuslicence: "aktivna",
      datumizdavanja: "2.1.2022",
      env: "dev",
      istorijat: "dev",
      arc: "/",
    },
    {
      distributor: "/",
      partner: "/",
      klijent: "emir",
      pib: 32423423,
      jid: "swqe2uesh12ejkwed",
      statuslicence: "istekla",
      datumizdavanja: "2.3.2021",
      env: "dev",
      istorijat: "/",
      arc: "/",
    },
    {
      distributor: "/",
      partner: "emir",
      klijent: "tim2",
      pib: 23567523,
      jid: "sASD2e2sh12ejkwed",
      statuslicence: "istice uskoro",
      datumizdavanja: "2.1.2024",
      env: "dev",
      istorijat: "dev",
      arc: "/",
    },
    {
      distributor: "/",
      partner: "/",
      klijent: "tim3",
      pib: 237523,
      jid: "@ad3rh12ejkwed",
      statuslicence: "aktivna",
      datumizdavanja: "2.1.2022",
      env: "dev",
      istorijat: "dev",
      arc: "/",
    },
    {
      distributor: "/",
      partner: "/",
      klijent: "emir",
      pib: 32423423,
      jid: "swqe2uesh12ejkwed",
      statuslicence: "istekla",
      datumizdavanja: "2.3.2021",
      env: "dev",
      istorijat: "/",
      arc: "/",
    },
    {
      distributor: "/",
      partner: "emir",
      klijent: "tim2",
      pib: 23567523,
      jid: "sASD2e2sh12ejkwed",
      statuslicence: "istice uskoro",
      datumizdavanja: "2.1.2024",
      env: "dev",
      istorijat: "dev",
      arc: "/",
    },
    {
      distributor: "/",
      partner: "/",
      klijent: "tim3",
      pib: 237523,
      jid: "@ad3rh12ejkwed",
      statuslicence: "aktivna",
      datumizdavanja: "2.1.2022",
      env: "dev",
      istorijat: "dev",
      arc: "/",
    },
    {
      distributor: "/",
      partner: "emir",
      klijent: "tim2",
      pib: 23567523,
      jid: "sASD2e2sh12ejkwed",
      statuslicence: "istice uskoro",
      datumizdavanja: "2.1.2024",
      env: "dev",
      istorijat: "dev",
      arc: "/",
    },
    {
      distributor: "/",
      partner: "/",
      klijent: "tim3",
      pib: 237523,
      jid: "@ad3rh12ejkwed",
      statuslicence: "aktivna",
      datumizdavanja: "2.1.2022",
      env: "dev",
      istorijat: "dev",
      arc: "/",
    },
    {
      distributor: "/",
      partner: "emir",
      klijent: "tim2",
      pib: 23567523,
      jid: "sASD2e2sh12ejkwed",
      statuslicence: "istice uskoro",
      datumizdavanja: "2.1.2024",
      env: "dev",
      istorijat: "dev",
      arc: "/",
    },
    {
      distributor: "/",
      partner: "/",
      klijent: "tim3",
      pib: 237523,
      jid: "@ad3rh12ejkwed",
      statuslicence: "aktivna",
      datumizdavanja: "2.1.2022",
      env: "dev",
      istorijat: "dev",
      arc: "/",
    },
    {
      distributor: "/",
      partner: "emir",
      klijent: "tim2",
      pib: 23567523,
      jid: "sASD2e2sh12ejkwed",
      statuslicence: "istice uskoro",
      datumizdavanja: "2.1.2024",
      env: "dev",
      istorijat: "dev",
      arc: "/",
    },
    {
      distributor: "/",
      partner: "/",
      klijent: "tim3",
      pib: 237523,
      jid: "@ad3rh12ejkwed",
      statuslicence: "aktivna",
      datumizdavanja: "2.1.2022",
      env: "dev",
      istorijat: "dev",
      arc: "/",
    },
    {
      distributor: "/",
      partner: "emir",
      klijent: "tim2",
      pib: 23567523,
      jid: "sASD2e2sh12ejkwed",
      statuslicence: "istice uskoro",
      datumizdavanja: "2.1.2024",
      env: "dev",
      istorijat: "dev",
      arc: "/",
    },
    {
      distributor: "/",
      partner: "/",
      klijent: "tim3",
      pib: 237523,
      jid: "@ad3rh12ejkwed",
      statuslicence: "aktivna",
      datumizdavanja: "2.1.2022",
      env: "dev",
      istorijat: "dev",
      arc: "/",
    },
    {
      distributor: "/",
      partner: "emir",
      klijent: "tim2",
      pib: 23567523,
      jid: "sASD2e2sh12ejkwed",
      statuslicence: "istice uskoro",
      datumizdavanja: "2.1.2024",
      env: "dev",
      istorijat: "dev",
      arc: "/",
    },
    {
      distributor: "/",
      partner: "/",
      klijent: "tim3",
      pib: 237523,
      jid: "@ad3rh12ejkwed",
      statuslicence: "aktivna",
      datumizdavanja: "2.1.2022",
      env: "dev",
      istorijat: "dev",
      arc: "/",
    },
    {
      distributor: "/",
      partner: "emir",
      klijent: "tim2",
      pib: 23567523,
      jid: "sASD2e2sh12ejkwed",
      statuslicence: "istice uskoro",
      datumizdavanja: "2.1.2024",
      env: "dev",
      istorijat: "dev",
      arc: "/",
    },
    {
      distributor: "/",
      partner: "/",
      klijent: "tim3",
      pib: 237523,
      jid: "@ad3rh12ejkwed",
      statuslicence: "aktivna",
      datumizdavanja: "2.1.2022",
      env: "dev",
      istorijat: "dev",
      arc: "/",
    },
    {
      distributor: "/",
      partner: "emir",
      klijent: "tim2",
      pib: 23567523,
      jid: "sASD2e2sh12ejkwed",
      statuslicence: "istice uskoro",
      datumizdavanja: "2.1.2024",
      env: "dev",
      istorijat: "dev",
      arc: "/",
    },
    {
      distributor: "/",
      partner: "/",
      klijent: "tim3",
      pib: 237523,
      jid: "@ad3rh12ejkwed",
      statuslicence: "aktivna",
      datumizdavanja: "2.1.2022",
      env: "dev",
      istorijat: "dev",
      arc: "/",
    },
    {
      distributor: "/",
      partner: "emir",
      klijent: "tim2",
      pib: 23567523,
      jid: "sASD2e2sh12ejkwed",
      statuslicence: "istice uskoro",
      datumizdavanja: "2.1.2024",
      env: "dev",
      istorijat: "dev",
      arc: "/",
    },
    {
      distributor: "/",
      partner: "/",
      klijent: "tim3",
      pib: 237523,
      jid: "@ad3rh12ejkwed",
      statuslicence: "aktivna",
      datumizdavanja: "2.1.2022",
      env: "dev",
      istorijat: "dev",
      arc: "/",
    },
    {
      distributor: "/",
      partner: "emir",
      klijent: "tim2",
      pib: 23567523,
      jid: "sASD2e2sh12ejkwed",
      statuslicence: "istice uskoro",
      datumizdavanja: "2.1.2024",
      env: "dev",
      istorijat: "dev",
      arc: "/",
    },
    {
      distributor: "/",
      partner: "/",
      klijent: "tim3",
      pib: 237523,
      jid: "@ad3rh12ejkwed",
      statuslicence: "aktivna",
      datumizdavanja: "2.1.2022",
      env: "dev",
      istorijat: "dev",
      arc: "/",
    },
    {
      distributor: "/",
      partner: "emir",
      klijent: "tim2",
      pib: 23567523,
      jid: "sASD2e2sh12ejkwed",
      statuslicence: "istice uskoro",
      datumizdavanja: "2.1.2024",
      env: "dev",
      istorijat: "dev",
      arc: "/",
    },
    {
      distributor: "/",
      partner: "/",
      klijent: "tim3",
      pib: 237523,
      jid: "@ad3rh12ejkwed",
      statuslicence: "aktivna",
      datumizdavanja: "2.1.2022",
      env: "dev",
      istorijat: "dev",
      arc: "/",
    },
    {
      distributor: "/",
      partner: "emir",
      klijent: "tim2",
      pib: 23567523,
      jid: "sASD2e2sh12ejkwed",
      statuslicence: "istice uskoro",
      datumizdavanja: "2.1.2024",
      env: "dev",
      istorijat: "dev",
      arc: "/",
    },
    {
      distributor: "/",
      partner: "/",
      klijent: "tim3",
      pib: 237523,
      jid: "@ad3rh12ejkwed",
      statuslicence: "aktivna",
      datumizdavanja: "2.1.2022",
      env: "dev",
      istorijat: "dev",
      arc: "/",
    },
    {
      distributor: "/",
      partner: "emir",
      klijent: "tim2",
      pib: 23567523,
      jid: "sASD2e2sh12ejkwed",
      statuslicence: "istice uskoro",
      datumizdavanja: "2.1.2024",
      env: "dev",
      istorijat: "dev",
      arc: "/",
    },
    {
      distributor: "/",
      partner: "/",
      klijent: "emir",
      pib: 32423423,
      jid: "swqe2uesh12ejkwed",
      statuslicence: "istekla",
      datumizdavanja: "2.3.2021",
      env: "dev",
      istorijat: "/",
      arc: "/",
    },
    {
      distributor: "/",
      partner: "emir",
      klijent: "tim2",
      pib: 23567523,
      jid: "sASD2e2sh12ejkwed",
      statuslicence: "istice uskoro",
      datumizdavanja: "2.1.2024",
      env: "dev",
      istorijat: "dev",
      arc: "/",
    },
    {
      distributor: "/",
      partner: "/",
      klijent: "tim3",
      pib: 237523,
      jid: "@ad3rh12ejkwed",
      statuslicence: "aktivna",
      datumizdavanja: "2.1.2022",
      env: "dev",
      istorijat: "dev",
      arc: "/",
    },
    {
      distributor: "/",
      partner: "/",
      klijent: "emir",
      pib: 32423423,
      jid: "swqe2uesh12ejkwed",
      statuslicence: "istekla",
      datumizdavanja: "2.3.2021",
      env: "dev",
      istorijat: "/",
      arc: "/",
    },
    {
      distributor: "/",
      partner: "emir",
      klijent: "tim2",
      pib: 23567523,
      jid: "sASD2e2sh12ejkwed",
      statuslicence: "istice uskoro",
      datumizdavanja: "2.1.2024",
      env: "dev",
      istorijat: "dev",
      arc: "/",
    },
    {
      distributor: "/",
      partner: "/",
      klijent: "tim3",
      pib: 237523,
      jid: "@ad3rh12ejkwed",
      statuslicence: "aktivna",
      datumizdavanja: "2.1.2022",
      env: "dev",
      istorijat: "dev",
      arc: "/",
    },
    {
      distributor: "/",
      partner: "/",
      klijent: "emir",
      pib: 32423423,
      jid: "swqe2uesh12ejkwed",
      statuslicence: "istekla",
      datumizdavanja: "2.3.2021",
      env: "dev",
      istorijat: "/",
      arc: "/",
    },
    {
      distributor: "/",
      partner: "emir",
      klijent: "tim2",
      pib: 23567523,
      jid: "sASD2e2sh12ejkwed",
      statuslicence: "istice uskoro",
      datumizdavanja: "2.1.2024",
      env: "dev",
      istorijat: "dev",
      arc: "/",
    },
    {
      distributor: "/",
      partner: "/",
      klijent: "tim3",
      pib: 237523,
      jid: "@ad3rh12ejkwed",
      statuslicence: "aktivna",
      datumizdavanja: "2.1.2022",
      env: "dev",
      istorijat: "dev",
      arc: "/",
    },
    {
      distributor: "/",
      partner: "/",
      klijent: "emir",
      pib: 32423423,
      jid: "swqe2uesh12ejkwed",
      statuslicence: "istekla",
      datumizdavanja: "2.3.2021",
      env: "dev",
      istorijat: "/",
      arc: "/",
    },
    {
      distributor: "/",
      partner: "emir",
      klijent: "tim2",
      pib: 23567523,
      jid: "sASD2e2sh12ejkwed",
      statuslicence: "istice uskoro",
      datumizdavanja: "2.1.2024",
      env: "dev",
      istorijat: "dev",
      arc: "/",
    },
    {
      distributor: "/",
      partner: "/",
      klijent: "tim3",
      pib: 237523,
      jid: "@ad3rh12ejkwed",
      statuslicence: "aktivna",
      datumizdavanja: "2.1.2022",
      env: "dev",
      istorijat: "dev",
      arc: "/",
    },
    {
      distributor: "/",
      partner: "/",
      klijent: "emir",
      pib: 32423423,
      jid: "swqe2uesh12ejkwed",
      statuslicence: "istekla",
      datumizdavanja: "2.3.2021",
      env: "dev",
      istorijat: "/",
      arc: "/",
    },
    {
      distributor: "/",
      partner: "emir",
      klijent: "tim2",
      pib: 23567523,
      jid: "sASD2e2sh12ejkwed",
      statuslicence: "istice uskoro",
      datumizdavanja: "2.1.2024",
      env: "dev",
      istorijat: "dev",
      arc: "/",
    },
    {
      distributor: "/",
      partner: "/",
      klijent: "tim3",
      pib: 237523,
      jid: "@ad3rh12ejkwed",
      statuslicence: "aktivna",
      datumizdavanja: "2.1.2022",
      env: "dev",
      istorijat: "dev",
      arc: "/",
    },
    {
      distributor: "/",
      partner: "/",
      klijent: "emir",
      pib: 32423423,
      jid: "swqe2uesh12ejkwed",
      statuslicence: "istekla",
      datumizdavanja: "2.3.2021",
      env: "dev",
      istorijat: "/",
      arc: "/",
    },
    {
      distributor: "/",
      partner: "emir",
      klijent: "tim2",
      pib: 23567523,
      jid: "sASD2e2sh12ejkwed",
      statuslicence: "istice uskoro",
      datumizdavanja: "2.1.2024",
      env: "dev",
      istorijat: "dev",
      arc: "/",
    },
    {
      distributor: "/",
      partner: "/",
      klijent: "tim3",
      pib: 237523,
      jid: "@ad3rh12ejkwed",
      statuslicence: "aktivna",
      datumizdavanja: "2.1.2022",
      env: "dev",
      istorijat: "dev",
      arc: "/",
    },
  ]);

  useEffect(() => {
    const filteredResults = data.filter(
      (el) =>
        el.distributor.includes(search) ||
        el.partner.includes(search) ||
        el.klijent.includes(search) ||
        el.pib.toString().includes(search) ||
        el.jid.includes(search) ||
        el.statuslicence.includes(search) ||
        el.datumizdavanja.includes(search) ||
        el.env.includes(search) ||
        el.istorijat.includes(search) ||
        el.arc.includes(search)
    );
    setCurrentPage(1);
    setFilteredData(filteredResults);
  }, [search, data]);

  function removeSearch() {
    setSearch("");

    setCurrentPage(1);
  }

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="container">
      <div className="topDiv">
        <div className="topleftdiv">
          <div className="statuslicence">
            <div className="ha1">
              <h2>Status licence</h2>
            </div>
            <div className="boxovi">
              <input className="box1" name="aktivna" type="checkbox"></input>
              <label htmlFor="aktivna">Aktivna</label>
              <input className="box1" name="istice" type="checkbox"></input>
              <label>Ističe uskoro</label>
              <input className="box1" name="istekla" type="checkbox"></input>
              <label htmlFor="istekla">Istekla</label>
            </div>
          </div>
          <div className="input">
            <input
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              value={search}
              className="inp"
            ></input>

            {/* <button className="searchbtn" onClick={handleSearch}>
              Go
            </button> */}
            <button className="removebtn" onClick={removeSearch}>
              X
            </button>
          </div>
        </div>
        <div className="toprightdiv">
          <button className="btn2">Prenesi licencu</button>
          <button className="btn2">Produži licencu</button>
          <button className="btn2">Poništi licencu</button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Distributer</th>
            <th>Partner</th>
            <th>Klijent</th>
            <th>Pib</th>
            <th>Jid</th>
            <th>Status licence</th>
            <th>Datum izdavanja</th>
            <th>Datum isteka</th>
            <th>Env</th>
            <th className="istorijat">Istorijat</th>
            <th className="arc">ARC</th>
            <th className="box">
              <input type="checkbox" disabled></input>
            </th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((el) => (
            <tr key={el.pib}>
              <td data-label="Distributer">{el.distributor}</td>
              <td data-label="Partner">{el.partner}</td>
              <td data-label="Klijent">{el.klijent}</td>
              <td data-label="Pib">{el.pib}</td>
              <td data-label="Jid">{el.jid}</td>
              {el.statuslicence === "aktivna" ? (
                <td data-label="Status licence" style={{ color: "green" }}>
                  {el.statuslicence}
                </td>
              ) : el.statuslicence === "istice uskoro" ? (
                <td data-label="Status licence" style={{ color: "orange" }}>
                  {el.statuslicence}
                </td>
              ) : el.statuslicence === "istekla" ? (
                <td data-label="Status licence" style={{ color: "red" }}>
                  {el.statuslicence}
                </td>
              ) : (
                ""
              )}
              <td data-label="Datum izdavanja">{el.datumizdavanja}</td>
              <td data-label="Datum isteka">{el.datumizdavanja}</td>
              {/*  */}
              <td data-label="Env">{el.env}</td>
              <td data-label="Istorijat">{el.istorijat}</td>
              <td data-label="Arc">{el.arc}</td>
              <td className="box">
                <input type="checkbox" disabled></input>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Prikazi stranice */}
      {totalPages > 1 && (
        <div className="pagination">
          <button
            className="arrow"
            onClick={() => {
              handlePageChange(currentPage - 1);
            }}
            disabled={currentPage == 1}
          >
            {"<"}
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={"btn3"}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="arrow"
            onClick={() => {
              handlePageChange(currentPage + 1);
            }}
            disabled={currentPage == totalPages}
          >
            {">"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Tabel;
