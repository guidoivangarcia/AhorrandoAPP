import React from 'react';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import { View, TouchableHighlight, Button, TextInput, Alert, StyleSheet, Dimensions, Image, TouchableWithoutFeedback } from 'react-native';
import { Block, Text, theme } from 'galio-framework';
import data from '../constants/articulosLista';
import { argonTheme } from '../constants';


// const data = [{arts}]

class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }
  sumerCant = () => {
    this.setState({
      count: this.state.count+1
    })
  }

  restarCant = () => {
    this.setState({
      count: this.state.count-1
    })
  }

  render() {
    const { navigation, item, horizontal, full, style, ctaColor, imageStyle } = this.props;
    
    const imageStyles = [
      full ? styles.fullImage : styles.horizontalImage,
      imageStyle
    ];
    const cardContainer = [styles.card, styles.shadow, style];
    const imgContainer = [styles.imageContainer,
      horizontal ? styles.horizontalStyles : styles.verticalStyles,
      styles.shadow
    ];
 

    // onSubtract = (data, index) => {
    //   //const arts = [...this.state.data];
    //   data[1].cantidad -= 1;
    //   this.setState({ data });
    //   // item.cantidad -= 1;
    //   // this.setState({ item });
    // };
  
    // onAdd = (data, index) => {
    //  // const data = [...this.state.data];
    //   data[1].cantidad += 1;
    //   this.setState({ data });
    //   // item.cantidad += 1;
    //   // this.setState({ item });
    // };
  
    return (
      
      <Block row={horizontal} card flex style={cardContainer}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('')}>
          <Block flex style={imgContainer}>
            <Image source={{uri: item.image}} style={imageStyles} />
          </Block>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('')}>
          <Block flex space="between" style={styles.cardDescription}>
            <Text size={14} style={styles.cardTitle}>{item.title}</Text>
            <Text size={12} muted={!ctaColor} color={ctaColor || argonTheme.COLORS.ACTIVE} bold>{item.cta}</Text>
            
            <Block style={styles.cardBoton}>
              <Button style={styles.botones}
                title="-"
                onPress={this.restarCant}
              />

              <View style={styles.container}>   
                <View style={[styles.countContainer]}>
                  <Text style={styles.cantidad}>
                    {this.state.count > 0 ? this.state.count : 0}
                  </Text>
                </View>
              </View>
              {/* <Text  size={14} style={styles.cantidad}>{item.cantidad}</Text>  */}

              <Button style={styles.boton2}
                title="+" 
                onPress={this.sumerCant}
              />
            </Block>
          </Block>

        </TouchableWithoutFeedback>
      </Block>
    );
  }
}

Card.propTypes = {
  item: PropTypes.object,
  horizontal: PropTypes.bool,
  full: PropTypes.bool,
  ctaColor: PropTypes.string,
  imageStyle: PropTypes.any,
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE,
    borderWidth: 0,
    minHeight: 114,
    marginBottom: 16,
    fontSize:40
  },
  cardTitle: {
    flex: 1,
    flexWrap: 'wrap',
    paddingBottom: 6
  },
  botones: {
    fontSize:40
  },
  boton2: {
    fontSize:40,
    marginLeft:10
  },
  cardBoton: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: 6,
    fontSize:45
  },
  cantidad: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft:55,
    paddingRight:50,
    paddingTop:12
  },
  cantidadTexto: {
    paddingLeft:10
  },
  cardDescription: {
    padding: theme.SIZES.BASE / 2,

  },
  imageContainer: {
    borderRadius: 3,
    elevation: 1,
    overflow: 'hidden',
  },
  image: {
    // borderRadius: 3,
  },
  horizontalImage: {
    height: 122,
    width: 'auto',
  },
  horizontalStyles: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  verticalStyles: {
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0
  },
  fullImage: {
    height: 215
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
  },
});

export default withNavigation(Card);