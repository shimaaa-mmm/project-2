// src/components/FaqAccordion.jsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss'; // Add your custom styles here

const FaqAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const isActive = (index) => activeIndex === index;

  return (
    <div className="faq_area">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="accordion_heading">
              <h3>Frequently Ask Question</h3>
            </div>
            <div id="accordion" className="accordion-left">
              {[
                { id: 'headingTwo', question: 'Is WordPress hosting worth it?', answer: 'Our set he for firmament morning sixth subdue darkness creeping gathered divide our let god moving. Moving in fourth air night bring upon' },
                { id: 'headingOne', question: 'What are the advantages of WordPress hosting over shared?', answer: 'Our set he for firmament morning sixth subdue darkness creeping gathered divide our let god moving. Moving in fourth air night bring upon' },
                { id: 'headingThree', question: 'Will you transfer my site?', answer: 'Our set he for firmament morning sixth subdue darkness creeping gathered divide our let god moving. Moving in fourth air night bring upon' },
                { id: 'heading_4', question: 'Why should I host with Hostza?', answer: 'Our set he for firmament morning sixth subdue darkness creeping gathered divide our let god moving. Moving in fourth air night bring upon' },
                { id: 'heading_5', question: 'How do I get started with Shared Hosting?', answer: 'Our set he for firmament morning sixth subdue darkness creeping gathered divide our let god moving. Moving in fourth air night bring upon' }
              ].map((item, index) => (
                <div className="card" key={index}>
                  <div className="card-header" id={item.id}>
                    <h5 className="mb-0">
                      <button
                        className={classNames('btn btn-link', { collapsed: !isActive(index) })}
                        onClick={() => toggleAccordion(index)}
                        aria-expanded={isActive(index)}
                      >
                        <FontAwesomeIcon icon={faQuestionCircle} className="icon" /> {item.question}
                      </button>
                    </h5>
                  </div>
                  <div
                    id={`collapse_${index}`}
                    className={classNames('collapse', { show: isActive(index) })}
                    aria-labelledby={item.id}
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      {item.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqAccordion;
