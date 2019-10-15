import Controller from '@ember/controller';
import { reads } from '@ember/object/computed';
import fetch from 'fetch';

export default Controller.extend({
  employees: reads('model'),
  showAddEmployeeForm: false,
  actions: {
    showAddEmployeeForm() {
      this.toggleProperty('showAddEmployeeForm');
    },
    async addEmployee() {
      let { name, age } = this;
      let payload = {
        name,
        age
      };
      let url = `/api/1.0/employees/`;
      let method = 'post';
      let headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      };
      let requestBody = {
        method,
        headers
      };
      await fetch(url, requestBody);
    }
  }
});