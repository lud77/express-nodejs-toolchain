const Express = require('express');
const React = require('react');
const { createStore } = require('redux');
const { renderToString } = require('react-dom/server');
const path = require('path');
const bodyParser = require('body-parser');
const Helmet = require('helmet');

const { logger, requestLogger, errorLogger } = require('./logger');

const App = require('../components/App.jsx');
const reducers = require('../reducers');

const api = Express();

api.use(Helmet());
api.use(bodyParser.json({ type: 'application/json' }));
api.use(bodyParser.urlencoded({ extended: true }));

api.use(requestLogger);

api.use('/dist', Express.static('D:\\Portables\\NodeJs\\workspace\\express-react-redux\\dist'))

const renderFullPage = (html, preloadedState) => `
    <!doctype html>
    <html>
        <body>
            <div id="root">${html}</div>
            <script>window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}</script>
            <script src="/dist/client.js"></script>
        </body>
    </html>
`;

const handleRender = (req, res) => {
    const initState = { counter: 0 };
    const store = createStore(reducers, initState);
    const html = renderToString(<App store={store} />);

    const preloadedState = store.getState();
    res.send(renderFullPage(html, preloadedState));
};

api.use(handleRender);

api.use(errorLogger);

const server = api.listen(3000, () => {
    console.log(`Listening on port ${server.address().port}`);
});

module.exports = server;
