import React from "react";
import { motion as m } from "framer-motion";

function Classification({ classificationTeamsSort }) {
  return (
    <m.div
      className="classification-container"
      initial={{ opacity: 0, translateY: "50%" }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true, amount: 0.8 }}
    >
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
    </m.div>
  );
}

export default Classification;
