import React from "react"

export const style = {
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    container_fluid: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    rowContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    // width //
    w_100: {
        width: '100%'
    },
    w_75: {
        width: '75%'
    },
    w_50: {
        width: '50%'
    },
    h_25: {
        height: '25%'
    },
    //--- height ---//
    h_100: {
        height: '100%'
    },
    h_75: {
        height: '75%'
    },
    h_50: {
        height: '50%'
    },
    h_25: {
        height: '25%'
    },
    //----- padding -----//
    p_1: {
        padding: 5
    },
    p_2: {
        padding: 20
    },
    p_3: {
        padding: 30
    },
    p_4: {
        padding: 40
    },
    p_5: {
        padding: 50
    },
    //------margin---------//
    m_1: {
        margin: 10
    },
    m_2: {
        margin: 20
    },
    m_3: {
        margin: 30
    },
    m_4: {
        margin: 40
    },
    m_5: {
        margin: 50
    },
    // line height//
    lineh_1: {
        lineHeight: 30
    },
    lineh_2: {
        lineHeight: 50
    },
    lineh_3: {
        lineHeight: 70
    },
    // background color //
    bg_grey: {
        backgroundColor: 'grey'
    },
    bg_lightgrey: {
        backgroundColor: 'lightgrey'
    },
    bg_white: {
        backgroundColor: '#fff'
    },
    bg_dark: {
        backgroundColor: 'black'
    }
    ,
    // text color //
    txtWhite: {
        color: '#fff'
    },
    txtDark: {
        color: 'black'
    },
    txtGrey: {
        color: 'grey'
    },
    txtDanger:{
        color: 'red'
    },

    txtCenter: {
        textAlign: 'center'
    },
    txtEnd: {
        textAlign: 'end'
    },
    txtStart: {
        textAlign: 'start'
    },
    //----- fontSize -----//
    h1: {
        fontSize: 40
    },
    h2: {
        fontSize: 26
    },
    h3: {
        fontSize: 23
    },
    h4: {
        fontSize: 20
    },
    h5: {
        fontSize: 17
    },
    h6: {
        fontSize: 14
    },
    p: {
        fontSize: 10
    }
    ,
    //------ box-shadow -----//
    boxShadow_1: {
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
    },
    boxShadow_2: {
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
    },
    boxShadow_3: {
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
    },
    boxShadow_4: {
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px"
    },
    boxShadow_5: {
        boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
    },
    //--- border radius ---//
    border_1: {
        borderWidth: 1,
        borderRadius: 10,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    border_2: {
        borderWidth: 1,
        borderRadius: 20,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    border_3: {
        borderWidth: 1,
        borderRadius: 30,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    border_4: {
        borderWidth: 1,
        borderRadius: 40,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    border_5: {
        borderWidth: 1,
        borderRadius: 50,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    border_bottom: {
        borderBottomWidth: 1
    },
    border_top: {
        borderTopWidth: 1
    },
    // display //
    flexRow: {
        flexDirection: 'row'
    },
    flexCol: {
        flexDirection: 'column'
    },
    dFlex: {
        display: 'flex'
    },
    // justify content //
    justifyCenter: {
        justifyContent: 'center'
    },
    justifyBetween: {
        justifyContent: 'space-between'
    },
    justifyAround: {
        justifyContent: 'space-around'
    },
    // Align item //
    alignItem: {
        alignItems: 'center'
    },
    //------ input  ------//
    input: {
        textAlign: 'center',
        padding: 10,
        width: '80%'
    },
    // button //
    btn1: {
        width: '100%',
        padding: 10,
        borderRadius: 30,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItem: 'center',
        marginVertical: 5,
        marginHorizontal: 20
    },
    btn2: {
        width: '100%',
        paddingVertical: 5,
        paddingHorizontal: 12,
        borderRadius: 5,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItem: 'center',
        marginVertical: 15
    },
    //------- card_1------- //
    card1: {
        width: 150,
        height: 200,
        marginTop: 10
    },
    card_media_1: {
        width: '100%',
        height: '70%',
        borderRadius: 20,
    },
    card_body_1: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 20,
        width: '100%',
        height: '70%',
        marginTop: -25,
        justifyContent: 'center',
        alignItem: 'center'
    },
    card_content_1: {

    },
    card_action_1: {

    },
    //------- card 2---.----//
    card2: {
        width: 120,
        height: 200,
        margin: 20,
        backgroundColor: '#fff',
    },
    card_media_2: {
        width: '100%',
        height: '50%',
        borderRadius: 8,
    },
    card_body_2: {
        paddingVertical: 10,
        width: '100%',
        height: '70%',
        justifyContent: 'center',
        alignItem: 'center'
    },
    card_content_2: {

    },
    card_action_2: {

    },
    


}