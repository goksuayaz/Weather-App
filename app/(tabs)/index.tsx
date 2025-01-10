import { Dimensions, Image, ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import backgroundImage from '@/assets/weatherapp/sky.jpg'
import profile from '@/assets/weatherapp/person.jpg'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons'


const { height: screenHeight } = Dimensions.get("window");

const index = () => {
    return (
        <View className='flex-1'>
            <ImageBackground style={styles.background}
                source={backgroundImage} resizeMode='cover'>
                <LinearGradient colors={["transparent", "#111"]}
                    style={styles.gradient} />
                <SafeAreaView>
                    <View className='mx-4'>
                        <View className='my-2 flex-row items-center justify-between'>
                            <View className="flex-row items-end">
                                <Text className='text-white text-[70px]'> 30&#176; </Text>
                                <Text className='text-white text-[20px] font-semibold'>Istanbul, Turkey</Text>
                            </View>
                            <View>
                                <Image source={profile} alt="Person" width={24} height={24} className="w-16 h-16 rounded-full" />
                            </View>
                        </View>
                        <View className='mt-4'>
                            <View className='flex-row items-center gap-3'>
                                <Ionicons name="cloudy-night" size={20} color={"white"} />
                                <Text className='text-white text-lg font-semibold'> It's foggy </Text>
                            </View>
                            <View className='my-1 flex-row items-center gap-3'>
                                <Ionicons name="swap-horizontal" size={20} color={"white"} />
                                <Text className='text-white text-lg font-semibold'> Wind: WSW 6mhp </Text>
                            </View>
                            <View className='my-1 flex-row items-center gap-3'>
                                <Ionicons name="thermometer" size={20} color={"white"} />
                                <Text className='text-white text-lg font-semibold'> Real feel: 34&#176; </Text>
                            </View>
                            <View className='my-1 flex-row items-center gap-3'>
                                <Ionicons name="trending-down" size={20} color={"white"} />
                                <Text className='text-white text-lg font-semibold'> UV: 7 </Text>
                            </View>
                        </View>
                        <View className='mt-8'>
                            <View className='flex-row items-center gap-2'>
                                <Text className='text-white text-2xl font-semibold'> Event Calender </Text>
                                <View className='bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center'>
                                    <Ionicons name="add" size={20} />
                                </View>
                            </View>
                            <View className='mt-1'>
                                <View>
                                    <Text className='text-gray-500 text-lg font-semibold'> Sun </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: "100%",
        height: screenHeight * 0.7,
        backgroundColor: "#111"
    },
    gradient: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: "20%",
        height: "50%"
    }
})