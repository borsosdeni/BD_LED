

Blockly.Blocks["BD_LED_init"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("LED - LED Init");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};


Blockly.Blocks['BD_LED_out'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("LED - LED out")
    //.appendField("At")
    this.appendValueInput("index")
      .setCheck("Number")
      .appendField("Number: ");
	  
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);

    this.setColour(300);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

