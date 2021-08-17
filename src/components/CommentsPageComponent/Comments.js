import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { FETCH_MESSAGES } from './getMessages';

import moment from 'moment';

import {Grid,Transition} from 'semantic-ui-react'

function Comments () {
    const {loading, data} = useQuery(FETCH_MESSAGES);

    let messages;
    if (!loading) {
        messages = data.getMessages
    }

    return (
        <Grid columns={3} doubling style={{margin: "0rem 3rem 0rem 3rem"}}>
            <Grid.Row className="page-title">
                <h1 style={{marginLeft: "1rem"}}>Recent Messages</h1>
            </Grid.Row>

            <Grid.Row>
            {loading ? (
                <h1>Loading posts..</h1>
            ) : (
                <Transition.Group>
                    {messages &&
                        messages.map((message) => (
                        <Grid.Column key={message.id} style={{ marginBottom: 20 }}>
                            <div className="projects-content">
                                <h4 style={{margin: "0rem 0rem 1rem 1rem"}}>{message.email}</h4>
                                <p>{message.message}</p>
                                <h5>{moment(message.createdAt).fromNow(true)} ago</h5>
                            </div>
                        </Grid.Column>
                        ))}
                </Transition.Group>
            )}
            </Grid.Row>
        </Grid>
    )
}

export default Comments