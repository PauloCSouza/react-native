export default {
    container: {
        flex: 1,
        paddingTop: 0,
        backgroundColor: 'rgb(230, 206, 144)',
    },

    quizDataContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

        marginLeft: 16,
        marginRight: 16,
    },

    quizData: {
        padding: 16,

        marginTop: 8,
        marginBottom: 8,

        alignSelf: 'stretch',

        maxHeight: 280,
        borderWidth: 2,
        borderRadius: 8,
        borderColor: '#ffffff',

        justifyContent: 'center',
    },


    quizName: {
        color: '#000000',

        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 12,
        paddingBottom: 24,

        textShadowColor: '#ffffff',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 0,
    },

    quizDescription: {
        color: '#000',
        fontSize: 20,
        textAlign: 'center',
    },

    imageBackground: {
        flex: 1,
        height: '100%',
        width: '100%',

        flexDirection: 'column',
        justifyContent: 'space-between',
    },

    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 24,
        paddingLeft: 24,
        paddingTop: 12,
        paddingBottom: 12,
        backgroundColor: '#00BCD4',
        borderWidth: 2,
        borderRadius: 8,
        borderColor: '#ffffff',
        margin: 8,
        marginTop: 36,
    },

    headerTitle: {
        fontWeight: '300',
        color: '#ffffff',
        fontSize: 28,
        fontWeight: '900',
    },

    quizOptions: {
        width: '100%',
    },

    //  Modal status
    statusContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    statusImage: {
        width: 120,
        height: 120,
    }
};
