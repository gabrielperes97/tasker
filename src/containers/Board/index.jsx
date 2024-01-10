import * as React from 'react'
import TextField from '@mui/material/TextField';
import { Text, View, StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  

const BoardScreen = ({navigation}) => {
    const { t } = useTranslation();

    const [user, setUser] = React.useState("");
    const [password, setPassword] = React.useState("");

    return <View style={styles.container}>
        <Text>Tasker</Text>
        <TextField  
            label={t('login.user')}
            value={user}
            onChange={(event) => {setUser(event.target.value)}}
        />
        <TextField  
            label={t('login.password')}
            value={password}
            onChange={(event) => {setPassword(event.target.value)}}
        />
    </View>
}

export default BoardScreen;