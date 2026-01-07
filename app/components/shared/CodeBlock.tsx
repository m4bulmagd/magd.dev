import { Refractor, registerLanguage } from 'react-refractor'
import Clipoboard from "./Clipoboard";

// Load any languages you want to use from `refractor`
import js from 'refractor/javascript'
import sql from 'refractor/sql'
import bash from 'refractor/bash'
import markdown from 'refractor/markdown'
import css from 'refractor/css'
import scss from 'refractor/scss'
import python from 'refractor/python'
import html from 'refractor/markup'
import yaml from 'refractor/yaml'
import graphql from 'refractor/graphql'
import json from 'refractor/json'
import java from 'refractor/java'
import ts from 'refractor/typescript'
import tsx from 'refractor/tsx'
import jsx from 'refractor/jsx'


// Then register them
registerLanguage(js)
registerLanguage(sql)
registerLanguage(bash)
registerLanguage(markdown)
registerLanguage(css)
registerLanguage(scss)
registerLanguage(python)
registerLanguage(html)
registerLanguage(yaml)
registerLanguage(graphql)
registerLanguage(json)
registerLanguage(java)
registerLanguage(ts)
registerLanguage(tsx)
registerLanguage(jsx)

type codeTypes = {
  value: {
    code: string;
    language: string;
    filename?: string | null;
  };
};

export default function CodeBlock({ value }: codeTypes) {
  return (
    <div className="my-6">
      <div className="flex items-center justify-between bg-zinc-50 dark:bg-[#141414] border dark:border-zinc-800 border-zinc-200 rounded-t-lg px-4 py-3 translate-y-2">
        {value.filename && <p className="text-sm">{value.filename}.{value.language}</p>}
        <Clipoboard content={value.code} />
      </div>
      <Refractor
        language={value.language ?? "jsx"}
        value={value.code}
        className="text-sm border-x border-b dark:border-zinc-800 border-zinc-200 rounded-b-lg tracking-normal"
      />
    </div>
  );
}