'use client'
import { useState } from "react";
import styles from '@/app/Components/(liteComponents)/EditableTextComponent/EditableTextComponent.module.css'
const EditableText = ({ initialText }) => {
    const [text, setText] = useState(initialText);
    return (
        <input
            type="text"
            className={styles.input}
            // value={text}
            placeholder={text}
            onChange={(e) => setText(e.target.value)}
        />
    );
};
const EditableTextComponent = ({ titleString }) => {
    const [content, setContent] = useState(titleString);
    const parseContent = (content) => {
        const parts = content.split(/(\[[^\]]+\])/g); // Split the content into parts
        return parts.map((part, index) => {
            if (part.match(/\[[^\]]+\]/)) {
                // If the part is inside square brackets
                const text = part.slice(1, -1); // Remove square brackets
                return <EditableText key={index} initialText={text} />;
            }
            return <span key={index}>{part}</span>; // Return the regular text
        });
    };

    return (
        <div>
            {parseContent(content)}
        </div>
    );
};

export default EditableTextComponent;
