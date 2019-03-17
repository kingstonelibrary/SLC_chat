const functions = require('firebase-functions');

exports.checkChatMessage = functions.region('asia-northeast1').firestore
  .document('/chatroom/chatroom1/messages/{id}')
  .onCreate( (snap, context)=> {

    const newValue = snap.data();
    let msg = newValue.msg;
    msg = msg.replace(/(しいたけ|椎茸|シイタケ)/g, '???');

    snap.ref.set({
      name: newValue.name,
       msg: msg,
      date: newValue.date,
       uid: newValue.uid,
      flag: true
    });

    return(0);
});