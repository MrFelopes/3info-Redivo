import { FlatList, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import styles from "../utils/styles";

export default function BuscarCor({navigation}){
    const [nomeDaCor, setNomeDaCor] = useState("");
    const [cores, setCores] = useState([])

    async function queryCores(nomeDaCor = null){
        try{
            if(!nomeDaCor) return
            if (nomeDaCor === "todos" || nomeDaCor === "Todos"){
                const coresRef = collection(db, "cor");
                const querySnapshot = await getDocs(coresRef);
                const coresTemp = [];
                querySnapshot.forEach(
                    (doc) => {
                        coresTemp.push(doc.data());
                    }
                );
                setCores(coresTemp);
                return
            } else {
                const coresRef = collection(db, "cor");
                const queryCores = query(coresRef, where("nome", "==", nomeDaCor));
                const querySnapshot = await getDocs(queryCores);
                const coresTemp = [];
                querySnapshot.forEach(
                    (doc) => {
                        coresTemp.push(doc.data());
                  },
                  setCores(coresTemp)
            );
            
            }
            
        } catch(error){console.log(error);}
    }
    useEffect(()=> {
        queryCores(nomeDaCor);
    }
    , [nomeDaCor])

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Buscar Cor</Text>
            <Text style={styles.subtitle}>Digite uma cor em específico (primeira letra maiúscula), ou digite "todos" para ver todas as cores.</Text>
            <TextInput
                label="Digite o nome da cor"
                value={nomeDaCor}
                onChangeText={setNomeDaCor}
                underlineColor="#fff"
                style={styles.input}
                theme={
                    {colors: {
                        placeholder: "#fff",
                        primary: "#d3d3d3",
                        onSurfaceVariant: "#ececec",
                    }}
                    
                }
                outlineColor="#fff"
            />
            <FlatList
                data={cores}
                renderItem={({item}) => <Text style={styles.result}>Cor: {item.cor}</Text>}
                keyExtractor={(item) => item.id}
            />
            <Button
                mode="contained"
                onPress={() => navigation.navigate("Home")}
                style={styles.backButton}
            >
                Voltar
            </Button>
        </View>
    )
}