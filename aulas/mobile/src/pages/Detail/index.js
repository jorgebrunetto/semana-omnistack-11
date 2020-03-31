import React from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";

// Lib para que possa enviar e abrir o email
import * as MailComposer from "expo-mail-composer";

// DIP Link você usa uma URL

import logoImg from "../../assets/logo.png";

import styles from "./styles";

export default function Detail() {
    const navigation = useNavigation();
    const message = "Ola APAD, estou entrando em contato pois...";
    function navigateBack() {
        navigation.goBack();
    }
    function sendMail() {
        MailComposer.composeAsync({
            subject: "Tesskljflasdjç",
            recipients: ["jorge@otmasd.com"],
            body: message
        });
    }
    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=5515981376495&text=${message}`);
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#e02041" />
                </TouchableOpacity>
            </View>
            <View style={styles.incident}>
                <Text style={[styles.incidentProperty, { marginTop: 0 }]}>
                    ONG:
                </Text>
                <Text style={styles.incidentValue}>APD</Text>

                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>Clçadfj çalsdkj </Text>

                <Text style={styles.incidentProperty}>Valor:</Text>
                <Text style={styles.incidentValue}>120</Text>
            </View>
            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>ONG:</Text>
                <Text style={styles.heroTitle}>ONG:</Text>

                <Text style={styles.heroDescription}>120</Text>
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>Whatsapp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
