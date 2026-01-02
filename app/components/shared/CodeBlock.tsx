"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark, oneLight } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { useTheme } from "next-themes";
import Clipoboard from "./Clipoboard";

type codeTypes = {
  value: {
    code: string;
    language: string;
    filename?: string | null;
  };
};

export default function CodeBlock({ value }: codeTypes) {
  const { theme } = useTheme();
  return (
    <div className="my-6">
      <div className="flex items-center justify-between bg-zinc-50 dark:bg-[#141414] border dark:border-zinc-800 border-zinc-200 rounded-t-lg px-4 py-3">
        {value.filename && <p className="text-sm">{value.filename}</p>}
        <Clipoboard content={value.code} />
      </div>
      <SyntaxHighlighter
        language={value.language ?? "jsx"}
        style={theme === "dark" ? oneDark : oneLight}
        customStyle={{
          margin: 0,
          borderRadius: "0 0 0.5rem 0.5rem",
          borderLeft: "1px solid",
          borderRight: "1px solid",
          borderBottom: "1px solid",
          borderColor: theme === "dark" ? "rgb(39 39 42)" : "rgb(228 228 231)",
          fontSize: "0.875rem",
          lineHeight: "1.25rem",
        }}
        showLineNumbers={false}
        wrapLines={true}
        wrapLongLines={true}
      >
        {value.code}
      </SyntaxHighlighter>
    </div>
  );
}