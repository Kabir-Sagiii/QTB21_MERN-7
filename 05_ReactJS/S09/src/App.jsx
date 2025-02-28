import "./App.css";
import Nav from "./components/nav/Nav";
import Category from "./components/category/Category";
function App() {
  return (
    <div>
      <Nav />
      <div className="categories">
        <Category
          imageUrl={
            "https://rukminim2.flixcart.com/flap/96/96/image/29327f40e9c4d26b.png?q=100"
          }
          title={"Kilos"}
        />
        <Category
          imageUrl={
            "https://rukminim2.flixcart.com/flap/96/96/image/22fddf3c7da4c4f4.png?q=100"
          }
          title={"Mobiles"}
        />
        <Category
          imageUrl={
            "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/t/o/x/s-tblhdful-dp-d123-tripr-original-imah873mgng3sbgk.jpeg?q=70"
          }
          title={"Fashion"}
        />
        <Category
          imageUrl={
            "https://rukminim2.flixcart.com/flap/96/96/image/29327f40e9c4d26b.png?q=100"
          }
          title={"Kilos"}
        />
        <Category
          imageUrl={
            "https://rukminim2.flixcart.com/flap/96/96/image/22fddf3c7da4c4f4.png?q=100"
          }
          title={"Mobiles"}
        />
        <Category
          imageUrl={
            "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/t/o/x/s-tblhdful-dp-d123-tripr-original-imah873mgng3sbgk.jpeg?q=70"
          }
          title={"Fashion"}
        />
        <Category
          imageUrl={
            "https://rukminim2.flixcart.com/flap/96/96/image/29327f40e9c4d26b.png?q=100"
          }
          title={"Kilos"}
        />
        <Category
          imageUrl={
            "https://rukminim2.flixcart.com/flap/96/96/image/22fddf3c7da4c4f4.png?q=100"
          }
          title={"Mobiles"}
        />
        <Category
          imageUrl={
            "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/t/o/x/s-tblhdful-dp-d123-tripr-original-imah873mgng3sbgk.jpeg?q=70"
          }
          title={"Fashion"}
        />
      </div>
    </div>
  );
}

export default App;
