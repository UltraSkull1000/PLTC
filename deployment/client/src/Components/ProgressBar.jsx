const ProgressBar = ({ progress }) => {
  return (
    <>
      <div className="relative pt-1">
        <div className="flex flex-col space-y-2">
          <div className="flex flex-wrap items-center justify-between">
            <div className="w-full">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block my-1 py-1 px-2 uppercase rounded-full text-purple-800 bg-purple-200">
                    Team 1
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-purple-800">
                    {progress}%
                  </span>
                </div>
              </div>
              <div className="relative w-full bg-gray-200 rounded-full">
                <div className="absolute w-full h-1 bg-gray-200 rounded-full"></div>
                <div
                  className="absolute h-1 bg-purple-500 rounded-full"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProgressBar;
