
let emptyArray = [];
console.log(emptyArray.length);
console.log('\n');

let programmingLanguages = ["JavaScript", "Python", "Java", "C#"];
console.log(programmingLanguages.length);
console.log('\n');

let classes = ["science, computer, art"];
console.log(classes.length);
console.log('\n');

let teachers = ["Jones", "Willoughby", "Rhodes"];
console.log(teachers.length);
console.log('\n');

// let programmingLanguages = ["JavaScript", "Python", "Java", "C#"];
console.log(programmingLanguages[-1]);
console.log(programmingLanguages[100]);
console.log('\n');

let javaScriptFrameworks = ["React", "Angular", "Ember"];
console.log(javaScriptFrameworks);

// Set the value of index 2 to be "Vue"
javaScriptFrameworks[2] = "Vue";

// Notice the value at index 2 is now "Vue"
console.log(javaScriptFrameworks);
console.log('\n');

// METHODS
console.log(programmingLanguages.indexOf('C#'));
console.log('\n');

console.log(programmingLanguages.includes('C'));
console.log('\n');

console.log(programmingLanguages.reverse());
console.log('\n');

console.log(programmingLanguages.sort());
console.log('\n');

console.log(programmingLanguages.pop());
console.log('\n');

console.log(programmingLanguages.push('C','C++','dBase','R','Unity'));
console.log('\n');
console.log(programmingLanguages.length);
console.log(programmingLanguages);
console.log('\n');

console.log(programmingLanguages.shift());
console.log('\n');

console.log(programmingLanguages.splice(1));
console.log('\n');

console.log(programmingLanguages.unshift('TEO', 'DOE'));
console.log(programmingLanguages);
console.log('\n');

let writers = ['TEO','HASE','ROLO','SHAN','BUCK','SAM','SPADE'];
writers.concat(programmingLanguages, writers)
console.log('\n');

console.log(writers.join('...'));
console.log('\n');

console.log(writers.slice(0,4));
console.log('\n');

console.log(writers.split);
console.log('\n');

let charles = ['coder', 'Tech', 47, 23, 350];
charles.sort();
console.log(charles);
console.log('\n');

let str = 'LaunchCode students rock!';
console.log(str.split(" "));
console.log('\n');

let groceryBag = ['bananas', 'apples', 'edamame', 'chips', 'cucumbers', 'milk', 'cheese'];
let selectedItems = [];

selectedItems = groceryBag.slice(2, 5).sort();
console.log(selectedItems);
console.log('\n');

let shuttleCrews = [
   ['Robert Gibson', 'Mark Lee', 'Mae Jemison'],
   ['Kent Rominger', 'Ellen Ochoa', 'Bernard Harris'],
   ['Eilen Collins', 'Winston Scott',  'Catherin Coleman']
];

console.log(shuttleCrews[0][2]);
console.log(shuttleCrews[1][1]);
console.log(shuttleCrews[2][1]);
console.log('\n');
/*
let shuttleCrews = [
   ['Robert Gibson', 'Mark Lee', 'Mae Jemison'],
   ['Kent Rominger', 'Ellen Ochoa', 'Bernard Harris'],
   ['Eilen Collins', 'Winston Scott',  'Catherin Coleman']
];
*/
let newCrew = ['Mark Polansky', 'Robert Curbeam', 'Joan Higginbotham'];

// Add a new crew array to the end of shuttleCrews
shuttleCrews.push(newCrew);
console.log(shuttleCrews[3][2]);

// Reverse the order of the crew at index 1
shuttleCrews[1].reverse();
console.log(shuttleCrews[1]);
console.log(shuttleCrews);
console.log('\n');

// 8.4.4. Check Your Understanding
let school = [
   ["science", "computer", "art"],
   ["Jones", "Willoughby", "Rhodes"]
];
console.log(school[1][0]);
console.log('\n');
// add "dance" to Array school
school.push("dance");
console.log(school);
console.log('\n');
// add "holmes" to array at school[1]
school[1].push("holmes");
console.log(school);
console.log('\n');




