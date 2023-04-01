import  * as request from "./requester";

const baseUrl = "http://localhost:3030/data/comments";

export const create = async (quoteId, comment, anonymous) => {
    const res = await request.post(baseUrl, {quoteId, text:comment, hide:anonymous});
    
    
    return res;
    
}

export const getByGameId = (quoteId) => {
    const relations = encodeURIComponent(`user=_ownerId:users`);
    const search = encodeURIComponent(`quoteId="${quoteId}"`);

    return request.get(`${baseUrl}?where=${search}&load=${relations}`);
}

export const deleteComment = async (id) => {
    const res = await request.del(`${baseUrl}/${id}`);
    return res;
}