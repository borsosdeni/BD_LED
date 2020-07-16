
Blockly.JavaScript["BD_LED_init"] = function (block) {
 
  var code =
    `
	pinMode(13, OUTPUT);
	pinMode(12, OUTPUT);
    pinMode(14, OUTPUT);
    pinMode(27, OUTPUT);
    pinMode(26, OUTPUT);
    pinMode(25, OUTPUT);
	pinMode(33, OUTPUT);
	pinMode(32, OUTPUT);

`;
  return code;
};

Blockly.JavaScript['BD_LED_out'] = function (block) {
  var variable_instance = Blockly.JavaScript.valueToCode(block, 'index', Blockly.JavaScript.ORDER_ATOMIC)
  var code =
    `
	digitalWrite(13, (${variable_instance}>>0) & 1);
	digitalWrite(12, (${variable_instance}>>1) & 1);
    digitalWrite(14, (${variable_instance}>>2) & 1);
	digitalWrite(27, (${variable_instance}>>3) & 1);
	digitalWrite(26, (${variable_instance}>>4) & 1);
	digitalWrite(25, (${variable_instance}>>5) & 1);
	digitalWrite(33, (${variable_instance}>>6) & 1);
	digitalWrite(32, (${variable_instance}>>7) & 1);

`;
 
  return code;
};
