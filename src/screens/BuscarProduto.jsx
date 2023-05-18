import { FlatList, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
export default function BuscarFruta({ navigation }) {
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
        <View>
            <Text>Buscar Produto</Text>
            <Text>Digite o nome de um produto em espécifico, ou digite "todos" para mostrar todos os itens.</Text>
            <TextInput
                label='Digite o nome do produto'
                value={nomeDoProduto}
                onChangeText={setNomeDoProduto}
            />
            <FlatList
                data={produtos}
                renderItem={({ item }) => <Text>Produto: {item.NomeDoProduto}, preço: {item.PrecoDoProduto}, disponível: {item.QuantidadeProduto}</Text>}
                keyExtractor={(item) => item.id}
            />
            <Button
                mode="contained"
                onPress={() => { navigation.goBack() }}
            >Voltar</Button>
        </View>
    )
}
