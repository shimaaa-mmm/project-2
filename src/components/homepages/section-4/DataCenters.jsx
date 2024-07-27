import React, { useState } from 'react';
import { FaMapMarker } from 'react-icons/fa';
import './index.scss';
import MapSVG from './Map';

const DataCenterArea = () => {
  const [hovered, setHovered] = useState(null);

  const handleMouseEnter = (index) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <div className="data_center_area">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="section_title text-center mb-100">
              <h3>Our Data Centres</h3>
              <p>
                Your domain control panel is designed for ease-of-use and <br />
                allows for all aspects of your domains.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="location">
              <div className="pulse_group">
                {[1, 2, 3, 4].map((item, index) => (
                  <span
                    key={index}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    className={hovered === index ? 'hovered' : ''}
                  >
                    <div className={`address_on_hover d-lg-block ${hovered === index ? 'show' : ''}`}>
                      <div className="address_inner">
                        <FaMapMarker />
                        <h3>Sydney, Australia</h3>
                        <p>
                          It is a long established fact that <br />
                          a reader
                        </p>
                      </div>
                    </div>
                  </span>
                ))}
              </div>
              <MapSVG className="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataCenterArea;
