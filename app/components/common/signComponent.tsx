import React from "react";

const SignComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="border border-solid border-gray-200 p-10">
        <div className="flex flex-col items-center">
          <h2 className="mb-4 text-xl font-semibold">Travel App</h2>
          <div className="flex flex-col items-center text-xl font-medium">
            <div>
              <span className="text-blue-400">진짜 나다운 여행</span>
              <span>을</span>
            </div>
            <div>시작해보세요</div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default SignComponent;
