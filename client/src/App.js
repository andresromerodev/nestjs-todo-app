import React from 'react';
import { Box } from '@chakra-ui/layout';
import { ApolloProvider } from '@apollo/client/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ToDoListsScreen from './screens/ToDoListsScreen';
import ToDoListTasksScreen from './screens/ToDoListTasksScreen';
import NotFoundScreen from './components/NotFoundScreen';

import client from './graphql/client';

const App = () => {
    return (
        <ApolloProvider client={client}>
            <Router>
                <Box className='App'>
                    <Switch>
                        <Route path='/' exact component={ToDoListsScreen} />
                        <Route path='/list/:id' exact component={ToDoListTasksScreen} />
                        <Route path='/*' component={NotFoundScreen} />
                    </Switch>
                </Box>
            </Router>
        </ApolloProvider>
    );
};

export default App;
