import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import api from "../../services/api_products";

import styles from "./style";

function Home() {
  const [products, setProducts] = useState([]);

  const getProduto = async () => {
    const { data } = await api.get("products/201");
    setProducts(data);
  };

  getProduto();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Learn Your Favorite Games</Text>

        <Image
          style={styles.image}
          source={{
            uri: "https://avatars.githubusercontent.com/u/62457621?v=4",
          }}
        />
      </View>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.containerCategory}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.categoryText}>Todos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.categoryText}>Menor preço</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.categoryText}>Populares</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.categoryText}>Por nome</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* View que emgloba todas as imagens dos produtos */}

      <View style={styles.containerImage}>
        <View style={{margin: 10, flexDirection: 'row', flexWrap: 'wrap'}}>
          <Image
            style={styles.productsImage}
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/pt/9/99/Super_Mario_Odyssey_Capa.png",
            }}
          />
          <Image
            style={styles.productsImage}
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/pt/9/97/COD-IW_%28capa%29.jpeg",
            }}
          />
          <Image
            style={styles.productsImage}
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/pt/thumb/0/06/TW3_Wild_Hunt.png/270px-TW3_Wild_Hunt.png",
            }}
          />
          <Image
            style={styles.productsImage}
            source={{
              uri: "https://m.media-amazon.com/images/I/81AOIbFiuXL._AC_SL1500_.jpg",
            }}
          />
          <Image
            style={styles.productsImage}
            source={{
              uri: "https://notadogame.com/uploads/game/cover/250x/5bfdc4a627560.jpg",
            }}
          />
          <Image
            style={styles.productsImage}
            source={{
              uri: "https://cdn1.epicgames.com/3328b08ac1c14540aa265a1a85c07839/offer/hzd_tall-1200x1600-d4b1057afd47f9256d8da71f2f187be4.jpg",
            }}
          />
        </View>
      </View>
    </View>
  );
}

export default Home;
