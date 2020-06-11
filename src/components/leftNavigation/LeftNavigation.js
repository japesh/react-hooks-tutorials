import React, { useState, useCallback } from "react";
import "./LeftNavigation.css";

const blockName = "leftNavigation";

function Link({ onSelect, children, index, className }) {
  const onClick = useCallback(() => {
    onSelect(index);
  }, []);
  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  );
}

export default function LeftNavigation({ links = [] }) {
  const [selected, setSelectedLink] = useState(0);
  const Component = links[selected].Component;
  return (
    <>
      <div className={blockName}>
        {links.map(({ title }, index) => {
          return (
            <Link
              className={`${blockName}__link ${
                selected === index ? `${blockName}__link--selected` : ""
              }`}
              onSelect={setSelectedLink}
              index={index}
              key={index}
            >
              {title}
            </Link>
          );
        })}
      </div>
      {<Component/>}
    </>
  );
}
