import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button, Card, CardItem,input } from 'appScr/Common';

interface Props {
    title: string;
    onLogin: () => void;
}

class Login extends Component<Props> {
    constructor(props: Props) {
        super(props);
        this.state = {
            // Define any state variables here if needed
        };
    }

    render() {
        const { title, onLogin } = this.props; // Destructure props

        return (
            <Card>
                
                <CardItem>
                    <input/>
                    label='Email'
                    placeholder ='Enter your Email'
                    SecureTekstEntry={false}

                    <Text>{title}</Text> {/* Display the title prop */}
                    <Button onPress={onLogin}>
                        <Text>Login</Text> {/* Button text */}
                    </Button>
                </CardItem>
                <CardItem>
                    <input>
                    label='Pasword'
                    placeholder ='Enter your Pasword'
                    SecureTekstEntry={true}
                    </input>
               
                </CardItem>
                
                
            </Card>
        );
    }
}

export default Login;
