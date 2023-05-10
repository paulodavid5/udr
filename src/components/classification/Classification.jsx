import React from "react";

function Classification({ classificationTeamsSort }) {
  return (
    <div className="classification-container">
      {classificationTeamsSort.map((item, idx) => (
        <ul key={idx} className="classification-item">
          {item.position === 1 ? (
            <li className="upzone1">
              {item.position}
              <span>º</span>
            </li>
          ) : item.position === 2 ? (
            <li className="upzone2">
              {item.position}
              <span>º</span>
            </li>
          ) : (
            <li>
              {item.position}
              <span>º</span>
            </li>
          )}

          {item.name === "Raianos" ? (
            <li className="raianos">{item.name}</li>
          ) : (
            <li>{item.name}</li>
          )}
          <li>{item.points}</li>
        </ul>
      ))}
    </div>
  );
}

export default Classification;
