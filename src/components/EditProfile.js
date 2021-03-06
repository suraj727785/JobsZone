import { API, Auth, graphqlOperation } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { updateUser } from "../graphql/mutations";
import { getUser } from "../graphql/queries";

const EditProfile = () => {
  const [formState, updateFormState] = useState({
    fname: "",
    lname: "",
    email: "",
    mobileNo: "",
    address: "",
    age: 20,
    sex: "",
    collegeName: "",
    degree: "",
    stream: "",
    collegeAddress: "",
    courseDate: "",
  });
  const [userId, setUserId] = useState("");

  function handleChange(evt) {
    const value = evt.target.value;
    updateFormState({
      ...formState,
      [evt.target.name]: value,
    });
  }

  useEffect(() => {
    try {
      const completeRegistration = async () => {
        const userInfo = await Auth.currentAuthenticatedUser({
          bypassCache: true,
        });
        const userData = await API.graphql(
          graphqlOperation(getUser, { id: userInfo.attributes.sub })
        );
        updateFormState({ email: userData.data.getUser.email });
        updateFormState({ mobileNo: userData.data.getUser.mobileNo });
        updateFormState({ fname: userData.data.getUser.firstName });
        updateFormState({ lname: userData.data.getUser.lastName });
        updateFormState({ address: userData.data.getUser.address });
        updateFormState({ sex: userData.data.getUser.Sex });
        updateFormState({ age: userData.data.getUser.Age });
        updateFormState({ collegeName: userData.data.getUser.collegeName });
        updateFormState({ degree: userData.data.getUser.degree });
        updateFormState({ stream: userData.data.getUser.branch });
        updateFormState({
          collegeAddress: userData.data.getUser.collegeAddress,
        });
        updateFormState({ courseDate: userData.data.getUser.courseCompletion });
        setUserId(userInfo.attributes.sub);
      };

      completeRegistration();
    } catch (e) {
      console.log(e);
    }
  }, []);
  const submitForm = async () => {
    await API.graphql(
      graphqlOperation(updateUser, {
        input: {
          id: `${userId}`,
          firstName: formState.fname,
          lastName: formState.lname,
          age: formState.age,
          sex: formState.sex,
          email: formState.email,
          mobileNo: formState.mobileNo,
          address: formState.address,
          collegeName: formState.collegeName,
          degree: formState.degree,
          branch: formState.stream,
          courseCompletion: formState.courseDate,
          collegeAddress: formState.collegeAddress,
        },
      })
    );
  };

  console.log(formState);
  console.log(userId);

  return (
    <div className="formContainer">
      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              value={formState.fname}
              onChange={handleChange}
              className="form-control"
              name="fname"
              placeholder="Enter First Name"
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              value={formState.lname}
              onChange={handleChange}
              className="form-control"
              name="lname"
              placeholder="Enter Last Name"
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              value={formState.email}
              onChange={handleChange}
              className="form-control"
              name="email"
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="mobile-no">Mobile No</label>
            <input
              type="text"
              value={formState.mobileNo}
              onChange={handleChange}
              className="form-control"
              name="mobileNo"
              placeholder="Enter Your Mobile No"
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              value={formState.age}
              onChange={handleChange}
              className="form-control"
              name="age"
              placeholder="Enter Your Age"
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="sex">Gender</label>
            <select
              value={formState.sex}
              onChange={handleChange}
              className="form-control"
              name="sex"
              required
            >
              <option value="">Select Your Gender</option>
              <option value="M">Male</option>
              <option value="F">Female</option>
              <option value="NB">Can't prefer to say</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="address">Current Address</label>
            <input
              type="text"
              value={formState.address}
              onChange={handleChange}
              className="form-control"
              name="address"
              placeholder="Enter Your Current Address"
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="college-name">College Name</label>
            <input
              type="text"
              value={formState.collegeName}
              onChange={handleChange}
              className="form-control"
              name="collegeName"
              placeholder="Enter Your College Name"
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="degree">Degree</label>
            <input
              type="text"
              value={formState.degree}
              onChange={handleChange}
              className="form-control"
              name="degree"
              placeholder="Enter Your Degree Name"
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="stream">Stream</label>
            <input
              type="text"
              value={formState.stream}
              onChange={handleChange}
              className="form-control"
              name="stream"
              placeholder="Enter Your Stream"
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="collegeAddress">College Address</label>
            <input
              type="text"
              value={formState.collegeAddress}
              onChange={handleChange}
              className="form-control"
              name="collegeAddress"
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="courseDate">Course Completion Date</label>
            <input
              type="date"
              value={formState.courseDate}
              onChange={handleChange}
              className="form-control"
              name="courseDate"
              required
            />
          </div>
        </div>
        <div className="text-center submitButton">
          <button
            onClick={submitForm}
            style={{
              height: 50,
              width: 120,
              fontFamily: "sans-serif",
              color: "white",
              fontSize: 20,
            }}
            name="submit"
            type="submit"
            className="btn btn-primary"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};
export default EditProfile;
