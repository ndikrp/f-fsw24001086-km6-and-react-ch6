import React, { useEffect, useState } from "react";
import { getCars } from "../services/cars";

function Search() {
  const [dateInput, setDateInput] = useState("");
  const [timeInput, setTimeInput] = useState("");
  const [seatInput, setSeatInput] = useState("");
  const [searched, setSearched] = useState(false);
  const [carData, setCarData] = useState([]);
  const [carFiltered, setCarFiltered] = useState([]);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    getCars((data) => {
      setCarData(data);
      console.log(data);
    });
  }, []);

  const newDateTimeFormat = new Date(`${dateInput} ${timeInput}`);
  const getEpochTime = newDateTimeFormat.getTime();

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  function rupiah(number) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  }

  const populateCars = carData.map((car) => {
    const isPositive = getRandomInt(0, 1) === 1;
    const timeAt = new Date();
    const mutator = getRandomInt(1000000, 100000000);
    const availableAt = new Date(
      timeAt.getTime() + (isPositive ? mutator : -1 * mutator)
    );

    return {
      ...car,
      availableAt,
    };
  });

  const filterCar = populateCars.filter(
    (car) => car.capacity >= seatInput && car.availableAt >= getEpochTime
  );

  const handleFilterCar = (e) => {
    e.preventDefault();
  
    const driverValue = document.getElementById("driver")?.value;
    const dateValue = dateInput;
    const timeValue = timeInput;
  
    if (driverValue && dateValue && timeValue) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
    setCarFiltered(filterCar);
    setSearched(true);
  };

  return (
    <>
      <main>
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
                  className="form-control item"
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
              onClick={handleFilterCar}
            >
              Cari Mobil
            </button>
          </div>
        </section>

        <div className="container result-container">
          {searched ? (
            <div className="result d-flex" id="cars-container">
              {carFiltered.length === 0 ? (
                <div className="alert alert-danger-mt-2" role="alert">
                  Data tidak ditemukan
                </div>
              ) : (
                carFiltered.map((car) => {
                  const rentCost = rupiah(car.rentPerDay);
                  return (
                    <div className="col-lg-4 col-md-4 col-sm-12" key={car.id}>
                      <div
                        className="card mx-0 my-4 g-0"
                        style={{
                          width: "18rem",
                          boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)",
                        }}
                      >
                        <img
                          src={car.image}
                          className="card-img-top img-fluid"
                          alt="RENT CAR"
                          style={{
                            height: "195px",
                            borderRadius: "3px",
                            objectFit: "cover",
                          }}
                        />
                        <div className="card-body" style={{ fontSize: "14px" }}>
                          <p className="card-title">
                            {car.manufacture} {car.model}
                          </p>
                          <p className="fw-bold">{rentCost}/ hari</p>
                          <p className="card-text" style={{ height: "90px" }}>
                            {car.description}
                          </p>
                          <div className="my-2">
                            <i className="bi bi-people me-2" />
                            {car.capacity} Orang
                          </div>
                          <div className="my-2">
                            <i className="bi bi-gear me-2" />
                            {car.transmission}
                          </div>
                          <div className="my-2">
                            <i className="bi bi-calendar4 me-2" />
                            {car.year}
                          </div>
                          <a
                            href="#"
                            className="btn btn-success fw-bold text-white w-100 mt-2 fw-bold mt-4 "
                            style={{ fontSize: "14px" }}
                          >
                            Pilih Mobil
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          ) : (
            ""
          )}
        </div>
      </main>
    </>
  );
}

export default Search;
