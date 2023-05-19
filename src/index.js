import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import BuscarProduto from "./screens/BuscarProduto";
import BuscarAnimal from "./screens/BuscarAnimal";
import BuscarPessoa from "./screens/BuscarPessoa";
import BuscarCarro from "./screens/BuscarCarro";
import BuscarFruta from "./screens/BuscarFruta";
import BuscarCor from "./screens/BuscarCor";

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="BuscarProduto"
                    component={BuscarProduto}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="BuscarAnimal"
                    component={BuscarAnimal}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="BuscarPessoa"
                    component={BuscarPessoa}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="BuscarCarro"
                    component={BuscarCarro}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="BuscarFruta"
                    component={BuscarFruta}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="BuscarCor"
                    component={BuscarCor}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}