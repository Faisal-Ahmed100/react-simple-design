import React from "react";
import "./counterUp.css";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const CounterUp = () => {
  return (
    <section className="p">
      <div className="counterUp">
        <div className="counter-bg">
          <div className="container">
            <div className="conuter-wap">
              <div className="conuter-box">
                <div className="c-child-box">
                  <i className="fas fa-stroopwafel"></i>
                </div>

                <div className="c-child2">
                  <CountUp start={0} end={3000} duration={2} redraw={true}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <h2 className="c-text">
                          <span ref={countUpRef} />
                        </h2>
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  <h3 className="c-text-d">HAPPY CUSTOMER</h3>
                </div>
              </div>
              <div className="conuter-box">
                <div className="c-child-box">
                  <i className="fas fa-window-maximize"></i>
                </div>
                <div className="c-child2">
                  <CountUp start={0} end={320} duration={2} redraw={true}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <h2 className="c-text">
                          <span ref={countUpRef} />
                        </h2>
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  <h3 className="c-text-d">PROJECT COMPLETED</h3>
                </div>
              </div>
              <div className="conuter-box">
                <div className="c-child-box">
                  <i className="fas fa-stroopwafel"></i>
                </div>
                <div className="c-child2">
                  <CountUp start={0} end={1000} duration={2} redraw={true}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <h2 className="c-text">
                          <span ref={countUpRef} />
                        </h2>
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  <h3 className="c-text-d">CUPS OF COFFEE</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterUp;
