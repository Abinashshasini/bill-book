'use client';

import { useEffect, useState } from 'react';

export default function Home({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  /** Function to generate random number */
  const handleGenerateRandomNumber = () => {
    const randomNum = Math.random() * 9000;
    return Math.floor(1000 + randomNum);
  };

  const [state, setState] = useState(false);

  const handleBlur = () => {
    setTimeout(() => {
      if (!state) {
        alert('closed');
      }
    }, 200);
  };

  useEffect(() => {
    // const _select = document.getElementById('_select');
    // _select?.addEventListener('mousedown', () => {
    //   alert('mouse left');
    // });
    // console.log('baklol', _select);
  }, []);

  return (
    <main className="main">
      <select
        id="_select"
        onBlur={handleBlur}
        onFocus={() => setState(true)}
        onClick={() => setState(!state)}
      >
        <option>help</option>
        <option>me</option>
        <option>complete</option>
        <option>this</option>
      </select>
      {/* {Array(Number(searchParams?.billCount) || 2)
        .fill(0)
        .map((element, index) => (
          <div className="wraper" key={index}>
            <div className="gstCnt">
              <h4>GSTIN : 29ADHPR9945D1ZZ</h4>
              <h4>Mob : 9561451377</h4>
            </div>

            <div className="heroTextcontainer">
              <h1>SRI VIGNESHWARA ENTERPRISES</h1>
              <p>COCO HMT IOCL, Jalahalli - 560 013</p>
            </div>

            <div className="infoContainer">
              <div className="infoTopCnt">
                <p>
                  No.
                  <span className="billnum">
                    {handleGenerateRandomNumber()}
                  </span>
                </p>
                <p>
                  Date<span>............................</span>
                </p>
              </div>
              <div className="infoBottomCnt">
                <p>
                  M/s
                  <span>
                    ...................................................................................................
                  </span>
                </p>
              </div>
            </div>

            <div className="billtwo__tableCnt">
              <div className="billtwo__tableShellWrp">
                <div className="billtwo__tableHeading">No.</div>
                <div className="billtwo__tableHeading">Particulars</div>
                <div className="billtwo__tableHeading">Qty.</div>
                <div className="billtwo__tableHeading">Rate</div>
                <div className="billtwo__tableHeading">Amount</div>
              </div>
              <div>
                <div className="billtwo__tableShellWrp">
                  <div className="billtwo__no"></div>
                  <div className="billtwo__tabledes">
                    <div className="billtwo__tabledes--text">Petrol</div>
                    <div className="billtwo__tabledes--text">Diesel</div>
                    <div className="billtwo__tabledes--text">Oil</div>
                    <div className="billtwo__tabledes--text">Others</div>
                  </div>
                  <div className="billtwo__qty"></div>
                  <div className="billtwo__rate">
                    <div className="billtwo__totalcnt">
                      <h1>Total</h1>
                    </div>
                  </div>
                  <div className="billtwo__amount">
                    <div className="billtwo__totalcnt"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="signature">
              <p>Signature</p>
            </div>
          </div>
        ))} */}
    </main>
  );
}
