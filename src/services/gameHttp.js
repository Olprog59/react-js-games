export const getLastGames = async (page, pageSize) => {
    let response = await fetch(`https://api.rawg.io/api/games?ordering=released&page=${page}&page_size=${pageSize}`);
    return await response.json();
}

export const getBestGames = async (page, pageSize) => {
    let response = await fetch(`https://api.rawg.io/api/games?ordering=rating-released&page=${page}&page_size=${pageSize}`);
    return await response.json();
}
export const searchGames = async (name) => {
    let response = await fetch(`https://api.rawg.io/api/games?search=${name}`);
    return await response.json();
}
