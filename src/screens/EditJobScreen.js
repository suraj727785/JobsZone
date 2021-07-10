import React from "react";
import EditJobForm from "../components/EditJobForm";
import Footer from "../components/Footer";
import Header from "../components/Header";

function EditJobScreen() {
  return (
    <div>
      <div style={{ marginTop: 100 }}>
        <Header />
      </div>
      <EditJobForm />
      <Footer />
    </div>
  );
}

export default EditJobScreen;
