// Configuration 
const API_URL: string = 'https://asse-api-production.up.railway.app';

const playersURL : string = `${API_URL}/players`
const standingURL : string = `${API_URL}/standings`
const fixturesgURL : string = `${API_URL}/fixtures`

// For a single team
const teamURL = (id? : string) => `${API_URL}/teams/${id}`

export {
    API_URL,
    playersURL,
    standingURL,
    fixturesgURL,
    teamURL,
};