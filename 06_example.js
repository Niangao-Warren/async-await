const fetch = require('node-fetch');
async function JianShuRequest(id) {
    const url     = `https://www.jianshu.com/users/b0c7095032f3/collections_and_notebooks?slug=${id}`,
          request = await fetch(url);
    return await request.json();
}
const showJianShuRequest = async () => {
    const [data_1, data_2] = await Promise.all([
        JianShuRequest('b0c7095032f3'),
        JianShuRequest('b0c7095032f3'),
    ])
    console.log(`bookname_1: ${data_1.notebooks[2].name}`);
    console.log(`bookname_2: ${data_2.notebooks[4].name}`);
}
showJianShuRequest();