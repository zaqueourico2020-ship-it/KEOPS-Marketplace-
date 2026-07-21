import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

import { app } from "@/lib/firebase";

const storage = getStorage(app);

export async function uploadProductImage(file: File) {
  const fileName = `products/${Date.now()}-${file.name}`;

  const storageRef = ref(storage, fileName);

  await uploadBytes(storageRef, file);

  const url = await getDownloadURL(storageRef);

  return url;
}
