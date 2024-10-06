import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';


const ChatScreen = ({ route }) => {
  const { userName } = route.params || { userName: 'Unknown User' };;
  const [message, setMessage] = useState('');
  const dummyChatMessages = [
    { id: '1', sender: userName, message: 'Hi, thanks for the car!' },
    { id: '2', sender: 'You', message: 'You’re welcome, enjoy!' },
  ];
  
  const [messages, setMessages] = useState(dummyChatMessages);

  const sendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { id: String(messages.length + 1), sender: 'You', message }]);
      setMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{userName}</Text>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.messageItem}>
            <Text style={styles.sender}>{item.sender}:</Text>
            <Text style={styles.message}>{item.message}</Text>
          </View>
        )}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="Type a message..."
          placeholderTextColor="#888"
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  header: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 20,
  },
  messageItem: {
    marginBottom: 10,
  },
  sender: {
    color: '#6EC1E4',
  },
  message: {
    color: '#ccc',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#333',
    paddingTop: 10,
  },
  input: {
    flex: 1,
    color: '#fff',
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
  },
  sendButton: {
    marginLeft: 10,
  },
  sendButtonText: {
    color: '#6EC1E4',
  },
});

export default ChatScreen;