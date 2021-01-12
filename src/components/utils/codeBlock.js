import React from "react";

export default function CodeBlock({ children }) {
    return (
        <div className="bg-dark p-4 ">
            <code className="text-light">
                {children}
            </code>
        </div>
    )
}