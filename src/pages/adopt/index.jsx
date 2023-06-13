import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import MapView from "@/components/mapView/MapView";
import LocationList from "@/components/list/LocationList";

const index = () => {
  return (
    <>
      <Header />
      <div className="flex">
        <LocationList />
        <MapView />
      </div>
      <Footer />
    </>
  );
};

export default index;
