document.getElementById('commentForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita l'invio del modulo
  
    // Ottieni i valori dai campi del modulo
    var name = document.getElementById('nameInput').value;
    var comment = document.getElementById('commentInput').value;
  
    // Crea un nuovo elemento li per visualizzare il commento
    var newComment = document.createElement('li');
    newComment.innerHTML = '<strong>' + name + '</strong>: ' + comment;
  
    // Aggiungi il commento alla lista dei commenti
    document.getElementById('commentList').appendChild(newComment);
  
    // Resetta i campi del modulo
    document.getElementById('nameInput').value = '';
    document.getElementById('commentInput').value = '';
  });
  
  