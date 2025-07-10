"use client";

import React from "react";

export default function Avatar10() {
  return (
    <section className="bg-transparent py-4">
      <div className="mx-auto sm:container">
        <div className="flex items-center justify-center gap-4">
          {/* Avatars Row */}
          <div className="flex items-center">
            <div className="h-[50px] w-[50px] rounded-full border-transparent border-gray-800 dark:border-gray-700">
              <img
                src="https://cdn.tailgrids.com/assets/images/core-components/avatar/image-01.jpg"
                alt="avatar"
                className="h-full w-full rounded-full object-cover object-center"
              />
            </div>
            <div className="-ml-4 h-[50px] w-[50px] rounded-full border-4 border-gray-800 dark:border-gray-700">
              <img
                src="https://cdn.tailgrids.com/assets/images/core-components/avatar/image-02.jpg"
                alt="avatar"
                className="h-full w-full rounded-full object-cover object-center"
              />
            </div>
            <div className="-ml-4 h-[50px] w-[50px] rounded-full border-4 border-gray-800 dark:border-gray-700">
              <img
                src="https://cdn.tailgrids.com/assets/images/core-components/avatar/image-03.jpg"
                alt="avatar"
                className="h-full w-full rounded-full object-cover object-center"
              />
            </div>
            <div className="-ml-4 h-[50px] w-[50px] rounded-full border-4 border-gray-800 dark:border-gray-700">
              <img
                src="https://cdn.tailgrids.com/assets/images/core-components/avatar/image-04.jpg"
                alt="avatar"
                className="h-full w-full rounded-full object-cover object-center"
              />
            </div>
            <div className="-ml-4 h-[50px] w-[50px] rounded-full border-4 border-gray-800 dark:border-gray-700">
              <img
                src="https://cdn.tailgrids.com/assets/images/core-components/avatar/image-05.jpg"
                alt="avatar"
                className="h-full w-full rounded-full object-cover object-center"
              />
            </div>
          </div>
          
          {/* Client Count Text */}
          <div className="text-white">
            <span className="text-2xl font-medium text-white">+70</span>
            <span className="text-lg font-medium ml-2">satisfied clients</span>
          </div>
        </div>
      </div>
    </section>
  );
}
