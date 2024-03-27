import { Tab, Tabs } from 'react-bootstrap';

function CryptoTable() {
  return (
    <section className='CryptoTable'>
        <div className='row'>
            <div className='container'>
    <Tabs defaultActiveKey="spot" id="crypto-tabs" className="mb-3">
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
                <a title="GT" href="/tr/price/gate-gt">
                  <div>
                    <div>
                      <img
                        alt="GateToken"
                        loading="lazy"
                        width="28"
                        height="28"
                        decoding="async"
                        data-nimg="1"
                        className=""
                        style={{ color: "transparent" }}
                        src="https://www.gate.io/images/coin_icon/64/gt.png?w=64&q=75"
                      />
                    </div>
                    <div>
                      <div>GT</div>
                      <div>GateToken</div>
                    </div>
                  </div>
                </a>
              </td>
              <td>$8.68</td>
              <td>16.22M</td>
              <td>+1.18%</td>
              <td>
                <a
                  className=""
                  href="/tr/trade/GT_USDT"
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
                <a title="GT" href="/tr/price/gate-gt">
                  <div>
                    <div>
                      <img
                        alt="GateToken"
                        loading="lazy"
                        width="28"
                        height="28"
                        decoding="async"
                        data-nimg="1"
                        className=""
                        style={{ color: "transparent" }}
                        src="https://www.gate.io/images/coin_icon/64/gt.png?w=64&q=75"
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
                  className=""
                  href="/tr/trade/GT_USDT"
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
    </section>
  );
}

export default CryptoTable;
