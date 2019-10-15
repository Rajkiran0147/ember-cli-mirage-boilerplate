import Route from '@ember/routing/route';

export default Route.extend({
  async model() {
    let employees = await fetch('/api/1.0/employees/');
    return employees;
  }
});