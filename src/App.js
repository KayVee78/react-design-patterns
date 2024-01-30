import logo from "./logo.svg";
import "./App.css";
import { RegularListComponent } from "./RegularListComponent";
import { SmallPersonListItem } from "./people/SmallPersonListItem";
import { LargePersonListItem } from "./people/LargePersonListItem";
import { NumberedListComponent } from "./NumberedListComponent";
import { LargeProductListItem } from "./product/LargeProductListItem";

const people = [
  {
    name: "John Doe",
    age: 54,
    hairColor: "brown",
    hobbies: ["swimming", "bicycling", "video games"],
  },
  {
    name: "Brenda Smith",
    age: 33,
    hairColor: "black",
    hobbies: ["golf", "mathematics"],
  },
  {
    name: "Jane Garcia",
    age: 27,
    hairColor: "blonde",
    hobbies: ["biology", "medicine", "gymnastics"],
  },
];

const products = [
  {
    name: "Flat-Screen TV",
    price: "$300",
    description: "Huge LCD screen, a great deal",
    rating: 4.5,
  },
  {
    name: "Basketball",
    price: "$10",
    description: "Just like the pros use",
    rating: 3.8,
  },
  {
    name: "Running Shoes",
    price: "$120",
    description: "State-of-the-art technology for optimum running",
    rating: 4.2,
  },
];

function App() {
  return (
    //Regular way of using SmallPersonListItem and LargePersonListItem is not like this.
    //But using them via RegularListComponent has made it more reusable
    <>
      <RegularListComponent
        items={people}
        resourceName={"person"}
        itemComponent={SmallPersonListItem}
      />
      <NumberedListComponent
        items={people}
        resourceName={"person"}
        itemComponent={LargePersonListItem}
      />
      <RegularListComponent
        items={products}
        resourceName={"product"}
        itemComponent={LargeProductListItem}
      />
      <NumberedListComponent
        items={products}
        resourceName={"product"}
        itemComponent={LargeProductListItem}
      />
    </>
  );
}

export default App;
