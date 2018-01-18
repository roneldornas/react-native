import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
    state = { email: '', password: '' };
    
    render() {
        return (
            <Card>

                <CardSection>
                    <Input
                    label="Email"
                    placeholder="user@email.com"
                    value={this.state.email} 
                    onChangeText={text => this.setState({ email: text  })}
                    />
                </CardSection>
                <CardSection>
                    <Input
                    label="Password"
                    placeholder="password"
                    secureTextEntry
                    value={this.state.password}
                    onChangeText={text => this.setState({ password: text })}
                    />
                </CardSection>

                <CardSection>
                    <Button>
                        Log In
                    </Button>
                </CardSection>

            </Card>
        );
    }
}

export default LoginForm;
