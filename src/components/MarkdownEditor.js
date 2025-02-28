import React, { useEffect, useState } from 'react'
import ReactMarkdown from "react-markdown";


const MarkdownEditor = () => {

    const [markdown, setMarkdown] = useState("# Hello , Markdown");

  return (
    <div className="editor-container">
        <textarea 
            className="textarea" 
            value={markdown} 
            onChange={(e) => setMarkdown(e.target.value)}
          />
        <div className="preview">
            <ReactMarkdown> {markdown} </ReactMarkdown>
        </div>
    </div>
  )
}

export default MarkdownEditor