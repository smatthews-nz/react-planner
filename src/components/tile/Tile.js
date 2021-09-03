import React from "react";

export const Tile = (props) => {
  const vals = Object.values(props)
  let render = vals.map( (value, index) => {
    if(value[index] === 0){
      return (
        <p className="tile-tile">{value}</p>
      )
    }

    return (
      <p className="tile">{value}</p>
    )
  })
  return (
    <div className="tile-container">
      {render}
    </div>
  );
};
