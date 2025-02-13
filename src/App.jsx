import './App.css';
import Calculator from './components/Calculator';
import { useState } from 'react';
import CatPics from './components/CatPics';

const tabButtons = ['square-of-sum', 'cat-pics'];

const App = () => {
    const [activeTab, setActiveTab] = useState('square-of-sum');
    const [activeButtons, setActiveButtons] = useState(['cat-pics']);


    const handleClick = (event) => {
        const selectedButton = event.currentTarget.id;
        setActiveTab(selectedButton);
        if (tabButtons.find(button => button === selectedButton)) {
            setActiveButtons(tabButtons.filter(button => button !== selectedButton));
        };
    };

    return (
        <div>
            <div>
                {activeButtons.map(button => <button key={button} id={button} onClick={handleClick}>{button}</button>)}
            </div>
            {activeTab === 'square-of-sum' && <Calculator />}
            {activeTab === 'cat-pics' && <CatPics />}
        </div>
    );
};

export default App;
