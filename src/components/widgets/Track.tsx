import React from 'react';

function Track({ image, name }) {
  return (
    <div className="flex gap-6 justify-center py-6">
      <img className="h-36 w-36" src={image} alt="" />
      <div>
        <h3 className="text-3xl">{name}</h3>
      </div>
    </div>
  );
}

export default Track;
