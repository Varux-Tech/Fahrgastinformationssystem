export default function Detail() {
  return (
    <>
      <header className="bg-gray-800 h-[10vh] w-full flex items-center justify-between text-white px-5">
        <div className="left">
          <h2 className="text-5xl">
            <span className="font-semibold">ICE 614</span>
          </h2>
        </div>
        <div className="right">
          <h2 className="text-5xl">
            <span className="font-semibold">14:09</span>
          </h2>
        </div>
      </header>
      <div className="fis-header h-[25vh] shadow-md bg-slate-200 p-7 pb-0">
        <div className="w-full h-full bg-white rounded-xl overflow-hidden flex justify-between items-center flex-1 px-10 text-3xl font-semibold text-gray-500">
          <div className="left ">
            <div className="fis-row font-semibold">
              <h2>Nächste Station</h2>
            </div>
            <div className="fis-row mt-5 text-5xl text-gray-700">
              <h2 className="font-bold">Köln Hbf</h2>
            </div>
          </div>
          <div className="right flex items-baseline">
            <div className="fis-col text-end">
              <div className="fis-row font-semibold">
                <h2>Ankunft in 4 min</h2>
              </div>
              <div className="fis-row mt-5 text-5xl text-gray-700 flex items-center">
                <h2>14:09</h2>
                <h2 className="ms-5 text-green-800">14:12</h2>
              </div>
            </div>
            <div className="fis-col ms-16">
              <div className="fis-row font-semibold">
                <h2>Bahnsteig</h2>
              </div>
              <div className="fis-row mt-5 text-5xl text-gray-700 text-end">
                <h2>7</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fis-content h-[65vh] shadow-md bg-slate-200 p-7">
        <div className="w-full h-full bg-white rounded-xl overflow-hidden">
          <div className="content-row flex w-full h-[75px]">
            <div className="graphic mx-8 w-[12px] h-full relative">
              <div className="line w-full h-full bg-gray-800"></div>
            </div>
            <div className="content flex justify-between items-center flex-1 pe-10 text-3xl font-semibold text-gray-500">
              <div className="left">
                <h3>Fahrtverlauf</h3>
              </div>
              <div className="right">
                <h3>Abfahrt in 3 min</h3>
              </div>
            </div>
          </div>
          <div className="content-row flex w-full h-[75px]">
            <div className="graphic mx-8 w-[12px] h-full relative flex items-center justify-center">
              <div className="line w-full h-full border border-y-0 border-gray-800">
                <div className="partialLine h-[50%] w-full bg-gray-800"></div>
              </div>
              <div className="ball w-[25px] h-[25px] rounded-full border-[4px] bg-white absolute border-gray-800"></div>
            </div>
            <div className="content flex justify-between items-center flex-1 pe-10 text-4xl font-semibold text-gray-500">
              <div className="left">
                <h3>Köln Hbf</h3>
              </div>
              <div className="right">
                <h3 className="text-green-800 font-bold">14:12</h3>
              </div>
            </div>
          </div>
          <div className="content-row flex w-full h-[75px]">
            <div className="graphic mx-8 w-[12px] h-full relative flex items-center justify-center">
              <div className="line w-full h-full border border-y-0 border-gray-800"></div>
              <div className="ball w-[25px] h-[25px] rounded-full border-[4px] bg-white absolute border-gray-800"></div>
            </div>
            <div className="content flex justify-between items-center flex-1 pe-10 text-4xl font-semibold text-gray-500">
              <div className="left">
                <h3>Solingen Hbf</h3>
              </div>
            </div>
          </div>
          <div className="content-row flex w-full h-[75px]">
            <div className="graphic mx-8 w-[12px] h-full relative flex items-center justify-center">
              <div className="line w-full h-full border border-y-0 border-gray-800"></div>
              <div className="ball w-[25px] h-[25px] rounded-full border-[4px] bg-white absolute border-gray-800"></div>
            </div>
            <div className="content flex justify-between items-center flex-1 pe-10 text-4xl font-semibold text-gray-500">
              <div className="left">
                <h3>Wuppertal Hbf</h3>
              </div>
            </div>
          </div>
          <div className="content-row flex w-full h-[75px]">
            <div className="graphic mx-8 w-[12px] h-full relative flex items-center justify-center">
              <div className="line w-full h-full border border-y-0 border-gray-800"></div>
              <div className="ball w-[25px] h-[25px] rounded-full border-[4px] bg-white absolute border-gray-800"></div>
            </div>
            <div className="content flex justify-between items-center flex-1 pe-10 text-4xl font-semibold text-gray-500">
              <div className="left">
                <h3>Hagen Hbf</h3>
              </div>
            </div>
          </div>
          <div className="content-row flex w-full h-[75px]">
            <div className="graphic mx-8 w-[12px] h-full relative flex items-center justify-center">
              <div className="line w-full h-full border border-y-0 border-gray-800"></div>
              <div className="ball w-[25px] h-[25px] rounded-full border-[4px] bg-white absolute border-gray-800"></div>
            </div>
            <div className="content flex justify-between items-center flex-1 pe-10 text-4xl font-semibold text-gray-500">
              <div className="left">
                <h3>Dortmund Hbf</h3>
              </div>
            </div>
          </div>
          <div className="content-row flex w-full h-[75px]">
            <div className="graphic mx-8 w-[12px] h-full relative flex items-center justify-center">
              <div className="line w-full h-full border border-y-0 border-gray-800"></div>
              <div className="ball w-[25px] h-[25px] rounded-full border-[4px] bg-white absolute border-gray-800"></div>
            </div>
            <div className="content flex justify-between items-center flex-1 pe-10 text-4xl font-semibold text-gray-500">
              <div className="left">
                <h3>Münster(Westf)Hbf</h3>
              </div>
            </div>
          </div>
          <div className="content-row flex w-full h-[75px]">
            <div className="graphic mx-8 w-[12px] h-full relative flex items-center justify-center">
              <div className="line w-full h-full border border-y-0 border-gray-800"></div>
              <div className="ball w-[25px] h-[25px] rounded-full border-[4px] bg-white absolute border-gray-800"></div>
            </div>
            <div className="content flex justify-between items-center flex-1 pe-10 text-4xl font-semibold text-gray-500">
              <div className="left">
                <h3>Osnabrück Hbf</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
