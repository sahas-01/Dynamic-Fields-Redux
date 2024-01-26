// DisplayFields.js

import { useSelector } from 'react-redux';
import './DisplayFields.css';

const DisplayFields = () => {
  const fields = useSelector((state) => state.fields);

  // Group fields by category
  const categorizedFields = fields.reduce((acc, field) => {
    if (!acc[field.category]) {
      acc[field.category] = [];
    }
    acc[field.category].push(field);
    return acc;
  }, {});

  console.log(categorizedFields);

  return (
    <div className='added-fields-container'>
      <h2>Added Fields:</h2>
      {Object.keys(categorizedFields).map((category, index) => (
        <div key={index}>
          <h2 className='category-heading'>{category}</h2>
          <table key={index}>
            <thead>
              <tr>
                <th>Field Display Name</th>
                <th>Field Type</th>
                <th>Field Data Type</th>
                <th>Max Length Allowed</th>
                <th>Is Mandatory</th>
                <th>Field Data</th>
              </tr>
            </thead>
            <tbody>
              {categorizedFields[category].map((field, index) => (
                <tr key={index}>
                  <td>{field.fieldDisplayName}</td>
                  <td>{field.fieldType}</td>
                  <td>{field.fieldDataType}</td>
                  <td>{field.maxLengthAllowed}</td>
                  <td>{field.isMandatory ? 'Yes' : 'No'}</td>
                  <td>{field.fieldData}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default DisplayFields;
