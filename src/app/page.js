import React from "react";

import { readFile, writeFile } from "../helpers/file-helpers";

import ButtonCensored from "../components/ButtonCensored";

const DATABASE_PATH = "/src/database.json";

/*
`readFile` takes 1 argument:
• the path to the file:

readFile('/path/to/file');

`writeFile` takes 2 arguments:
• The path to the file
• The new contents for the file

writeFile(
  '/path/to/file',
  '{ "hello": "world" }'
);
*/

function Home() {
  const dbFileContents = readFile(DATABASE_PATH);
  const db = JSON.parse(dbFileContents);
  writeFile(DATABASE_PATH, `{ "hits": ${db.hits + 1} }`);

  return (
    <main>
      <h1>Welcome!</h1>
      <p>
        You are visitor number{" "}
        <ButtonCensored>{db.hits}</ButtonCensored>.
      </p>
    </main>
  );
}

export default Home;
