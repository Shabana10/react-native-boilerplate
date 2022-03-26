import React from 'react'
import {
    View, Text, StyleSheet, Image,
    TouchableOpacity, ScrollView
} from 'react-native'
import { style } from '../styling/styling';
import Card1 from '../assests/images/card1.jpg';

const styles = StyleSheet.create(style)
function Cards() {
    const cardArr1 = [1, 2, 3, 4]
    const cardArr2 = [5, 6, 7, 8]

    return (
        <ScrollView>
            <View style={[styles.rowContainer, styles.m_2]}>
                {
                    cardArr1.map((e, i) => {
                        return <View style={[styles.card1, styles.p_2, styles.boxShadow_3]} key={i}>
                            <Image source={Card1}
                                style={[styles.card_media_1]} />
                            <View style={styles.card_body_1}>
                                <View style={styles.card_content_1}>
                                    <Text style={[styles.h6, styles.txtDark]}>
                                        Room Type {e}
                                    </Text>
                                    <Text style={[styles.p, styles.txtDark]}>
                                        Per day price
                                    </Text>
                                </View>
                                <View style={styles.card_action_1}>
                                    <TouchableOpacity style={styles.btn1}>
                                        <Text style={styles.txtWhite}>
                                            Details
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    })
                }
                {
                    cardArr2.map((e, i) => {
                        return <View style={[styles.card2, styles.p_2, styles.boxShadow_3]} key={i}>
                            <Image source={Card1}
                                style={[styles.card_media_2]} />
                            <View style={styles.card_body_2}>
                                <View style={styles.card_content_2}>
                                    <Text style={[styles.h6, styles.txtDark]}>
                                        Room Type {e}
                                    </Text>
                                    <Text style={[styles.p, styles.txtDark]}>
                                        Per day price
                                    </Text>
                                </View>
                                <View style={styles.card_action_2}>
                                    <TouchableOpacity style={styles.btn2}>
                                        <Text style={styles.txtWhite}>
                                            Details
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    })
                }
            </View>
        </ScrollView>
    )
}

export default Cards