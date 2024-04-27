import React, { useState } from 'react';
import OpenAI from 'openai';
//import NavigationBar from './NavigationBar';
// Import your custom CSS file for OpenChat
// import './OpenChat.css';

function OpenChat() {
    const [input, setInput] = useState('');
    const [response, setResponse] = useState('');

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = JSON.parse(localStorage.getItem('user'));
        console.log("openai page",userData);
        
        // Initialize OpenAI client with your API key
        const openai = new OpenAI({
            apiKey: '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', // Replace with your OpenAI API key
            //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
            dangerouslyAllowBrowser: true,
        });
        
        try {
            const systemMessage = `You are a helpful assistant. I need you as my medical professional for fitness. My name is ${userData.name} with age is ${userData.age}, weight is ${userData.weight} lbs. please always address me with my name`;

            const completion = await openai.chat.completions.create({
                model: 'gpt-3.5-turbo',
                messages: [
                    { role: 'system', content: systemMessage },
                    { role: 'user', content: input },
                ],
            });

            // Set the OpenAI response in the state
            setResponse(completion.choices[0].message.content);
        } catch (error) {
            console.error('Error fetching OpenAI response:', error);
        }
    };

    return (
        <div className="open-chat">
            <div className="container">
                <h2>OpenAI Chat</h2>
                <form onSubmit={handleSubmit}>
                    <textarea
                        className="input-field"
                        value={input}
                        onChange={handleInputChange}
                        placeholder="Type your message here..."
                    />
                    <button type="submit" className="submit-button">Send</button>
                </form>
                {response && (
                    <div className="response-container">
                        <h3>Response:</h3>
                        <p>{response}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default OpenChat;




