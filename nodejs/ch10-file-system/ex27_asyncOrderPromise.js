const fs = require('fs').promises;

async function main() {
  console.log('시작');
  let data = await fs.readFile('./readme2.txt');
  console.log('1번', data.toString());
  data = await fs.readFile('./readme2.txt');
  console.log('2번', data.toString());
  data = await fs.readFile('./readme2.txt');
  console.log('3번', data.toString());
  console.log('끝');
}
main();
