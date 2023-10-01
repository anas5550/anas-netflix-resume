import React from "react";

import CrioLogo from "../../assets/crioLogo.webp";

const Certificates = () => {
  return (
    <div className="container-fluid my-4">
      <div className="row">
        <p className="text-white text-2xl font-semibold heading uppercase">
          Certificates
        </p>

        <div className="col-md-3 rounded-md">
          <p className="text-white text-[25px] text-center">Crio.DO</p>
          <p className="text-white text-[14px] capitalize">
            advance full stack development program
          </p>
          <p className="text-white text-[14px]">Duration - 12 months</p>
          <img
            src={CrioLogo}
            alt="CrioLogo"
            className="bg-blend-multiply object-fill"
          />
        </div>
      </div>
    </div>
  );
};

export default Certificates;
