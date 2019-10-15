import {
  fetchAllEmployees,
  createEmployee
} from './route-handlers/employees';


export default function() {
  this.namespace = '/api/1.0';
  this.get('/employees/', fetchAllEmployees);
  this.post('/employees/', createEmployee);
}