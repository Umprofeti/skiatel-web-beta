"use client"
import react from "react";
import { CopyBlock, monokai } from "react-code-blocks";

let style = {
    fontSize: "inherit",
    fontFamily: "inherit",
    background: "#272822",
    color: "#ddd",
    borderRadius: "3px",
    display: "inline",
    lineHeight: "1.4285714285714286",
    overflowX: "auto",
    whiteSpace: "pre-wrap",
    padding: "2px 4px"
}

const CodeWrapper = ({block}) => {
    return (
        <CopyBlock customStyle={style} key={block.id} text={block.BloqueDeCodigo} language="javascript"  showLineNumbers={false} theme={monokai} />
    )
}

export default CodeWrapper;