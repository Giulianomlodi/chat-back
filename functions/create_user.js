const admin = require('firebase-admin');

module.exports = functions(req, res) {
  // verifica che l'utente ha invito il numero di telefono

  if (!req.body.phone) {
    return res.status(422).send({error:'Nessun numero inserito'});
  }

  // formattare il numero per eliminare caratteri speciali

  const phone = String(req.body.phone).replace(/[^\d]/g, "");


  // Creare un nuovo utente usando il numero di telefono

  admin.auth().createUser({ uid: phone })
    .then(user => res.send(user))
    .catch(err => res.status(422).send({ error:err }));

  // Inviare un messaggio all'utente di conferma che l'account è stato creato


}
