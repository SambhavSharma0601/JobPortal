import React from 'react';

function Me() {
  return (
    <div className="ml-3 mt-4 flex items-center space-x-2">
      <img
        className="inline-block h-10 w-10 rounded-full"
        src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
        alt="Sambhav"
      />
      <span className="flex flex-col">
        <span className="text-sm font-medium text-gray-900">User</span>
        <span className="text-sm font-medium text-gray-500">@temp_userX0</span>
      </span>
    </div>
  );
}

export default Me;
