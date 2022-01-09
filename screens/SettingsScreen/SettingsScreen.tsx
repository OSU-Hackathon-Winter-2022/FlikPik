import React from 'react'
import SettingsComponent from '../../components/SettingsComponent'
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'

const Settings = () => {



    const settingsOptions=[
        {title: "My Info", subTitle: "SETUP YOUR PROFILE", onPress: () => {}},
        {title: "Accounts", subTitle: null, onPress: () => {}},
        {title: "Contacts", subTitle: "Your friends", onPress: () => {}},
        {title: "Downloads", subTitle: "Downloaded movies", onPress: () => {}},
        {title: "Import", subTitle: null, onPress: () => {}},
        {title: "Blocked Contacts", subTitle: null, onPress: () => {}},
        {title: "Developer Tools", subTitle: null, onPress: () => {}},
    ]


    return <SettingsComponent  settingsOptions={settingsOptions}/>
};

export default Settings;
