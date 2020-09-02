import React from 'react';
import Lsidebar from './Lsidebar'
import FormR from './FormR'
const FormView = () => {
    return (
        <div>
            <Lsidebar />
            <div style={{ marginLeft: '220px' }}>
                <div style={{ padding: '20px' }}>
                    <FormR />
                </div>
            </div>
        </div>
    );
}

export default FormView;