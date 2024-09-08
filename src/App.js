import './App.css';
import Table from './components/table/Table';

function App() {
  const headers = ['Name', 'Age', 'Occupation'];
  return (
    <div>
      <h1>Modern Table</h1>
      <Table headers={headers}>
        <tr>
          <td>John Doe</td>
          <td>28</td>
          <td>Engineer</td>
        </tr>
        <tr>
          <td>Jane Smith</td>
          <td>32</td>
          <td>Designer</td>
        </tr>
      </Table>
      
    </div>
  );
}

export default App;
