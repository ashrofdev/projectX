import { firestore } from "./firebase"

const getUser = async (userId) => {
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
    firestore.collection('users').doc(id).update({
        balance: amount
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
                increaseBalance(user.userId, user.balance+7000)
                addPoints(user.userId, 'right', user.rightPoints-700)
            }else{
                addPoints(user.userId, leg, user.leftPoints+700)
            }
            
        }else{
            /// check for point on right
            if(user.leftPoints>=700){
                increaseBalance(user.userId, user.balance+7000)
                addPoints(user.userId, 'left', user.leftPoints-700)
            }else{
                addPoints(user.userId, leg, user.rightPoints+700)
            }
            
        }

        upline = user.uplineId
        

    }

}

const placeReg = (data, upline) => {
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

export const signUp = async (data, toggleNotification) => {
    let uplinePromise = getUser(data.uplineId)
    uplinePromise.then(e=> {
        console.log(e)
        if(e===undefined){
            toggleNotification('error', 'Invalid upline ID')
        }else {
            const newUpline = checkAvailableUpline(e, data.leg)
            newUpline.then(e=> {
                if(e===data.upline){
                    placeReg(data, e)
                }else {
                    /// downline change permissions
                }
            })

        }
    })
  
    // 


    
}


/// when you register
// 1 check if the upline provided has an empty leg
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