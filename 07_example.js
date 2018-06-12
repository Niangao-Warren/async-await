const fetch    = require('node-fetch'),
      bluebird = require('bluebird');
async function JianShuRequest(id) {
    await bluebird.delay(1000);
    const url     = `https://www.jianshu.com/users/b0c7095032f3/collections_and_notebooks?slug=${id}`,
          request = await fetch(url);
    return await request.json();
}
const showJianShuRequest = async () => {
    console.time('time');
    const names = ['b0c7095032f3', 'b0c7095032f3'];
    
    // for(const name of names){
    //     const data = await JianShuRequest(name);
    //     console.log(`bookname_1: ${data.notebooks[2].name}`);
    //     console.log(`bookname_2: ${data.notebooks[4].name}`);
    // }

    const promises = names.map(x => JianShuRequest(x))
    for (const promise of promises) {
        const data = await promise;
        console.log(`bookname_1: ${data.notebooks[2].name}`);
        console.log(`bookname_2: ${data.notebooks[4].name}`);
    }

    console.timeEnd('time');
}
showJianShuRequest();