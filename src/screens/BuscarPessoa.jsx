import { FlatList, View } from "react-native";
import { Button, TextInput, Text } from "react-native-paper";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../config/firebase";
import styles from "../utils/styles";

export default function BuscarPessoa({ navigation }) {
    const [nomeDaPessoa, setNomeDaPessoa] = useState("");
    const [pessoas, setPessoas] = useState([])

    async function queryPessoas(nomeDaPessoa = null) {
        try {
            if (!nomeDaPessoa) return
            if (nomeDaPessoa === "todos" || nomeDaPessoa === "Todos") {
                const pessoasRef = collection(db, "pessoa");
                const querySnapshot = await getDocs(pessoasRef);
                const pessoasTemp = [];
                querySnapshot.forEach(
                    (doc) => {
                        pessoasTemp.push(doc.data());
                    }
                );
                setPessoas(pessoasTemp);
                return
            } else {
                const pessoasRef = collection(db, "pessoa");
                const queryPessoas = query(pessoasRef, where("nome", "==", nomeDaPessoa));
                const querySnapshot = await getDocs(queryPessoas);
                const pessoasTemp = [];
                querySnapshot.forEach(
                    (doc) => {
                        pessoasTemp.push(doc.data());
                    },
                    setPessoas(pessoasTemp)
                );
                return

            }
} catch (error) { console.log(error); }
    }
    useEffect(() => {
        queryPessoas(nomeDaPessoa);
    }
        ,[nomeDaPessoa])
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Buscar Pessoa</Text>
                <Text style={styles.subtitle}>Digite o nome de uma pessoa em específico (primeira letra maiúscula), ou digite "todos" para ver todas as pessoas.</Text>
                <TextInput 
                    label="Digite o nome da pessoa"
                    value={nomeDaPessoa}
                    onChangeText={setNomeDaPessoa}
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
                    data={pessoas}
                    renderItem={({ item }) => <Text style={styles.result}>Nome: {item.nome}, idade: {item.idade}, ocupação: {item.ocupacao}</Text>}
                    keyExtractor={(item) => item.id}
                />
                <Button
                    mode="contained"
                    onPress={() => { navigation.goBack() }}
                    style={styles.backButton}
                >Voltar</Button>
            </View>
        )
        }