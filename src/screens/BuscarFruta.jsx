import { FlatList, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import styles from "../utils/styles";

export default function BuscarFruta({navigation}){
    const [nomeDaFruta, setNomeDaFruta] = useState("");
    const [frutas, setFrutas] = useState([])

    async function queryFrutas(nomeDaFruta = null){
        try{
            if(!nomeDaFruta) return
            if (nomeDaFruta === "todos" || nomeDaFruta === "Todos"){
                const frutasRef = collection(db, "fruta");
                const querySnapshot = await getDocs(frutasRef);
                const frutasTemp = [];
                querySnapshot.forEach(
                    (doc) => {
                        frutasTemp.push(doc.data());
                    }
                );
                setFrutas(frutasTemp);
                return
            } else {
                const frutasRef = collection(db, "fruta");
                const queryFrutas = query(frutasRef, where("nome", "==", nomeDaFruta));
                const querySnapshot = await getDocs(queryFrutas);
                const frutasTemp = [];
                querySnapshot.forEach(
                    (doc) => {
                        frutasTemp.push(doc.data());
                  },
                  setFrutas(frutasTemp)
            );
            
            }
            
        } catch(error){console.log(error);}
    }
    useEffect(()=> {
        queryFrutas(nomeDaFruta);
    }
    , [nomeDaFruta])

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Buscar Fruta</Text>
            <Text style={styles.subtitle}>Digite uma fruta em específico (primeira letra maiúscula), ou digite "todos" para ver todas as frutas.</Text>
            <TextInput
                label="Digite o nome da fruta"
                value={nomeDaFruta}
                onChangeText={setNomeDaFruta}
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
                data={frutas}
                renderItem={({item}) => <Text style={styles.result}>Fruta: {item.nome}, preço: {item.preco}</Text>}
                keyExtractor={(item) => item.id}
            />
            <Button
                mode="contained"
                onPress={() => navigation.navigate("Home")}
                style={styles.backButton}
            >Voltar para a Home</Button>
        </View>
    )
}