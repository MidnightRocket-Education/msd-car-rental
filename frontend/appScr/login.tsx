import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native'; // Use TouchableOpacity for Button behavior
import { Card, CardItem } from './Common';  

interface Props {
    title?: string;  
    onLogin?: () => void;  
}

interface State {
    email: string;
    password: string;
}

class Login extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleEmailChange = (text: string) => {
        this.setState({ email: text });
    };

    handlePasswordChange = (text: string) => {
        this.setState({ password: text });
    };

    render() {
        const { title = 'Login', onLogin } = this.props;  // Destructure props with a default value for title
        const { email, password } = this.state;  // Destructure state

        return (
            <Card>
                <CardItem>
                    <Text>{title}</Text>  {/* Display title */}
                </CardItem>
                <CardItem>
                    <TextInput
                        value={email}
                        placeholder='Enter your Email'
                        onChangeText={this.handleEmailChange}  // Call email handler
                    />
                </CardItem>
                <CardItem>
                    <TextInput
                        value={password}
                        placeholder='Enter your Password'
                        secureTextEntry={true}
                        onChangeText={this.handlePasswordChange}  // Call password handler
                    />
                </CardItem>
                <CardItem>
                    <TouchableOpacity onPress={onLogin || (() => console.log('Login pressed'))}>
                        <Text>Login</Text>  {/* Use Text component inside TouchableOpacity */}
                    </TouchableOpacity>
                </CardItem>
            </Card>
        );
    }
}

export default Login;
