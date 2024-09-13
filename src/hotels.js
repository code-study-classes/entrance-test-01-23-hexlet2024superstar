#!/usr/bin/env node

import fs from 'fs';
import getPath from "./get-path.js";

const reader = (fPath) => {
    const filePath = getPath(fPath);
    const fileData = fs.readFileSync(filePath, 'utf-8');
    // console.log(fileData);
    return fileData.split('\n');
}

export default reader;
