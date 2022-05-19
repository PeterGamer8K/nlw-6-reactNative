import React from "react";
import { 
    Text,
    View, 
    Image, 
    StatusBar,
} from "react-native";

import { styles } from "./styles";

import { ButtonIcon } from "../../components/ButtonIcon";

import IllustratorImage from "../../assets/illustration.png";

export function SingIn () {

    return (
    <View style={styles.container}>
        <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
        />
        <Image 
        source={IllustratorImage}
        style={styles.image}
        resizeMode="stretch"
    />

        <View style={styles.content}>
            <Text style={styles.title}>
                Conecte-se {'\n'}
                e organize suas {'\n'}
                jogatinas
            </Text>

            <Text style={styles.subtitle}>
                Crie grupos para jogar seus games {'\n'}
                favoritos com seus amigos
            </Text>

            <ButtonIcon 
                title="Entrar com discord"
            />
    </View>
    </View>
)
} 