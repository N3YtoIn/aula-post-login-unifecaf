import React from "react";
import { View } from "react-native";
import { ButtonDefault } from "../button-default/button-default";
import { InputWithTitle } from "../input-with-title/input-with-title";
import { styles } from "./styles";

interface ICardLogin {
  handleSubmit: () => void;
  loading: boolean;
  setValueName: (value: string) => void;
  setValuePassword: (value: string) => void;
  name: string;
  password: string;
}

export const CardLogin = ({
  handleSubmit,
  loading,
  setValueName,
  setValuePassword,
  name,
  password,
}: ICardLogin) => {
  return (
    <View style={styles.cardContainer}>
      <InputWithTitle onChangeText={setValueName} title="Nome" value={name} />

      <InputWithTitle
        onChangeText={setValuePassword}
        title="Senha"
        value={password}
        styleContainer={{ marginTop: 24 }}
        secureTextEntry
      />
      <ButtonDefault title="Entrar" onPress={handleSubmit} loading={loading} />
    </View>
  );
};
