import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import {
  Button,
  ButtonGroup,
  Card,
  Datepicker,
  IndexPath,
  Layout,
  Select,
  SelectItem,
  Text,
} from "@ui-kitten/components";
import AntDesign from "@expo/vector-icons/AntDesign";

type Props = {};

const MealTable = (props: Props) => {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      date: new Date().toDateString(),
      type: "Dinner",
      quantity: 5,
    },
    {
      id: "58694a0f-32132-471f-bd96-234324234223",
      date: new Date().toDateString(),
      type: "Lunch",
      quantity: 2,
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      date: new Date().toDateString(),
      type: "Breakfast",
      quantity: 1,
    },

    {
      id: "bd7acbea-c1b1-46c2-aed5fdasf-3ad53abb28ba",
      date: new Date().toDateString(),
      type: "Dinner",
      quantity: 5,
    },
    {
      id: "58694a0f-32132-471f312321-bd96-234324234223",
      date: new Date().toDateString(),
      type: "Lunch",
      quantity: 2,
    },
    {
      id: "58694a0f-3da1-471f-fdsafbd96-145571e29d72",
      date: new Date().toDateString(),
      type: "Breakfast",
      quantity: 1,
    },

    {
      id: "bd7acbea-c1b1-46c2-aed5fdasfgfd-3ad53abb28ba",
      date: new Date().toDateString(),
      type: "Dinner",
      quantity: 5,
    },
    {
      id: "58694a0f-32132-471f3123211231-bd96-234324234223",
      date: new Date().toDateString(),
      type: "Lunch",
      quantity: 2,
    },
    {
      id: "58694a0f-3da1fdsaf-471f-fdsafbd96-145571e29d72",
      date: new Date().toDateString(),
      type: "Breakfast",
      quantity: 1,
    },
    {
      id: "58694a0f-3da1fdsaf-471f-fdsafbd96-1455gdfasfad71e29d72",
      date: new Date().toDateString(),
      type: "Breakfast",
      quantity: 1,
    },

    {
      id: "bd7acbea-c1b1-46c2-afdasfdased5-3ad53abb28ba",
      date: new Date().toDateString(),
      type: "Dinner",
      quantity: 5,
    },
    {
      id: "58694a0f-32132-471f-bd9fq3216-234324234223",
      date: new Date().toDateString(),
      type: "Lunch",
      quantity: 2,
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571g13ase29d72",
      date: new Date().toDateString(),
      type: "Breakfast",
      quantity: 1,
    },

    {
      id: "bd7acbea-c1b1-46fdasf-fdasgdasfc2-aed53ad53abb28ba",
      date: new Date().toDateString(),
      type: "Dinner",
      quantity: 5,
    },
    {
      id: "58694a0f-312321-bd96-2343242342232132-471f3",
      date: new Date().toDateString(),
      type: "Lunch",
      quantity: 2,
    },
    {
      id: "58694a0f-3da1-145571e2-471f-fdsafbd969d72",
      date: new Date().toDateString(),
      type: "Breakfast",
      quantity: 1,
    },

    {
      id: "bd7a-3ad53abb2cbea-c1b1-46c2-aed5fdasfgfd8ba",
      date: new Date().toDateString(),
      type: "Dinner",
      quantity: 5,
    },
    {
      id: "58694a0f-32132-471f3123211231-bd96-234324234223",
      date: new Date().toDateString(),
      type: "Lunch",
      quantity: 2,
    },
    {
      id: "58694a0dsafbd96-145571e29d7f-3da1fdsaf-471f-f2",
      date: new Date().toDateString(),
      type: "Breakfast",
      quantity: 1,
    },
    {
      id: "53da1fdsaf-471f-fdsafbd96-1455gdfasfad8694a0f-71e29d72",
      date: new Date().toDateString(),
      type: "Breakfast",
      quantity: 1,
    },

    {
      id: "bd7a-3ad53abb28cbea-c1b1-46c2-aed5ba",
      date: new Date().toDateString(),
      type: "Dinner",
      quantity: 5,
    },
    {
      id: "58694a06-234324234f-32132-471f-bd9223",
      date: new Date().toDateString(),
      type: "Lunch",
      quantity: 2,
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      date: new Date().toDateString(),
      type: "Breakfast",
      quantity: 1,
    },

    {
      id: "-aed5fdasf-3ad53bd7acbea-c1b1-46c2abb28ba",
      date: new Date().toDateString(),
      type: "Dinner",
      quantity: 5,
    },
    {
      id: "2-471f312321-bd96-2343242358694a0f-32134223",
      date: new Date().toDateString(),
      type: "Lunch",
      quantity: 2,
    },
    {
      id: "58694a71f-fdsafbd96-145571e290f-3da1-4d72",
      date: new Date().toDateString(),
      type: "Breakfast",
      quantity: 1,
    },

    {
      id: "bd7acbesfgfd-3ad53aba-c1b1-46c2-aed5fdab28ba",
      date: new Date().toDateString(),
      type: "Dinner",
      quantity: 5,
    },
    {
      id: "58694a0f-321311231-bd96-23432-471f3123224234223",
      date: new Date().toDateString(),
      type: "Lunch",
      quantity: 2,
    },
    {
      id: "58694a0f-dsafbd96-145571e29d3da1fdsaf-471f-f72",
      date: new Date().toDateString(),
      type: "Breakfast",
      quantity: 1,
    },
    {
      id: "58f-fdsafbd96-1455gdfasfad71694a0f-3da1fdsaf-471e29d72",
      date: new Date().toDateString(),
      type: "Breakfast",
      quantity: 1,
    },
  ];
  const [selectedIndex, setSelectedIndex] = React.useState<
    IndexPath | IndexPath[]
  >(new IndexPath(0));
  const [date, setDate] = React.useState(new Date());

  const Item = ({ item, i }: any) => (
    <View style={styles.item}>
      <View style={{ width: 20 }}>
        <Text style={styles.title}>{i}</Text>
      </View>
      <View style={{ width: 80 }}>
        <Text style={styles.title}>{item.type}</Text>
      </View>
      <View style={{ width: 150 }}>
        <Text style={styles.title}>{item.date}</Text>
      </View>
      <View style={{ width: 30 }}>
        <Text style={styles.title}>{item.quantity}</Text>
      </View>
    </View>
  );
  return (
    <View>
      <Card
        style={{
          marginVertical: 20,
          paddingVertical: 5,
        }}
      >
        <View style={styles.filter}>
          <View style={{ width: 130 }}>
            <Datepicker
              date={date}
              onSelect={(nextDate) => setDate(nextDate)}
            />
          </View>
          <View style={{ width: 130 }}>
            <Select
              selectedIndex={selectedIndex}
              onSelect={(index) => setSelectedIndex(index)}
            >
              <SelectItem title="Dinner" />
              <SelectItem title="Lunch" />
              <SelectItem title="Breakfast" />
            </Select>
          </View>
        </View>
      </Card>
      <Card>
        <View style={[styles.item]}>
          <View style={{ width: 20 }}>
            <Text style={[styles.title, { fontWeight: "900" }]}>{` `}</Text>
          </View>
          <View style={{ width: 80 }}>
            <Text style={[styles.title, { fontWeight: "900" }]}>Meal</Text>
          </View>

          <View style={{ width: 120 }}>
            <Text style={[styles.title, { fontWeight: "900" }]}>Date</Text>
          </View>
          <View style={{ width: 55 }}>
            <Text style={[styles.title, { fontWeight: "900" }]}>Quantity</Text>
          </View>
        </View>
        <FlatList
          data={DATA}
          renderItem={({ item, index }) => <Item item={item} i={index} />}
          keyExtractor={(item) => item.id}
        />
        <View style={{ alignItems: "flex-end", padding: 10 }}>
          <Text category="h6"> Total: {120}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            marginTop: 10,
            gap: 20,
          }}
        >
          <Text>1-5 of 5</Text>
          <ButtonGroup status="basic">
            <Button>
              <AntDesign name="left" size={15} color="black" />
            </Button>
            <Button>
              <AntDesign name="right" size={15} color="black" />
            </Button>
          </ButtonGroup>

          {/* <View style={{ flexDirection: "row", gap: 20 }}>
            <Button
            <AntDesign name="right" size={15} color="black" />
          </View> */}
        </View>
      </Card>
    </View>
  );
};

export default MealTable;

const styles = StyleSheet.create({
  filter: {
    flexDirection: "row",
    gap: 10,
  },
  item: {
    paddingBottom: 5,
    marginBottom: 5,
    flex: 1,
    flexDirection: "row",
    gap: 5,
    borderBottomWidth: 1,
    borderColor: "gray",
  },
  title: {
    fontSize: 15,
  },

  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
