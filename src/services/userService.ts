import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
} from "firebase/firestore";

import { db } from "@/lib/firebase";
import { UserProfile } from "@/types/user";

export async function createUserProfile(user: UserProfile) {
  await setDoc(doc(db, "users", user.uid), user);
}

export async function getUserProfile(uid: string) {
  const snapshot = await getDoc(doc(db, "users", uid));

  if (!snapshot.exists()) {
    return null;
  }

  return snapshot.data() as UserProfile;
}

export async function updateUserProfile(
  uid: string,
  data: Partial<UserProfile>
) {
  await updateDoc(doc(db, "users", uid), data);
}
