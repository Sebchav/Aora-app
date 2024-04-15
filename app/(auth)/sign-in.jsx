import { View, Text, ScrollView, Image } from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import {Link} from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const SignIn = () => {

  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  const [isSubmitting, setisSubmitting] = useState(false)

  const submit = () => {

  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">
          <Image 
            source={images.logo}
            resizeMode='contain'
            className="w-[115px] h-[35px]"
          />
          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">  
            Log in to Aora
          </Text>

          <FormField 
            title="Email"
            value={form.email}
            handleChangeText={(e)=> setForm({...form, email: e})}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField 
            title="Password"
            value={form.password}
            handleChangeText={(e)=> setForm({...form, password: e})}
            otherStyles="mt-7"
          />

          <CustomButton 
            title="Log in"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">Don't have account?</Text>
            <Link className='text-lg font-psemibold text-secondary' href={"/sign-up"}>Sign Up</Link>
          </View>
        </View>
      </ScrollView>

      <StatusBar 
        backgroundColor='#161622'
        style='light'
      />
    </SafeAreaView>
  )
}

export default SignIn