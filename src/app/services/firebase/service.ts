import { Injectable } from "@angular/core";
import { getFirestore, collection, getDocs, Firestore, CollectionReference, DocumentData, addDoc } from 'firebase/firestore/lite';
import { Grupo } from "../model/grupo.model";
import { app } from './config';

@Injectable({
    providedIn: 'root'
})
export class FireBaseService {
    db: Firestore ;
    constructor() {
        this.db = getFirestore(app);
    }

    public async getGrupos(): Promise<Grupo[]> {
        
        const collectionGrupos = collection(this.db, 'grupos');
        const documents =  getDocs(collectionGrupos);
        const data = (await documents).docs[0].data();
        const grupos = data.grupos as Grupo[];
        console.log(grupos);
        return grupos;
    }

    public async initGrupos(grupos: Grupo[]) {
        
        const collectionGrupos = collection(this.db, 'grupos');
        addDoc(collectionGrupos, {grupos: grupos});
        //console.log(docs);
    }
}
