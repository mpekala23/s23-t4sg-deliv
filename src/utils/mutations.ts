import {
  addDoc,
  collection,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { Entry, NewEntry } from "../types/Entry";
import { db } from "./firebase";

// Functions for database mutations

export const emptyEntry: NewEntry = {
  name: "",
  link: "",
  description: "",
  user: "",
  category: 0,
};

export async function addEntry(entry: NewEntry) {
  await addDoc(collection(db, "entries"), {
    name: entry.name,
    link: entry.link,
    description: entry.description,
    user: entry.user,
    category: entry.category,
    // The ID of the current user is logged with the new entry for database user-access functionality.
    // You should not remove this userid property, otherwise your logged entries will not display.
    userid: entry.userid,
  });
}

export async function updateEntry(entry: Entry) {
  const entryRef = doc(db, "entries", entry.id);
  await updateDoc(entryRef, {
    name: entry.name,
    link: entry.link,
    description: entry.description,
    user: entry.user,
    category: entry.category,
    userid: entry.userid,
  });
}

export async function deleteEntry(entry: Entry) {
  const docRef = doc(db, "entries", entry.id);
  await deleteDoc(docRef);
}
