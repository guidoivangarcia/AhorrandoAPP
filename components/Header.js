import React from 'react';
import { withNavigation } from 'react-navigation';
import { TouchableOpacity, StyleSheet, Platform, Dimensions } from 'react-native';
import { Button, Block, NavBar, Text, theme } from 'galio-framework';

import Icon from './Icon';
import Input from './Input';
import Tabs from './Tabs';
import argonTheme from '../constants/Theme';

const { height, width } = Dimensions.get('window');
const iPhoneX = () => Platform.OS === 'ios' && (height === 812 || width === 812 || height === 896 || width === 896);

const BellButton = ({isWhite, style, navigation}) => (
  <TouchableOpacity style={[styles.button, style]} onPress={() => navigation.navigate('Profile')}>
    <Icon
      family="ArgonExtra"
      size={16}
      name="bell"
      color={argonTheme.COLORS[isWhite ? 'WHITE' : 'ICON']}
    />
    <Block middle style={styles.notify} />
  </TouchableOpacity>
);

const BasketButton = ({isWhite, style, navigation}) => (
  <TouchableOpacity style={[styles.button, style]} onPress={() => navigation.navigate('ListaDeCompras')}>
    <Icon
      family="ArgonExtra"
      size={16}
      name="basket"
      color={argonTheme.COLORS[isWhite ? 'WHITE' : 'ICON']}
    />
  </TouchableOpacity>
);

const GoBackButton = ({isWhite, style, navigation}) => (
  <TouchableOpacity style={[styles.button, style]} onPress={() => navigation.navigate('Home')}>
    <Icon
      family="ArgonExtra"
      size={22}
      name="nav-left"
      color={argonTheme.COLORS[isWhite ? 'WHITE' : 'ICON']}
    />
  </TouchableOpacity>
);

const GoBackButtonListas = ({isWhite, style, navigation}) => (
  <TouchableOpacity style={[styles.button, style]} onPress={() => navigation.navigate('Home')}>
    <Icon
      family="ArgonExtra"
      size={22}
      name="nav-left"
      color={argonTheme.COLORS[isWhite ? 'BLACK' : 'ICON']}
    />
  </TouchableOpacity>
);

const SearchButton = ({isWhite, style, navigation}) => (
  <TouchableOpacity style={[styles.button, style]} onPress={() => navigation.navigate('ListaDeCompras')}>
    <Icon
      size={16}
      family="Galio"
      name="search-zoom-in"
      color={theme.COLORS[isWhite ? 'WHITE' : 'ICON']}
    />
  </TouchableOpacity>
);

class Header extends React.Component {
  handleLeftPress = () => {
    const { back, navigation } = this.props;
    return (back ? navigation.goBack() : navigation.openDrawer());
  }
  renderRight = () => {
    const { white, title, navigation } = this.props;
    const { routeName } = navigation.state;

    if (title === 'Title') {
      return [
        <GoBackButton key='nav-left' navigation={navigation} isWhite={white} />,
        <BellButton key='chat-title' navigation={navigation} isWhite={white} />,
        <BasketButton key='basket-title' navigation={navigation} isWhite={white} />
      ]
    }

    switch (routeName) {
      case 'Home':
        return ([
          <BellButton key='chat-home' navigation={navigation} isWhite={white} />,
          <BasketButton key='basket-home' navigation={navigation} isWhite={white} />
        ]);
      case 'Deals':
        return ([
          <GoBackButton key='nav-left' navigation={navigation} isWhite={white} />,
          <BellButton key='chat-categories' navigation={navigation} />,
          <BasketButton key='basket-categories' navigation={navigation} />
        ]);
      case 'Categories':
        return ([
          <GoBackButton key='nav-left' navigation={navigation} isWhite={white} />,
          <BellButton key='chat-categories' navigation={navigation} isWhite={white} />,
          <BasketButton key='basket-categories' navigation={navigation} isWhite={white} />
        ]);
      case 'Category':
        return ([
          <GoBackButton key='nav-left' navigation={navigation} isWhite={white} />,
          <BellButton key='chat-deals' navigation={navigation} isWhite={white} />,
          <BasketButton key='basket-deals' navigation={navigation} isWhite={white} />
        ]);
      case 'Profile':
        return ([
          <GoBackButton key='nav-left' navigation={navigation} isWhite={white} />,
          <BellButton key='chat-profile' navigation={navigation} isWhite={white} />,
          <BasketButton key='basket-deals' navigation={navigation} isWhite={white} />
        ]);
      case 'Product':
        return ([
          <GoBackButton key='nav-left' navigation={navigation} isWhite={white} />,
          <SearchButton key='search-product' navigation={navigation} isWhite={white} />,
          <BasketButton key='basket-product' navigation={navigation} isWhite={white} />
        ]);
      case 'Search':
        return ([
          <GoBackButton key='nav-left' navigation={navigation} isWhite={white} />,
          <BellButton key='chat-search' navigation={navigation} isWhite={white} />,
          <BasketButton key='basket-search' navigation={navigation} isWhite={white} />
        ]);
      case 'Settings':
        return ([
          <GoBackButton key='nav-left' navigation={navigation} isWhite={white} />,
          <BellButton key='chat-search' navigation={navigation} isWhite={white} />,
          <BasketButton key='basket-search' navigation={navigation} isWhite={white} />
        ]);
      case 'ListasGuardadas':
        return ([
          <GoBackButton key='nav-left' navigation={navigation} isWhite={white} />
        ]);
      case 'MapDirections':
        return ([
          <GoBackButton key='nav-left' navigation={navigation} isWhite={white} />
        ]);
      case 'RutaMapa':
        return ([
          <GoBackButton key='nav-left' navigation={navigation} isWhite={white} />
        ]);
      case 'ListaDeComprasAlcohol':
        return ([
          <GoBackButtonListas key='nav-left' navigation={navigation} isWhite={white} />
        ]);
      case 'ListaDeCompras':
        return ([
          <GoBackButtonListas key='nav-left' navigation={navigation} isWhite={white} />
        ]);
      case 'ListaDeComprasCuidadoPersonal':
          return ([
            <GoBackButtonListas key='nav-left' navigation={navigation} isWhite={white} />
          ]);
      case 'ListaDeComprasKiosco':
        return ([
          <GoBackButtonListas key='nav-left' navigation={navigation} isWhite={white} />
        ]);
      case 'ListaDeComprasMascotas':
        return ([
          <GoBackButtonListas key='nav-left' navigation={navigation} isWhite={white} />
        ]);
      case 'ListaDeComprasLimpieza':
        return ([
          <GoBackButtonListas key='nav-left' navigation={navigation} isWhite={white} />
        ]);
        case 'ListaDeComprasTabaco':
        return ([
          <GoBackButtonListas key='nav-left' navigation={navigation} isWhite={white} />
        ]);
        case 'ListaDeComprasBebes':
        return ([
          <GoBackButtonListas key='nav-left' navigation={navigation} isWhite={white} />
        ]);
      default:
        break;
    }
  }
  renderSearch = () => {
    const { navigation } = this.props;
    return (
      <Input
        right
        color="black"
        style={styles.search}
        placeholder="Que estas buscando?"
        placeholderTextColor={'#8898AA'}
        // onFocus={() => navigation.navigate('Pro')}
        iconContent={<Icon size={16} color={theme.COLORS.MUTED} name="search-zoom-in" family="ArgonExtra" />}
      />
    );
  }
  renderOptions = () => {
    const { navigation, optionLeft, optionRight } = this.props;

    return (
      <Block row style={styles.options}>
        <Button shadowless style={[styles.tab, styles.divider]} onPress={() => navigation.navigate('ListaDeCompras')}>
          <Block row middle>
            <Icon name="diamond" family="ArgonExtra" style={{ paddingRight: 8}} color={argonTheme.COLORS.ICON} />
            <Text size={16} style={styles.tabTitle}>{optionLeft || 'Promociones'}</Text>
          </Block>
        </Button>
        <Button shadowless style={styles.tab} onPress={() => navigation.navigate('ListasGuardadas')}>
          <Block row middle>
            <Icon size={16} name="bag-17" family="ArgonExtra"  color={argonTheme.COLORS.ICON}/>
            <Text size={16} style={styles.tabTitle}>{optionRight || 'Listas de Compras'}</Text>
          </Block>
        </Button>
      </Block>
    );
  }
  renderTabs = () => {
    const { tabs, tabIndex, navigation } = this.props;
    const defaultTab = tabs && tabs[0] && tabs[0].id;
    
    if (!tabs) return null;

    return (
      <Tabs
        data={tabs || []}
        initialIndex={tabIndex || defaultTab}
        onChange={id => navigation.setParams({ tabId: id })} />
    )
  }
  renderHeader = () => {
    const { search, options, tabs } = this.props;
    if (search || tabs || options) {
      return (
        <Block center>
          {search ? this.renderSearch() : null}
          {/* {options ? this.renderOptions() : null} */}
          {/* {tabs ? this.renderTabs() : null} */}
        </Block>
      );
    }
  }
  render() {
    const { back, title, white, transparent, bgColor, iconColor, titleColor, navigation, ...props } = this.props;
    const { routeName } = navigation.state;
    const noShadow = ['Search', 'Categories', 'Deals', 'Pro', 'Profile'].includes(routeName);
    const headerStyles = [
      !noShadow ? styles.shadow : null,
      transparent ? { backgroundColor: 'rgba(0,0,0,0)' } : null,
    ];

    const navbarStyles = [
      styles.navbar,
      bgColor && { backgroundColor: bgColor }
    ];

    return (
      <Block style={headerStyles}>
        <NavBar
          back={back}
          title={title}
          style={navbarStyles}
          transparent={transparent}
          right={this.renderRight()}
          rightStyle={{ alignItems: 'center' }}
          left={
            <Icon 
              name={back ? 'nav-left' : "menu-8"} family="ArgonExtra" 
              size={14} onPress={this.handleLeftPress} 
              color={iconColor || argonTheme.COLORS.ICON}/>
          }
          leftStyle={{ paddingVertical: 12, flex: 0.2 }}
          titleStyle={[
            styles.title,
            { color: argonTheme.COLORS[white ? 'WHITE' : 'HEADER'] },
            titleColor && { color: titleColor }
          ]}
          {...props}
        />
        {this.renderHeader()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    padding: 12,
    position: 'relative',
  },
  title: {
    width: '100%',
    fontSize: 16,
    fontWeight: 'bold',
  },
  navbar: {
    paddingVertical: 0,
    paddingBottom: theme.SIZES.BASE * 1.5,
    paddingTop: iPhoneX ? theme.SIZES.BASE * 4 : theme.SIZES.BASE,
    zIndex: 5,
  },
  shadow: {
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.2,
    elevation: 3,
  },
  notify: {
    backgroundColor: argonTheme.COLORS.LABEL,
    borderRadius: 4,
    height: theme.SIZES.BASE / 2,
    width: theme.SIZES.BASE / 2,
    position: 'absolute',
    top: 9,
    right: 12,
  },
  header: {
    backgroundColor: theme.COLORS.WHITE,
  },
  divider: {
    borderRightWidth: 0.3,
    borderRightColor: theme.COLORS.ICON,
  },
  search: {
    height: 48,
    width: width - 32,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: argonTheme.COLORS.BORDER
  },
  options: {
    marginBottom: 24,
    marginTop: 10,
    elevation: 4,
  },
  tab: {
    backgroundColor: theme.COLORS.TRANSPARENT,
    width: width * 0.35,
    borderRadius: 0,
    borderWidth: 0,
    height: 24,
    elevation: 0,
  },
  tabTitle: {
    lineHeight: 19,
    fontWeight: '400',
    color: argonTheme.COLORS.HEADER
  },
});

export default withNavigation(Header);
