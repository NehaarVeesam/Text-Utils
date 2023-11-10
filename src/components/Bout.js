import React from 'react'

export default function Bout(props) {

  const togglestyle = () => {
    if (props.mode === 'dark') {
      return {
        color: 'white',
        backgroundColor: 'black',
        border: '1px solid white',
      };
    } else {
      return {
        color: 'black',
        backgroundColor: 'white',
      };
    }
  };

  return (
    <div className='container' style={togglestyle()}>
      <h1 className='my-3'>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={togglestyle()}>
          <h2 className="accordion-header">
            <button className="accordion-button" style={togglestyle()} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              What is TEXT-UTILS
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={togglestyle()}>
              TEXT-UTILS is a versatile text manipulation utility designed to facilitate
              efficient handling and modification of textual data. This tool provides users
              with a comprehensive set of functionalities for tasks ranging from basic formatting
              to intricate text analysis. Its capabilities encompass string operations, content
              cleaning, and targeted information extraction, making it a valuable asset for individuals
              and professionals seeking a streamlined solution for text manipulation requirements.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={togglestyle()} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFeatures" aria-expanded="false" aria-controls="collapseFeatures">
              What are its Features
            </button>
          </h2>
          <div id="collapseFeatures" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={togglestyle()}>
              It has features like copying text, converting it into lowercase, uppercase, and removing extra spaces as well.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={togglestyle()} type="button" data-bs-toggle="collapse" data-bs-target="#collapseDarkMode" aria-expanded="false" aria-controls="collapseDarkMode">
              Is Dark Mode available
            </button>
          </h2>
          <div id="collapseDarkMode" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={togglestyle()}>
              Yes, it has Dark mode. There's an option at the top that enables Dark mode of your choice.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={togglestyle()} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              How it is built
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={togglestyle()}>
              It is a react application which runs on a single page . It also uses JavaScript for the logical functionality for the text provided.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-3">
            <button onClick={togglestyle()} type="button" className="btn btn-primary">{btntext}</button>
        </div> */}

    </div>
  )
}
