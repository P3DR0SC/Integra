import React from "react";

const Linha_dash = () => {
  return (
    <div className="row gx-4">
      <div className="col-sm-12">
        <div className="card mb-4 bg-2">
          <div className="card-body">
            <div className="p-3">
              <h6>Welcome Back,</h6>
              <h2>Nick Gonzalez</h2>
              <div className="mt-3 d-flex flex-wrap gap-2">
                <div className="card bg-primary rounded-pill pe-3">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div className="animate-box img-bg-1 me-3"></div>
                      <div className="d-flex flex-column text-white">
                        <h2
                          className="m-0 lh-1 counter"
                          data-target="9300"
                          data-duration="3000"
                          data-easing="swing"
                        >
                          9300
                        </h2>
                        <p className="m-0">Steps</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card bg-peach rounded-pill pe-3">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div className="animate-box img-bg-2 me-3"></div>
                      <div className="d-flex flex-column text-white">
                        <h2
                          className="m-0 lh-1 counter"
                          data-target="2900"
                          data-duration="300"
                          data-easing="swing"
                        >
                          2900
                        </h2>
                        <p className="m-0">Calories</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card bg-lime rounded-pill pe-3">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div className="animate-box img-bg-3 me-3"></div>
                      <div className="d-flex flex-column text-white">
                        <h2
                          className="m-0 lh-1 counter"
                          data-target="86"
                          data-duration="20"
                          data-easing="swing"
                        >
                          86
                        </h2>
                        <p className="m-0">Progress</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Linha_dash;
