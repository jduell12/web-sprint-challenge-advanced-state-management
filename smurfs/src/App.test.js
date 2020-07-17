import React from "react";
import {render, screen, fireEvent, waitFor} from "@testing-library/react"
import App from './components/App';

const renderApp = () => render(<App />);

//renders app
test( 'renders App', () => {
    render(<App />)
})

//can input values into the inputs 
describe('Form element is rendered and can submit data', () => {
    test('Input data into input fields ', ()=>{
        renderApp();
        //get imports 
        const nameInput = screen.getByLabelText(/name/i);
        const ageInput = screen.getByLabelText(/age/i);
        const heightInput = screen.getByLabelText(/height/i);
    
        //enters data into each input
        fireEvent.change(nameInput, {target:{value: 'Smurf1'}});
        fireEvent.change(ageInput, {target:{value: 3000}});
        fireEvent.change(heightInput, {target:{value: '3.5cm'}});
    })

    test('Able to click submit button ' , () => {
        renderApp();
        //get imports 
        const nameInput = screen.getByLabelText(/name/i);
        const ageInput = screen.getByLabelText(/age/i);
        const heightInput = screen.getByLabelText(/height/i);
    
        //enters data into each input
        fireEvent.change(nameInput, {target:{value: 'Ella'}});
        fireEvent.change(ageInput, {target:{value: 3000}});
        fireEvent.change(heightInput, {target:{value: '3.5cm'}});

        //get submit button
        const submitBtn = screen.getByText(/submit/i);

        //click submit button
        fireEvent.click(submitBtn);

        //can't assert rendering of new smurf - throws an error and won't recognize await 
        //per README not supposed to render component that fetches data

    })
})