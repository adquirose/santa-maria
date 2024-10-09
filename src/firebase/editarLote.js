import { db } from "./firebaseConfig";
import { doc, updateDoc } from 'firebase/firestore'

const editarLote = async({...data}) => {
    const documento = doc(db,'proyectos/puerto-werner/lotes', data.id)
    return await updateDoc(documento, {
        ...data,
		valor: Number(data.valor)
    })
}
export default editarLote