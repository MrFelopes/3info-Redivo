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
                        title: "Trabalho Fausto - Felipe Redivo Fragoso (Home)",
                        headerStyle:{
                            backgroundColor: "#444",
                        },
                        headerTintColor: "#ececec",
                    }}
                    
                />
                <Stack.Screen
                    name="BuscarProduto"
                    component={BuscarProduto}
                    options={{
                        title: "Trabalho Fausto - Felipe Redivo Fragoso (Buscar produto)",
                        headerStyle:{
                            backgroundColor: "#444",
                        },
                        headerTintColor: "#ececec",
                        headerLeft: null,
                    }}
                />
                <Stack.Screen
                    name="BuscarAnimal"
                    component={BuscarAnimal}
                    options={{
                        title: "Trabalho Fausto - Felipe Redivo Fragoso (Buscar animal)",
                        headerStyle:{
                            backgroundColor: "#444",
                        },
                        headerTintColor: "#ececec",
                        headerLeft: null,
                    }}
                />
                <Stack.Screen
                    name="BuscarPessoa"
                    component={BuscarPessoa}
                    options={{
                        title: "Trabalho Fausto - Felipe Redivo Fragoso (Buscar pessoa)",
                        headerStyle:{
                            backgroundColor: "#444",
                        },
                        headerTintColor: "#ececec",
                        headerLeft: null,
                    }}
                />
                <Stack.Screen
                    name="BuscarCarro"
                    component={BuscarCarro}
                    options={{
                        title: "Trabalho Fausto - Felipe Redivo Fragoso (Buscar carro)",
                        headerStyle:{
                            backgroundColor: "#444",
                        },
                        headerTintColor: "#ececec",
                        headerLeft: null,
                    }}
                />
                <Stack.Screen
                    name="BuscarFruta"
                    component={BuscarFruta}
                    options={{
                        title: "Trabalho Fausto - Felipe Redivo Fragoso (Buscar fruta)",
                        headerStyle:{
                            backgroundColor: "#444",
                        },
                        headerTintColor: "#ececec",
                        headerLeft: null,
                    }}
                />
                <Stack.Screen
                    name="BuscarCor"
                    component={BuscarCor}
                    options={{
                        title: "Trabalho Fausto - Felipe Redivo Fragoso (Buscar cor)",
                        headerStyle:{
                            backgroundColor: "#444",
                        },
                        headerTintColor: "#ececec",
                        headerLeft: null,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}