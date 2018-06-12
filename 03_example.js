const fetch = require('node-fetch');
async function JianShuRequest(id) {
    const url     = `https://www.jianshu.com/users/b0c7095032f3/collections_and_notebooks?slug=${id}`,
          request = await fetch(url);
    return await request.json();
}
// (async () => {
//     const data = await JianShuRequest('b0c7095032f3');
//     console.log(`bookname: ${data.notebooks[4].name}`);
// })()
var bookname = async () => {
    const data = await JianShuRequest('b0c7095032f3');
    console.log(`bookname: ${data.notebooks[4].name}`);
}
bookname()