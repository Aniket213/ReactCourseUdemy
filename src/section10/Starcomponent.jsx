import React, { useState } from "react";
// This one is mind eater ...
const Starcomponent = ({ maxrating = 5, color='#fcc419', size=48, messages=[] }) => {
  const [rating, setrating] = useState(null);
  const [hovered, sethovered] = useState(null);

  const handleclick = (i) => {
    setrating(i);
  };

  return (
    <div>
      {Array.from({ length: maxrating }, (_, i) => (
        <Star
          handleclick={handleclick}
          i={i + 1}
          fill={hovered !== 0 ? hovered >= i + 1 : i + 1 <= rating}
          onMouseEnter={() => {
            sethovered(i + 1);
          }}
          onMouseLeave={() => {
            sethovered(0);
          }}
          key={i}
          color={color}
          size={size}
        />
      ))}
      <span style={{color:color, fontSize:size-10, marginLeft:'20px'}}> {messages.length===maxrating ? (hovered ? messages[hovered-1] : messages[rating-1]) : (hovered ? hovered : rating)}</span>
    </div>
  );
};
export default Starcomponent;

const Star = ({
  handleclick,
  i,
  fill,
  onMouseEnter,
  onMouseLeave,
  color,
  size
}) => {
  return (
    <span onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={() => handleclick(i)}>
      {fill ? (
        <span
          className="material-symbols-rounded"
          style={{ color:color , cursor: "pointer", fontSize:size }}
        >
          star
        </span>
      ) : (
        <span
          className="material-symbols-rounded"
          style={{ cursor: "pointer", fontSize:size }}
        >
          star
        </span>
      )}
    </span>
  );
};
