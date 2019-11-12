import React from "react";
import { Easing, Animated } from "react-native";
import {
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer
} from "react-navigation";

import { Block } from "galio-framework";

// screens
import Home from "../screens/Home";
import Onboarding from "../screens/Onboarding";
import Pro from "../screens/Pro";
import Profile from "../screens/Profile";
import Login from "../screens/Login";
import Registro from "../screens/Registro";
import Recuperar from "../screens/Recuperar";
import Elements from "../screens/Elements";
import MapDirections from "../screens/MapDirections";
import Articles from "../screens/Articles";
import ListaDeCompras from "../screens/ListaDeCompras";
import ListasGuardadas from "../screens/ListasGuardadas";
import ListaDeComprasAlcohol from "../screens/ListaDeComprasAlcohol";
import MapaTiendas from "../screens/MapOnly";
// drawer
import Menu from "./Menu";
import DrawerItem from "../components/DrawerItem";

// header for screens
import Header from "../components/Header";

const transitionConfig = (transitionProps, prevTransitionProps) => ({
  transitionSpec: {
    duration: 400,
    easing: Easing.out(Easing.poly(4)),
    timing: Animated.timing
  },
  screenInterpolator: sceneProps => {
    const { layout, position, scene } = sceneProps;
    const thisSceneIndex = scene.index;
    const width = layout.initWidth;

    const scale = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
      outputRange: [4, 1, 1]
    });
    const opacity = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
      outputRange: [0, 1, 1]
    });
    const translateX = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex],
      outputRange: [width, 0]
    });

    const scaleWithOpacity = { opacity };
    const screenName = "Search";

    if (
      screenName === transitionProps.scene.route.routeName ||
      (prevTransitionProps &&
        screenName === prevTransitionProps.scene.route.routeName)
    ) {
      return scaleWithOpacity;
    }
    return { transform: [{ translateX }] };
  }
});

const ElementsStack = createStackNavigator({
  Elements: {
    screen: Elements,
    navigationOptions: ({ navigation }) => ({
      header: <Header title="Elements" navigation={navigation} />
    })
  }
},{
  cardStyle: {
    backgroundColor: "#F8F9FE"
  },
  transitionConfig
});

const ArticlesStack = createStackNavigator({
  Articles: {
    screen: Articles,
    navigationOptions: ({ navigation }) => ({
      header: <Header title="Articles" navigation={navigation} />
    })
  }
},{
  cardStyle: {
    backgroundColor: "#F8F9FE"
  },
  transitionConfig
});

const ProfileStack = createStackNavigator(
  {
    Profile: {
      screen: Profile,
      navigationOptions: ({ navigation }) => ({
        header: (
          <Header white transparent title="Mi Cuenta" iconColor={'#FFF'} navigation={navigation} />
        ),
        headerTransparent: true
      })
    }
  },
  {
    cardStyle: { backgroundColor: "#FFFFFF" },
    transitionConfig
  }
);
const ListasGuardadasStack = createStackNavigator(
  {
    ListasGuardadas: {
      screen: ListasGuardadas,
      navigationOptions: ({ navigation }) => ({
        header: (
          <Header white transparent title="Mis Listas" iconColor={'#FFF'} navigation={navigation} />
        ),
        headerTransparent: true
      })
    }
  },
  {
    cardStyle: { backgroundColor: "#FFFFFF" },
    transitionConfig
  }
);

const RecuperarStack = createStackNavigator(
  {
    Recuperar: {
      screen: Recuperar,
      navigationOptions: ({ navigation }) => ({
        header: (
          <Header white transparent title="Recuperar Contraseña" iconColor={'#FFF'} navigation={navigation} />
        ),
        headerTransparent: true
      })
    }
  },
  {
    cardStyle: { backgroundColor: "#FFFFFF" },
    transitionConfig
  }
);

const MapDirectionsStack = createStackNavigator(
  {
    MapDirections: {
      screen: MapaTiendas,
      navigationOptions: ({ navigation }) => ({
        header: (
          <Header white transparent title="Mapa" iconColor={'#FFF'} navigation={navigation} />
        ),
        headerTransparent: true
      })
    }
  },
  {
    cardStyle: { backgroundColor: "#FFFFFF" },
    transitionConfig
  }
);

const RutaMapaStack = createStackNavigator(
  {
    RutaMapa: {
      screen: MapDirections,
      navigationOptions: ({ navigation }) => ({
        header: (
          <Header white transparent title="Mapa" iconColor={'#FFF'} navigation={navigation} />
        ),
        headerTransparent: true
      })
    }
  },
  {
    cardStyle: { backgroundColor: "#FFFFFF" },
    transitionConfig
  }
);

const ListaDeComprasStack = createStackNavigator(
  {
    ListaDeCompras: {
      screen: ListaDeCompras,
      navigationOptions: ({ navigation }) => ({
        header: (
          <Header white transparent title="" iconColor={'#FFF'} navigation={navigation} />
        ),
        headerTransparent: true
      })
    }
  },
  {
    cardStyle: { backgroundColor: "#FFFFFF" },
    transitionConfig
  }
);



const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        header: <Header search options title="Inicio" navigation={navigation} />
      })
    },
    Pro: {
      screen: Pro,
      navigationOptions: ({ navigation }) => ({
        header: (
          <Header left={<Block />} white transparent title="" navigation={navigation} />
        ),
        headerTransparent: true
      })
    }
  },
  {
    cardStyle: {
      backgroundColor: "#F8F9FE"
    },
    transitionConfig
  }
);
// divideru se baga ca si cum ar fi un ecrna dar nu-i nimic duh
const ListaDeComprasAlcoholStack = createStackNavigator(
  {
    ListaDeComprasAlcohol: {
      screen: ListaDeComprasAlcohol,
      navigationOptions: ({ navigation }) => ({
        header: (
          <Header white transparent title="" iconColor={'#FFF'} navigation={navigation} />
        ),
        headerTransparent: true
      })
    }
  },
  {
    cardStyle: { backgroundColor: "#FFFFFF" },
    transitionConfig
  }
);


const AppStack = createDrawerNavigator(
  {
    Onboarding: {
      screen: Onboarding,
      navigationOptions: {
        drawerLabel: () => {}
      }
    },
    Home: {
      screen: HomeStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} title="Inicio" />
        )
      })
    },
    ListasGuardadas: {
      screen: ListasGuardadasStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} screen="ListasGuardadas" title="Mis Listas" />
        )
      })
    },
    Profile: {
      screen: ProfileStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} screen="Profile" title="Cuenta" />
        )
      })
    },
    MapDirections: {
      screen: MapDirectionsStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} screen="MapOnly" title="Mapa" />
        )
      })
    },
    RutaMapa: {
      screen: RutaMapaStack,
      navigationOptions: {
        drawerLabel: () => {}
      }
    },
    ListaDeCompras: {
      screen: ListaDeComprasStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} screen="ListaDeCompras" title="" />
        )
      })
    },

  //   navigationOptions: navOpt => ({
  //     drawerLabel: ({ focused }) => (
  //       <DrawerItem focused={focused} screen="MapOnly" title="" />
  //     )
  //   })
  // },

  
    // Account: {
    //   screen: Register,
    //   navigationOptions: navOpt => ({
    //     drawerLabel: ({ focused }) => (
    //       <DrawerItem focused={focused} screen="Register" title="Mi Lista" />
    //     )
    //   })
    // },
    // Elements: {
    //   screen: ElementsStack,
    //   navigationOptions: navOpt => ({
    //     drawerLabel: ({ focused }) => (
    //       <DrawerItem focused={focused} screen="Elements" title="Tiendas" />
    //     )
    //   })
    // },
    Login: {
      screen: Login,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} screen="Login" title="Salir" />
        )
      })
    },
    ListaDeComprasAlcohol: {
      screen: ListaDeComprasAlcoholStack,
      navigationOptions: {
        drawerLabel: () => {}
      }
    },
    Registro: {
      screen: Registro,
      navigationOptions: {
        drawerLabel: () => {}
      }
    },
    Recuperar: {
      screen: RecuperarStack,
      navigationOptions: navOpt => ({
        drawerLabel: () => {}
      })
    }
  },
  Menu
);

const AppContainer = createAppContainer(AppStack);
export default AppContainer;
