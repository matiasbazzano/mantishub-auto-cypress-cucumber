class StoreContent {
  constructor() {
    this.variables = {};
  }

  saveText(element, variableName) {
    element.invoke('text').then(text => {
      this.variables[variableName] = text.trim();
    });
  }

  saveValue(element, variableName) {
    element.invoke('val').then(value => {
      this.variables[variableName] = value.trim();
    });
  }

  saveSelectedOptionFromDropdown(element, variableName) {
    element.find('option:selected').invoke('text').then(text => {
      this.variables[variableName] = text.trim();
    });
  }

  getVariable(variableName) {
    return this.variables[variableName];
  }
}

export default new StoreContent();
