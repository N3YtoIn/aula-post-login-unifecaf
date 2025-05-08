import { CardLogin } from "@/src/components/card-login/card-login";
import { api } from "@/src/utils/server-config";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";
import { styles } from "./styles";

export const Login = () => {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  const submit = () => {
    api.post("/auth/login", {
      username: name,
      password: password
    }).then((resposta) => {
      console.log('RESPOSTA DO SERVICOR:',resposta)
    }).catch(() => {
      alert("Usuário ou Senha Incorreta!")
    })
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={styles.keyboardView}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
          <View style={styles.contentTop} />
          <View style={styles.contentBottom} />
          <View style={styles.contentAbsolute}>
            <Text style={styles.title}>Bem-vindo de volta!</Text>
            <Text style={styles.description}>
              Insira seus dados para entrar na sua conta.
            </Text>
            <CardLogin
              handleSubmit={submit}
              loading={false}
              name={name}
              setValueName={setName}
              setValuePassword={setPassword}
              password={password}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
