import './App.css'

import CardLayout from './CardLayout';

const App = () => (
  <div>
    <CardLayout title="About">
      <p>Props of Components</p>
    </CardLayout>

    <CardLayout title="Details">
      <ul>
        <li>Feature A</li>
        <li>Feature B</li>
        <li>Feature C</li>
      </ul>
    </CardLayout>

    <CardLayout title="Contact">
      <p>Email: example@example.com</p>
      <p>Phone: 123-456-7890</p>
    </CardLayout>
  </div>
);

export default App