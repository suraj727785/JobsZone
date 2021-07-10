import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CreateInternshipForm from "../components/CreateInternshipForm";

function CreateInternshipScreen() {
  return (
    <div>
      <div style={{ marginTop: 100 }}>
        <Header />
      </div>
      <CreateInternshipForm />
      <Footer />
    </div>
  );
}

export default CreateInternshipScreen;
