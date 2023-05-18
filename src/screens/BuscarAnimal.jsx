import { FlatList, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

export default function BuscarAnimal({navigation}){
    const [nomeDoAnimal, setNomeDoAnimal] = useState("");
    const [animais, setAnimais] = useState([])

    async function queryAnimais(nomeDoAnimal = null){
        try{
            if(!nomeDoAnimal) return
            if (nomeDoAnimal === "todos" || nomeDoAnimal === "Todos"){
                const animaisRef = collection(db, "animal");
                const querySnapshot = await getDocs(animaisRef);
                const animaisTemp = [];
                querySnapshot.forEach(
                    (doc) => {
                        animaisTemp.push(doc.data());
                    }
                );
                setAnimais(animaisTemp);
                return
            } else {
                const animaisRef = collection(db, "animal");
                const queryAnimais = query(animaisRef, where("especie", "==", nomeDoAnimal));
                const querySnapshot = await getDocs(queryAnimais);
                const animaisTemp = [];
                querySnapshot.forEach(
                    (doc) => {
                        animaisTemp.push(doc.data());
                  },
                  setAnimais(animaisTemp)
            );
            
            }
            
        }catch(error){console.log(error);}
    }
    useEffect(()=> {
        queryAnimais(nomeDoAnimal);
    }, [nomeDoAnimal])

    return(
        <View>
            <Text>Buscar Animal</Text>
            <Text>Digite uma espécie em específico (primeira letra maiúscula), ou digite "todos" para ver todos os animais.</Text>
            <TextInput
                label="Digite a espécie do animal"
                value={nomeDoAnimal}
                onChangeText={setNomeDoAnimal}
            />
            <FlatList 
                data={animais}
                renderItem={({item}) => <Text>Nome: {item.nome}, espécie: {item.especie}, raça: {item.raca}</Text>}
                keyExtractor={(item) => item.id}
            />
            <Button
                mode="contained"
                onPress={()=>{queryAnimais("todos")}}
            >Mostrar todos os animais</Button>
            <Button
                mode="contained"
                onPress={()=>{navigation.goBack()}}
            >Voltar</Button>
        </View>
    )
}