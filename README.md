# Angular Schema Form UI Grid

This is an add-on for [Angular Schema Form](https://github.com/json-schema-form/angular-schema-form).

[![Build Status](https://travis-ci.org/JChampigny/angular-schema-form-ui-grid.svg?branch=master)](https://travis-ci.org/JChampigny/angular-schema-form-ui-grid)

This is an adaptation of the [UI Grid](http://ui-grid.info/) to enable excel file loading/preview.

## Installation
The UI Grid is an add-on to the Bootstrap decorator. To use it, just include angular-schema-form-bootstrap-switch.min.js after bootstrap-decorator.min.js.

You'll need to load a few additional files to use bootstrap switch in this order:
* [JQuery](https://jquery.com) (Bootstrap switch depends on it)
* [Bootstrap](http://getbootstrap.com) CSS
* The [UI Grid](https://github.com/nostalgiaz/ui-grid) UI Grid source files
* The [UI Grid](https://github.com/nostalgiaz/ui-grid) UI Grid CSS

You can also install the module with bower
`$ bower install angular-schema-form-ui-grid`

## Usage
The UI Grid add-on adds a new form type, grid.

Form Type | Becomes
--- | ---
grid | a pickadate widget

Schema | Default Form type
--- | ---
"type": "array" | UI Grid

### Column Definitions
The columns have to be defined at declaration so that we can validate the types and display the right titles.
Here are the different attributes a column can have.

Title | Type | Description | Is Optional
name | string | The name of the column in the Excel File |
displayName | string | The title the column should display in the preview grid |
type | enum | The type of the column in the Excel File |
validation | object | The validations to run on the column | Optional
conversionToObject | callback | A callback to extract and transform the value from the Excel file to the JavaScript object |
conversionFromObject | callback | A callback to extract and transform the value from the JavaScript object to the preview |
width | string | The column width | Optional
defaultValue | Of type "type" | The default value for the field | Optional

## Example
### Helper functions
```
function getSafeValue(type, str) {
    if (str) {
        if (type === columnEnum.INT)
            return parseInt(str);
        else if (type === columnEnum.STRING)
            return str;
        else if (type === columnEnum.BOOLEAN)
            return (str.toLowerCase() === "yes") ? true : false;
        else if (type === columnEnum.INV_BOOLEAN)
            return (str.toLowerCase() === "yes") ? false : true;
    }

    return null;
}

function getDisplayValue(type, value) {
    if (type === columnEnum.INT)
        return value;
    else if (type === columnEnum.STRING)
        return value;
    else if (type === columnEnum.BOOLEAN)
        return value === true ? "Yes" : "No";
    else if (type === columnEnum.INV_BOOLEAN)
        return value === true ? "No" : "Yes";
    return 'Unknown Type';
}
```
### Column Definition
```
var columnDefs = [
    { 
        name: 'targetColumnName', 
        displayName: 'Account Name', 
        type: columnEnum.STRING, 
        validation: { 
            'targetColumnName_required': function (row) { return row.targetColumnName != null; } 
        },
        conversionToObject: getSafeValue, 
        conversionFromObject: getDisplayValue, 
        width: '220'
    },
    { 
        name: 'primeAccountBudget', 
        displayName: 'Budget', 
        type: columnEnum.INT, 
        validation: { 
            'primeAccountBudget_required': function (row) { return row.primeAccountBudget != null; }
        }, 
        conversionToObject: getSafeValue, 
        conversionFromObject: getDisplayValue 
    },
    { 
        name: 'isNullable', 
        displayName: 'Is Nullable', 
        type: columnEnum.BOOLEAN, 
        conversionToObject: getIsNullableValue, 
        conversionFromObject: getIsNullableDisplayValue, 
        defaultValue: true 
    },
];
```
### Schema
```
{
  type: "object",
  properties: {
    accounts: {
      title: "Accounts",
      type: "array"
      format: "grid"
    }
  }
}
```
### Form
```
{
  key: "accounts",
  protectionKey: true,
  columnDefinitions: columnDefs,
}
```
