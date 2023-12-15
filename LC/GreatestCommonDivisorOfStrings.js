let chunk_size = 1;
    
const arrayOfChunks = (str, chunkSize) => {
    let res = [];

    for (let i = 0; i < str.length; i += chunkSize) {
        const chars = str.slice(i, chunkSize);
        console.log("Chars >>>", chars);
        res.push(chars)
    }
    console.log("Res >>>", res);
    return res;
}

arrayOfChunks("ABCABCABCABCABCABC", 3);