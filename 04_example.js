const fetch = require('node-fetch');
async function JianShuRequest(id) {
    const url     = `https://www.jianshu.com/users/b0c7095032f3/collections_and_notebooks?slug=${id}`,
          request = await fetch(url);
    return await request.json();
}
var bookname = async () => {
    console.time('time');
    // const data_1 = await JianShuRequest('b0c7095032f3');
    // const data_2 = await JianShuRequest('b0c7095032f3');
    // console.log(`bookname: ${data_1.notebooks[2].name}`);
    // console.log(`bookname: ${data_2.notebooks[4].name}`);

    const dataPromise_1 = JianShuRequest('b0c7095032f3');
    const dataPromise_2 = JianShuRequest('b0c7095032f3');
    const data_1 = await dataPromise_1;
    const data_2 = await dataPromise_2;
    console.log(`bookname: ${data_1.notebooks[2].name}`);
    console.log(`bookname: ${data_2.notebooks[4].name}`);
    console.timeEnd('time');
}
bookname()