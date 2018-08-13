import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    content:{
		backgroundColor: '#efefef',
		flex: 1,
		backgroundColor: '#ccccff',
    }, 
    //for cols n row
    grid: {
		marginLeft: 7,
		marginRight: 7,
		flex : 1
	},
    //header styles
    gridHeader: {
        marginRight: 8, 
        marginLeft: 8, 
        marginTop: 10
    },    
    gridHeaderPairs:{
        marginRight: 8, 
        marginLeft: 8, 
        marginTop: 3
    },

    headerCard: {
        height: 80,
        borderRadius: 17,
    },
    textCard: {
        fontFamily: 'roboto',
        alignItems: 'center',
        alignSelf: 'center',
        color: 'blue'  
    },
    textCarddAta:{
        fontFamily: 'roboto',
        alignItems: 'center',
        alignSelf: 'center',
        fontSize: 23,
        fontWeight: 'bold'
    },
    //list style
    listContent: {
        backgroundColor: '#efefef', 
        marginLeft: 8, 
        marginRight: 8,
        marginTop: 3,
        // borderColor: '#000000',
        borderWidth: 2,
        borderRadius: 10,
        borderTopLeftRadius: 13,
        borderBottomRightRadius:13
    },
    listheAderCard: {
        marginTop: 7,
        marginBottom: 7,
        marginLeft: 7,
        marginRight: 7,
        borderRadius: 17
    },
    //cell
    listLefts: {
        fontFamily: 'roboto',
        alignItems: 'flex-start',
        alignSelf: 'flex-start',
        fontWeight: 'bold'
    },
    listCenters: {
        fontFamily: 'roboto',
        alignItems: 'center',
        alignSelf: 'center',
    }, 
    listpAirs: {
        fontFamily: 'roboto',
        alignItems: 'flex-end',
        alignSelf: 'flex-end',
    }, 
    listpAirsc: {
        fontFamily: 'roboto',
        alignItems: 'flex-end',
        alignSelf: 'flex-end',
        fontSize: 10,
        color: 'blue'
    } 
    //center left & right

})
export default styles;