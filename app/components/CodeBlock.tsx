import { useEffect, useRef } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-python";
import "prismjs/themes/prism-tomorrow.css"; // oder ein anderes Theme

interface CodeBlockProps {
    code: string;
}

export default function CodeBlock({ code }: CodeBlockProps) {
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        if (ref.current) {
            Prism.highlightElement(ref.current);
        }
    }, [code]);

    return (
        <pre className="rounded-2xl p-5 overflow-x-auto bg-[#2d2d2d]">
            <code ref={ref} className="language-python">
                {code}
            </code>
        </pre>
    );
}