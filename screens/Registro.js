import React from "react";
import {
  Alert,
 // TextInput,
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView
} from "react-native";
import { Block, Checkbox, Text, theme } from "galio-framework";
import ApiController from '../controller/ApiController';
import { Button, Icon, Input } from "../components";
import { Images, argonTheme } from "../constants";

const { width, height } = Dimensions.get("screen");

class Registro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name: null,
        email: null,
        password: null,
    }
}

  // button() {
  //   const { navigate } = this.props.navigation;
    
  //   Alert.alert("Usuario Creado", "Sera redirigido al Inicio", [
  //     {    
  //       text: "Aceptar",
  //       onPress: () => navigate("Home")
  //     }
  //   ]);
  // }

//   checkCreate() {
//     if (this.state.email != null && this.state.password != null) {
//         ApiController.insertUsuario(this.state.name, this.state.email, this.state.password, this.okCreate.bind(this));
//         this.button();
//     } else {
//       Alert.alert("Error","Volver a intentar", [
//         {    
//           text: "Aceptar"
//         }
//       ]);
//     }
// }

// okCreate() {
//     //alert("Se creo el usuario exitosamente");
//     this.props.onPress();
// }


handleUsername = (text) => {
  this.setState({ username: text })
}
handlePassword = (text) => {
    this.setState({ password: text })
}
handleEmail = (text) => {
  this.setState({ email: text })
}

  registrarUsuario = (username, password, email) => {
    let usuarioRegistro = {
      email: email,
      username: username,
      password: password,
    }

    if (this.state.email == null || this.state.password == null || this.state.username == null || this.state.email == ' ' || this.state.password == ' ' || this.state.username == ' ') {
      Alert.alert("Error", "Volver a intentar", [
        {
          text: "Aceptar"
        }
      ]);
    } else {
      ApiController.registrarUsuario(this.okRegistro.bind(this), this.noOkRegistro.bind(this), usuarioRegistro);
      //Alert.alert("Bienvenido",'Hola ' + username + ', tu cuenta ha sido creada con exito!  seras redirigido al inicio...');
    }
  }

noOkRegistro()
{
  alert("El usuario indicado ya existe.");
}
okRegistro()
{
  Alert.alert("Bienvenido",'Hola tu cuenta ha sido creada con exito!  seras redirigido al inicio...');
  //lert("Usuario creado!");
  this.props.navigation.navigate('Home');
}


  render() {
    return (
      <Block flex middle>
        <StatusBar hidden />
        <ImageBackground
          source={Images.RegisterBackground}
          style={{ width, height, zIndex: 1 }}
        >
          <Block flex middle>
            <Block style={styles.registerContainer}>
              <Block flex={0.25} middle style={styles.socialConnect}>
                <Text color="#8898AA" size={12}>
                  Registrarse con
                </Text>
                <Block row style={{ marginTop: theme.SIZES.BASE }}>
                  <Button style={{ ...styles.socialButtons, marginRight: 30 }}>
                    <Block row>
                      <Icon
                        name="logo-facebook"
                        family="Ionicon"
                        size={14}
                        color={"black"}
                        style={{ marginTop: 2, marginRight: 5 }}
                      />
                      <Text style={styles.socialTextButtons}>FACEBOOK</Text>
                    </Block>
                  </Button>
                  <Button style={styles.socialButtons}>
                    <Block row>
                      <Icon
                        name="logo-google"
                        family="Ionicon"
                        size={14}
                        color={"black"}
                        style={{ marginTop: 2, marginRight: 5 }}
                      />
                      <Text style={styles.socialTextButtons}>GOOGLE</Text>
                    </Block>
                  </Button>
                </Block>
              </Block>
              <Block flex>
                <Block flex={0.17} middle>
                  <Text color="#8898AA" size={12}>
                    o cree una cuenta nueva de Ahorrando
                  </Text>
                </Block>
                <Block flex center>
                  <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior="padding"
                    enabled
                  >
                    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Input
                        borderless
                        placeholder="Usuario"
                        onChangeText={this.handleUsername}
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="hat-3"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                    </Block>
                    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Input
                        borderless
                        placeholder="Email"
                        onChangeText={this.handleEmail}
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="ic_mail_24px"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                    </Block>
                    <Block width={width * 0.8}>
                      <Input
                        password
                        borderless
                        placeholder="Contraseña"
                        onChangeText={this.handlePassword}
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="padlock-unlocked"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                      <Block row style={styles.passwordCheck}>
                        <Text size={12} color={argonTheme.COLORS.MUTED}>
                          Seguridad de la Contraseña:
                        </Text>
                        <Text bold size={12} color={argonTheme.COLORS.SUCCESS}>
                          {" "}
                          Segura
                        </Text>
                      </Block>
                    </Block>
                    <Block row width={width * 0.75}>
                      <Checkbox
                        checkboxStyle={{
                          borderWidth: 3
                        }}
                        color={argonTheme.COLORS.PRIMARY}
                        label="Estoy de acuerdo con los"
                      />
                      <Button
                        style={{ width: 100 }}
                        color="transparent"
                        textStyle={{
                          color: argonTheme.COLORS.PRIMARY,
                          fontSize: 14
                        }}
                      >
                        Terminos
                      </Button>
                    </Block>
                    <Block middle>
                      <Button onPress={() => this.registrarUsuario(this.state.username, this.state.password, this.state.email)} color="primary" style={styles.createButton}>
                        <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                          REGISTRARSE
                        </Text>
                      </Button>
                    </Block>
                  </KeyboardAvoidingView>
                </Block>
              </Block>
            </Block>
          </Block>
        </ImageBackground>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  registerContainer: {
    width: width * 0.9,
    height: height * 0.78,
    backgroundColor: "#F4F5F7",
    borderRadius: 4,
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: "hidden"
  },
  socialConnect: {
    backgroundColor: argonTheme.COLORS.WHITE,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#8898AA"
  },
  socialButtons: {
    width: 120,
    height: 40,
    backgroundColor: "#fff",
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1
  },
  socialTextButtons: {
    color: argonTheme.COLORS.PRIMARY,
    fontWeight: "800",
    fontSize: 14
  },
  inputIcons: {
    marginRight: 12
  },
  passwordCheck: {
    paddingLeft: 15,
    paddingTop: 13,
    paddingBottom: 30
  },
  createButton: {
    width: width * 0.5,
    marginTop: 25
  }
});

export default Registro;
