import Job from "../../models/job";
import { SET_JOBS } from "../actions/jobs";

const initialState = {
  jobs: [
    new Job(
      Math.random().toString(),
      "TavvyCat",
      "Physical Therapist",
      "Inpatient",
      1600,
      "Greenville, NC",
      "Great job in hospital. Cooperative environment. Working with backs.",
      new Date().toISOString()
    ),
    new Job(
      Math.random().toString(),
      "TavvyCat",
      "Occupational Therapist",
      "Pediatrics",
      1500,
      "Nashville, TN",
      "If you love working with kids, you'll love this job. You will work with Middle Schoolers, getting them back to normal.",
      new Date().toISOString()
    ),
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_JOBS:
      return initialState;
    default:
      return state;
  }
};
