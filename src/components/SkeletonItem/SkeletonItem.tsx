import { FC } from 'react';

export const SkeletonItem: FC = () => {
  return (
    <div role="status" className="flex max-w-sm animate-pulse">
      <div className="flex-shrink-0">
        <span className="flex justify-center items-center bg-gray-300 rounded-full w-12 h-12 "></span>
      </div>
      <div className="ml-4 mt-2 w-full">
        <h3 className="h-3 bg-gray-300 rounded-full  w-48 mb-4"></h3>
        <p className="h-2 bg-gray-300 rounded-full w-[320px] mb-2.5"></p>
        <p className="h-2 bg-gray-300 rounded-full w-[320px] mb-2.5"></p>
      </div>
    </div>
  );
};
