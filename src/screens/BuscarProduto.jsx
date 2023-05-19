import { FlatList, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import styles from "../utils/styles";
export default function BuscarProduto({ navigation }) {
    const [nomeDoProduto, setNomeDoProduto] = useState("");
    const [produtos, setProdutos] = useState([])
    async function queryProdutos(nomeDoProduto = null) {
        try {
            if (!nomeDoProduto) return
            if (nomeDoProduto === "todos" || nomeDoProduto === "Todos"){
                const produtosRef = collection(db, "produtos");
                const querySnapshot = await getDocs(produtosRef);
                const produtosTemp = [];
                querySnapshot.forEach(
                    (doc) => {
                        produtosTemp.push(doc.data());
                    }
                );
                setProdutos(produtosTemp);
                return
            } else {
                const produtosRef = collection(db, "produtos");
                const queryProdutos = query(produtosRef, where("NomeDoProduto", "==", nomeDoProduto));
                const querySnapshot = await getDocs(queryProdutos);
                const produtosTemp = [];
                querySnapshot.forEach(
                    (doc) => {
                        produtosTemp.push(doc.data());
                    },
                    setProdutos(produtosTemp)
                );
                return
            }
  
            
        } catch (error) { console.log(error); }
    }

    useEffect(() => {
        queryProdutos(nomeDoProduto);
    }, [nomeDoProduto])

    return (
        
        <View style={styles.container}>
            <Text style={styles.title}>Buscar Produto</Text>
            <Text style={styles.subtitle}>Digite o nome de um produto em espécifico (primeira letra maiúscula), ou digite "todos" para mostrar todos os itens.</Text>
            <TextInput
                label='Digite o nome do produto'
                value={nomeDoProduto}
                onChangeText={setNomeDoProduto}
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
                data={produtos}
                renderItem={({ item }) => <Text style={styles.result}>Produto: {item.NomeDoProduto}, preço: {item.PrecoDoProduto}, disponível: {item.QuantidadeProduto}</Text>}
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
