import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

const Training_Get = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getTrainings = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/CHbUs3NTcHrH08PNHZsa1BsKFSkQgvZx/trainings');
            const json = await response.json();
            setData(json.trainings[0]);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getTrainings();
    }, []);

    return (
        <View style={{ flex: 1, padding: 24 }}>
            {isLoading ? <ActivityIndicator/> : (
                <FlatList
                    data={data}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) => (
                        <Text>{item.id}, {item.title}</Text>
                    )}
                />
            )}
        </View>
    );
};
export default Training_Get
