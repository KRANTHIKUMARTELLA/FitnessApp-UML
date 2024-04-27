// const express = require('express');
// const axios = require('axios');
// const app = express();
// const port = process.env.PORT || 3001;

// app.use(express.json());

// app.post('/openai/api/endpoint', async (req, res) => {
//     const { prompt } = req.body;
//     try {
//         const apiResponse = await axios.post(
//             'https://api.openai.com/v1/completions',
//             {
//                 prompt: prompt,
//                 max_tokens: 100,
//                 model: 'gpt-3.5-turbo',
//             },
//             {
//                 headers: {
//                     Authorization: `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`,

//                 },
//             }
//         );
//         res.json({ response: apiResponse.data.choices[0].text.trim() });
//     } catch (error) {
//         console.error('OpenAI API Error:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });
