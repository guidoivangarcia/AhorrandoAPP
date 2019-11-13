import React from 'react';
import { TouchableOpacity, TouchableHighlight, Image, FlatList, StyleSheet, Dimensions, ScrollView, View, Text } from 'react-native';
import { Button, Block, theme } from 'galio-framework';

import { Card } from '../components';
import articles from '../constants/articulosLista';
const { width } = Dimensions.get('screen');
const extractKey = ({ categories }) => categories;

class Home extends React.Component {

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     tableHead: ['Producto', 'Codigo', 'Precio', 'Accion'],
  //     tableData: [
  //       ['1', '2', '3', '4'],
  //       ['a', 'b', 'c', 'd'],
  //       ['1', '2', '3', '4'],
  //       ['a', 'b', 'c', 'd']
  //     ]
  //   };
  //   this.renderizar = this.renderizar.bind(this);
  // }
  componentDidMount() {
    this.getProductos();
  }

  getProductos() {
    fetch("http://www.json-generator.com/api/json/get/ceLNpEXvIi?indent=2")
      .then(results => results.json())
      .then(results => this.setState({ rows: results }));
  }
  
  // renderizar = ({ item }) => {
  //   let items = [];
  //   // const state = this.state;
  //   if (item.categories) {
  //     items = item.categories.map(row => {
  //       return (

  //         <View>
            
  //               <Text>{row.title}</Text>
  //               <Text>${row.price}</Text>
  //               <Text>cantidad: {row.cantidad}</Text>
  //               <Text></Text>

  //            {/* <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
  //             <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
  //             <Rows data={state.tableData} textStyle={styles.text}/>
  //           </Table>  */}
            
          
          
  //       </View>
  //       );
  //     });
  //   }
  //   return (
  //     <View>
  //       <Text style={styles.row}>{item.nombre}</Text>
  //       {items}
  //     </View>
  //   );
  // };
 

  renderArticles = () => {
    const { navigation } = this.props;
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
        <Block flex style={{   
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          {/* <Card item={articles[0]} horizontal  /> */}

          <Block row style={{ justifyContent: 'space-between', marginTop:'1%'  }}>

            <TouchableOpacity  onPress={() => navigation.navigate("ListaDeComprasAlcohol")}>
          {/* style={{ marginLeft:'-5%'  }} */}
              <Image
                style={{ width: 191, height: 100 }}
                source={{ uri: 'https://i.ibb.co/0YFgdTK/Alcohol.png' }}
              />

            </TouchableOpacity>


            <TouchableOpacity onPress={() => navigation.navigate("ListaDeCompras")}>
              <Image
                style={{ width: 191, height: 100 }}
                source={{ uri: 'https://i.ibb.co/wNhDYV4/Almacen.png' }}
              />
            </TouchableOpacity>
          </Block>

          <Block row style={{justifyContent:'space-between'}}>

            <TouchableOpacity onPress={() => navigation.navigate("ListaDeComprasKiosco")}>

              <Image
                style={{ width: 191, height: 100 }}
                source={{ uri: 'https://i.ibb.co/k53kXhG/Kiosco.png' }}
              />

            </TouchableOpacity>


            <TouchableOpacity onPress={() => navigation.navigate("ListaDeComprasCuidadoPersonal")}>
              <Image
                style={{ width: 191, height: 100 }}
                source={{ uri: 'https://i.ibb.co/mckfRYX/Cuidado-Personal.png' }}
              />
            </TouchableOpacity>
          </Block>
          <Block row style={{justifyContent:'space-between'}}>

            <TouchableOpacity onPress={() => navigation.navigate("ListaDeComprasLimpieza")}>

              <Image
                style={{ width: 191, height: 100 }}
                source={{ uri: 'https://i.ibb.co/Z6ky2TQ/Limpieza.png' }}
              />

            </TouchableOpacity>


            <TouchableOpacity onPress={() => navigation.navigate("ListaDeComprasMascotas")}>
              <Image
                style={{ width: 191, height: 100 }}
                source={{ uri: 'https://i.ibb.co/yXShDL8/Mascotas.png' }}
              />
            </TouchableOpacity>
          </Block>

          <Block row style={{justifyContent:'space-between'}}>

            <TouchableOpacity onPress={() => navigation.navigate("ListaDeComprasBebes")}>

              <Image
                style={{ width: 191, height: 100 }}
                source={{ uri: 'https://i.ibb.co/LSTHrRM/Bebes.png' }}
              />

            </TouchableOpacity>


            <TouchableOpacity onPress={() => navigation.navigate("ListaDeComprasTabaco")}>
              <Image
                style={{ width: 191, height: 100 }}
                source={{ uri: 'https://i.ibb.co/TwM5nSd/tabaco.png' }}
              />
            </TouchableOpacity>
          </Block>

          
          {/* <Block flex row style={styles.categoriaP}>
            <Button style={styles.categoria}>

            </Button>
            <Button style={styles.categoria}>
              
            </Button>
          </Block>
          <Block flex row>
            <Button style={styles.categoria}>

            </Button>
            <Button style={styles.categoria}>
              
            </Button>
          </Block>
          <Block flex row>
            <Button style={styles.categoria}>

            </Button>
            <Button style={styles.categoria}>
              
            </Button>
          </Block>
          <Block flex row>
            <Button style={styles.categoria}>

            </Button>
            <Button style={styles.categoria}>
              
            </Button>
          </Block> */}



          {/* <Block flex row>
            <Card item={articles[1]} style={{ marginRight: theme.SIZES.BASE }} />
            <Card item={articles[2]} />
          </Block>
          <Block flex row>
            <Card item={articles[3]} style={{ marginRight: theme.SIZES.BASE }} />
            <Card item={articles[4]} />
          </Block>
          <Block flex row>
            <Card item={articles[5]} style={{ marginRight: theme.SIZES.BASE }} />
            <Card item={articles[6]} />
          </Block>
          <Block flex row>
            <Card item={articles[7]} style={{ marginRight: theme.SIZES.BASE }} />
            <Card item={articles[8]} />
          </Block> 
          <Block flex row style={{ paddingBottom: 50 }}>
            <Card item={articles[9]} style={{ marginRight: theme.SIZES.BASE }} />
            <Card item={articles[10]} />
          </Block>  */}

          {/* <Card item={articles[3]} horizontal />
          <Card item={articles[4]} full /> */}
          
        </Block>
        
      </ScrollView>
    )
  }

  render() {
    const { navigation } = this.props;
    //const { rows } = this.state;
    return (
      <Block flex center style={styles.home}>

        {/* <FlatList
          style={styles.container}
          data={rows}
          renderItem={this.renderizar}
          keyExtractor={extractKey}
        /> */}

        {this.renderArticles()}
        <Block flex center style={styles.boton}>
          <Button  onPress={() => navigation.navigate("ListaDeCompras")} round size="small" color="success">Nueva Lista de Compras</Button>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,    
  },
  boton: {
    marginTop:'-22%'   
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
  categoriaP: {
    alignContent: 'space-between'
  },

  categoria: {
    
  },
  view: {
    position: 'absolute',
    backgroundColor: 'transparent'
  },
  image: {

  },
  rowss: {

  },
  touchable: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 18,
    textAlign: 'center'
  }
});

export default Home;
