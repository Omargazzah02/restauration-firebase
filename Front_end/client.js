function storeToken(token) {
    localStorage.setItem('jwtToken', token);
    
}

function getToken() {
    return localStorage.getItem('jwtToken');
}

function removeToken() {
    localStorage.removeItem('jwtToken');
}


function getUserIdFromToken() {
    token = getToken()
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.id;
}


function getUserRoleFromToken() {
    token = getToken()
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.role;
}

function getUserNameFromToken() {
    token = getToken()
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.name;
}



User_id=getUserIdFromToken();



if (!User_id) {
    window.location.href = './inscrire.html'; // Redirection vers la page de connexion si aucun token n'est présent
} 












