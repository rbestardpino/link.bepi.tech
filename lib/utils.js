import { nanoid } from "nanoid";
import { db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import { INVALID_SLUGS } from "./consts";

export function isValidUrl(str) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(str);
}

export function createSlug() {
  return nanoid(4);
}

export async function validSlug(slug) {
  if (INVALID_SLUGS.includes(slug)) return false;

  if (slug.includes("/")) return false;

  const docRef = doc(db, "urls", slug);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) return false;

  return true;
}
