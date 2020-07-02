module.exports = [
    {
        name: "BD_LED v1.0.1",
        blocks: [
                
           'BD_LED_init',
            {
                xml:
                    `<block type="BD_LED_out">
                        <value name="index">
                            <shadow type="math_number">
                                <field name="Number">2</field>
                            </shadow>
                        </value>
                    </block>`
            }

        ]
    }
];