const fetch = require('node-fetch');
async function JianShuRequest(id) {
    const url     = `https://www.jianshu.com/users/b0c7095032f3/collections_and_notebooks?slug=${id}`,
          request = await fetch(url);
    if(request.status != 200) {
        throw new Error(request.statusText);
    }
    return await request.json();
}
const showJianShuRequest = async (id) => {
    try {
        const data = await JianShuRequest(id);
        console.log(`bookname: ${data.notebooks[4].name}`);
    }catch (err) {
        console.error(err);
    }
}
showJianShuRequest('666666');