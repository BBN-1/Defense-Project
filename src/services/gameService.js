const baseUrl = 'http://localhost:3030/data'

export const getLastThree = async () => {

    const req = await fetch(`${baseUrl}/quotes`);
    const res = await req.json();
    const firstThreeQuotes = res.splice(-3)
    return firstThreeQuotes;
   
};

export const getAll = async () => {

    const req = await fetch(`${baseUrl}/quotes`);
    const res = await req.json();
    
    return res;
   
};

export const getOne = async (id) => {

    const req = await fetch(`${baseUrl}/quotes/${id}`);
    const res = await req.json();

    return res;
}

export const createQuote = async (quote, authorization) => {

    const req = await fetch(`${baseUrl}/quotes`, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            "X-Authorization" : {authorization}
        },
        body: JSON.stringify(quote)
        
    })

    const res = await req.json()

    return res;
}



//Random number generator //

// export const randomQuoteNumberGenerator = (arrLength) => {
//     return Math.floor(Math.random() * arrLength)
// }