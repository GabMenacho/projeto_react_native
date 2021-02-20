import React, { Component } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'

const routeDrawer = createDrawerNavigator()

const Drawer = () => {
        return (
            <routeDrawer.Navigator initialRouterName = "TelaA">
                <routeDrawer.Screen name="TelaA" component = {TelaA} />
                <routeDrawer.Screen name="TelaB" component = {TelaB} />
                <routeDrawer.Screen name="TelaC" component = {TelaC} />
            </routeDrawer.Navigator>
        )
    }

    export default Drawer

