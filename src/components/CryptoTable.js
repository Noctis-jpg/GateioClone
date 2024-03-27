import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import CryptoTablesSm from './CryptoTablesSm';
function CryptoTable() {
  const [activeTab, setActiveTab] = useState('spot');

  const handleTabSelect = (selectedTab) => {
    setActiveTab(selectedTab);
  };

  return (
    <section className='CryptoTable'>
              <div className='container'>
      <div className='row'>
          <div className='col-md-8'>
          <div className='bgbr_ym'>
            <Tabs activeKey={activeTab} onSelect={handleTabSelect} id="crypto-tabs" className="mb-3">
              <Tab eventKey="spot" title="Spot">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Coin</th>
                      <th scope="col">Price</th>
                      <th scope="col">24h Trading Volume</th>
                      <th scope="col">24h Change</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <a className='noDeco' href="#">
                          <div className='d-flex align-items-center gap-3'>
                            <div>
                              <img
                                alt="GateToken"
                                width="28"
                                height="28"
                                className=""
                                src="/rr.png"
                              />
                            </div>
                            <div>
                              <div className='Strong'>GT</div>
                              <div className='Weak'>GateToken</div>
                            </div>
                          </div>
                        </a>
                      </td>
                      <td>$8.68</td>
                      <td>16.22M</td>
                      <td>+1.18%</td>
                      <td>
                        <a
                          className="BuySell"
                          href="#"
                          role=""
                        >
                          Buy/Sell
                        </a>
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>
                        <a className='noDeco' href="#">
                          <div className='d-flex align-items-center gap-3'>
                            <div>
                              <img
                                alt="GateToken"
                                width="28"
                                height="28"
                                className=""
                                src="/rr.png"
                              />
                            </div>
                            <div>
                              <div className='Strong'>GT</div>
                              <div className='Weak'>GateToken</div>
                            </div>
                          </div>
                        </a>
                      </td>
                      <td>$8.68</td>
                      <td>16.22M</td>
                      <td>+1.18%</td>
                      <td>
                        <a
                          className="BuySell"
                          href="#"
                          role=""
                        >
                          Buy/Sell
                        </a>
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>
                        <a className='noDeco' href="#">
                          <div className='d-flex align-items-center gap-3'>
                            <div>
                              <img
                                alt="GateToken"
                                width="28"
                                height="28"
                                className=""
                                src="/rr.png"
                              />
                            </div>
                            <div>
                              <div className='Strong'>GT</div>
                              <div className='Weak'>GateToken</div>
                            </div>
                          </div>
                        </a>
                      </td>
                      <td>$8.68</td>
                      <td>16.22M</td>
                      <td>+1.18%</td>
                      <td>
                        <a
                          className="BuySell"
                          href="#"
                          role=""
                        >
                          Buy/Sell
                        </a>
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>
                        <a className='noDeco' href="#">
                          <div className='d-flex align-items-center gap-3'>
                            <div>
                              <img
                                alt="GateToken"
                                width="28"
                                height="28"
                                className=""
                                src="/rr.png"
                              />
                            </div>
                            <div>
                              <div className='Strong'>GT</div>
                              <div className='Weak'>GateToken</div>
                            </div>
                          </div>
                        </a>
                      </td>
                      <td>$8.68</td>
                      <td>16.22M</td>
                      <td>+1.18%</td>
                      <td>
                        <a
                          className="BuySell"
                          href="#"
                          role=""
                        >
                          Buy/Sell
                        </a>
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>
                        <a className='noDeco' href="#">
                          <div className='d-flex align-items-center gap-3'>
                            <div>
                              <img
                                alt="GateToken"
                                width="28"
                                height="28"
                                className=""
                                src="/rr.png"
                              />
                            </div>
                            <div>
                              <div className='Strong'>GT</div>
                              <div className='Weak'>GateToken</div>
                            </div>
                          </div>
                        </a>
                      </td>
                      <td>$8.68</td>
                      <td>16.22M</td>
                      <td>+1.18%</td>
                      <td>
                        <a
                          className="BuySell"
                          href="#"
                          role=""
                        >
                          Buy/Sell
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Tab>
              <Tab eventKey="test" title="Test">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Coin</th>
                      <th scope="col">Price</th>
                      <th scope="col">24h Trading Volume</th>
                      <th scope="col">24h Change</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <a className='noDeco' title="GT">
                          <div className='d-flex align-items-center gap-3'>
                            <div>
                              <img
                                alt="GateToken"
                                width="28"
                                height="28"
                                className=""
                                src="/rr.png"
                              />
                            </div>
                            <div>
                              <div>GT</div>
                              <div>Test</div>
                            </div>
                          </div>
                        </a>
                      </td>
                      <td>$8.68</td>
                      <td>16.22M</td>
                      <td>+1.18%</td>
                      <td>
                        <a
                          className="BuySell"
                          href="#"
                          role=""
                        >
                          Buy/Sell
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Tab>
            </Tabs>
          </div>
          </div>
          <div className='col-md-4'>
            <div className='bgbr_ym'>
            <CryptoTablesSm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CryptoTable;
