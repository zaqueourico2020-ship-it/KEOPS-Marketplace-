import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDAGAwYhQ7BP-cRKjWbbxF9TxgJnWN-8uI",
  authDomain: "keops-a9123.firebaseapp.com",
  projectId: "keops-a9123",
  storageBucket: "keops-a9123.firebasestorage.app",
  messagingSenderId: "172598465543",
  appId: "1:172598465543:web:44c5a8aacdabae005086a2",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
