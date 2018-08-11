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
    gridRows: {
        marginTop:13,
		marginLeft: 7,
		marginRight: 7,
        flex : 1,
        backgroundColor:'#efe'
    },
    gridCols3: {
        marginTop:13,
		marginLeft: 7,
		marginRight: 7,
		flex : 1
    },
	col: {
		backgroundColor: '#000', 
        height: 100,
        marginTop: 10,
		flex : 1	
    },
	col3: {
		backgroundColor: '#000', 
        height: 250,
        marginTop: 10,
		flex : 1	
    },
    centerRow:{
        flex:1,
        height: 100,
		backgroundColor: '#000', 
    },
    contentRow:{
        alignSelf: 'center',
    },
    textRowName:{
        alignSelf:'center',
        fontSize: 13,
        fontFamily: 'roboto'
    },
    textRowdAtas:{
        alignSelf:'center',
        fontSize: 30,
        fontFamily: 'roboto'
    },
    cardsRow:{
        borderRadius: 13,
        marginLeft: 7,
        marginRight:7
    },
    TextFont:{
        fontFamily:'roboto',
        fontSize:16
    },
})
export default styles;