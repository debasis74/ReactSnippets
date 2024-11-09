import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const CreateComponent = ({ content, onAdd }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    onAdd(content.includes('File') ? "file" : "folder");
  };

  return (
    <div
      onClick={handleClick}
      style={{ border: "1px solid #171717", padding: "4px", color: "#171717" }}
    >
      {content}
    </div>
  );
};

const Folder = ({ explorer }) => {
  const [expand, setExpand] = useState(false);
  const [items, setItems] = useState(explorer.items);

  const handleClick = () => {
    if (explorer.isFolder) {
      setExpand(!expand);
    }
  };

  const handleAdd = (type) => {
    const newName  = prompt(`Enter Name of ${type}`);
    const newElement = {
      id: uuidv4(),
      name: newName,
      isFolder: type === 'folder',
      items: []
    };
    setExpand(prev => !prev);
    setItems([...items, newElement]);
  };

  return (
    <div style={{ marginLeft: 20 }}>
      <div
        onClick={handleClick}
        style={{
          cursor: "pointer",
          fontWeight: explorer.isFolder ? "bold" : "normal",
          display: "flex",
          alignItems: "center",
        }}
      >
        {explorer.isFolder ? (expand ? "📂" : "📁") : "📄"} {explorer.name}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: '4px',
            marginTop: '4px',
            marginLeft: '4px'
          }}
        >
          {explorer.isFolder && <CreateComponent content="+ Create File" onAdd={handleAdd} />}
          {explorer.isFolder  && <CreateComponent content="+ Create Folder" onAdd={handleAdd} />}
        </div>
      </div>

      {expand &&
        items.map((explorerData) => (
          <Folder key={explorerData.id} explorer={explorerData} />
        ))}
    </div>
  );
};

export default Folder;
