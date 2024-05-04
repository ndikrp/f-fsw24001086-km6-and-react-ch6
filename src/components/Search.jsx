import React, { useState } from "react";

function Search() {
  const [dateInput, setDateInput] = useState("");
  const [timeInput, setTimeInput] = useState("");
  const [seatInput, setSeatInput] = useState("");

  return (
    <>
      <section className="search-box">
        <div className="search-content">
          <div className="input-group d-flex flex-column pe-2">
            <p>Tipe Driver</p>
            <select className="form-select" id="driver" required="">
              <option className="item" value="">
                Pilih Tipe Driver
              </option>
              <option className="item" value="true">
                Dengan Sopir
              </option>
              <option className="item" value="false">
                Tanpa Sopir (lepas Kunci)
              </option>
            </select>
          </div>
          <div className="input-group d-flex flex-column pe-2">
            <p>Tanggal</p>
            <input
              type="date"
              className="form-control"
              id="date"
              value={dateInput}
              onChange={(e) => setDateInput(e.target.value)}
            />
          </div>
          <div className="input-group d-flex flex-column pe-2">
            <p>Waktu Jemput/Ambil</p>
            <input
              type="time"
              id="time"
              className="form-control"
              value={timeInput}
              onChange={(e) => setTimeInput(e.target.value)}
            />
          </div>
          <div className="input-group d-flex flex-column">
            <p>Jumlah Penumpang (Opsional)</p>
            <div className="d-flex flex-row">
              <input
                type="number"
                className="form-control-item"
                id="passenger"
                style={{ backgroundColor: "white" }}
                value={seatInput}
                onChange={(e) => setSeatInput(e.target.value)}
              />
            </div>
          </div>
          <button
            type="submit"
            className="btn button-search fw-bold"
            id="load-btn"
          >
            Cari Mobil
          </button>
        </div>
      </section>
    </>
  );
}

export default Search;
