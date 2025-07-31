const fs = require('fs');


// Question 1 : Write a program to copy the contents of a file named source.txt to a new file named
// destination.txt. Check if the source file exists before copying.
if (fs.existsSync('source.txt')) {
 
  const data = fs.readFileSync('source.txt', 'utf8');

  
  fs.writeFileSync('destination.txt', data);

  console.log('✅ File copied successfully.');
} else {
  console.log('❌ source.txt does not exist.');
}

// Question 2 : Write a program to merge the contents of two files, “file1.txt” and “file2.txt”, into a
// new file named “merged.txt”.



if (fs.existsSync('file1.txt') && fs.existsSync('file2.txt')) {
  
  const file1Content = fs.readFileSync('file1.txt', 'utf8');
  const file2Content = fs.readFileSync('file2.txt', 'utf8');

 
  const mergedContent = file1Content + '\n' + file2Content;

  
  fs.writeFileSync('merged.txt', mergedContent);

  console.log('Files merged successfully into merged.txt');
} else {
  console.log('source files do not exist.');
}
