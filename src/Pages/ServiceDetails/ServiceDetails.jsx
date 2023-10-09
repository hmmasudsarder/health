import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../SharedComponents/Header/Navbar";
import { useEffect, useState } from "react";
import Card from "./Card";

const ServiceDetails = () => {
  const [health, setHealth] = useState()
  const { id } = useParams();
  const healths = useLoaderData();
  useEffect(() => {
    const findDetails = healths?.find(health => health.id === id);
    setHealth(findDetails);
  }, [id, healths]);
  console.log(health)
  return (
    <div>
      <Navbar></Navbar>
      <Card health={health}></Card>
    </div>
  );
};

export default ServiceDetails;
