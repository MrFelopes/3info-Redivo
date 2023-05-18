import {View} from "react-native"
import {Text, Button} from "react-native-paper"


export default function HomeScreen({navigation}) {
    return (
        <View>
            <Text>Bem-vindo(a) à Home Screen!</Text>
            <Button
                mode="contained"
                onPress={()=>{navigation.navigate("BuscarProduto")}}
            >Ir para a tela de Buscar Produto</Button>
            <Button
                mode="contained"
                onPress={()=>{navigation.navigate("BuscarAnimal")}}
            >Ir para a tela de Buscar Animal</Button>
        </View>
    )
}