import { User } from "../Interfaces/IForm";
import { collection, addDoc, getDocs, doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "./FirebaseApp";





export const registrarUser = async (p: User) => {


  const docRef = await addDoc(collection(db, "users"), p)

}

export const obtenerUsuarios = async () => {
  const querySnapshot = await getDocs(collection(db, "users"));
  console.log("CHAOOO")
  console.log(querySnapshot)
  var users: User[] = []
  querySnapshot.forEach((d) => {
    console.log(d.id)
    console.log(d.data())
    var p: User = {
      nombre: d.data().nombre,
      email: d.data().email,
      edad: parseInt(d.data().edad),
      idUsuario: d.id
    }
    users.push(p)
  })
  return users
}
export const obtenerUsuario = async (idUsuario: string) => {
  const docRef = doc(db, "users", idUsuario);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const p: User = {
      nombre: docSnap.data().nombre,
      email: docSnap.data().email,
      edad: docSnap.data().edad,
      idUsuario: docSnap.id
    }
    return p
  } else {
    // docSnap.data() will be undefined in this case
    return undefined
  }
}
export const actualizarUsuario = async (idUsuario: string, p: User) => {
  const docRef = doc(db, "users", idUsuario);

  // Set the "capital" field of the city 'DC'
  await updateDoc(docRef, { ...p });
}
export const eliminarUsuario = async (idUsuario: string) => {
  await deleteDoc(doc(db, "users", idUsuario));
}