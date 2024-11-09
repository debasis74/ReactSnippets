import React from "react";

const Card = ({meme}) => {
    debugger
    const { url, title } = meme;
    return(
        <div style={{
            border: "1px solid #171717",
            padding: "4px",
            display: "flex",
            flexDirection: "column"
        }}>
          <h3>{title}</h3>
          <img src={url} alt="no_data"></img>
        </div>
    )
};

export default Card;