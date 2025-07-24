function renameFiles(files) {
  debugger;
  const nameCount = {};
  const result = [];
  for (const file of files) {
    if (!nameCount[file]) {
      nameCount[file] = 1;
      result.push(file);
    } else {
      let newName;
      let n = 1;
      while (true) {
        newName = `${file}(${n})`;
        if (!nameCount[newName]) {
          break;
        }
        n++;
      }
      nameCount[newName] = 1;
      result.push(newName);
      nameCount[file]++; //increasing original file count
    }
  }
  return result;
}

renameFiles(["hello", "world", "hello", "hello", "hello"]);
