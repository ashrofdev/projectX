export const getUpline = (userId) => {
    // firebase function to return result
}

export const creditAccount = (id) => {

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