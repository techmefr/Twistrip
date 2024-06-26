import "./confirmation.css";

function Confirmation() {
  return (
    <>
      {" "}
      <div className="box">
        <ul className="left">
          {Array.from({ length: 14 }, (_, i) => (
            <li key={i}></li>
          ))}
        </ul>

        <ul className="right">
          {Array.from({ length: 14 }, (_, i) => (
            <li key={i}></li>
          ))}
        </ul>
        <div className="ticket">
          <span className="airline">Air Crash</span>
          <span className="airline airlineslip">Air Crash</span>
          <span className="boarding">RESERVATION</span>
          <div className="content">
            <span className="jfk">LYON</span>
            <span className="plane">
              <svg
                clipRule="evenodd"
                fillRule="evenodd"
                height="60"
                width="60"
                imageRendering="optimizeQuality"
                shapeRendering="geometricPrecision"
                textRendering="geometricPrecision"
                viewBox="0 0 500 500"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g stroke="#222">
                  <line
                    fill="none"
                    strokeLinecap="round"
                    strokeWidth="30"
                    x1="300"
                    x2="55"
                    y1="390"
                    y2="390"
                  />
                  <path
                    d="M98 325c-9 10 10 16 25 6l311-156c24-17 35-25 42-50 2-15-46-11-78-7-15 1-34 10-42 16l-56 35 1-1-169-31c-14-3-24-5-37-1-10 5-18 10-27 18l122 72c4 3 5 7 1 9l-44 27-75-15c-10-2-18-4-28 0-8 4-14 9-20 15l74 63z"
                    fill="#222"
                    strokeLinejoin="round"
                    strokeWidth="10"
                  />
                </g>
              </svg>
            </span>
            <span className="sfo">RUH</span>

            <span className="jfk jfkslip">LYON</span>
            <span className="plane planeslip">
              <svg
                clipRule="evenodd"
                fillRule="evenodd"
                height="50"
                width="50"
                imageRendering="optimizeQuality"
                shapeRendering="geometricPrecision"
                textRendering="geometricPrecision"
                viewBox="0 0 500 500"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g stroke="#222">
                  <line
                    fill="none"
                    strokeLinecap="round"
                    strokeWidth="30"
                    x1="300"
                    x2="55"
                    y1="390"
                    y2="390"
                  />
                  <path
                    d="M98 325c-9 10 10 16 25 6l311-156c24-17 35-25 42-50 2-15-46-11-78-7-15 1-34 10-42 16l-56 35 1-1-169-31c-14-3-24-5-37-1-10 5-18 10-27 18l122 72c4 3 5 7 1 9l-44 27-75-15c-10-2-18-4-28 0-8 4-14 9-20 15l74 63z"
                    fill="#222"
                    strokeLinejoin="round"
                    strokeWidth="10"
                  />
                </g>
              </svg>
            </span>
            <span className="sfo sfoslip">RUH</span>
            <div className="sub-content">
              <span className="watermark">Air Crash</span>
              <span className="name">
                PASSAGER
                <br />
                <span>Toto, Doe</span>
              </span>
              <span className="flight">
                VOL N&deg;
                <br />
                <span>X3-65C3</span>
              </span>
              <span className="gate">
                PORTE
                <br />
                <span>11B</span>
              </span>
              <span className="seat">
                SIEGE
                <br />
                <span>45A</span>
              </span>
              <span className="boardingtime">
                Confirmation
                <br />
                <span>8:25 01 JUIN 2024</span>
              </span>

              <span className="flight flightslip">
                VOL N&deg;
                <br />
                <span>X3-65C3</span>
              </span>
              <span className="seat seatslip">
                SIEGE
                <br />
                <span>45A</span>
              </span>
              <span className="name nameslip">
                PASSAGER
                <br />
                <span>Toto, Doe</span>
              </span>
            </div>
          </div>
          <div className="barcode"></div>
          <div className="barcode slip"></div>
        </div>
      </div>
      <img className="golf" src="./src/assets/images/golf.jpg" />
    </>
  );
}

export default Confirmation;
