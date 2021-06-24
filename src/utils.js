import { firestore } from "./firebase";


const activationInfo = [
    {
        userId: 'NG105032',
        pin: 'XDSEWT'
    },
    {
        userId: 'NG178031',
        pin: 'ADEFYW'
    },
    {
        userId: 'NG574289',
        pin: 'HWKRUS'
    },
    {
        userId: 'NG575325',
        pin: 'JDHRND'
    },
    {
        userId: 'NG987539',
        pin: 'JSHURA'
    }
]

export const getUser = async (userId) => {
    // firebase function to return result
    let userData
    await firestore.collection('users').doc(userId).get().then(user => {
        // console.log(user.data())
        userData = user
    })
    return userData.data()
}

export const addPoints = (id, leg, points) => {

    if(leg==='left'){
        firestore.collection('users').doc(id).update({
            leftPoints: points
        })
    }else {
        firestore.collection('users').doc(id).update({
            rightPoints: points
        })
    }
}

export const increaseBalance = (id, amount) => {
    const doc = firestore.collection('users').doc(id)

    return firestore.runTransaction(transaction => {
        return transaction.get(doc).then(user=> {
            const newBalance = user.data().balance+amount
            transaction.update(doc, { balance: newBalance });
        })

    }).then(()=>{

    }).catch((error)=>{
        alert(error)
    })
   
}

export const checkAvailableUpline = async (upline, leg) => {
    let availableId = upline.userId
    let downline = upline.downlines[leg]
    console.log(upline,downline,';;;;;;;')
    while (downline !== '') {
        const nextUser = await getUser(downline)
        console.log(nextUser,'------')

        availableId = nextUser.userId
        downline = nextUser.downlines[leg]

            if(downline===''){
                break
            }
    }
    return availableId
}

const creditLoop = async (id, leg) => {

    let upline = id
    while (upline !== '') {
        if(upline===''){
            break
        }
        const user = await getUser(upline)
        console.log(user, 'proceeding...')

        if(user===undefined){
            break
        }

        if(leg==='left'){
            /// check for point on right
            if(user.rightPoints>=700){
                increaseBalance(user.userId, 7000)
                addPoints(user.userId, 'right', user.rightPoints-700)
            }else{
                addPoints(user.userId, leg, user.leftPoints+700)
            }
            
        }else{
            /// check for point on right
            if(user.leftPoints>=700){
                increaseBalance(user.userId, 7000)
                addPoints(user.userId, 'left', user.leftPoints-700)
            }else{
                addPoints(user.userId, leg, user.rightPoints+700)
            }
            
        }

        upline = user.uplineId
        

    }

}

export const placeReg = (data, upline) => {

    data.uplineId = upline
    console.log(data,"*")

    firestore.collection('users').doc(data.userId).set({...data}).then(e=> {
    
        // adding dowwnline to upline
        if(data.leg==='left'){
            firestore.collection('users').doc(data.uplineId).update({
                "downlines.left": data.userId
            })
        }else{
            firestore.collection('users').doc(data.uplineId).update({
                "downlines.right": data.userId
            })
        }
        
        console.log(e)

    })
    creditLoop(upline, data.leg)
}

export const creditSponsor = (sponsor) => {
    increaseBalance(sponsor, 4500)
}

export const signUp = async (data, toggleNotification, requestPermission, setUpline) => {

    const activationData = {
        userId: data.userId,
        pin: data.pin
    }

    let activated
    activationInfo.forEach(info => {
        if(activationData.userId===info.userId && activationData.pin===info.pin){
            activated = 'found'
            let uplinePromise = getUser(data.uplineId)
            uplinePromise.then(e=> { 
                console.log(e)
                if(e===undefined){
                    toggleNotification('error', 'Invalid upline ID')
                }else {
                    const newUpline = checkAvailableUpline(e, data.leg)
                    newUpline.then(e=> {

                        if(e===data.uplineId){
                            placeReg(data, e)
                            creditSponsor(data.sponsorId)
                        }else {
                            /// downline change permissions
                            setUpline(e)
                            requestPermission()
    
                        }
                    })
    
                }
            })
        }else {
    
            
        }
    })
    if(activated !== 'found') {
        toggleNotification('error', 'Invalid Activation code')
    }

    // 


    
}

export const addNewAccount = async (data, toggleNotification) => {

    const activationData = {
        userId: data.userId,
        pin: data.pin
    }

    let activated
    activationInfo.forEach(info => {
        if(activationData.userId===info.userId && activationData.pin===info.pin){
            activated = 'found'
            let uplinePromise = getUser(data.uplineId)
            uplinePromise.then(e=> { 
                console.log(e)
                if(e===undefined){
                    toggleNotification('error', 'Invalid upline ID')
                }else {
                    const newUpline = checkAvailableUpline(e, data.leg)
                    newUpline.then(e=> {

                        placeReg(data, e)
                        creditSponsor(data.sponsorId)
                        
                    })
    
                }
            })
        }else {
    
            
        }
    })
    if(activated !== 'found') {
        toggleNotification('error', 'Invalid Activation code')
    }

    // 


    
}



/// when you register
// 1. check if the upline provided has an empty leg
// ---- if(empty)=>proceed to crediting
// ----- else=> proceed to downline search



/// downline search
// 1 accept id
// 2 check for downline
// ---- if(filled)=>run code (1)
// ----- else=> place reg and proceed to crediting



/// crediting
// 1 receive the upline provided
// 2 call getUpline()
// 3 call creditAccoint() to credit the provided upline
// 4 check if the upline has an upline
// run code (1)

