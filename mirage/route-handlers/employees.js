function fetchAllEmployees({ db }) {
  return db.employees[0]
}

function createEmployee({ db }, request) {
  console.log(request);
}

export default { fetchAllEmployees, createEmployee }