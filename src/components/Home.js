import React from 'react';
import Sidebar from '../Sidebar';
import './HomeSearchbar.css';
import { Card, Row, Col, Button } from 'react-bootstrap'
import { LiaUserEditSolid } from 'react-icons/lia';
import { IoMdPaperPlane } from "react-icons/io";
import { BiFilter } from "react-icons/bi";
import { PiHandWavingBold } from "react-icons/pi";


function Home() {
  const showSidebar = true;

  return (
    <>
      {showSidebar && <Sidebar />}
      <div className="search-bar">
        <input type="text" placeholder="Search By Values" />
        <button>Search</button>
      </div>

      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={{ marginLeft: '220px' }}>
          <Card style={{ width: '45rem', height: '10rem' }}>
            <Card.Body>
              <Row>
                <Col md={6} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <Card.Title style={{ fontSize: '30px', marginBottom: '1rem' }}>
                    <PiHandWavingBold /> Hi, Aswini!
                  </Card.Title>
                  <Card.Subtitle style={{ marginBottom: '1rem' }}> Ad Manager @C&S </Card.Subtitle>
                </Col>
                <Col md={4}>
                  <Row style={{ height: '100%' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center', gap: '10px' }}>
                      <Button variant="light" style={{ whiteSpace: 'nowrap', backgroundColor: '#f0f0f0' }}>
                        <IoMdPaperPlane /> Enroll a ticket
                      </Button>
                      <Button variant="primary" style={{ whiteSpace: 'nowrap' }}>
                        Upgrade Your Plan
                      </Button>
                    </div>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>

        <Card style={{ width: '25rem', height: '10rem', backgroundColor: 'blue' }}>
          <Card.Body>
            <Row>
              <Col md={4} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
                <Card.Title style={{ fontSize: '15px', whiteSpace: 'nowrap', color: 'white', marginTop: '10px' }}>
                  Carry your deals to top
                </Card.Title>
                <Card.Subtitle style={{ fontSize: '30px', whiteSpace: 'nowrap', color: 'white', marginTop: '10px' }}> Upgrade now </Card.Subtitle>
                <Button variant="primary" style={{ fontSize: '15px', whiteSpace: 'nowrap', backgroundColor: 'white', color: 'blue', marginTop: '10px' }}>
                  See All Id Plans
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>

      </div>



      <Card style={{ width: '71rem', marginLeft: '220px', height: '20rem', marginTop: '2rem' }}>
        <Card.Body>
          <Row>
            <Col md={12} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div className="d-flex justify-content-between" style={{ marginBottom: '1rem' }}>
                <Card.Title>Deals Dashboard Overview</Card.Title>
                <div>
                  <Button variant="light" style={{ backgroundColor: '#f0f0f0' }}>
                    <BiFilter></BiFilter> Organize Version </Button>
                  <Button variant="primary">Add New Version</Button>
                </div>
              </div>
              <table className="table mt-3">
                <thead>
                  <tr>
                    <th style={{ backgroundColor: '#f0f0f0' }}>Ad Date</th>
                    <th style={{ backgroundColor: '#f0f0f0' }}>Missing Deals</th>
                    <th style={{ backgroundColor: '#f0f0f0' }}>Ad Theme</th>
                    <th style={{ backgroundColor: '#f0f0f0' }}>Level</th>
                    <th style={{ backgroundColor: '#f0f0f0' }}>Ad Version</th>
                    <th style={{ backgroundColor: '#f0f0f0' }}>Modify</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>06/06/2023</td>
                    <td>Missing deals</td>
                    <td>06/5/2023-Ad Special</td>
                    <td>1</td>
                    <td>Ad Master</td>
                    <td><LiaUserEditSolid /></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>2</td>
                    <td>Ad Special Center Store</td>
                    <td><LiaUserEditSolid /></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>3</td>
                    <td>Ad Plans</td>
                    <td><LiaUserEditSolid /></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td>06/5/2023-Best Buy</td>
                    <td>1</td>
                    <td>Ad Master</td>
                    <td><LiaUserEditSolid /></td>
                  </tr>
                </tbody>
              </table>
            </Col>
          </Row>
        </Card.Body>
      </Card>










    </>
  );
}

export default Home;
