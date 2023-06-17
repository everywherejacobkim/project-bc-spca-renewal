import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import MapView from "@/components/mapView/MapView";
import LocationList from "@/components/list/LocationList";

const index = () => {
  return (
    <>
      <Header />
      <div className="flex justify-center mt-8">
        <LocationList />
        <MapView />
      </div>
      <Footer />
    </>
  );
};

export default index;
