export default {
    container: {
        flex: 1,
        paddingTop: 0,
    },

    gameDataContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    gameData: {
        flex: 1,

        alignSelf: 'stretch',

        padding: 24,

        margin: 16,
        marginTop: 32,
        marginBottom: 32,

        borderWidth: 2,
        borderRadius: 8,
        borderColor: '#ffffff',
    },


    gameName: {
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

    gameDescription: {
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

    gameInstructions: {
        color: '#000',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    actionsContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        paddingRight: 24,
        paddingLeft: 24,
        paddingTop: 12,
        paddingBottom: 12,
        backgroundColor: '#f4e842',
        borderWidth: 2,
        borderRadius: 8,
        borderColor: '#f4bc42',
        margin: 8,

    },

    actionSeparator: {
        width: 16,
    },

    cancelButton: {
        width: 56,
        height: 56,
    },

    acceptButton: {
        width: 56,
        height: 56,
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
        color: '#ffffff',
        fontSize: 28,
        fontWeight: '900',

    },

    gameResultsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 12,
        paddingLeft: 12,
        paddingRight: 12,
        paddingBottom: 8,
    },

    gameResultsCorrectContainer: {
        alignContent: 'center',
        justifyContent: 'center',
    },
    gameResultsCorrectImage: {
        width: 64,
        height: 64,
    },
    gameResultsCorrectCount: {
        marginTop: 12,
        fontSize: 64,
        fontWeight: '900',
        textAlign: 'center',

        textShadowColor: '#ffffff',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 0,
    },

    gameResultsWrongContainer: {
        alignContent: 'center',
        justifyContent: 'center',
    },
    gameResultsWrongImage: {
        width: 64,
        height: 64,
    },
    gameResultsWrongCount: {
        marginTop: 12,
        fontSize: 64,
        fontWeight: '900',
        textAlign: 'center',

        textShadowColor: '#ffffff',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 0,
    },
};
