import { collection, doc, getDoc } from "firebase/firestore";
import { database } from "./firebase";

export const getUserId = async (userEmail: string | number) => {
  const userRef = doc(database, `users/${userEmail}`);
  const userDocs = await getDoc(userRef);
  if (userDocs.exists()) {
    const { id } = userDocs.data();
    return id;
  }
};
