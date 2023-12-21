import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

export const Section3 = () => {
  const [key, setKey] = useState("home");
  return (
    <div>
      <section className="py-sm-5 py-4">
        <Container>
          <div className="tab-container">
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3"
            >
              <Tab eventKey="home" title="Description" className="tab-buttons">
                <p className="tabs-para">
                  {" "}
                  Sed nec ultricies felis, vitae facilisis ipsum. Morbi id
                  turpis euismod, rhoncus tortor quis, lobortis sapien. Sed
                  imperdiet nulla in leo ullamcorper, in finibus elit porta. Sed
                  eget congue neque, mattis finibus neque. In vel dolor ac augue
                  pretium suscipit. Ut nec massa in ligula vestibulum mattis.
                  Suspendisse imperdiet lorem eleifend nisi euismod, vel
                  consequat ipsum luctus. Morbi auctor vulputate hendrerit.
                  Etiam vel lectus tortor. Pellentesque non pharetra mi. Cura{" "}
                </p>
              </Tab>
              <Tab eventKey="profile" title="Additional Information">
                <p className="tabs-para">Additional Information</p>
              </Tab>
              <Tab eventKey="contact" title="Reviews (1)">
                <p class="tabs-para">Reviews</p>
              </Tab>
            </Tabs>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Section3;
