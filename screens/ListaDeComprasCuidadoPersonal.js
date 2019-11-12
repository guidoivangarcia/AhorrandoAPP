import React from 'react';
import { ActivityIndicator, StyleSheet, Alert, Dimensions, ScrollView } from 'react-native';
import { Button, Block, theme } from 'galio-framework';
import { Card, Text, Body, CardItem, Header } from '../components';
import articles from '../constants/articulosLista';
const { width } = Dimensions.get('screen');

class ListaDeComprasCuidadoPersonal extends React.Component {
  
  renderArticles = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
        <Block flex>
          {/* <Card item={articles[0]} horizontal  /> */}
          <Block flex row>
            <Card item={articles[17]} style={{ marginRight: theme.SIZES.BASE }} >
            </Card>
            <Card item={articles[18]} />
            

          </Block>
          <Block flex row>
            <Card item={articles[19]} style={{ marginRight: theme.SIZES.BASE }} >
            </Card>
            <Card item={articles[20]} />

          </Block>
          <Block flex row  style={{ paddingBottom: 300 }}>
            <Card item={articles[21]} style={{ marginRight: theme.SIZES.BASE }} />
            <Card item={articles[22]} />
          </Block>

          {/* <Card item={articles[3]} horizontal />
          <Card item={articles[4]} full /> */}
          
        </Block>
        
      </ScrollView>
    )
  }
  onSubtract = (item, index) => {
    const data = [...this.state.data];
    data[item].cantidad -= 1;
    this.setState({ data });
  };

  onAdd = (item, index) => {
    const data = [...this.state.data];
    data[item].cantidad += 1;
    this.setState({ data });
  };
  
  button() {
    const { navigate } = this.props.navigation;
    Alert.alert(
      'Desea Guardar su Lista?',
      'Podrá utilizarla para futuras compras..',
      [
        {
          text: 'No',
          onPress: () => 
            Alert.alert("Precio calculado", "El local mas barato es Carrefour \nesta a 0.9 Km de tu Ubicación Actual", [
              {    
                text: "Generar Ruta",
                onPress: () => navigate("RutaMapa")
              }
            ]),
          style: 'cancel',
        },
        {text: 'Si', onPress: () => navigate("GuardarLista")}, // Esta pantalla no esta creada
      ],
      {cancelable: false},
    );
   
  }

  render() {
    const { navigation } = this.props;
    return (
      
      <Block flex center style={styles.ListaDeCompras}>
        <Block style={{ marginBottom: theme.SIZES.BASE }}>
        <Header tabs={tabs.categories} search title="Lista de Compras" navigation={this.props.navigation} />
      </Block>
        {this.renderArticles()}
        <Block flex center style={styles.boton}>
          <Button onPress={() => this.button()} round size="small" color="success">Comparar Tiendas</Button>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  ListaDeCompras: {
    width: width,    
  },
  boton: {
    marginTop:'-82%'   
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
});

export default ListaDeComprasCuidadoPersonal;
