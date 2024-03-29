import React from "react";
import {
  ImageBackground,
  Image,
  StyleSheet,
  StatusBar,
  Dimensions
} from "react-native";
import { Block, Button, Text, theme } from "galio-framework";

const { height, width } = Dimensions.get("screen");

import argonTheme from "../constants/Theme";
import Images from "../constants/Images";

class Onboarding extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <Block flex style={styles.container}>
        <StatusBar hidden />
        <Block flex center>
        <ImageBackground
            source={Images.Onboarding}
            style={{ height, width, zIndex: 1 }}
          />
        </Block>
        <Block center>
          <Image source={Images.LogoOnboarding} style={styles.logo} />
        </Block>
        <Block flex space="between" style={styles.padded}>
            <Block flex space="around" style={{ zIndex: 2 }}>
              <Block style={styles.title}>
                {/* <Block>
                  <Text color="white" size={60}>
                    
                  </Text>
                </Block> */}
                <Block>
                  <Text color="white" size={65}>
                    Bienvenido
                  </Text>
                </Block>
                {/* <Block style={styles.subTitle}>
                  <Text color="white" size={16}>
                    
                  </Text>
                </Block> */}
              </Block>
              <Block center style={styles.button}>
                <Button
                  
                  color={argonTheme.COLORS.SECONDARY}
                  onPress={() => navigation.navigate("Login")}
                  textStyle={{ color: argonTheme.COLORS.BLACK }}
                >
                  Iniciar Sesión
                </Button>
                
              </Block>
              <Block center style={styles.button2}>
                <Button
                    
                    color={argonTheme.COLORS.SECONDARY}
                    onPress={() => navigation.navigate("Registro")}
                    textStyle={{ color: argonTheme.COLORS.BLACK }}
                  >Registrarse</Button>
              </Block>
          </Block>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.BLACK
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    position: "relative",
    bottom: theme.SIZES.BASE,
    zIndex: 2,
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
    borderRadius: 35
  },
  button2: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
    marginTop:'-25%',
    borderRadius: 35
  },
  logo: {
    width:250,
    height: 75,
    zIndex: 2,
    position: 'relative',
    marginTop: '-50%'
  },
  title: {
    marginTop:'-25%'
  },
  subTitle: {
    marginTop: 20
  }
});

export default Onboarding;
