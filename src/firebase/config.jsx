import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDRUg30OBaGRhUuyOcWeh8KcHBfszHE0PY",
  authDomain: "cash-saver-bdd3e.firebaseapp.com",
  projectId: "cash-saver-bdd3e",
  storageBucket: "cash-saver-bdd3e.appspot.com",
  messagingSenderId: "1041247740869",
  appId: "1:1041247740869:web:cbef8478d73c8da4b721ac",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
