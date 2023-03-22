import * as request from "./requester";

const baseUrl = "http://localhost:3030/data";

export const getLastThree = async () => {
    const all = await request.get(`${baseUrl}/quotes`);
    const lastThreeQuotes = all.splice(-3);

    return lastThreeQuotes;
};

export const getAll = async () => {
    const all = await request.get(`${baseUrl}/quotes`);

    return all;
};

export const getOne = async (id) => {
    const one = await request.get(`${baseUrl}/quotes/${id}`);

    return one;
};

export const createQuote = async (quote, authorization) => {
    const req = await fetch(`${baseUrl}/quotes`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Authorization": { authorization },
        },
        body: JSON.stringify(quote),
    });

    const res = await req.json();

    return res;
};

//Random number generator //

// export const randomQuoteNumberGenerator = (arrLength) => {
//     return Math.floor(Math.random() * arrLength)
// }
