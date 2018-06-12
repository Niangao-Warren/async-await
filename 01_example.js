const fetch = require('node-fetch');
async function JianShuRequest(id) {
    const url     = `https://www.jianshu.com/users/b0c7095032f3/collections_and_notebooks?slug=${id}`,
          request = await fetch(url),
          data    = await request.json();
    console.log(`bookname: ${data.notebooks[4].name}`);
}
JianShuRequest('b0c7095032f3')