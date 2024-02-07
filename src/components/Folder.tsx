import React, { useState } from "react";
import { Item } from "../data/folderData";

const Folder = ({ explorer }: { explorer: Item }) => {
  const [show, setShow] = useState(false);
  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        <div className="folder" onClick={() => setShow(!show)}>
          <span>📂{explorer.name}</span>
        </div>
        <div style={{ display: show ? "block" : "none" }}>
          {explorer.items.map((item) => {
            return <Folder explorer={item} />;
          })}
        </div>
      </div>
    );
  } else {
    return <span className="file">📄{explorer.name}</span>;
  }
};

export default Folder;
