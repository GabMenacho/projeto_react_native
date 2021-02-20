import React, { Component } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Login from '../views/Login'
import Home from '../views/Home'
import ListaProdutos from '../views/ListaProdutos'

const routeDrawer = createDrawerNavigator()

const Drawer = () => {
        return (
            <routeDrawer.Navigator initialRouterName = "TelaA">
                <routeDrawer.Screen name="Login" component = {Login} />
                <routeDrawer.Screen name="Home" component = {Home} />
                <routeDrawer.Screen name="Lista de produtos" component = {ListaProdutos} />
            </routeDrawer.Navigator>
        )
    }

    export default Drawer

