import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import logoImg from "../../assets/logo.png";

import styles from "./styles";

export default function Detail() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <TouchableOpacity onPress={() => {}}>
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
            <View>
                <Text style={styles.heroTitle}>ONG:</Text>
                <Text style={styles.heroTitle}>ONG:</Text>

                <Text style={styles.heroDescription}>120</Text>
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={() => {}}>
                        <Text style={styles.actionText}>Whatsapp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onPress={() => {}}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
