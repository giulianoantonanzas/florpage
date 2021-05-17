import React from "react";
import MyStory from "./../../blocks/MyStory"
import ThreeColorCard from "./../../blocks/ThreeColorCard";
import Hero from "../../blocks/Hero";
import ImgFlor from "./../../assets/images/flor-perfil.jpg";

const Home = () => {
  const threeColorValues = [
    {
      title: "Individual Therapy",
      text: "Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus suscipit tortor eget felis porttitor",
      buttonText: "LEARN MORE",
    },
    {
      title: "Individual Therapy",
      text: "Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus suscipit tortor eget felis porttitor",
      buttonText: "LEARN MORE",
    },
    {
      title: "Individual Therapy",
      text: "Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus suscipit tortor eget felis porttitor",
      buttonText: "LEARN MORE",
    },
  ];
  const myStoryValues = {
    image: ImgFlor,
    title: "Hello! I’m Flor",
    subTitle: "Lic. Psicología",
    text: "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus magna justo, lacinia eget consectetu. Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula",
    buttonText: "Mi Historia",
  };

  return (
    <>
      <Hero
        title={"Support For Individuals, Couples, & Families"}
        text={
          "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui."
        }
        buttonText={"MAKE AN APPOINTMENT"}
      />
      <ThreeColorCard hasRedounded={true} data={threeColorValues} />
      <MyStory
        image={myStoryValues.image}
        title={myStoryValues.title}
        subTitle={myStoryValues.subTitle}
        text={myStoryValues.text}
        buttonText={myStoryValues.buttonText}
      />
    </>
  );
};

export default Home;
