const parser = new DOMParser();
const xml = `
                <list>
                <student>
                <name lang="en">
                    <first>Ivan</first>
                    <second>Ivanov</second>
                </name>
                <age>35</age>
                <prof>teacher</prof>
                </student>
                <student>
                <name lang="ru">
                    <first>Петр</first>
                    <second>Петров</second>
                </name>
                <age>58</age>
                <prof>driver</prof>
                </student>
                </list>`
const DomXml = parser.parseFromString(xml, "text/xml");
const listNode = DomXml.querySelector("list");
const studentNodes = [...listNode.querySelectorAll("student")];
const list = [];
studentNodes.forEach( studentNode => { 
  const nameNode = studentNode.querySelector("name");
  const langAttr = nameNode.getAttribute('lang');
  const firstNode = studentNode.querySelector("first");
  const secondNode = studentNode.querySelector("second");
  const ageNode = studentNode.querySelector("age");
  const profNode = studentNode.querySelector("prof");
  list.push({
    prof: profNode.textContent,
    first: firstNode.textContent,
    second: secondNode.textContent,
    lang: langAttr,
    age: Number(ageNode.textContent),
  });
});

const result = {
  list: list
};
console.log('result', result);