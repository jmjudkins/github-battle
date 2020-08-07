import React from 'react'

export default class Popular extends React.Component {
    render() {
        // make an array called languages
        const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']
        
        return (
            // loop over all languages
            <ul className='flex-center'>
                {languages.map((language) => (
                    // give a key to all language types
                    <li key={language}>
                    <button className='btn-clear nav-link'>
                        {language}
                    </button>
                    </li>
                ))}
            </ul>
        )
    }
}