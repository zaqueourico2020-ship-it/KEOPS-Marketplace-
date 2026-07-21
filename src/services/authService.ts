import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  updateProfile,
} from "firebase/auth";

import { auth } from "@/lib/firebase";
import { createUserProfile } from "@/services/userService";
import { UserProfile, UserRole } from "@/types/user";

export async function login(email: string, password: string) {
  return signInWithEmailAndPassword(auth, email, password);
}

export async function register(
  name: string,
  email: string,
  password: string,
  role: UserRole = "customer"
) {
  const credential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  if (credential.user) {
    await updateProfile(credential.user, {
      displayName: name,
    });

    const profile: UserProfile = {
      uid: credential.user.uid,
      name,
      email,
      role,
      createdAt: Date.now(),
    };

    await createUserProfile(profile);
  }

  return credential;
}

export async function logout() {
  return signOut(auth);
}

export async function resetPassword(email: string) {
  return sendPasswordResetEmail(auth, email);
}
