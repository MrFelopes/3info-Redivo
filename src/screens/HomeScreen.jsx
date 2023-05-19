import {View} from "react-native"
import {Text, Button} from "react-native-paper"
import styles from "../utils/styles"


export default function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem-vindo(a) à Home Screen!</Text>
            <Button
                mode="contained"
                onPress={()=>{navigation.navigate("BuscarProduto")}}
                style={styles.button}
            >Ir para a tela de Buscar Produto</Button>
            <Button
                mode="contained"
                onPress={()=>{navigation.navigate("BuscarAnimal")}}
                style={styles.button}
            >Ir para a tela de Buscar Animal</Button>
            <Button
                mode="contained"
                onPress={()=>{navigation.navigate("BuscarPessoa")}}
                style={styles.button}
            >Ir para a tela de Buscar Pessoa</Button>
            <Button
                mode="contained"
                onPress={()=>{navigation.navigate("BuscarCarro")}}
                style={styles.button}
            >Ir para a tela de Buscar Carro</Button>
            <Button
                mode="contained"
                onPress={()=>{navigation.navigate("BuscarFruta")}}
                style={styles.button}
            >Ir para a tela de Buscar Fruta</Button>
            <Button
                mode="contained"
                onPress={()=>{navigation.navigate("BuscarCor")}}
                style={styles.button}
            >Ir para a tela de Buscar Cor</Button>
        </View>
    )
}