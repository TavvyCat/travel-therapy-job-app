class Job {
  constructor(id, ownerId, occupation, type, payPerWeek, location, description, date) {
    this.id = id;
    this.ownerId = ownerId;
    this.occupation = occupation;
    this.type = type;
    this.payPerWeek = payPerWeek;
    this.location = location;
    this.description = description;
    this.date = date;
  }
}

export default Job;
