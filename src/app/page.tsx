export default function Home() {
  return (
    <div className="fis flex flex-col w-full min-h-screen relative">
      <div className="fis-header flex flex-col p-7 relative text-white h-[45vh] w-full bg-gray-800">
        <div className="fis-row flex justify-between h-[25%]">
          <h2 className="text-6xl">
            <span className="font-semibold">ICE 614</span> nach
          </h2>
          <h2 className="text-6xl">14:09</h2>
        </div>
        <div className="fis-row flex">
          <h1 className="mt-7 font-bold" style={{ fontSize: "11rem" }}>
            Hamburg Hbf
          </h1>
        </div>
      </div>
      <div className="fis-content h-[55vh] shadow-md bg-slate-200 p-7">
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
        </div>
      </div>
    </div>
  );
}
