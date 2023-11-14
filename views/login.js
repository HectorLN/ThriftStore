import react from "react";
import { StatusBar } from "expo-status-bar";
import { Image } from "expo-image";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
} from "react-native";

import CheckBox from "@react-native-community/checkbox";

const windowWidth = Dimensions.get("window").width;
const Login = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image
        style={styles.imageCont}
        source={require("../assets/background1.jpg")}
      />
      <Text style={styles.title}>Iniciar sesión</Text>
      <TextInput style={styles.textInput} placeholder="Correo" />
      <TextInput
        style={styles.textInput}
        placeholder="Contraseña"
        secureTextEntry={true}
      />

      <TouchableOpacity>
        <Text style={styles.forgot}>¿Olvidaste tu contraseña?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text style={{ textAlign: "center", color: "#fff" }}>
          Iniciar sesión
        </Text>
      </TouchableOpacity>
      <Text style={styles.subtitle}>O inicia sesión con</Text>
      <View style={styles.signIn}>
        <TouchableOpacity style={styles.brand}>
          <Image
            style={{ width: 60, height: 60 }}
            source={require("../assets/google.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.brand}>
          <Image
            style={{ width: 55, height: 55 }}
            source={require("../assets/facebook.png")}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Text style={styles.register}>¿No tienes cuenta? Registrate aquí</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
  },

  imageCont: {
    contentFit: "cover",
    height: 200,
    width: windowWidth,
    justifyContent: "flex-start",
    borderRadius: 30,
  },

  title: {
    marginTop: "10%",
    fontSize: 40,
    fontWeight: "bold",
    color: "#171D1C",
    justifyContent: "center",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#808080",
    padding: 10,
    paddingStart: 20,
    width: "80%",
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: "#EDF2F4",
    justifyContent: "center",
  },
  subtitle: {
    marginTop: 20,
    color: "#808080",
    fontSize: 15,
    padding: 30,
  },
  btn: {
    borderColor: "#808080",
    padding: 10,
    paddingStart: 20,
    width: "80%",
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: "#6E7DAB",
    justifyContent: "center",
  },
  signIn: {
    marginTop: 20,
    borderRadius: 30,
    flexDirection: "row",
    columnGap: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  brand: {
    width: 53,
    height: 53,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#808080",
    backgroundColor: "#EDF2F4",
    justifyContent: "center",
    alignItems: "center",
  },
  register: {
    marginTop: 20,
    color: "#808080",
    fontSize: 15,
    padding: "10%",
  },
  forgot: {
    marginTop: 20,
    color: "#808080",
    fontSize: 15,
  },
});
