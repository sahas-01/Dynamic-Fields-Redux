// AddFields.js

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addField } from '../../redux/actions';
import DisplayFields from '../DisplayFields';
import "./AddFields.css";

const AddFields = () => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedFieldType, setSelectedFieldType] = useState('');
  const [fieldDisplayName, setFieldDisplayName] = useState('');
  const [fieldDataType, setFieldDataType] = useState('');
  const [maxLength, setMaxLengthAllowed] = useState('');
  const [isMandatory, setIsMandatory] = useState(false);
  const [fieldData, setFieldData] = useState('');
  const [showDisplay, setShowDisplay] = useState(false);

  const handleAddField = (e) => {
    e.preventDefault();
    // Collect properties and dispatch to Redux
    const field = {
      category: selectedCategory,
      fieldType: selectedFieldType,
      fieldDisplayName,
      fieldDataType,
      maxLength,
      isMandatory,
      fieldData,
    };
    dispatch(addField(field));

    // Resetting the form after adding the fields
    setSelectedFieldType('');
    setFieldDisplayName('');
    setFieldDataType('');
    setMaxLengthAllowed('');
    setIsMandatory(false);
    setFieldData('');
  };

  const handleConfirm = () => {
    setShowDisplay(true);
  };

  return (
    <div className="main-container">
      <h2>Add Fields Dynamically</h2>
      <form className="form">
        <label>
          Select Category:
          <select onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="">Select Category</option>
            <option value="Student">Student</option>
            <option value="Self-Employee">Self-Employee</option>
            <option value="Business">Business</option>
          </select>
        </label>
        {selectedCategory && (
          <>
            <label>
              Select Field Type:
              <select
                value={selectedFieldType}
                onChange={(e) => setSelectedFieldType(e.target.value)}
              >
                <option value="">Select Field Type</option>
                <option value="TextBox">Text Box</option>
                <option value="DropDown">Drop Down</option>
                <option value="DatePicker">Date Picker</option>
              </select>
            </label>
            {selectedFieldType === 'TextBox' && (
              <>
                <label>
                  Field Display Name:
                  <input
                    type="text"
                    value={fieldDisplayName}
                    onChange={(e) => setFieldDisplayName(e.target.value)}
                  />
                </label>
                <label>
                  Select Field Data Type:
                  <select
                    value={fieldDataType}
                    onChange={(e) => setFieldDataType(e.target.value)}
                  >
                    <option value="">Select Data Type</option>
                    <option value="number">Number</option>
                    <option value="string">String</option>
                    <option value="date">Date</option>
                  </select>
                </label>
                {fieldDataType === 'number' && (
                  <>
                    <label>
                      Max Length Allowed:
                      <input
                        type="text"
                        value={maxLength}
                        onChange={(e) => setMaxLengthAllowed(e.target.value)}
                      />
                    </label>
                    <label>
                      Is Mandatory:
                      <select
                        value={isMandatory}
                        onChange={(e) =>
                          setIsMandatory(e.target.value === 'true')
                        }
                      >
                        <option value="false">No</option>
                        <option value="true">Yes</option>
                      </select>
                    </label>
                  </>
                )}
                <label>
                  Field Data:
                  <input
                    type="text"
                    value={fieldData}
                    onChange={(e) => setFieldData(e.target.value)}
                  />
                </label>
              </>
            )}

            {
              selectedFieldType === 'DatePicker' && (
                <>
                  <label>
                    Field Display Name:
                    <input
                      type="text"
                      value={fieldDisplayName}
                      onChange={(e) => setFieldDisplayName(e.target.value)}
                    />
                  </label>
                  <label>
                    Select Field Data Type:
                    <select
                      value={fieldDataType}
                      onChange={(e) => setFieldDataType(e.target.value)}
                    >
                      <option value="">Select Data Type</option>
                      <option value="number">Number</option>
                      <option value="string">String</option>
                      <option value="date">Date</option>
                    </select>
                  </label>
                  <div>
                    <label htmlFor="">Date Range Validation</label>
                    <label htmlFor="fieldDateMinRange">Min Date</label>
                    <input type="date" className="fieldDateMinRange" id="fieldDateMinRange" name="fieldDateMinRange" />
                    <label htmlFor="fieldDateMaxRange">Max Date</label>
                    <input type="date" className="fieldDateMaxRange" id="fieldDateMaxRange" name="fieldDateMaxRange" />
                  </div>
                  {fieldDataType === 'number' && (
                    <>
                      <label>
                        Max Length Allowed:
                        <input
                          type="text"
                          value={maxLength}
                          onChange={(e) => setMaxLengthAllowed(e.target.value)}
                        />
                      </label>
                      <label>
                        Is Mandatory:
                        <select
                          value={isMandatory}
                          onChange={(e) =>
                            setIsMandatory(e.target.value === 'true')
                          }
                        >
                          <option value="false">No</option>
                          <option value="true">Yes</option>
                        </select>
                      </label>
                    </>
                  )}
                  <label>
                    Field Data:
                    <input
                      type="text"
                      value={fieldData}
                      onChange={(e) => setFieldData(e.target.value)}
                    />
                  </label>
                </>
              )
            }
            {/* {
              selectedFieldType === "Dropdown"
                ? <div>
                  <label htmlFor="fieldDataDropdown">Field Data</label>
                  <input type="text" className="fieldDataDropdown" id="fieldDataDropdown" name="fieldDataDropdown" placeholder="Enter space separated: e.g. 'CSE IT ECE EEE MECH'" />
                </div>
                : <div>
                  <label htmlFor="fieldData">Field Data</label>
                  <input type="text" className="fieldData" />
                </div>
            } */}
            <div className='btn-group'>
              <button onClick={handleAddField}>Add Field</button>
              <button type="button" onClick={handleConfirm}>
                Confirm
              </button>
            </div>
          </>
        )}
      </form>
      {showDisplay && <DisplayFields />}
    </div>
  );
};

export default AddFields;
