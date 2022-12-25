import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCjU3cyThQXxiuQI0-BO-SQkS5KVacebf0",
  authDomain: "react-blog-app-84344.firebaseapp.com",
  databaseURL: "https://react-blog-app-84344-default-rtdb.firebaseio.com",
  projectId: "react-blog-app-84344",
  storageBucket: "react-blog-app-84344.appspot.com",
  messagingSenderId: "523792444295",
  appId: "1:523792444295:web:cf6734111368f451c9c122",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

database
  .ref()
  .set({
    title: "blog title 1",
    description: "blog description 2",
    author: {
      name: "Sadık",
      surname: "Turan",
    },
  })
  .then(() => {
    console.log("kayıt eklendi");
  })
  .catch((e) => {
    console.log("hata", e);
  });

database.ref().update({
  title: "blog title",
  description: "blog description",
  "author/name": "Çınar",
  imageUrl: "1.jpg",
});

database.ref("author").update({
  name: "Ahmet",
});
