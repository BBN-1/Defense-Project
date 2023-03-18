const baseUrl = 'http://localhost:3030/data'

export const getLastThree = async () => {

    const req = await fetch(`${baseUrl}/quotes`);
    const res = await req.json();
    const firstThreeQuotes = res.splice(-3)
    return firstThreeQuotes;
   
};

//Random number generator //

// export const randomQuoteNumberGenerator = (arrLength) => {
//     return Math.floor(Math.random() * arrLength)
// }