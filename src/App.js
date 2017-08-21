import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component{

    state = {
        loggedIn: null
    }

    componentWillMount(){
        //firebase init
        firebase.initializeApp({
            apiKey: "AIzaSyDCnjf4C13DZVjsJmF6TuTNCiACCXJLNKk",
            authDomain: "reactnative-authenticati-59efe.firebaseapp.com",
            databaseURL: "https://reactnative-authenticati-59efe.firebaseio.com",
            projectId: "reactnative-authenticati-59efe",
            storageBucket: "reactnative-authenticati-59efe.appspot.com",
            messagingSenderId: "1011203239301"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.setState({ loggedIn: true })
            } else {
                this.setState({ loggedIn: false })
            }
        });
    }

    renderContent(){
        switch(this.state.loggedIn){
            case true: 
                return (
                    <CardSection>
                        <Button onPress={() => firebase.auth().signOut() }> 
                            Logout 
                        </Button>
                    </CardSection>
                );
            case false:
                return <LoginForm/>;
            default: 
                return <Spinner size='large'/>;
        }
    }

    render(){
        return(
           <View>
               <Header headerText='Auth App'/>
               {this.renderContent()}
           </View>
        )
    }
}