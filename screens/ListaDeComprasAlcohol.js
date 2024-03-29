import React from 'react';
import { ActivityIndicator, StyleSheet, Alert, Dimensions, ScrollView } from 'react-native';
import { Button, Block, theme } from 'galio-framework';
import { Card, Text, Body, CardItem, Header } from '../components';
import articles from '../constants/articulosLista';
import DialogInput from 'react-native-dialog-input';
const { width } = Dimensions.get('screen');

class ListaDeComprasAlcohol extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isAlertVisible:false };
  }
  submit(inputText){
    console.log(inputText);
    this.setState({isAlertVisible:false})
  }
  renderArticles = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
        <Block flex>
          {/* <Card item={articles[0]} horizontal  /> */}
          <Block flex row>
            <Card item={articles[11]} style={{ marginRight: theme.SIZES.BASE }} >
            </Card>
            <Card item={articles[12]} />
            

          </Block>
          <Block flex row>
            <Card item={articles[13]} style={{ marginRight: theme.SIZES.BASE }} >
            </Card>
            <Card item={articles[14]} />

          </Block>
          <Block flex row  style={{ paddingBottom: 300 }}>
            <Card item={articles[15]} style={{ marginRight: theme.SIZES.BASE }} />
            <Card item={articles[16]} />
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
                //onPress: () => this.setState({isAlertVisible:true})
                onPress: () => navigate("RutaMapa"),
              }
            ]),
          style: 'cancel',
        },
        {text: 'Si', onPress: () => this.setState({isAlertVisible:true})}, // Esta pantalla no esta creada
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
          <DialogInput isDialogVisible={this.state.isAlertVisible}
                     title={"Guardar Lista"}
                     message={"Ingrese el nombre de su Lista de Compras"}
                     hintInput ={"hint for the input"}
                     submitInput={ (inputText) => {this.submit(inputText)
                    //, 
                    // this.setState({isAlertVisible:false}),this.navegar()  } 
                                                  }
                                }
                     closeDialog={ () =>this.setState({isAlertVisible:false})}>
         </DialogInput>
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

export default ListaDeComprasAlcohol;
