import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';

function CryptoTablesSm() {
  const [activeTab, setActiveTab] = useState('spot');

  const handleTabSelect = (selectedTab) => {
    setActiveTab(selectedTab);
  };

  const tableData = [
    { coin: 'GT', price: '$8.68', volume: '16.22M', change: '+1.18%', action: 'Buy/Sell' },
    { coin: 'ETHFI', price: '$7.13', volume: 'Unknown', change: '+37.27%', action: 'Spot' },
    { coin: 'BTC', price: '$40,000', volume: '1B', change: '+5%', action: 'Trade' },
    { coin: 'ETH', price: '$2,500', volume: '500M', change: '-3%', action: 'Trade' },
    { coin: 'LTC', price: '$150', volume: '50M', change: '+2%', action: 'Trade' }
  ];
  

  return (

            <Tabs activeKey={activeTab} onSelect={handleTabSelect} id="crypto-tabs" className="mb-3">
              <Tab eventKey="spot" title="Spot">
                <div className="table-responsive">
                  <table className="table">
                    <tbody>
                      {/* Tablo verilerini döngü ile oluştur */
                      tableData.map((data, index) => (
                        <tr key={index}>
                          <td>
                            <a className='noDeco' href="#">
                              <div className='d-flex align-items-center gap-3'>
                                <div>
                                  <img
                                    alt={data.coin}
                                    width="28"
                                    height="28"
                                    className=""
                                    src="/rr.png"
                                  />
                                </div>
                                <div>
                                  <div className='Strong'>{data.coin}</div>
                                  <div className='Weak'>{data.coin}</div>
                                </div>
                              </div>
                            </a>
                          </td>
                          <td className='Price'>{data.price}</td>
                     
                          <td className='changeGreen'>{data.change}</td>

                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Tab>
              <Tab eventKey="test" title="Test">
                {/* Aynı şekilde, diğer tablo için de verileri döngü ile oluşturabilirsiniz */}
              </Tab>
            </Tabs>

  );
}

export default CryptoTablesSm;
