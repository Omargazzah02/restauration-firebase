
User_id=getUserIdFromToken();


if (!User_id) {
    window.location.href = './inscrire.html'; // Redirection vers la page de connexion si aucun token n'est présent
} 