import React, { useState } from 'react'
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs'
import { Header } from '../components'

const ColorPicker = () => {
    const [hexValue, setHexValue] = useState('#008000'); // Default color

    const change = (args) => {
        const hex = args.currentValue.hex;
        setHexValue(hex);
        document.getElementById('preview').style.backgroundColor = hex;
    };
    return (
        <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
            <Header category="App" title="Color Picker" />
            <div className='text-center'>
                <div className='flex items-center justify-center'>
                    <div id="preview" />
                    <input
                        type="text"
                        value={hexValue}
                        readOnly
                        onClick={(e) => e.target.select()}
                        style={{ marginTop: '10px', width: '100px' }}
                    />
                </div>
                <div className='flex justify-center items-center gap-28'>
                    <div>
                        <p className='text-2xl font-semibold mt-2 mb-4'>Inline Palette</p>
                        <ColorPickerComponent
                            id="inline-palette"
                            mode="Palette"
                            modeSwitcher={false}
                            inline
                            showButtons={false}
                            change={change}
                        />
                    </div>
                    <div>
                        <p className='text-2xl font-semibold mt-2 mb-4'>Inline Picker</p>
                        <ColorPickerComponent
                            id="inline-picker"
                            mode="Picker"
                            modeSwitcher={false}
                            inline
                            showButtons={false}
                            change={change}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ColorPicker
